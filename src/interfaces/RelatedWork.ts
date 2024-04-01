import { WorkRelation } from '../enums';
import { WorkIdentifier } from './WorkIdentifier';

export interface RelatedWork {
  WorkRelationCode?: WorkRelation;
  WorkIdentifier?: WorkIdentifier;
}
