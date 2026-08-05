import { api } from '@/lib/axios'
import type { ApiResponse, PaginatedResponse, User } from '@/types'

export interface GetUsersParams {
  page?: number
  pageSize?: number
  search?: string
  sortBy?: string
  sortOrder?: 'asc' | 'desc'
}

export const userService = {
  async getAll(params?: GetUsersParams) {
    const { data } = await api.get<PaginatedResponse<User>>('/users', { params })
    return data
  },

  async getById(id: string) {
    const { data } = await api.get<ApiResponse<User>>(`/users/${id}`)
    return data.data
  },

  async update(id: string, payload: Partial<User>) {
    const { data } = await api.patch<ApiResponse<User>>(`/users/${id}`, payload)
    return data.data
  },

  async delete(id: string) {
    await api.delete(`/users/${id}`)
  },
}
