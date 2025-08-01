import CarsTable from "./CarsTable"

const CarsList = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">إدارة السيارات</h1>
      </div>
      <CarsTable />
    </div>
  )
}

export default CarsList
