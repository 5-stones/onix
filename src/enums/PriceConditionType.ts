
// https://ns.editeur.org/onix/en/167 
export enum PriceConditionType {
  _00 = '00', // No conditions
  _01 = '01', // Includes updates
  _02 = '02', // Must also purchase updates
  _03 = '03', // Updates available
  _04 = '04', // Linked subsequent purchase price
  _05 = '05', // Linked prior purchase price
  _06 = '06', // Linked price
  _07 = '07', // Auto-renewing
  _08 = '08', // Combined price
  _10 = '10', // Rental duration
  _11 = '11', // Rental to purchase
  _12 = '12', // Rental extension
}