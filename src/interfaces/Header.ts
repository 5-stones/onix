import { CurrencyCodeBasedOnIso4217 } from '../enums';
import { PriceType } from '../enums';
import { Sender } from './Sender';

export interface Header {
  Sender?: Sender;
  SentDateTime?: string;
  MessageNote?: string;
  DefaultLanguageOfText?: string;
  DefaultPriceType?: PriceType;
  DefaultCurrencyCode?: CurrencyCodeBasedOnIso4217;
}
