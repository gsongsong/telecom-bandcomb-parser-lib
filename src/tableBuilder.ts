export function buildTable(
  objList: Object[],
  lines: (string | number)[][],
  {
    indexName,
    indexOffset,
  }: {
    indexName: string;
    indexOffset?: number;
  }
) {
  const objListKeys = getKeys(objList);
  lines.push([indexName, ...objListKeys]);
  buildTableBody(objList, objListKeys, lines, indexOffset ?? 0);
  lines.push([]);
}

function buildTableBody(
  objList: Object[],
  keys: string[],
  lines: (string | number)[][],
  indexOffset: number = 0
) {
  objList.forEach((obj: any, index) => {
    const line: (string | number)[] = [index + indexOffset];
    keys.forEach((key) => {
      const value = obj[key]
        ? `"${JSON.stringify(obj[key])}"`.replace(/""/g, '"')
        : "";
      line.push(value);
    });
    lines.push(line);
  });
}

function getKeys(objList: Object[]) {
  return Array.from(new Set(objList.map(Object.keys).flat()));
}
