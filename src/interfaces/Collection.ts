import { CollectionFrequencyCode, CollectionType } from 'src/enums';
import { TitleDetail } from './TitleDetail';

export interface Collection {
  CollectionType: CollectionType;
  CollectionFrequency?: CollectionFrequencyCode;
  SourceName?: string;
  TitleDetail?: TitleDetail;
}
