import { createSlice, createAsyncThunk, type PayloadAction } from "@reduxjs/toolkit"
import { apiGetCars } from "@/services/CarsService"
import type { Car, GetCarsParams } from "@/@types/cars"

export const SLICE_NAME = "carsListSlice"

interface TableData {
  pageIndex: number
  limit: number
  total: number
  query: string
  sort: {
    order: "" | "asc" | "desc"
    key: string
  }
  clientFilter: string
}

export interface CarsListState {
  carList: Car[]
  loading: boolean
  tableData: TableData
}

const initialState: CarsListState = {
  carList: [],
  loading: false,
  tableData: {
    pageIndex: 1,
    limit: 10,
    total: 0,
    query: "",
    sort: {
      order: "",
      key: "",
    },
    clientFilter: "",
  },
}

export const getCars = createAsyncThunk(`${SLICE_NAME}/getCars`, async (params: GetCarsParams) => {
  const response = await apiGetCars(params)
  return response.data
})

const carsListSlice = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers: {
    setTableData: (state, action: PayloadAction<Partial<TableData>>) => {
      state.tableData = {
        ...state.tableData,
        ...action.payload,
      }
    },
    resetFilters: (state) => {
      state.tableData = {
        ...initialState.tableData,
        pageIndex: 1,
        limit: state.tableData.limit,
        total: state.tableData.total,
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCars.pending, (state) => {
        state.loading = true
      })
      .addCase(getCars.fulfilled, (state, action) => {
        state.carList = action.payload.data.cars
        state.tableData.total = action.payload.data.pagination.totalCars
        state.loading = false
      })
      .addCase(getCars.rejected, (state) => {
        state.loading = false
      })
  },
})

export const { setTableData, resetFilters } = carsListSlice.actions
export default carsListSlice.reducer
