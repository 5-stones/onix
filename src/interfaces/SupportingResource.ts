import { ContentAudience } from '../enums';
import { ResourceContentType } from '../enums';
import { ResourceMode } from '../enums';
import { ResourceVersion } from './ResourceVersion';

export interface SupportingResource {
  ResourceContentType?: ResourceContentType;
  ContentAudience?: ContentAudience;
  ResourceMode?: ResourceMode;
  ResourceVersion?: ResourceVersion | ResourceVersion[];
}
