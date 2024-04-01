import { Imprint } from './Imprint';
import { Publisher } from './Publisher';
import { PublishingDate } from './PublishingDate';
import { SalesRights } from './SalesRights';

export interface PublishingDetail {
  Imprint?: Imprint;
  Publisher?: Publisher;
  PublishingStatus?: string;
  PublishingDate?: PublishingDate[];
  SalesRights?: SalesRights;
}
