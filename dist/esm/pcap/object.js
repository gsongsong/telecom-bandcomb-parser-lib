import { parseBlock } from "./block";
export function parseObject(lines, capabilities) {
    const obj = {};
    if (lines.length === 0) {
        return obj;
    }
    const indentation = lines[0].indentation;
    let start = lines.findIndex((line) => line.indentation === indentation);
    while (start !== -1) {
        const next = lines.findIndex((line, index) => line.indentation === indentation && index > start);
        const end = next === -1 ? lines.length : next;
        const linesPerBlock = lines.slice(start, end);
        Object.assign(obj, parseBlock(linesPerBlock, capabilities));
        start = next;
    }
    return obj;
}
//# sourceMappingURL=object.js.map