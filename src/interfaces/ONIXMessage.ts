import { Header } from './Header';
import { Product } from './Product';

export interface ONIXMessage {
  Header?: Header;
  Product?: Product[];
  '@_release'?: string;
}


