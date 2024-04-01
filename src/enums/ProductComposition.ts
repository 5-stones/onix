
// https://ns.editeur.org/onix/en/2 
export enum ProductComposition {
  _00 = '00', // Single-component retail product
  _01 = '01', // Single-component, not available separately
  _10 = '10', // Multiple-component retail product
  _11 = '11', // Multiple-item collection, retailed as separate parts
  _20 = '20', // Trade-only product
  _30 = '30', // Multiple-item trade-only pack
  _31 = '31', // Multiple-item pack
}