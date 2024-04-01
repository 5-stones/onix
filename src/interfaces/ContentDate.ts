import { ContentDateRole } from '../enums';
import { DateClass } from './DateClass';

export interface ContentDate {
  ContentDateRole?: ContentDateRole;
  Date?: DateClass;
}
