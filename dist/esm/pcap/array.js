import { parseBlock } from "./block";
export function isArray(line) {
    return (line.includes(":") && (line.endsWith("items") || line.endsWith("item")));
}
export function parseArray(lines, capabilities) {
    const items = [];
    let start = lines.findIndex((line) => line.line.startsWith("Item"));
    while (start !== -1) {
        const next = lines.findIndex((line, index) => line.line.startsWith("Item") &&
            line.indentation === lines[start].indentation &&
            index > start);
        const end = next === -1 ? lines.length : next;
        const linesPerBlock = lines.slice(start + 1, end);
        items.push(parseBlock(linesPerBlock, capabilities));
        start = next;
    }
    return items;
}
//# sourceMappingURL=array.js.map