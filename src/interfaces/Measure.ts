import { MeasureType } from '../enums';
import { MeasureUnit } from '../enums';

export interface Measure {
  MeasureType?: MeasureType;
  Measurement?: string;
  MeasureUnitCode?: MeasureUnit;
}
