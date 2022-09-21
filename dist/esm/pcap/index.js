import { parseBlock } from "./block";
import { normalize } from "./line";
export { parseFeatureSets as parseEutraFeatureSets } from "./parsers/eutra";
export { parseFeatureSetCombinations as parseMrdcFeatureSetCombinations, parseSupportedBandCombinationList as parseMrdcSupportedBandCombinationList, } from "./parsers/mrdc";
export { parseFeatureSets as parseNrFeatureSets } from "./parsers/nr";
export function parse(content) {
    const lines = normalize(content);
    const capabilities = {};
    parseBlock(lines, capabilities);
    return capabilities;
}
//# sourceMappingURL=index.js.map