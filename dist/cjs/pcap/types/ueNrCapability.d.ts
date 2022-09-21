import { SimpleValue } from ".";
export declare type UeNrCapability = {
    "rf-Parameters": RfParameters;
    featureSets?: FeatureSets;
    featureSetCombinations?: FeatureSetCombination[];
    lateNonCriticalExtension?: {
        [key: string]: UeNrCapabilityV15c0;
    };
    nonCriticalExtension?: never;
};
declare type RfParameters = {
    supportedBandListNR: BandNr[];
    supportedBandCombinationList?: BandCombinationList;
    "supportedBandCombinationList-v1540"?: never;
    "supportedBandCombinationList-v1550"?: never;
    "supportedBandCombinationList-v1560"?: never;
    "supportedBandCombinationList-v1610"?: never;
    "supportedBandCombinationList-UplinkTxSwitch-r16"?: BandCombinationListUplinkTxSwitchR16;
    "supportedBandCombinationList-v1630"?: never;
    "supportedBandCombinationList-UplinkTxSwitch-v1630"?: never;
    "supportedBandCombinationList-v1640"?: never;
    "supportedBandCombinationList-UplinkTxSwitch-v1640"?: never;
    "supportedBandCombinationList-v1650"?: never;
    "supportedBandCombinationList-UplinkTxSwitch-v1650"?: never;
    "supportedBandCombinationList-UplinkTxSwitch-v1670"?: BandCombinationListUplinkTxSwitchV1670;
    "supportedBandCombinationList-v1690"?: never;
    "supportedBandCombinationList-UplinkTxSwitch-v1690"?: never;
    "supportedBandCombinationList-v1700"?: never;
    "supportedBandCombinationList-UplinkTxSwitch-v1700"?: never;
};
declare type BandNr = {
    bandNr: FreqBandIndicatorNr;
    "channelBWs-DL"?: {
        "fr1 (0)": {
            "scs-15kHz"?: SimpleValue;
            "scs-30kHz"?: SimpleValue;
            "scs-60kHz"?: SimpleValue;
        };
    } | {
        "fr2 (1)": {
            "scs-60kHz"?: SimpleValue;
            "scs-120kHz"?: SimpleValue;
        };
    };
    "channelBWs-UL"?: {
        "fr1 (0)": {
            "scs-15kHz"?: SimpleValue;
            "scs-30kHz"?: SimpleValue;
            "scs-60kHz"?: SimpleValue;
        };
    } | {
        "fr2 (1)": {
            "scs-60kHz"?: SimpleValue;
            "scs-120kHz"?: SimpleValue;
        };
    };
    "channelBWs-DL-v1590"?: {
        "fr1 (0)": {
            "scs-15kHz"?: SimpleValue;
            "scs-30kHz"?: SimpleValue;
            "scs-60kHz"?: SimpleValue;
        };
    } | {
        "fr2 (1)": {
            "scs-60kHz"?: SimpleValue;
            "scs-120kHz"?: SimpleValue;
        };
    };
    "channelBWs-UL-v1590"?: {
        "fr1 (0)": {
            "scs-15kHz"?: SimpleValue;
            "scs-30kHz"?: SimpleValue;
            "scs-60kHz"?: SimpleValue;
        };
    } | {
        "fr2 (1)": {
            "scs-60kHz"?: SimpleValue;
            "scs-120kHz"?: SimpleValue;
        };
    };
    asymmetricBandwidthCombinationSet?: SimpleValue;
};
declare type UeNrCapabilityV15c0 = {
    nonCriticalExtension?: UeNrCapabilityV15g0;
};
declare type FeatureSets = {
    featureSetsDownlink?: {
        FeatureSetDownlink: FeatureSetDownlink;
    }[];
    featureSetsDownlinkPerCC?: {
        FeatureSetDownlinkPerCC: FeatureSetDownlinkPerCc;
    }[];
    featureSetsUplink?: {
        FeatureSetUplink: FeatureSetUplink;
    }[];
    featureSetsUplinkPerCC?: {
        FeatureSetUplinkPerCC: FeatureSetUplinkPerCc;
    }[];
};
declare type FeatureSetDownlink = {
    featureSetListPerDownlinkCC: {
        "FeatureSetDownlinkPerCC-Id": FeatureSetDownlinkPerCcId;
    }[];
};
declare type FeatureSetDownlinkPerCcId = SimpleValue;
declare type FeatureSetDownlinkPerCc = {
    supportedSubcarrierSpacingDL: SubcarrierSpacing;
    supportedBandwidthDL: SupportedBandwidth;
    "channelBW-90mhz"?: SimpleValue;
};
declare type SubcarrierSpacing = SimpleValue;
declare type SupportedBandwidth = {
    "fr1 (0)": SimpleValue;
} | {
    "fr2 (1)": SimpleValue;
};
declare type FeatureSetUplink = {
    featureSetListPerUplinkCC: {
        "FeatureSetUplinkPerCC-Id": FeatureSetUplinkPerCcId;
    }[];
};
declare type FeatureSetUplinkPerCcId = SimpleValue;
declare type FeatureSetUplinkPerCc = {
    supportedSubcarrierSpacingUL: SubcarrierSpacing;
    supportedBandwidthUL: SupportedBandwidth;
    "channelBW-90mhz"?: SimpleValue;
};
declare type UeNrCapabilityV15g0 = {
    "rf-Parameters-v15g0"?: RfParametersV15g0;
};
declare type RfParametersV15g0 = {
    "supportedBandCombinationList-v15g0"?: BandCombinationListV15g0;
};
export declare type BandCombinationList = {
    BandCombination: BandCombination;
}[];
declare type BandCombination = {
    bandList: {
        BandParameters: BandParameters;
    }[];
    featureSetCombination: FeatureSetCombinationId;
    "ca-ParametersEUTRA"?: CaParametersEutra;
    "ca-ParametersNR"?: never;
    "mrdc-Parameters"?: MrdcParameters;
    supportedBandwidthCombinationSet?: SimpleValue;
    "powerClass-v1530"?: SimpleValue;
};
export declare type BandParameters = {
    "eutra (0)": {
        eutra: {
            bandEUTRA: FreqBandIndicatorEutra;
            "ca-BandwidthClassDL-EUTRA"?: CaBandwidthClassEutra;
            "ca-BandwidthClassUL-EUTRA"?: CaBandwidthClassEutra;
        };
    };
} | {
    "nr (1)": {
        nr: {
            bandNR: FreqBandIndicatorNr;
            "ca-BandwidthClassDL-NR"?: CaBandwidthCalssNr;
            "ca-BandwidthClassUL-NR"?: CaBandwidthCalssNr;
        };
    };
};
declare type FreqBandIndicatorEutra = SimpleValue;
declare type CaBandwidthClassEutra = SimpleValue;
declare type FreqBandIndicatorNr = SimpleValue;
declare type CaBandwidthCalssNr = SimpleValue;
declare type FeatureSetCombinationId = SimpleValue;
declare type CaParametersEutra = {
    "supportedBandwidthCombinationSetEUTRA-v1530"?: SimpleValue;
};
declare type MrdcParameters = {
    "singleUL-Transmission"?: SimpleValue;
    dynamicPowerSharingENDC?: SimpleValue;
    simultaneousRxTxInterBandENDC?: SimpleValue;
    "intraBandENDC-Support"?: SimpleValue;
};
export declare type FeatureSetCombination = {
    FeatureSetsPerBand: FeatureSetsPerBand;
}[];
declare type FeatureSetsPerBand = {
    FeatureSet: FeatureSet;
}[];
export declare type FeatureSet = {
    "eutra (0)": {
        eutra: {
            downlinkSetEUTRA: FeatureSetEutraDownlinkId;
            uplinkSetEUTRA: FeatureSetEutraUplinkId;
        };
    };
} | {
    "nr (1)": {
        nr: {
            downlinkSetNR: FeatureSetDownlinkId;
            uplinkSetNR: FeatureSetUplinkId;
        };
    };
};
declare type FeatureSetEutraDownlinkId = SimpleValue;
declare type FeatureSetEutraUplinkId = SimpleValue;
declare type FeatureSetDownlinkId = SimpleValue;
declare type FeatureSetUplinkId = SimpleValue;
export declare type BandCombinationListV1590 = BandCombinationV1590[];
declare type BandCombinationV1590 = {
    supportedBandwidthCombinationSetIntraENDC?: SimpleValue;
    "mrdc-Parameters-v1590": never;
};
export declare type BandCombinationListUplinkTxSwitchR16 = BandCombinationUplinkTxSwitchR16[];
declare type BandCombinationUplinkTxSwitchR16 = {
    "bandCombination-r16": BandCombination;
    "bandCombination-v1540"?: never;
    "bandCombination-v1560"?: never;
    "bandCombination-v1570"?: never;
    "bandCombination-v1580"?: never;
    "bandCombination-v1590"?: BandCombinationV1590;
    "bandCombination-v1610"?: never;
    "supportedBandPairListNR-r16": never[];
};
export declare type BandCombinationListV15g0 = BandCombinationV15g0[];
declare type BandCombinationV15g0 = {
    "ca-ParametersNR-v15g0"?: CaParametersNrV15g0;
    "ca-ParametersNRDC-v15g0"?: CaParametersNrdcV15g0;
    "mrdc-Parameters-v15g0"?: MrdcParamtersV15g0;
};
declare type CaParametersNrV15g0 = {
    simultaneousRxTxInterBandCAPerBandPair?: SimultaneousRxTxPerBandPair;
};
declare type SimultaneousRxTxPerBandPair = SimpleValue;
declare type CaParametersNrdcV15g0 = {
    "ca-ParametersNR-ForDC-v15g0"?: CaParametersNrV15g0;
};
declare type MrdcParamtersV15g0 = {
    simultaneousRxTxInterBandENDCPerBandPair?: SimultaneousRxTxPerBandPair;
};
export declare type BandCombinationListUplinkTxSwitchV1670 = BandCombinationUplinkTxSwtichV1670[];
declare type BandCombinationUplinkTxSwtichV1670 = {
    "bandCombination-v15g0"?: BandCombinationV15g0;
};
export {};
