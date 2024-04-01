import { LanguageBasedOnIso6392b } from "../enums/LanguageBasedOnIso6392b";
import { LanguageRole } from "../enums/LanguageRole";

export interface Language {
  LanguageRole?: LanguageRole;
  LanguageCode?: LanguageBasedOnIso6392b;
}
