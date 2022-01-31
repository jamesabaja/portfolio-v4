import * as Yup from "yup"

export const validationSchema = Yup.object().shape({
  password: Yup.string()
    .required("This field is required")
    .oneOf([Yup.ref("confirmPassword"), null], "Incorrect password"),
})
