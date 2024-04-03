import { ProductComposition } from '../enums';
import { ProductForm } from '../enums';
import { ProductFormDetail } from '../enums';
import { Audience } from './Audience';
import { Collection } from './Collection';
import { Contributor } from './Contributor';
import { Extent } from './Extent';
import { Language } from './Language';
import { Measure } from './Measure';
import { ProductFormFeature } from './ProductFormFeature';
import { SubjectElement } from './SubjectElement';
import { TitleDetail } from './TitleDetail';

export interface DescriptiveDetail {
  ProductComposition?: ProductComposition;
  ProductForm?: ProductForm;
  ProductFormDetail?: ProductFormDetail;
  ProductFormFeature?: ProductFormFeature;
  ProductFormDescription?: string;
  Measure?: Measure[];
  CountryOfManufacture?: string;
  PrimaryContentType?: string;
  Collection?: Collection[] | Collection;
  NoCollection?: string;
  TitleDetail?: TitleDetail;
  NoContributor?: string;
  EditionNumber?: string;
  EditionStatement?: string;
  Language?: Language;
  Extent?: Extent;
  Subject?: SubjectElement[] | SubjectElement;
  Audience?: Audience;
  Contributor?: Contributor;
  NoEdition?: string;
}
