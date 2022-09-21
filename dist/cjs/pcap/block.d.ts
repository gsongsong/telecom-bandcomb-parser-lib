import { Line } from "./line";
import { Capabilities } from "./types/capabilities";
export declare function parseBlock(lines: Line[], capabilities: Capabilities): {
    [x: string]: unknown;
};
