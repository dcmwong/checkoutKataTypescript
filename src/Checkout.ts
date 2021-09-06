class Checkout {
  constructor() {
    this._scannedItems = []
  }
  _total: number = 0
  _scannedItems: string[]

  scan(item: string) {
    this._scannedItems.push(item)
  }
  total(): number {
    const res = this._scannedItems.map(item => (item === 'A' ? 50 : 30))

    return res.reduce((acc, price) => acc + (price || 0), 0)
  }
}

export default Checkout
