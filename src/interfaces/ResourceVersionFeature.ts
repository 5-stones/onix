import { ResourceVersionFeatureType } from "../enums/ResourceVersionFeatureType";
import { SupportingResourceFileFormat } from "../enums/SupportingResourceFileFormat";

export interface ResourceVersionFeature {
  ResourceVersionFeatureType?: ResourceVersionFeatureType;
  FeatureValue?: SupportingResourceFileFormat;
}
