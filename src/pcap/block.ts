import { isArray, parseArray } from "./array";
import {
  UE_EUTRA_CAPABILITY,
  UE_MRDC_CAPABILITY,
  UE_NR_CAPABILITY,
} from "./constants";
import { getKeyValue, Line } from "./line";
import { parseObject } from "./object";
import { Capabilities } from "./types/capabilities";
import { UeEutraCapability } from "./types/ueEutraCapability";
import { UeMrdcCapability } from "./types/ueMrdcCapability";
import { UeNrCapability } from "./types/ueNrCapability";

export function parseBlock(lines: Line[], capabilities: Capabilities) {
  if (!lines.length) {
    return {};
  }
  const { line } = lines[0];
  const [key, value] = getKeyValue(line);
  if (isArray(line)) {
    const items = parseArray(lines.slice(1), capabilities);
    return { [key]: items };
  } else {
    const items = parseObject(lines.slice(1), capabilities);
    if (key === UE_EUTRA_CAPABILITY) {
      capabilities.eutra = items as UeEutraCapability;
    }
    if (key === UE_MRDC_CAPABILITY) {
      capabilities.mrdc = items as UeMrdcCapability;
    }
    if (key === UE_NR_CAPABILITY) {
      capabilities.nr = items as UeNrCapability;
    }
    if (value === undefined) {
      return { [key]: items };
    }
    return { [key]: { [value]: items } };
  }
}
