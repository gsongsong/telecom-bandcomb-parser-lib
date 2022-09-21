export { parseFeatureSets as parseEutraFeatureSets } from "./parsers/eutra";
export { parseFeatureSetCombinations as parseMrdcFeatureSetCombinations, parseSupportedBandCombinationList as parseMrdcSupportedBandCombinationList, } from "./parsers/mrdc";
export { parseFeatureSets as parseNrFeatureSets } from "./parsers/nr";
import { Capabilities } from "./types/capabilities";
export declare function parse(content: string): Capabilities;
