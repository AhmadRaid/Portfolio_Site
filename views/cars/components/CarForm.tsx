"use client"

import { forwardRef, useState } from "react"
import { FormContainer } from "@/components/ui/Form"
import Button from "@/components/ui/Button"
import StickyFooter from "@/components/shared/StickyFooter"
import ConfirmDialog from "@/components/shared/ConfirmDialog"
import { Form, Formik, type FormikProps } from "formik"
import { HiOutlineTrash } from "react-icons/hi"
import { AiOutlineSave } from "react-icons/ai"
import cloneDeep from "lodash/cloneDeep"
import * as Yup from "yup"
import CarFields from "./CarFields"

type FormikRef = FormikProps<any>

type InitialData = {
  name: string
  model: string
  year: number | null
  color: string
  plateNumber: string
}

const initialData: InitialData = {
  name: "",
  model: "",
  year: null,
  color: "",
  plateNumber: "",
}

export const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required("اسم السيارة مطلوب")
    .min(2, "يجب أن يكون الاسم على الأقل 2 حروف")
    .max(50, "يجب ألا يتجاوز الاسم 50 حرف"),
  model: Yup.string().max(30, "يجب ألا يتجاوز الموديل 30 حرف"),
  year: Yup.number()
    .nullable()
    .min(1900, "السنة يجب أن تكون أكبر من 1900")
    .max(new Date().getFullYear() + 1, "السنة غير صحيحة"),
  color: Yup.string().max(20, "يجب ألا يتجاوز اللون 20 حرف"),
  plateNumber: Yup.string().max(20, "يجب ألا يتجاوز رقم اللوحة 20 حرف"),
})

type CarsFormProps = {
  initialData?: InitialData
  type: "edit" | "new"
  onDiscard?: () => void
  onDelete?: (callback: any) => void
  onFormSubmit?: (formData: any, setSubmitting: (isSubmitting: boolean) => void) => void
}

const DeleteCarButton = ({ onDelete }: { onDelete: any }) => {
  const [dialogOpen, setDialogOpen] = useState(false)

  const onConfirmDialogOpen = () => {
    setDialogOpen(true)
  }

  const onConfirmDialogClose = () => {
    setDialogOpen(false)
  }

  const handleConfirm = () => {
    onDelete?.(setDialogOpen)
  }

  return (
    <>
      <Button
        className="text-red-600"
        variant="plain"
        size="sm"
        icon={<HiOutlineTrash />}
        type="button"
        onClick={onConfirmDialogOpen}
      >
        حذف
      </Button>
      <ConfirmDialog
        isOpen={dialogOpen}
        type="danger"
        title="حذف السيارة"
        confirmButtonColor="red-600"
        onClose={onConfirmDialogClose}
        onRequestClose={onConfirmDialogClose}
        onCancel={onConfirmDialogClose}
        onConfirm={handleConfirm}
      >
        <p>هل أنت متأكد من حذف هذه السيارة؟</p>
      </ConfirmDialog>
    </>
  )
}

const CarForm = forwardRef<FormikRef, CarsFormProps>((props, ref) => {
  const {
    type,
    initialData = {
      name: "",
      model: "",
      year: null,
      color: "",
      plateNumber: "",
    },
    onFormSubmit,
    onDiscard,
    onDelete,
  } = props

  return (
    <>
      <Formik
        innerRef={ref}
        initialValues={{
          ...initialData,
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          const data = cloneDeep(values)
          console.log("Car Data values:", values)
          onFormSubmit?.(data, setSubmitting)
        }}
      >
        {({ values, touched, errors, isSubmitting }) => {
          return (
            <Form>
              <FormContainer>
                <CarFields touched={touched} errors={errors} values={values} />
                <StickyFooter
                  className="-mx-8 px-8 flex items-center justify-between py-4"
                  stickyClass="border-t bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700"
                >
                  <div>{type === "edit" && <DeleteCarButton onDelete={onDelete as any} />}</div>
                  <div className="md:flex items-center">
                    <Button size="sm" className="ltr:mr-3 rtl:ml-3" type="button" onClick={() => onDiscard?.()}>
                      إلغاء
                    </Button>
                    <Button size="sm" variant="solid" loading={isSubmitting} icon={<AiOutlineSave />} type="submit">
                      {type === "new" ? "إضافة" : "تحديث"}
                    </Button>
                  </div>
                </StickyFooter>
              </FormContainer>
            </Form>
          )
        }}
      </Formik>
    </>
  )
})

CarForm.displayName = "CarForm"

export default CarForm
