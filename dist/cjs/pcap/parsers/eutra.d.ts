import { UeEutraCapability } from "../types/ueEutraCapability";
export declare type FeatureSets = {
    featureSetsDl: {
        featureSetPerCcListDlR15: number[];
    }[];
    featureSetsDlPerCc: {
        supportedMimoCapabilityDlMrdcR15: string | undefined;
    }[];
    featureSetsUl: {
        featureSetPerCcListUlR15: number[];
    }[];
    featureSetsUlPerCc: {
        supportedMimoCapabilityUlR15: string | undefined;
    }[];
};
export declare function parseFeatureSets(ueEutraCapability: UeEutraCapability): FeatureSets | undefined;
