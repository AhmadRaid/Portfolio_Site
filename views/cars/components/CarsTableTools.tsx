"use client"

import { useRef } from "react"
import { HiOutlinePlusCircle, HiOutlineSearch } from "react-icons/hi"
import { Button, Input } from "@/components/ui"
import { useNavigate } from "react-router-dom"
import { setTableData, useAppDispatch, useAppSelector } from "../store"
import debounce from "lodash/debounce"

const CarsTableTools = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const { query } = useAppSelector((state) => state.carsListSlice.data.tableData)

  const debounceFn = debounce((val: string) => {
    dispatch(setTableData({ query: val, pageIndex: 1 }))
  }, 500)

  const handleInputChange = (val: string) => {
    debounceFn(val)
  }

  const handleAddCar = () => {
    navigate("/cars/new")
  }

  return (
    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
      <div className="flex items-center gap-2 mb-4 lg:mb-0">
        <Input
          ref={useRef<HTMLInputElement>(null)}
          size="sm"
          placeholder="البحث في السيارات..."
          prefix={<HiOutlineSearch className="text-lg" />}
          onChange={(e) => handleInputChange(e.target.value)}
        />
      </div>
      <div className="flex items-center gap-2">
        <Button size="sm" variant="solid" icon={<HiOutlinePlusCircle />} onClick={handleAddCar}>
          إضافة سيارة جديدة
        </Button>
      </div>
    </div>
  )
}

export default CarsTableTools
