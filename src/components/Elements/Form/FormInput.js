import React from "react"
import classNames from "classnames"
import { Field, ErrorMessage, useField } from "formik"

/**
 ** Input field with label and error message.
 ** Supported parameters:
 **
 ** fieldProps: {
 **               'name': String,
 **               'placeholder': String,
 **               'label': String,
 **               'type': String,
 **               'onChange': Function,
 **               ...props compatible in Field Component of Formik
 **             }
 **/
const FormInput = fieldProps => {
  let maxLength = fieldProps.maxLength
  if (!maxLength) maxLength = 50

  //* Function that prevents alpha and symbols
  //* if the fieldProps.type is number.
  //* This also prevents the user to input characters more than
  //* fieldProps.max (if defined).
  const handleOnKeyPress = event => {
    const isTypeNumber = fieldProps.type === "number"

    if (!!fieldProps.isNumeric && isNaN(event.key)) {
      event.preventDefault()
    } else if (isTypeNumber) {
      if (
        (event.key !== "." && isNaN(event.key)) ||
        (maxLength && event.target.value.toString().length >= maxLength)
      )
        event.preventDefault()
    }
    if (fieldProps.onKeyPress) fieldProps.onKeyPress(event)
  }

  // We're accessing the useField props below so we can validate forms inline, on touch
  // Source: https://jaredpalmer.com/formik/docs/api/useField#usefieldname-string-fieldattributes-fieldinputprops-fieldmetaprops-fieldhelperprops
  const [, meta] = useField(fieldProps.name)
  return (
    <div
      className={classNames(
        "field",
        fieldProps?.className?.container || "mb-2"
      )}
    >
      <label
        className={classNames(
          "label has-text-weight-normal",
          fieldProps?.className?.label || ""
        )}
      >
        {fieldProps.label}
        {!fieldProps.isRequired && !fieldProps.hideOptional && (
          <span className="has-text-grey is-italic"> (Optional)</span>
        )}
        {!!fieldProps.helper && (
          <span className="help has-text-weight-normal">
            {fieldProps.helper}
          </span>
        )}
      </label>
      <div
        className={classNames("control", {
          "is-loading": fieldProps.isLoading,
          "has-icons-left": fieldProps.icons?.left,
          "has-icons-right": fieldProps.icons?.right,
        })}
      >
        {fieldProps.icons?.left}
        <Field
          {...fieldProps}
          className={classNames(
            "input has-text-ubuntu",
            {
              "is-success":
                meta.touched && !meta.error && fieldProps.isRequired,
            },
            {
              "is-danger": meta.touched && meta.error,
            },
            fieldProps?.className?.input || ""
          )}
          onKeyPress={handleOnKeyPress}
        />
        {fieldProps.icons?.right}
      </div>
      <p className="help is-danger">
        <ErrorMessage name={fieldProps.name} />
      </p>
    </div>
  )
}

export default React.memo(FormInput)
