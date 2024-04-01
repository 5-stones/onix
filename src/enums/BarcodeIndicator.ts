
// https://ns.editeur.org/onix/en/141 
export enum BarcodeIndicator {
  _00 = '00', // Not barcoded
  _01 = '01', // Barcoded, scheme unspecified
  _02 = '02', // GTIN-13
  _03 = '03', // GTIN-13+5 (US dollar price encoded)
  _04 = '04', // GTIN-13+5 (CAN dollar price encoded)
  _05 = '05', // GTIN-13+5 (no price encoded)
  _06 = '06', // UPC-12 (item-specific)
  _07 = '07', // UPC-12+5 (item-specific)
  _08 = '08', // UPC-12 (price-point)
  _09 = '09', // UPC-12+5 (price-point)
  _10 = '10', // GTIN-13+5 (UK Pound Sterling price encoded)
  _11 = '11', // GTIN-13+5 (other price encoded)
  _12 = '12', // GTIN-13+2
}