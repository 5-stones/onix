
// https://ns.editeur.org/onix/en/46 
export enum SalesRightsType {
  _00 = '00', // Sales rights unknown or unstated for any reason
  _01 = '01', // For sale with exclusive rights in the specified countries or territories
  _02 = '02', // For sale with non-exclusive rights in the specified countries or territories
  _03 = '03', // Not for sale in the specified countries or territories (reason unspecified)
  _04 = '04', // Not for sale in the specified countries (but publisher holds exclusive rights in those countries or territories)
  _05 = '05', // Not for sale in the specified countries (publisher holds non-exclusive rights in those countries or territories)
  _06 = '06', // Not for sale in the specified countries (because publisher does not hold rights in those countries or territories)
  _07 = '07', // For sale with exclusive rights in the specified countries or territories (sales restriction applies)
  _08 = '08', // For sale with non-exclusive rights in the specified countries or territories (sales restriction applies)
}