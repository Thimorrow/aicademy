export const CHECKED_ON = "2026-09-05";

export const BUILD_KINDS = [
  "website",
  "app",
  "game",
  "automate",
  "unsure",
] as const;

export type BuildKind = (typeof BUILD_KINDS)[number];

export const DEVICES = ["computer", "phone"] as const;

export type Device = (typeof DEVICES)[number];

export type Stage = 1 | 2 | 3;

export type Tool = {
  id: string
  name: string
  url: string
  goodFor: string
  freeInWords: string
  needsPaymentMethod: boolean
  paymentNote: string
  devices: Device[]
  stage: Stage
  source: string
  sourceLabel: string
  checkedOn: string
  warning?: string
};

export type FirstProject = {
  id: string
  build: BuildKind
  title: string
  whyFun: string
  steps: string[]
  paste: string
  doneWhen: string
};

export type Tip = {
  id: string
  title: string
  body: string
  place:
    | "home-pace"
    | "plan-describe"
    | "plan-broke"
    | "plan-credits"
    | "plan-publish"
  builds?: BuildKind[]
};

export type Route = {
  build: BuildKind
  device: Device
  toolId: string
  projectId: string
  nextToolId: string
};

export const tools: Tool[] = [
  {
    id: "bolt",
    name: "Bolt",
    url: "https://bolt.new",
    goodFor: "A first website or a small game, built in the browser. You type what you want. It makes the page.",
    freeInWords:
      "You get a big free pile each month. It is enough for a first project if you go slowly. People who cannot read the code often use it up faster, because they need more tries.",
    needsPaymentMethod: false,
    paymentNote: "No payment card needed for the free plan.",
    devices: ["computer", "phone"],
    stage: 1,
    source: "https://bolt.new/pricing",
    sourceLabel: "Bolt pricing page",
    checkedOn: CHECKED_ON,
  },
  {
    id: "lovable",
    name: "Lovable",
    url: "https://lovable.dev",
    goodFor: "A first website or a small app, built in the browser. Strong when you want something you can tap on a phone.",
    freeInWords:
      "Five free goes each day. Public projects stay free. That is a small daily pile, so write down what you want before you click.",
    needsPaymentMethod: false,
    paymentNote: "No payment card needed for the free plan.",
    devices: ["computer", "phone"],
    stage: 1,
    source: "https://lovable.dev/pricing",
    sourceLabel: "Lovable pricing page",
    checkedOn: CHECKED_ON,
  },
  {
    id: "v0",
    name: "v0",
    url: "https://v0.app",
    goodFor: "A first look for a website or app. You describe a screen. It draws a picture of it. That is not yet a page people can open on the internet.",
    freeInWords:
      "You get a little free credit each month, about the price of a cheap lunch. Fine for a first afternoon, not for endless retries.",
    needsPaymentMethod: false,
    paymentNote: "No payment card needed to try the free credit.",
    devices: ["computer", "phone"],
    stage: 1,
    source: "https://v0.app",
    sourceLabel: "v0 product page",
    checkedOn: CHECKED_ON,
  },
  {
    id: "replit",
    name: "Replit",
    url: "https://replit.com",
    goodFor: "Building in the browser and putting the result on the internet from the same place.",
    freeInWords:
      "You get many hours of free building time each month. When the time is gone, you wait or switch tools.",
    needsPaymentMethod: false,
    paymentNote: "No payment card needed for the free plan.",
    devices: ["computer", "phone"],
    stage: 1,
    source: "https://replit.com/pricing",
    sourceLabel: "Replit pricing page",
    checkedOn: CHECKED_ON,
  },
  {
    id: "google-ai-studio",
    name: "Google AI Studio",
    url: "https://aistudio.google.com",
    goodFor: "Talking to Google’s AI in the browser. Another free place to ask questions and paste text, not a place that publishes a website.",
    freeInWords:
      "You can use it in the browser for free. Google can still cap how much you use in a day.",
    needsPaymentMethod: false,
    paymentNote: "No payment card needed.",
    devices: ["computer", "phone"],
    stage: 1,
    source: "https://aistudio.google.com",
    sourceLabel: "Google AI Studio",
    checkedOn: CHECKED_ON,
  },
  {
    id: "chatgpt",
    name: "ChatGPT Free",
    url: "https://chatgpt.com",
    goodFor: "Asking for help in plain words. Good when you want a helper that writes text, plans, or replies, not a full website.",
    freeInWords:
      "Free in the browser. It is slower and more limited than the paid version. You can still get a first thing done.",
    needsPaymentMethod: false,
    paymentNote: "No payment card needed for the free plan.",
    devices: ["computer", "phone"],
    stage: 1,
    source: "https://chatgpt.com",
    sourceLabel: "ChatGPT",
    checkedOn: CHECKED_ON,
  },
  {
    id: "kilo",
    name: "Kilo Code",
    url: "https://kilo.ai",
    goodFor: "The next step after the browser tools run out. A free helper in a writing app on your computer. Not the first stop.",
    freeInWords:
      "The helper itself is free if you sign in with a free Google account from Google AI Studio.",
    needsPaymentMethod: false,
    paymentNote: "Skip the starter offer. It asks for a payment card.",
    devices: ["computer"],
    stage: 2,
    source: "https://kilo.ai",
    sourceLabel: "Kilo Code site",
    checkedOn: CHECKED_ON,
  },
  {
    id: "copilot",
    name: "GitHub Copilot Free",
    url: "https://github.com/features/copilot",
    goodFor: "A free helper inside a code editor, if you already have a GitHub account. Not the first stop. Useful after you have built one thing in the browser.",
    freeInWords:
      "There is a free plan with a monthly limit. You need a GitHub account. GitHub is free.",
    needsPaymentMethod: false,
    paymentNote: "No payment card needed for the free plan.",
    devices: ["computer"],
    stage: 2,
    source: "https://github.com/features/copilot",
    sourceLabel: "GitHub Copilot page",
    checkedOn: CHECKED_ON,
  },
  {
    id: "opencode",
    name: "OpenCode",
    url: "https://opencode.ai",
    goodFor: "A later, harder step. A free helper that runs in a text window on your computer. You always bring your own key.",
    freeInWords:
      "The helper is free. You still need a free Google key, and you have to be okay with a text window instead of a friendly page.",
    needsPaymentMethod: false,
    paymentNote: "No payment card needed if you use a free Google key.",
    devices: ["computer"],
    stage: 3,
    source: "https://opencode.ai",
    sourceLabel: "OpenCode site",
    checkedOn: CHECKED_ON,
  },
  {
    id: "ollama",
    name: "Ollama",
    url: "https://ollama.com",
    goodFor: "Running the AI on your own computer, so you do not pay per question. Only if your computer is decent, and you have time to set it up.",
    freeInWords:
      "Free to download. No monthly bill. Setup takes time, and a weak computer will feel slow.",
    needsPaymentMethod: false,
    paymentNote: "No payment card needed.",
    devices: ["computer"],
    stage: 3,
    source: "https://ollama.com",
    sourceLabel: "Ollama site",
    checkedOn: CHECKED_ON,
  },
  {
    id: "colab",
    name: "Google Colab",
    url: "https://colab.research.google.com",
    goodFor: "Trying ideas in a free Google page. Better for experiments than for a pretty first website.",
    freeInWords:
      "Free in the browser with a Google account. Google can limit how much you use.",
    needsPaymentMethod: false,
    paymentNote: "No payment card needed.",
    devices: ["computer", "phone"],
    stage: 3,
    source: "https://colab.research.google.com",
    sourceLabel: "Google Colab",
    checkedOn: CHECKED_ON,
  },
];

export const projects: FirstProject[] = [
  {
    id: "one-page",
    build: "website",
    title: "A one-page site you can share tonight",
    whyFun: "By tonight you can send someone a link. That is a real thing on the internet, made by you.",
    steps: [
      "Open the tool in this plan. Make a free account if it asks.",
      "Paste the words in the box below.",
      "Change the title and the story to your words. If a photo is missing, ask it to use a colored block with a label instead.",
      "Press the share or publish button. Copy the link.",
    ],
    paste:
      "Make a simple one-page website about [your topic]. Big title, a short story, one photo placeholder, and a button that says Contact me and scrolls to an email line at the bottom. Calm colors. Easy to read on a phone.",
    doneWhen: "You can open the link on your phone and read the page without logging in.",
  },
  {
    id: "simple-list",
    build: "app",
    title: "A tiny list you can tap",
    whyFun: "A packing list, a shopping list, or a homework list. You use it the same day.",
    steps: [
      "Open the tool in this plan. Make a free account if it asks.",
      "Paste the words in the box below.",
      "Add three real items. Check one off. Delete one. If that fails, tell the tool exactly which tap did nothing.",
      "Press the share or publish button. Copy the link.",
    ],
    paste:
      "Make a simple list app. I can add a line, check it off, and delete it. Save the list on this device. Big buttons. Easy on a phone. No login.",
    doneWhen: "You can add, check, and delete a line, then refresh the page and still see your list.",
  },
  {
    id: "tiny-quiz",
    build: "game",
    title: "A five-question quiz about something you know",
    whyFun: "You can send it to a friend and watch them guess. That is a game, even if it is small.",
    steps: [
      "Open the tool in this plan. Make a free account if it asks.",
      "Paste the words in the box below.",
      "Play it once. If a wrong answer is marked right, say which question and what should happen.",
      "Press the share or publish button. Copy the link.",
    ],
    paste:
      "Make a quiz with five questions about [your topic]. One question at a time, four answers, a score at the end, a play again button. Big text. Works on a phone.",
    doneWhen: "You can finish the quiz, see a score, and play again.",
  },
  {
    id: "reply-helper",
    build: "automate",
    title: "A helper that drafts replies for you",
    whyFun: "You paste a message. It writes a kind reply you can copy. Useful the same afternoon.",
    steps: [
      "Open the tool in this plan. Make a free account if it asks.",
      "Paste the words in the box below.",
      "Paste one real message you would answer. Pick the reply you like. If the tone is wrong, say which words to change.",
      "Save the three tones as a note so you can paste this helper again tomorrow.",
    ],
    paste:
      "I will paste a message. Write a short, kind reply in plain words. Give me three tones: warm, short, and careful. Do not send anything. I will copy the text myself.",
    doneWhen: "You have a reply you would actually send, copied into a note or email draft.",
  },
  {
    id: "about-you",
    build: "unsure",
    title: "A page that says who you are",
    whyFun: "If you do not know what to build yet, this is the smallest honest first thing. A page with your name and one thing you like.",
    steps: [
      "Open the tool in this plan. Make a free account if it asks.",
      "Paste the words in the box below.",
      "Put your real name and three true likes. If the surprise button does nothing, say so and ask it to fix only that button.",
      "Press the share or publish button. Copy the link.",
    ],
    paste:
      "Make a simple page with my name, one sentence about me, a list of three things I like, and a button that shows a surprise sentence. Easy to read. Works on a phone.",
    doneWhen: "You can open the link and tap the button, and the surprise sentence appears.",
  },
];

export const tips: Tip[] = [
  {
    id: "pace",
    place: "home-pace",
    title: "Go slow. Free tries run out.",
    body: "If you cannot read the code, you will need more tries than a programmer. That is normal. Write the thing you want in one sentence before you click. One clear ask uses less of the free pile than ten vague ones.",
  },
  {
    id: "describe",
    place: "plan-describe",
    title: "Say what it looks like and what a tap does.",
    body: "A yellow page with my name and a button that shows a photo is better than make a website. Name the colors, the words on the button, and what should happen next.",
  },
  {
    id: "describe-game",
    place: "plan-describe",
    builds: ["game"],
    title: "Say what a right and wrong answer does.",
    body: "A five-question quiz about dogs, with a score at the end, is better than make a game. Name the topic, how many questions, and what happens when someone picks the wrong answer.",
  },
  {
    id: "describe-helper",
    place: "plan-describe",
    builds: ["automate"],
    title: "Paste a real message. Say who it is for.",
    body: "Write a short kind reply to this message from my teacher is better than make a helper. Name the person, the tone, and which words to avoid.",
  },
  {
    id: "broke",
    place: "plan-broke",
    title: "If it breaks, name the broken bit.",
    body: "Do not say fix it. Say the button is too small and the text is cut off. If the next try makes it worse, ask it to undo the last change only.",
  },
  {
    id: "broke-helper",
    place: "plan-broke",
    builds: ["automate"],
    title: "If the reply is wrong, name the sentence.",
    body: "Do not say fix it. Say the second sentence is too stiff, and it should sound like a friend. If the next try is worse, ask it to undo the last change only.",
  },
  {
    id: "credits",
    place: "plan-credits",
    title: "If the free pile runs out, do not start from zero.",
    body: "Copy your last working link or text. Switch to the next tool in this plan. Paste what you already have. Ask it to keep going from there.",
  },
  {
    id: "publish",
    place: "plan-publish",
    title: "Put it on the internet with the share button.",
    body: "You do not need to buy hosting for the first version. Look for Share, Publish, or Public. Copy the link. Open it on your phone. If it asks you to log in to see the page, ask the tool to make the page public.",
  },
  {
    id: "publish-helper",
    place: "plan-publish",
    builds: ["automate"],
    title: "Save the reply in a note. You are not publishing a page.",
    body: "Copy the reply you would actually send into a note or an email draft. You do not need a share button or a website for this first project.",
  },
];

export const routes: Route[] = [
  { build: "website", device: "computer", toolId: "bolt", projectId: "one-page", nextToolId: "lovable" },
  { build: "website", device: "phone", toolId: "lovable", projectId: "one-page", nextToolId: "bolt" },
  { build: "app", device: "computer", toolId: "lovable", projectId: "simple-list", nextToolId: "bolt" },
  { build: "app", device: "phone", toolId: "lovable", projectId: "simple-list", nextToolId: "bolt" },
  { build: "game", device: "computer", toolId: "bolt", projectId: "tiny-quiz", nextToolId: "replit" },
  { build: "game", device: "phone", toolId: "bolt", projectId: "tiny-quiz", nextToolId: "lovable" },
  { build: "automate", device: "computer", toolId: "chatgpt", projectId: "reply-helper", nextToolId: "google-ai-studio" },
  { build: "automate", device: "phone", toolId: "chatgpt", projectId: "reply-helper", nextToolId: "google-ai-studio" },
  { build: "unsure", device: "computer", toolId: "bolt", projectId: "about-you", nextToolId: "lovable" },
  { build: "unsure", device: "phone", toolId: "lovable", projectId: "about-you", nextToolId: "bolt" },
];

export const buildChoices: { id: BuildKind; label: string; hint: string }[] = [
  { id: "website", label: "A website", hint: "A page people can open on the internet." },
  { id: "app", label: "A small app", hint: "Something you tap, like a list or a tracker." },
  { id: "game", label: "A game", hint: "A quiz, a clicker, something to play." },
  { id: "automate", label: "A helper", hint: "It writes or sorts things for you." },
  { id: "unsure", label: "I am not sure yet", hint: "We will pick a tiny first page for you." },
];

export const deviceChoices: { id: Device; label: string; hint: string }[] = [
  { id: "computer", label: "A computer", hint: "A laptop or desktop. We still start in the browser." },
  { id: "phone", label: "Only my phone", hint: "We will stay in the browser. No install." },
];

export function toolById(id: string): Tool {
  const tool = tools.find((item) => item.id === id);
  if (!tool) {
    throw new Error(`Unknown tool: ${id}`);
  }
  return tool;
}

export function projectById(id: string): FirstProject {
  const project = projects.find((item) => item.id === id);
  if (!project) {
    throw new Error(`Unknown project: ${id}`);
  }
  return project;
}

export function tipByPlace(place: Tip["place"], build?: BuildKind): Tip {
  const specific =
    build === undefined
      ? undefined
      : tips.find((item) => item.place === place && item.builds?.includes(build));
  const general = tips.find((item) => item.place === place && !item.builds);
  const tip = specific ?? general;
  if (!tip) {
    throw new Error(`Unknown tip place: ${place}`);
  }
  return tip;
}
