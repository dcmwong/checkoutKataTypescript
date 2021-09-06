import { describe, it } from 'mocha'
import { expect } from 'chai'
import Checkout from './Checkout'
import Inventory from './inventory'
import Discounts, { discountRules } from './discounts'

describe('Checkout', () => {
  let checkout: Checkout
  beforeEach(() => {
    const inventory: Inventory[] = [
      { item: 'A', price: 50 },
      { item: 'B', price: 30 },
      { item: 'C', price: 20 },
      { item: 'D', price: 15 }
    ]

    const discountRules: discountRules[] = [
      { item: 'A', noOfItems: 3, discountAmount: 20 },
      { item: 'B', noOfItems: 2, discountAmount: 15 }
    ]
    checkout = new Checkout(inventory, new Discounts(discountRules))
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
  it('should total one line item C', () => {
    checkout.scan('C')
    const total = checkout.total()
    expect(total).to.eq(20)
  })
  it('should total 3 As and give me a discount', () => {
    checkout.scan('A')
    checkout.scan('A')
    checkout.scan('A')
    const total = checkout.total()
    expect(total).to.eq(130)
  })
  it('should total 6 As and give me a discount', () => {
    checkout.scan('A')
    checkout.scan('A')
    checkout.scan('A')
    checkout.scan('A')
    checkout.scan('A')
    checkout.scan('A')
    const total = checkout.total()
    expect(total).to.eq(260)
  })
  it('should total 2 2Bs and give me a discount', () => {
    checkout.scan('B')
    checkout.scan('B')
    const total = checkout.total()
    expect(total).to.eq(45)
  })
  it('should total 3 As and 2Bs and give me a discount', () => {
    checkout.scan('A')
    checkout.scan('A')
    checkout.scan('A')
    checkout.scan('B')
    checkout.scan('B')
    const total = checkout.total()
    expect(total).to.eq(175)
  })
})
