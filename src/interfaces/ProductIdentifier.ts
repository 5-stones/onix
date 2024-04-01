import { ProductIdentifierType } from "../enums/ProductIdentifierType";

export interface ProductIdentifier {
  ProductIDType?: ProductIdentifierType;
  IDValue?: string;
}
