import { ProductRelation } from '../enums';
import { ProductIdentifier } from './ProductIdentifier';

export interface RelatedProduct {
  ProductRelationCode?: ProductRelation;
  ProductIdentifier?: ProductIdentifier;
}
