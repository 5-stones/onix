import { RelatedProduct } from './RelatedProduct';
import { RelatedWork } from './RelatedWork';

export interface RelatedMaterial {
  RelatedWork?: RelatedWork;
  RelatedProduct?: RelatedProduct;
}
