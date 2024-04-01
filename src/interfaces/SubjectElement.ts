import { SubjectSchemeIdentifier } from '../enums';

export interface SubjectElement {
  MainSubject?: string;
  SubjectSchemeIdentifier?: SubjectSchemeIdentifier;
  SubjectCode?: string;
  SubjectHeadingText?: string;
}
