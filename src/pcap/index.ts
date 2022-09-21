import { parseBlock } from "./block";
import { normalize } from "./line";
export { parseFeatureSets as parseEutraFeatureSets } from "./parsers/eutra";
export {
  parseFeatureSetCombinations as parseMrdcFeatureSetCombinations,
  parseSupportedBandCombinationList as parseMrdcSupportedBandCombinationList,
} from "./parsers/mrdc";
export { parseFeatureSets as parseNrFeatureSets } from "./parsers/nr";
import { Capabilities } from "./types/capabilities";

export function parse(content: string) {
  const lines = normalize(content);
  const capabilities: Capabilities = {};
  parseBlock(lines, capabilities);
  return capabilities;
}
