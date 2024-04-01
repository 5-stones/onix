import { ResourceForm } from '../enums';
import { ContentDate } from './ContentDate';
import { ResourceVersionFeature } from './ResourceVersionFeature';

export interface ResourceVersion {
  ResourceForm?: ResourceForm;
  ResourceVersionFeature?: ResourceVersionFeature;
  ResourceLink?: string;
  ContentDate?: ContentDate;
}
