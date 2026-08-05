export interface User {
  id: string
  email: string
  name: string
  avatar?: string
  role: 'user' | 'admin'
  createdAt: string
  updatedAt: string
}

export interface UserPreferences {
  theme: 'light' | 'dark' | 'system'
  notifications: boolean
}
