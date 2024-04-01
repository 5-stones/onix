import { SupportingResource } from './SupportingResource';
import { TextContentElement } from './TextContentElement';

export interface CollateralDetail {
  TextContent?: TextContentElement[] | TextContentElement;
  SupportingResource?: SupportingResource[] | SupportingResource;
}
