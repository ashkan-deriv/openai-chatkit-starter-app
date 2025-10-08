import { StartScreenPrompt } from "@openai/chatkit";

export const WORKFLOW_ID = process.env.NEXT_PUBLIC_CHATKIT_WORKFLOW_ID?.trim() ?? "";

export const CREATE_SESSION_ENDPOINT = "/api/create-session";

export const STARTER_PROMPTS: StartScreenPrompt[] = [
  {
    label: "Compare all the brands’ payment methods.",
    prompt: "Analyse payment methods across all Brands. Create a comparison table showing which payment options each brand accepts, noting any important limitations or fees.",
    icon: "circle-question",
  },
];

export const PLACEHOLDER_INPUT = "Ask anything...";

export const GREETING = "How can I help you today?";
