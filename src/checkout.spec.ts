import {describe, it} from 'mocha'
import {expect} from 'chai'
import Checkout from './Checkout'
import Inventory from './inventory'

describe('Checkout', () => {
  const inventory: Inventory[] = [
    {item: "A", price: 20},
    {item: "B", price: 35},
    {item: "C", price: 60},
    {item: "D", price: 80},
  ]
  let checkout: Checkout
  beforeEach(() => {
    checkout = new Checkout(inventory)
  })
  afterEach(() => {
  })

  it('should total zero when no items scanned', () => {
    const total = checkout.total()
    expect(total).to.eq(0)
  })

  it('should total a line item A', () => {
    checkout.scan('A')
    const total = checkout.total()
    expect(total).to.eq(20)
  })
  it('should total a line item B', () => {
    checkout.scan('B')
    const total = checkout.total()
    expect(total).to.eq(35)
  })
  it('should total two line item A', () => {
    checkout.scan('A')
    checkout.scan('A')
    const total = checkout.total()
    expect(total).to.eq(40)
  })
  it('should total one line item A and one line item B', () => {
    checkout.scan('A')
    checkout.scan('B')
    const total = checkout.total()
    expect(total).to.eq(55)
  })
  it('should total one line item C', () => {
    checkout.scan('C')
    const total = checkout.total()
    expect(total).to.eq(60)
  })
  it('should total 3 As and give me a discount', () => {
    checkout.scan('A')
    checkout.scan('A')
    checkout.scan('A')
    const total = checkout.total()
    expect(total).to.eq(50)
  })
  it('should total 6 As and give me a discount', () => {
    checkout.scan('A')
    checkout.scan('A')
    checkout.scan('A')
    checkout.scan('A')
    checkout.scan('A')
    checkout.scan('A')
    const total = checkout.total()
    expect(total).to.eq(100)
  })
  it('should total 3 As and 2Bs and give me a discount', () => {
    checkout.scan('A')
    checkout.scan('A')
    checkout.scan('A')
    checkout.scan('B')
    checkout.scan('B')
    const total = checkout.total()
    expect(total).to.eq(110)
  })
})

