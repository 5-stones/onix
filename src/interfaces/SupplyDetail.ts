import { Price } from './Price';
import { Supplier } from './Supplier';
import { SupplyDate } from './SupplyDate';
import { ProductAvailability } from '../enums';

export interface SupplyDetail {
  Supplier?: Supplier;
  ProductAvailability?: ProductAvailability;
  SupplyDate?: SupplyDate[] | SupplyDate;
  PackQuantity?: string;
  Price?: Price;
}
