import { UeMrdcCapability } from "../types/ueMrdcCapability";
export declare type SupportedBandCombination = {
    bandList: string[];
    featureSetCombination: number;
};
export declare type FeatureSetCombinations = FeatureSetCombination[];
declare type FeatureSet = {
    downlinkSetEUTRA: number;
    uplinkSetEUTRA: number;
    downlinkSetNR?: undefined;
    uplinkSetNR?: undefined;
} | {
    downlinkSetEUTRA?: undefined;
    uplinkSetEUTRA?: undefined;
    downlinkSetNR: number;
    uplinkSetNR: number;
};
declare type FeatureSetsPerBand = FeatureSet[];
declare type FeatureSetCombination = FeatureSetsPerBand[];
export declare function parseSupportedBandCombinationList(ueMrdcCapability: UeMrdcCapability): SupportedBandCombination[];
export declare function parseFeatureSetCombinations(ueMrdcCapability: UeMrdcCapability): FeatureSetCombinations;
export {};
