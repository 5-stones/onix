import { CollectionFrequencyCode, CollectionType } from '../enums';
import { TitleDetail } from './TitleDetail';

export interface Collection {
  CollectionType: CollectionType;
  CollectionFrequency?: CollectionFrequencyCode;
  SourceName?: string;
  TitleDetail?: TitleDetail;
}
