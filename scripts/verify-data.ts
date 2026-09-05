import assert from "node:assert/strict";
import {
  BUILD_KINDS,
  DEVICES,
  projects,
  routes,
  tips,
  tools,
  toolById,
  projectById,
} from "../data/aicademy.ts";

assert.ok(tools.length >= 10 && tools.length <= 12, `expected 10-12 tools, got ${tools.length}`);
assert.ok(!tools.some((tool) => /claude|cursor/i.test(tool.name)), "Claude/Cursor must not be listed");

for (const tool of tools) {
  assert.ok(tool.name);
  assert.ok(tool.url.startsWith("https://"));
  assert.ok(tool.goodFor.length > 20);
  assert.ok(tool.freeInWords.length > 20);
  assert.ok(typeof tool.needsPaymentMethod === "boolean");
  assert.ok(tool.paymentNote);
  assert.ok(tool.devices.length > 0);
  assert.ok(tool.source.startsWith("https://"));
  assert.ok(tool.checkedOn);
  const blob = `${tool.goodFor} ${tool.freeInWords} ${tool.paymentNote} ${tool.warning ?? ""}`;
  assert.ok(!/stack|api key|repo|terminal/i.test(blob), `jargon in ${tool.id}: ${blob}`);
  if (tool.stage === 1) {
    assert.ok(!/\bkey\b/i.test(blob), `stage 1 must not say key: ${tool.id}`);
  }
}

assert.equal(projects.length, 5);
assert.ok(tips.length >= 5);
assert.equal(routes.length, BUILD_KINDS.length * DEVICES.length);

const planPlaces = ["plan-describe", "plan-broke", "plan-credits", "plan-publish"] as const;
for (const build of BUILD_KINDS) {
  for (const place of planPlaces) {
    const specific = tips.find((item) => item.place === place && item.builds?.includes(build));
    const general = tips.find((item) => item.place === place && !item.builds);
    assert.ok(specific ?? general, `missing tip ${place} for ${build}`);
  }
}

for (const build of BUILD_KINDS) {
  for (const device of DEVICES) {
    const route = routes.find((item) => item.build === build && item.device === device);
    assert.ok(route, `missing route ${build} ${device}`);
    const tool = toolById(route.toolId);
    const nextTool = toolById(route.nextToolId);
    const project = projectById(route.projectId);
    assert.ok(tool.stage === 1, `first tool must be browser-only: ${tool.id}`);
    assert.ok(nextTool.stage === 1, `next tool must stay in the browser: ${build} ${device} -> ${nextTool.id}`);
    assert.ok(tool.devices.includes(device), `${tool.id} cannot run on ${device}`);
    assert.ok(nextTool.devices.includes(device), `${nextTool.id} cannot run on ${device}`);
    assert.ok(project.title);
    assert.ok(project.paste.length > 20);
    const builders = new Set(["bolt", "lovable", "replit"]);
    if (build !== "automate") {
      assert.ok(builders.has(nextTool.id), `page plans need a builder next: ${build} ${device} -> ${nextTool.id}`);
    }
  }
}

console.log(`ok: ${tools.length} tools, ${routes.length} plans, every path has a first project`);
