"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildTable = void 0;
function buildTable(objList, lines, { indexName, indexOffset, }) {
    const objListKeys = getKeys(objList);
    lines.push([indexName, ...objListKeys]);
    buildTableBody(objList, objListKeys, lines, indexOffset !== null && indexOffset !== void 0 ? indexOffset : 0);
    lines.push([]);
}
exports.buildTable = buildTable;
function buildTableBody(objList, keys, lines, indexOffset = 0) {
    objList.forEach((obj, index) => {
        const line = [index + indexOffset];
        keys.forEach((key) => {
            const value = obj[key]
                ? `"${JSON.stringify(obj[key])}"`.replace(/""/g, '"')
                : "";
            line.push(value);
        });
        lines.push(line);
    });
}
function getKeys(objList) {
    return Array.from(new Set(objList.map(Object.keys).flat()));
}
//# sourceMappingURL=tableBuilder.js.map