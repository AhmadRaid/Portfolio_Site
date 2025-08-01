"use client"

import { useEffect, useMemo, useRef } from "react"
import { useNavigate } from "react-router-dom"
import DataTable from "@/components/shared/DataTable"
import type { DataTableResetHandle, ColumnDef } from "@/components/shared/DataTable"
import type { Car } from "@/@types/cars"
import { getCars, setTableData, useAppDispatch, useAppSelector } from "../store"
import CarsTableTools from "./CarsTableTools"

const CarsTable = () => {
  const tableRef = useRef<DataTableResetHandle>(null)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const { pageIndex, limit, sort, query, total, clientFilter } = useAppSelector(
    (state) => state.carsListSlice.data.tableData,
  )

  const loading = useAppSelector((state) => state.carsListSlice.data.loading)

  const carList = useAppSelector((state) => state.carsListSlice.data.carList)

  useEffect(() => {
    const params: any = {
      limit,
      offset: (pageIndex - 1) * limit,
      search: query || undefined,
      clientId: clientFilter || undefined,
      sort: sort.order || undefined,
    }
    dispatch(getCars(params))
  }, [pageIndex, limit, sort, query, clientFilter, dispatch])

  const columns: ColumnDef<Car>[] = useMemo(
    () => [
      {
        header: "اسم السيارة",
        accessorKey: "name",
        sortable: false,
      },
      {
        header: "الموديل",
        accessorKey: "model",
        cell: (props) => {
          const model = props.row.original.model
          return <span>{model || "غير محدد"}</span>
        },
        sortable: false,
      },
      {
        header: "السنة",
        accessorKey: "year",
        cell: (props) => {
          const year = props.row.original.year
          return <span>{year || "غير محدد"}</span>
        },
        sortable: false,
      },
      {
        header: "اللون",
        accessorKey: "color",
        cell: (props) => {
          const color = props.row.original.color
          return <span>{color || "غير محدد"}</span>
        },
        sortable: false,
      },
      {
        header: "رقم اللوحة",
        accessorKey: "plateNumber",
        cell: (props) => {
          const plateNumber = props.row.original.plateNumber
          return <span>{plateNumber || "غير محدد"}</span>
        },
        sortable: false,
      },
      {
        header: "تاريخ الإنشاء",
        accessorKey: "createdAt",
        cell: (props) => new Date(props.row.original.createdAt).toLocaleDateString("ar-SA"),
        sortable: true,
      },
    ],
    [],
  )

  return (
    <>
      <CarsTableTools />
      <DataTable
        ref={tableRef}
        columns={columns}
        data={carList}
        loading={loading}
        pagingData={{
          total: total,
          pageIndex: pageIndex,
          pageSize: limit,
        }}
        onPaginationChange={(page) => dispatch(setTableData({ pageIndex: page }))}
        onSelectChange={(value) =>
          dispatch(
            setTableData({
              limit: Number(value),
              pageIndex: 1,
            }),
          )
        }
        onSort={(sort) =>
          dispatch(
            setTableData({
              sort: {
                order: sort.order,
                key: "",
              },
            }),
          )
        }
        onRowClick={(row) => navigate(`/cars/${row.original._id}`)}
      />
    </>
  )
}

export default CarsTable
