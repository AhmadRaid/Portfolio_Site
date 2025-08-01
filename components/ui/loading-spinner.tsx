export function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center py-20" role="status" aria-label="جاري التحميل">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
      <span className="sr-only">جاري التحميل...</span>
    </div>
  )
}
