import { Text } from './Text';

export interface Contributor {
  SequenceNumber?: string;
  ContributorRole?: string;
  PersonName?: string;
  PersonNameInverted?: string;
  TitlesBeforeNames?: string;
  NamesBeforeKey?: string;
  KeyNames?: string;
  BiographicalNote?: Text;
}
