import { format, formatDistanceToNow } from 'date-fns'
import { DATE_FORMAT } from '@/constants'

export function formatDate(date: string | Date, formatStr = DATE_FORMAT.DEFAULT) {
  return format(new Date(date), formatStr)
}

export function formatRelativeTime(date: string | Date) {
  return formatDistanceToNow(new Date(date), { addSuffix: true })
}

export function formatNumber(num: number): string {
  return new Intl.NumberFormat('en-US').format(num)
}

export function formatCurrency(amount: number, currency = 'USD'): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
  }).format(amount)
}
