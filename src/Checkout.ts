import Inventory from './inventory'

class Checkout {
  constructor(inventory: Inventory[]) {
    this._inventory = inventory
    this._scannedItems = []
  }
  _total: number = 0
  _inventory: Inventory[]
  _scannedItems: string[]

  scan(item: string) {
    this._scannedItems.push(item)
  }
  total(): number {
    const res = this._scannedItems.map(item => this._inventory.find(i => i.item === item))

    return res.reduce((acc, x) => acc + (x?.price || 0), 0)
  }
}

export default Checkout

