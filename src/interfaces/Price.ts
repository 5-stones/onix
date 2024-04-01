import { PriceDate } from './PriceDate';
import { PriceType } from '../enums';
import { CurrencyCodeBasedOnIso4217 } from '../enums';

export interface Price {
  PriceType?: PriceType;
  PriceAmount?: string;
  CurrencyCode?: CurrencyCodeBasedOnIso4217;
  PriceDate?: PriceDate;
}
