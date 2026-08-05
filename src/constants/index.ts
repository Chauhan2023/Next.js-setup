export const PAGINATION = {
  DEFAULT_PAGE_SIZE: 10,
  PAGE_SIZES: [10, 20, 50, 100],
} as const

export const DATE_FORMAT = {
  DEFAULT: 'MMM dd, yyyy',
  WITH_TIME: 'MMM dd, yyyy HH:mm',
  API: 'yyyy-MM-dd',
} as const

export const QUERY_KEYS = {
  USERS: 'users',
  USER: 'user',
  PROFILE: 'profile',
  SETTINGS: 'settings',
} as const

export const STORAGE_KEYS = {
  ACCESS_TOKEN: 'access_token',
  REFRESH_TOKEN: 'refresh_token',
  THEME: 'theme',
} as const
