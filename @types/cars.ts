export interface Car {
  _id: string
  name: string
  model?: string
  year?: number
  color?: string
  plateNumber?: string
  clientId?: string
  createdAt: string
  updatedAt: string
}

export interface GetCarsParams {
  limit?: number
  offset?: number
  search?: string
  sort?: "asc" | "desc"
  clientId?: string
}

export interface GetCarsResponse {
  data: {
    cars: Car[]
    pagination: {
      totalCars: number
      currentPage: number
      totalPages: number
      limit: number
    }
  }
  message: string
  success: boolean
}
