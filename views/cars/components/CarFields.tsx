"use client"

import AdaptableCard from "@/components/shared/AdaptableCard"
import Input from "@/components/ui/Input"
import { FormItem } from "@/components/ui/Form"
import { Field, type FormikErrors, type FormikTouched } from "formik"
import { Select } from "@/components/ui"

type FormFieldsName = {
  name: string
  model: string
  year: number
  color: string
  plateNumber: string
}

type CarFieldsProps = {
  touched: FormikTouched<FormFieldsName>
  errors: FormikErrors<FormFieldsName>
  values: any
}

const CarFields = (props: CarFieldsProps) => {
  const { values, touched, errors } = props

  const currentYear = new Date().getFullYear()
  const years = Array.from({ length: 50 }, (_, i) => currentYear - i)

  const colors = [
    { label: "أبيض", value: "white" },
    { label: "أسود", value: "black" },
    { label: "أحمر", value: "red" },
    { label: "أزرق", value: "blue" },
    { label: "أخضر", value: "green" },
    { label: "فضي", value: "silver" },
    { label: "رمادي", value: "gray" },
    { label: "بني", value: "brown" },
    { label: "أصفر", value: "yellow" },
  ]

  return (
    <AdaptableCard divider className="mb-3">
      <h3 className="text-lg font-semibold mb-4">معلومات السيارة</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormItem label="اسم السيارة *" invalid={!!errors.name && !!touched.name} errorMessage={errors.name}>
          <Field
            name="name"
            size="sm"
            autoComplete="off"
            type="text"
            placeholder="مثال: تويوتا كامري"
            component={Input}
          />
        </FormItem>

        <FormItem label="الموديل" invalid={!!errors.model && !!touched.model} errorMessage={errors.model}>
          <Field name="model" size="sm" autoComplete="off" type="text" placeholder="مثال: 2024" component={Input} />
        </FormItem>

        <FormItem label="سنة الصنع" invalid={!!errors.year && !!touched.year} errorMessage={errors.year}>
          <Field name="year">
            {({ field, form }: any) => (
              <Select
                size="sm"
                placeholder="اختر السنة"
                options={years.map((year) => ({
                  label: year.toString(),
                  value: year,
                }))}
                value={
                  years.find((year) => year === field.value)
                    ? {
                        label: field.value?.toString(),
                        value: field.value,
                      }
                    : null
                }
                onChange={(option: any) => {
                  form.setFieldValue(field.name, option?.value)
                }}
              />
            )}
          </Field>
        </FormItem>

        <FormItem label="اللون" invalid={!!errors.color && !!touched.color} errorMessage={errors.color}>
          <Field name="color">
            {({ field, form }: any) => (
              <Select
                size="sm"
                placeholder="اختر اللون"
                options={colors}
                value={colors.find((color) => color.value === field.value)}
                onChange={(option: any) => {
                  form.setFieldValue(field.name, option?.value)
                }}
              />
            )}
          </Field>
        </FormItem>

        <FormItem
          label="رقم اللوحة"
          invalid={!!errors.plateNumber && !!touched.plateNumber}
          errorMessage={errors.plateNumber}
          className="md:col-span-2"
        >
          <Field
            name="plateNumber"
            size="sm"
            autoComplete="off"
            type="text"
            placeholder="مثال: أ ب ج 1234"
            component={Input}
          />
        </FormItem>
      </div>
    </AdaptableCard>
  )
}

export default CarFields
