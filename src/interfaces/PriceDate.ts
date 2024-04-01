import { DateClass } from './DateClass';
import { PriceDateRole } from '../enums';

export interface PriceDate {
  PriceDateRole?: PriceDateRole;
  Date?: DateClass;
}
