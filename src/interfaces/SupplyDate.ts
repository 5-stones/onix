import { DateClass } from './DateClass';
import { SupplyDateRole } from '../enums';

export interface SupplyDate {
  SupplyDateRole?: SupplyDateRole;
  Date?: DateClass;
}
