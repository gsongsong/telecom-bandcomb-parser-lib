export declare type Line = {
    line: string;
    indentation: number;
};
export declare function getKeyValue(line: string): [string, string | undefined];
export declare function normalize(content: string): {
    line: string;
    indentation: number;
}[];
