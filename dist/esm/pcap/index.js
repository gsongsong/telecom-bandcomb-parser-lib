import { parseBlock } from "./block";
import { normalize } from "./line";
export function parse(content) {
    const lines = normalize(content);
    const capabilities = {};
    parseBlock(lines, capabilities);
    return capabilities;
}
//# sourceMappingURL=index.js.map