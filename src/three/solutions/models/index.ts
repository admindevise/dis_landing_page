import type { ModelDefinition } from "../kit";
import { business } from "./business";
import { hospitality } from "./hospitality";
import { marketplace } from "./marketplace";
import { tokenize } from "./tokenize";
import { valuo } from "./valuo";

export const MODELS = { business, hospitality, tokenize, marketplace, valuo } satisfies Record<string, ModelDefinition>;

export type SolutionKey = keyof typeof MODELS;
