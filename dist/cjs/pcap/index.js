"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parse = exports.parseNrFeatureSets = exports.parseMrdcSupportedBandCombinationList = exports.parseMrdcFeatureSetCombinations = exports.parseEutraFeatureSets = void 0;
const block_1 = require("./block");
const line_1 = require("./line");
var eutra_1 = require("./parsers/eutra");
Object.defineProperty(exports, "parseEutraFeatureSets", { enumerable: true, get: function () { return eutra_1.parseFeatureSets; } });
var mrdc_1 = require("./parsers/mrdc");
Object.defineProperty(exports, "parseMrdcFeatureSetCombinations", { enumerable: true, get: function () { return mrdc_1.parseFeatureSetCombinations; } });
Object.defineProperty(exports, "parseMrdcSupportedBandCombinationList", { enumerable: true, get: function () { return mrdc_1.parseSupportedBandCombinationList; } });
var nr_1 = require("./parsers/nr");
Object.defineProperty(exports, "parseNrFeatureSets", { enumerable: true, get: function () { return nr_1.parseFeatureSets; } });
function parse(content) {
    const lines = (0, line_1.normalize)(content);
    const capabilities = {};
    (0, block_1.parseBlock)(lines, capabilities);
    return capabilities;
}
exports.parse = parse;
//# sourceMappingURL=index.js.map