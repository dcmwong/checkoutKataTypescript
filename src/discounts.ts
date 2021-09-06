export interface discountRules {
  item: string
  noOfItems: number
  discountAmount: number
}

export interface Discount {
  getDiscount(scannedItems: string[]): number
}

export default class Discounts {
  constructor(discounts: discountRules[]) {
    this._discounts = discounts
  }
  _discounts: discountRules[] = []

  getDiscount(scannedItems: string[]) {
    return this._discounts.reduce((acc, d) => {
      const amountOfDiscountedItems = scannedItems.filter(s => s === d.item).length
      return acc + Math.floor(amountOfDiscountedItems / d.noOfItems) * d.discountAmount
    }, 0)
  }
}
