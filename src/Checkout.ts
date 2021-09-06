import Inventory from './inventory'
import Discounts from './discounts'

class Checkout {
  constructor(inventory: Inventory[], d: Discounts) {
    this._inventory = inventory
    this._scannedItems = []
    this._disountEngine = d
  }
  _total: number = 0
  _inventory: Inventory[]
  _scannedItems: string[]
  _disountEngine: Discounts

  scan(item: string) {
    this._scannedItems.push(item)
  }
  total(): number {
    const res = this._scannedItems.map(item => this._inventory.find(i => i.item === item))
    const discountValue = this._disountEngine.getDiscount(this._scannedItems)

    return res.reduce((acc, x) => acc + (x?.price || 0), 0) - discountValue
  }
}

export default Checkout
