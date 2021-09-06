import { describe, it } from 'mocha'
import { expect } from 'chai'

import Checkout from './checkout'

describe('Checkout', () => {
  let checkout: Checkout
  beforeEach(() => {
    checkout = new Checkout()
  })
  afterEach(() => {})

  it('should total zero when no items scanned', () => {
    const total = checkout.total()
    expect(total).to.eq(0)
  })

  it('should total a line item A', () => {
    checkout.scan('A')
    const total = checkout.total()
    expect(total).to.eq(50)
  })
  it('should total a line item B', () => {
    checkout.scan('B')
    const total = checkout.total()
    expect(total).to.eq(30)
  })
  it('should total two line item A', () => {
    checkout.scan('A')
    checkout.scan('A')
    const total = checkout.total()
    expect(total).to.eq(100)
  })
  it('should total one line item A and one line item B', () => {
    checkout.scan('A')
    checkout.scan('B')
    const total = checkout.total()
    expect(total).to.eq(80)
  })
})
