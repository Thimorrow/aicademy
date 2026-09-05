import {
  BUILD_KINDS,
  DEVICES,
  type BuildKind,
  type Device,
  projectById,
  routes,
  tipByPlace,
  toolById,
  type FirstProject,
  type Tip,
  type Tool,
} from "@/data/aicademy";

export type Plan = {
  build: BuildKind
  device: Device
  tool: Tool
  project: FirstProject
  nextTool: Tool
  tips: Tip[]
};

export function isBuildKind(value: string | undefined): value is BuildKind {
  return !!value && (BUILD_KINDS as readonly string[]).includes(value);
}

export function isDevice(value: string | undefined): value is Device {
  return !!value && (DEVICES as readonly string[]).includes(value);
}

export function getPlan(build: BuildKind, device: Device): Plan {
  const route = routes.find((item) => item.build === build && item.device === device);
  if (!route) {
    throw new Error(`No plan for ${build} on ${device}`);
  }

  return {
    build,
    device,
    tool: toolById(route.toolId),
    project: projectById(route.projectId),
    nextTool: toolById(route.nextToolId),
    tips: [
      tipByPlace("plan-describe", build),
      tipByPlace("plan-broke", build),
      tipByPlace("plan-credits", build),
      tipByPlace("plan-publish", build),
    ],
  };
}

export function getPlanFromQuery(build: string | undefined, device: string | undefined): Plan | null {
  if (!isBuildKind(build) || !isDevice(device)) {
    return null;
  }
  return getPlan(build, device);
}
