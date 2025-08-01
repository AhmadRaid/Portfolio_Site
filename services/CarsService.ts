import ApiService from "./ApiService"
import type { GetCarsParams, GetCarsResponse } from "@/@types/cars"

export async function apiGetCars(params: GetCarsParams): Promise<GetCarsResponse> {
  return ApiService.fetchData<GetCarsResponse>({
    url: "/cars",
    method: "get",
    params,
  })
}

export async function apiCreateCar(data: any) {
  return ApiService.fetchData({
    url: "/cars",
    method: "post",
    data,
  })
}

export async function apiUpdateCar(id: string, data: any) {
  return ApiService.fetchData({
    url: `/cars/${id}`,
    method: "put",
    data,
  })
}

export async function apiDeleteCar(id: string) {
  return ApiService.fetchData({
    url: `/cars/${id}`,
    method: "delete",
  })
}

export async function apiGetCar(id: string) {
  return ApiService.fetchData({
    url: `/cars/${id}`,
    method: "get",
  })
}
