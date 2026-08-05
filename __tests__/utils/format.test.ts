import { formatNumber, formatCurrency } from '@/utils/format'

describe('formatNumber', () => {
  it('formats numbers with commas', () => {
    expect(formatNumber(1000)).toBe('1,000')
    expect(formatNumber(1000000)).toBe('1,000,000')
  })
})

describe('formatCurrency', () => {
  it('formats currency', () => {
    expect(formatCurrency(1000)).toBe('$1,000.00')
  })
})
