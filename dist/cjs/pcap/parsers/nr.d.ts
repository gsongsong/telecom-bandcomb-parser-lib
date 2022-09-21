import { UeNrCapability } from "../types/ueNrCapability";
export declare type FeatureSets = {
    featureSetsDownlink: {
        featureSetListPerDownlinkCc: number[];
    }[];
    featureSetsUplink: {
        featureSetListPerUplinkCc: number[];
    }[];
};
export declare function parseFeatureSets(ueNrCapability: UeNrCapability): FeatureSets | undefined;
