
// https://ns.editeur.org/onix/en/65 
export enum ProductAvailability {
  _01 = '01', // Cancelled
  _09 = '09', // Not yet available, postponed indefinitely
  _10 = '10', // Not yet available
  _11 = '11', // Awaiting stock
  _12 = '12', // Not yet available, will be POD
  _20 = '20', // Available
  _21 = '21', // In stock
  _22 = '22', // To order
  _23 = '23', // POD
  _30 = '30', // Temporarily unavailable
  _31 = '31', // Out of stock
  _32 = '32', // Reprinting
  _33 = '33', // Awaiting reissue
  _34 = '34', // Temporarily withdrawn from sale
  _40 = '40', // Not available (reason unspecified)
  _41 = '41', // Not available, replaced by new product
  _42 = '42', // Not available, other format available
  _43 = '43', // No longer supplied by us
  _44 = '44', // Apply direct
  _45 = '45', // Not sold separately
  _46 = '46', // Withdrawn from sale
  _47 = '47', // Remaindered
  _48 = '48', // Not available, replaced by POD
  _49 = '49', // Recalled
  _50 = '50', // Not sold as set
  _51 = '51', // Not available, publisher indicates OP
  _52 = '52', // Not available, publisher no longer sells product in this market
  _97 = '97', // No recent update received
  _98 = '98', // No longer receiving updates
  _99 = '99', // Contact supplier
}