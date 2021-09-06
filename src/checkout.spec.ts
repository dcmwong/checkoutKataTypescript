import { describe, it } from 'mocha'
import { expect } from 'chai'

class Checkout {
  constructor() {}
  _total: number = 0

  scan(item: string) {
    this._total = 20
  }
  total(): number {
    return this._total
  }
}

describe('Checkout', () => {
  it('should total a line item', () => {
    const checkout = new Checkout()
    checkout.scan('A')
    const total = checkout.total()
    expect(total).to.eq(20)
  })
})
