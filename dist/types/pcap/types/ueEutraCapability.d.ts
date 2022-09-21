import { SimpleValue } from ".";
export declare type UeEutraCapability = {
    "rf-Parameters": RfParameters;
    nonCriticalExtension?: UeEutraCapabilityV920Ies;
};
declare type RfParameters = {
    supportedBandListEUTRA: SupportedBandListEutra;
};
declare type SupportedBandListEutra = SupportedBandEutra[];
declare type SupportedBandEutra = {
    bandEUTRA: FreqBandIndicator;
    halfDuplex: SimpleValue;
};
declare type FreqBandIndicator = SimpleValue;
declare type UeEutraCapabilityV920Ies = {
    nonCriticalExtension?: UeEutraCapabilityV940Ies;
};
declare type UeEutraCapabilityV940Ies = {
    lateNonCriticalExtension?: {
        [key: string]: UeEutraCapabilityV9a0Ies;
    };
    nonCriticalExtension?: UeEutraCapabilityV1020Ies;
};
declare type UeEutraCapabilityV9a0Ies = {
    nonCriticalExtension?: UeEutraCapabilityV9c0Ies;
};
declare type UeEutraCapabilityV9c0Ies = {
    nonCriticalExtension?: UeEutraCapabilityV9d0Ies;
};
declare type UeEutraCapabilityV9d0Ies = {
    nonCriticalExtension?: UeEutraCapabilityV9e0Ies;
};
declare type UeEutraCapabilityV9e0Ies = {
    "rf-Parameters-v9e0"?: RfParametersV9e0;
    nonCriticalExtension?: UeEutraCapabilityV9h0Ies;
};
declare type RfParametersV9e0 = {
    "supportedBandListEUTRA-v9e0"?: SupportedBandListEutraV9e0;
};
declare type SupportedBandListEutraV9e0 = SupportedBandEutraV9e0[];
declare type SupportedBandEutraV9e0 = {
    "bandEUTRA-v9e0"?: FreqBandIndicatorV9e0;
};
declare type FreqBandIndicatorV9e0 = SimpleValue;
declare type UeEutraCapabilityV9h0Ies = {
    nonCriticalExtension?: UeEutraCapabilityV10c0Ies;
};
declare type UeEutraCapabilityV10c0Ies = {
    nonCriticalExtension?: UeEutraCapabilityV10f0Ies;
};
/**
 * RF-Parameters-v10f0 is not captured
 * since there is no band combination related capabilities
 */
declare type UeEutraCapabilityV10f0Ies = {
    "rf-Parameters-v10f0"?: never;
    nonCriticalExtension?: UeEutraCapabilityV10i0Ies;
};
declare type UeEutraCapabilityV10i0Ies = {
    "rf-Parameters-v10i0"?: RfParametersV10i0;
    lateNonCriticalExtension?: never;
    nonCriticalExtension?: UeEutraCapabilityV11d0Ies;
};
declare type UeEutraCapabilityV11d0Ies = {
    "rf-Parameters-v11d0"?: RfParametersV11d0;
    nonCriticalExtension?: UeEutraCapabilityV11x0Ies;
};
declare type RfParametersV11d0 = {
    "supportedBandCombinationAdd-v11d0"?: SupportedBandCombinationAddV11d0;
};
declare type SupportedBandCombinationAddV11d0 = BandCombinationParametersV10i0[];
declare type BandCombinationParametersV10i0 = {
    "bandParameterList-v10i0"?: BandParametersV10ie[];
};
declare type BandParametersV10ie = {
    "bandParametersDL-v10i0": CaMimoParametersDlV10i0[];
};
declare type CaMimoParametersDlV10i0 = {
    "fourLayerTM3-TM4-r10"?: SimpleValue;
};
declare type UeEutraCapabilityV11x0Ies = {
    nonCriticalExtension?: UeEutraCapabilityV12b0Ies;
};
declare type UeEutraCapabilityV12b0Ies = {
    "rf-Parameters-v12b0"?: RfParametersV12b0;
    nonCriticalExtension?: UeEutraCapabilityV12x0Ies;
};
declare type RfParametersV12b0 = {
    "maxLayersMIMO-Indication-r12"?: SimpleValue;
};
declare type UeEutraCapabilityV12x0Ies = {
    nonCriticalExtension?: UeEutraCapabilityV1370Ies;
};
declare type UeEutraCapabilityV1370Ies = {
    nonCriticalExtension?: UeEutraCapabilityV1380Ies;
};
declare type UeEutraCapabilityV1380Ies = {
    "rf-Parameters-v1380"?: never;
    nonCriticalExtension?: UeEutraCapabilityV1390Ies;
};
declare type UeEutraCapabilityV1390Ies = {
    "rf-Parameters-v1390"?: RfParametersV1390;
    nonCriticalExtension?: UeEutraCapabilityV13e0aIes;
};
declare type RfParametersV1390 = {
    "supportedBandCombination-v1390"?: SupportedBandCombinationV1390;
    "supportedBandCombinationAdd-v1390"?: SupportedBandCombinationAddV1390;
    "supportedBandCombinationReduced-v1390"?: SupportedBandCombinationReducedV1390;
};
declare type SupportedBandCombinationV1390 = BandCombinationParametersV1390[];
declare type BandCombinationParametersV1390 = {
    "ue-CA-PowerClass-N-r13"?: SimpleValue;
};
declare type SupportedBandCombinationAddV1390 = BandCombinationParametersV1390[];
declare type SupportedBandCombinationReducedV1390 = BandCombinationParametersV1390[];
/**
 * late non-critical extension is not captured
 * since there is no band combination related capabilities
 */
declare type UeEutraCapabilityV13e0aIes = {
    nonCriticalExtension?: UeEutraCapabilityV1470Ies;
};
declare type UeEutraCapabilityV1470Ies = {
    "rf-Parameters-v1470"?: never;
    nonCriticalExtension?: UeEutraCapabilityV14a0Ies;
};
declare type UeEutraCapabilityV14a0Ies = {
    nonCriticalExtension?: UeEutraCapabilityV14b0Ies;
};
declare type UeEutraCapabilityV14b0Ies = {
    "rf-Parameters-v14b0"?: never;
};
declare type RfParametersV10i0 = {
    "supportedBandCombination-v10i0"?: SupportedBandCombinationV10i0;
};
declare type SupportedBandCombinationV10i0 = BandCombinationParametersV10i0[];
declare type UeEutraCapabilityV1020Ies = {
    "rf-Parameters-v1020"?: RfParametersV1020;
    nonCriticalExtension?: UeEutraCapabilityV1060Ies;
};
declare type RfParametersV1020 = {
    "supportedBandCombination-r10": SupportedBandCombinationR10;
};
declare type SupportedBandCombinationR10 = BandCombinationParametersR10[];
declare type BandCombinationParametersR10 = BandParametersR10[];
declare type BandParametersR10 = {
    "bandEUTRA-r10": FreqBandIndicator;
    "bandParametersUL-r10"?: BandParametersUlR10;
    "bandParametersDL-r10"?: BandParametersDlR10;
};
declare type BandParametersUlR10 = CaMimoParametersUlR10[];
declare type CaMimoParametersUlR10 = {
    "ca-BandwidthClassUL-r10": CaBandwidthClassR10;
    "supportedMIMO-CapabilityUL-r10"?: MimoCapabilityUlR10;
};
declare type CaBandwidthClassR10 = SimpleValue;
declare type MimoCapabilityUlR10 = SimpleValue;
declare type BandParametersDlR10 = CaMimoParametersDlR10[];
declare type CaMimoParametersDlR10 = {
    "ca-BandwidthClassDL-r10": CaBandwidthClassR10;
    "supportedMIMO-CapabilityDL-r13"?: MimoCapabilityDlR10;
    "fourLayerTM3-TM4-r13"?: SimpleValue;
    "intraBandContiguousCC-InfoList-r13": IntraBandContiguousCcInfoR12[];
};
declare type MimoCapabilityDlR10 = SimpleValue;
declare type IntraBandContiguousCcInfoR12 = {
    "fourLayerTM3-TM4-perCC-r12"?: SimpleValue;
    "supportedMIMO-CapabilityDL-r12": SimpleValue;
};
declare type UeEutraCapabilityV1060Ies = {
    nonCriticalExtension?: UeEutraCapabilityV1090Ies;
};
declare type UeEutraCapabilityV1090Ies = {
    "rf-Parameters-v1090"?: RfParametersV1090;
    nonCriticalExtension?: UeEutraCapabilityV1130Ies;
};
declare type RfParametersV1090 = {
    "supportedBandCombination-v1090"?: SupportedBandCombinationV1090;
};
declare type SupportedBandCombinationV1090 = BandCombinationParametersV1090[];
declare type BandCombinationParametersV1090 = BandParametersV1090[];
declare type BandParametersV1090 = {
    "bandEUTRA-v1090"?: FreqBandIndicatorV9e0;
};
declare type UeEutraCapabilityV1130Ies = {
    "rf-Parameters-v1130": RfParametersV1130;
    nonCriticalExtension?: UeEutraCapabilityV1170Ies;
};
declare type RfParametersV1130 = {
    "supportedBandCombination-v1130"?: SupportedBandCombinationV1130;
};
declare type SupportedBandCombinationV1130 = BandCombinationParametersV1130[];
declare type BandCombinationParametersV1130 = {
    "multipleTimingAdvance-r11"?: SimpleValue;
    "simultaneousRx-Tx-r11"?: SimpleValue;
    "bandParameterList-r11"?: BandParametersV1130[];
};
declare type BandParametersV1130 = never;
declare type UeEutraCapabilityV1170Ies = {
    nonCriticalExtension?: UeEutraCapabilityV1180Ies;
};
declare type UeEutraCapabilityV1180Ies = {
    "rf-Parameters-v1180"?: RfParametersV1180;
    nonCriticalExtension?: UeEutraCapabilityV11a0Ies;
};
declare type RfParametersV1180 = {
    "supportedBandCombinationAdd-r11"?: SupportedBandCombinationAddR11;
};
declare type SupportedBandCombinationAddR11 = BandCombinationParametersR11;
declare type BandCombinationParametersR11 = {
    "bandParameterList-r11": BandParametersR11[];
    "supportedBandwidthCombinationSet-r11"?: SupportedBandwidthCombinationSetR10;
    "multipleTimingAdvance-r11"?: SimpleValue;
    "simultaneousRx-Tx-r11"?: SimpleValue;
};
declare type BandParametersR11 = {
    "bandEUTRA-r11": FreqBandIndicatorR11;
    "bandParametersUL-r11"?: BandParametersUlR10;
    "bandParametersDL-r11"?: BandParametersDlR10;
};
declare type FreqBandIndicatorR11 = SimpleValue;
declare type SupportedBandwidthCombinationSetR10 = SimpleValue;
declare type UeEutraCapabilityV11a0Ies = {
    nonCriticalExtension?: UeEutraCapabilityV1250Ies;
};
declare type UeEutraCapabilityV1250Ies = {
    "rf-Parameters-v1250"?: RfParametersV1250;
    nonCriticalExtension?: UeEutraCapabilityV1260Ies;
};
declare type RfParametersV1250 = {
    "supportedBandListEUTRA-v1250"?: SupportedBandListEutraV1250;
    "supportedBandCombination-v1250"?: never;
    "supportedBandCombinationAdd-v1250"?: never;
};
declare type SupportedBandListEutraV1250 = SupportedBandEutraV1250[];
declare type SupportedBandEutraV1250 = {
    "dl-256QAM-r12"?: SimpleValue;
    "ul-64QAM-r12"?: SimpleValue;
};
declare type UeEutraCapabilityV1260Ies = {
    nonCriticalExtension?: UeEutraCapabilityV1270Ies;
};
declare type UeEutraCapabilityV1270Ies = {
    "rf-Parameters-v1270"?: RfParametersV1270;
    nonCriticalExtension?: UeEutraCapabilityV1280Ies;
};
declare type RfParametersV1270 = {
    "supportedBandCombination-v1270"?: SupportedBandCombinationV1270;
    "supportedBandCombinationAdd-v1270"?: SupportedBandCombinationAddV1270;
};
declare type SupportedBandCombinationV1270 = BandCombinationParametersV1270[];
declare type SupportedBandCombinationAddV1270 = BandCombinationParametersV1270[];
declare type BandCombinationParametersV1270 = {
    "bandParameterList-v1270"?: BandParametersV1270[];
};
declare type BandParametersV1270 = {
    "bandParametersDL-v1270": CaMimoParametersDlV1270[];
};
declare type CaMimoParametersDlV1270 = {
    "intraBandContiguousCC-InfoList-r12": IntraBandContiguousCcInfoR12[];
};
declare type UeEutraCapabilityV1280Ies = {
    nonCriticalExtension?: UeEutraCapabilityV1310Ies;
};
declare type UeEutraCapabilityV1310Ies = {
    "rf-Parameters-v1310"?: RfParametersV1310;
    nonCriticalExtension?: UeEutraCapabilityV1320Ies;
};
declare type RfParametersV1310 = {
    "skipFallbackCombinations-r13"?: SimpleValue;
    "reducedIntNonContComb-r13"?: SimpleValue;
    "supportedBandListEUTRA-v1310"?: never;
    "supportedBandCombinationReduced-r13"?: SupportedBandCombinationReducedR13;
};
declare type SupportedBandCombinationReducedR13 = BandCombinationParametersR13[];
declare type BandCombinationParametersR13 = {
    "differentFallbackSupported-r13"?: SimpleValue;
    "bandParameterList-r13": BandParametersR13[];
    "supportedBandwidthCombinationSet-r13"?: SupportedBandwidthCombinationSetR10;
};
declare type BandParametersR13 = {
    "bandEUTRA-r13": FreqBandIndicatorR11;
    "bandParametersUL-r13"?: BandParametersUlR13;
    "bandParametersDL-r13"?: BandParametersDlR13;
};
declare type BandParametersUlR13 = CaMimoParametersUlR10;
declare type BandParametersDlR13 = CaMimoParametersDlR10;
declare type UeEutraCapabilityV1320Ies = {
    "rf-Parameters-v1320"?: RfParametersV1320;
    nonCriticalExtension?: UeEutraCapabilityV1330Ies;
};
declare type RfParametersV1320 = {
    "supportedBandListEUTRA-v1320"?: SupportedBandListEutraV1320;
    "supportedBandCombination-v1320"?: never;
    "supportedBandCombinationAdd-v1320"?: never;
    "supportedBandCombinationReduced-v1320"?: never;
};
declare type SupportedBandListEutraV1320 = SupportedBandEutraV1320[];
declare type SupportedBandEutraV1320 = {
    "ue-PowerClass-N-r13"?: SimpleValue;
};
declare type UeEutraCapabilityV1330Ies = {
    nonCriticalExtension?: UeEutraCapabilityV1340Ies;
};
declare type UeEutraCapabilityV1340Ies = {
    nonCriticalExtension?: UeEutraCapabilityV1350Ies;
};
declare type UeEutraCapabilityV1350Ies = {
    nonCriticalExtension?: UeEutraCapabilityV1360Ies;
};
declare type UeEutraCapabilityV1360Ies = {
    nonCriticalExtension?: UeEutraCapabilityV1430Ies;
};
declare type UeEutraCapabilityV1430Ies = {
    "rf-Parameters-v1430"?: RfParametersV1430;
    nonCriticalExtension?: UeEutraCapabilityV1440Ies;
};
declare type RfParametersV1430 = {
    "supportedBandCombination-v1430"?: SupportedBandCombinationV1430;
    "supportedBandCombinationAdd-v1430"?: SupportedBandCombinationAddV1430;
    "supportedBandCombinationReduced-v1430"?: SupportedBandCombinationReducedV1430;
    "eNB-RequestedParameters-v1430"?: {
        "requestedDiffFallbackCombList-r14": BandCombinationListR14;
    };
    "diffFallbackCombReport-r14"?: SimpleValue;
};
declare type SupportedBandCombinationV1430 = BandCombinationParametersV1430[];
declare type BandCombinationParametersV1430 = {
    "bandParameterList-v1430"?: BandParametersV1430[];
};
declare type BandParametersV1430 = {
    "bandParametersDL-v1430"?: MimoCaParametersPerBoBcV1430;
    "ul-256QAM-r14"?: SimpleValue;
    "ul-256QAM-perCC-InfoList-r14"?: Ul256QamPerCcInfoR14[];
};
declare type MimoCaParametersPerBoBcV1430 = {
    "parametersTM9-v1430"?: never;
    "parametersTM10-v1430"?: never;
};
declare type Ul256QamPerCcInfoR14 = {
    "ul-256QAM-perCC-r14"?: SimpleValue;
};
declare type SupportedBandCombinationAddV1430 = BandCombinationParametersV1430[];
declare type SupportedBandCombinationReducedV1430 = BandCombinationParametersV1430[];
declare type BandCombinationListR14 = BandCombinationR14[];
declare type BandCombinationR14 = BandIndicationR14[];
declare type BandIndicationR14 = {
    "bandEUTRA-r14": FreqBandIndicatorR11;
    "ca-BandwidthClassDL-r14": CaBandwidthClassR10;
    "ca-BandwidthClassUL-r14"?: CaBandwidthClassR10;
};
declare type UeEutraCapabilityV1440Ies = {
    nonCriticalExtension?: UeEutraCapabilityV1450Ies;
};
declare type UeEutraCapabilityV1450Ies = {
    "rf-Parameters-v1450"?: never;
    nonCriticalExtension?: UeEutraCapabilityV1460Ies;
};
declare type UeEutraCapabilityV1460Ies = {
    nonCriticalExtension?: UeEutraCapabilityV1510Ies;
};
declare type UeEutraCapabilityV1510Ies = {
    "featureSetsEUTRA-r15"?: FeatureSetsEutraR15;
    nonCriticalExtension?: UeEutraCapabilityV1520Ies;
};
declare type FeatureSetsEutraR15 = {
    "featureSetsDL-r15"?: {
        "FeatureSetDL-r15": FeatureSetDlR15;
    }[];
    "featureSetsDL-PerCC-r15"?: {
        "FeatureSetDL-PerCC-r15": FeatureSetDlPerCcR15;
    }[];
    "featureSetsUL-r15"?: {
        "FeatureSetUL-r15": FeatureSetUlR15;
    }[];
    "featureSetsUL-PerCC-r15"?: {
        "FeatureSetUL-PerCC-r15": FeatureSetUlPerCcR15;
    }[];
    "featureSetsDL-v1550"?: {
        "FeatureSetDL-v1550": FeatureSetDlV1550;
    }[];
};
declare type FeatureSetDlR15 = {
    "mimo-CA-ParametersPerBoBC-r15"?: MimoCaParametersPerBoBcR15;
    "featureSetPerCC-ListDL-r15"?: {
        "FeatureSetDL-PerCC-Id-r15": FeatureSetDlPerCcIdR15;
    }[];
};
declare type MimoCaParametersPerBoBcR15 = {
    "parametersTM9-r15"?: never;
    "parametersTM10-r15"?: never;
};
declare type FeatureSetDlPerCcIdR15 = SimpleValue;
declare type FeatureSetDlPerCcR15 = {
    "fourLayerTM3-TM4-r15"?: SimpleValue;
    "supportedMIMO-CapabilityDL-MRDC-r15"?: MimoCapabilityDlR10;
};
declare type FeatureSetUlR15 = {
    "featureSetPerCC-ListUL-r15": {
        "FeatureSetUL-PerCC-Id-r15": FeatureSetUlPerCcIdR15;
    }[];
};
declare type FeatureSetUlPerCcIdR15 = SimpleValue;
declare type FeatureSetUlPerCcR15 = {
    "supportedMIMO-CapabilityUL-r15"?: MimoCapabilityUlR10;
    "ul-256QAM-r15"?: SimpleValue;
};
declare type FeatureSetDlV1550 = {
    "dl-1024QAM-r15"?: SimpleValue;
};
declare type UeEutraCapabilityV1520Ies = {
    nonCriticalExtension?: UeEutraCapabilityV1530Ies;
};
declare type UeEutraCapabilityV1530Ies = {
    "rf-Parameters-v1530"?: RfParametersV1530;
    nonCriticalExtension?: UeEutraCapabilityV1540Ies;
};
declare type RfParametersV1530 = {
    "supportedBandCombination-v1530"?: SupportedBandCombinationV1530;
    "supportedBandCombinationAdd-v1530"?: SupportedBandCombinationAddV1530;
    "supportedBandCombinationReduced-v1530"?: SupportedBandCombinationReducedV1530;
};
declare type SupportedBandCombinationV1530 = BandCombinationParametersV1530[];
declare type BandCombinationParametersV1530 = {
    "bandParameterList-v1530"?: BandParametersV1530[];
};
declare type BandParametersV1530 = {
    "dl-1024QAM-r15"?: SimpleValue;
};
declare type SupportedBandCombinationAddV1530 = BandCombinationParametersV1530[];
declare type SupportedBandCombinationReducedV1530 = BandCombinationParametersV1530[];
declare type UeEutraCapabilityV1540Ies = {
    nonCriticalExtension?: UeEutraCapabilityV1550Ies;
};
declare type UeEutraCapabilityV1550Ies = {
    nonCriticalExtension?: UeEutraCapabilityV1560Ies;
};
declare type UeEutraCapabilityV1560Ies = {
    nonCriticalExtension?: UeEutraCapabilityV1570Ies;
};
declare type UeEutraCapabilityV1570Ies = {
    "rf-Parameters-v1570"?: RfParametersV1570;
    nonCriticalExtension?: UeEutraCapabilityV15a0Ies;
};
declare type RfParametersV1570 = {
    "dl-1024QAM-ScalingFactor-r15": SimpleValue;
    "dl-1024QAM-TotalWeightedLayers-r15": SimpleValue;
};
declare type UeEutraCapabilityV15a0Ies = {
    nonCriticalExtension?: UeEutraCapabilityV1610Ies;
};
declare type UeEutraCapabilityV1610Ies = {
    "rf-Parameters-v1610"?: never;
    nonCriticalExtension?: UeEutraCapabilityV1630Ies;
};
declare type UeEutraCapabilityV1630Ies = {
    "rf-Parameters-v1630"?: never;
    nonCriticalExtension?: never;
};
export {};
