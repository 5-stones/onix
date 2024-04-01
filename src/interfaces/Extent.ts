import { ExtentType } from "../enums/ExtentType";
import { ExtentUnit } from "../enums/ExtentUnit";

export interface Extent {
  ExtentType?: ExtentType;
  ExtentValue?: string;
  ExtentUnit?: ExtentUnit;
}
