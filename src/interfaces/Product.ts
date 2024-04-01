import { CollateralDetail } from './CollateralDetail';
import { DescriptiveDetail } from './DescriptiveDetail';
import { ProductIdentifier } from './ProductIdentifier';
import { ProductSupply } from './ProductSupply';
import { PublishingDetail } from './PublishingDetail';
import { RelatedMaterial } from './RelatedMaterial';

export interface Product {
  RecordReference?: string;
  NotificationType?: string;
  ProductIdentifier?: ProductIdentifier[];
  DescriptiveDetail?: DescriptiveDetail;
  CollateralDetail?: CollateralDetail;
  PublishingDetail?: PublishingDetail;
  RelatedMaterial?: RelatedMaterial;
  ProductSupply?: ProductSupply;
}
