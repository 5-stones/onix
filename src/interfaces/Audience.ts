import { AudienceCodeType } from "../enums/AudienceCodeType";

export interface Audience {
  AudienceCodeType?: AudienceCodeType;
  AudienceCodeValue?: string;
}
