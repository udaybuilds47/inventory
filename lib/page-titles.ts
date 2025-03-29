export type PagePath = '/' | '/forecasting' | '/reordering' | '/visibility' | '/settings'

export const PAGE_TITLES = {
  '/': 'Overview',
  '/forecasting': 'Forecasting',
  '/reordering': 'Reordering',
  '/visibility': 'Visibility',
  '/settings': 'Settings',
} as const

export function getPageTitle(pathname: string): string {
  return (PAGE_TITLES as Record<string, string>)[pathname] || 'Stockwise'
}
