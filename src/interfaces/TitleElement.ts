import { TitleElementLevel } from "../enums/TitleElementLevel";

export interface TitleElement {
  TitleElementLevel?: TitleElementLevel;
  TitleText?: string;
  TitlePrefix?: string;
  TitleWithoutPrefix?: string;
  Subtitle?: string;
}
