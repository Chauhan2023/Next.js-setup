import { api } from '@/lib/axios'
import type { ApiResponse, User } from '@/types'

export interface LoginPayload {
  email: string
  password: string
}

export interface RegisterPayload {
  email: string
  password: string
  name: string
}

export const authService = {
  async login(payload: LoginPayload) {
    const { data } = await api.post<ApiResponse<{ user: User; token: string }>>('/auth/login', payload)
    return data.data
  },

  async register(payload: RegisterPayload) {
    const { data } = await api.post<ApiResponse<{ user: User; token: string }>>('/auth/register', payload)
    return data.data
  },

  async logout() {
    await api.post('/auth/logout')
  },

  async getProfile() {
    const { data } = await api.get<ApiResponse<User>>('/auth/profile')
    return data.data
  },

  async refreshToken(token: string) {
    const { data } = await api.post<ApiResponse<{ token: string }>>('/auth/refresh', { token })
    return data.data
  },
}
