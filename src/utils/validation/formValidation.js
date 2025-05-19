import { object, string, number, array, ref } from "yup";

export function validateForm(formObject) {
  const validator = {
    name: string()
      .min(2, "Too Short!")
      .max(70, "Too Long!")
      .required("This field is required"),
    number: number().required("This field is required!").positive('This should be a positive integer').integer(),
    phnumber: string().required("This field is required!").min(9, "10 digit should be there").max(13, "Invalid Number"),
    email: string().email("Invalid email").required("Email is required!"),
    text: string()
      .min(2, "Too Short!")
      .max(70, "Too Long!")
      .required("This field is required!"),
    password: string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),

    confirmPassword: string()
      .oneOf([ref('password'), null], 'Passwords must match')
      .required('Confirm Password is required'),
  };

  let validatorSchema = {};

  for (const key in formObject) {
    for (const field in validator) {
      if (field == formObject[key]) {
        validatorSchema[key] = validator[field]
      }
    }
  }
  let validation = object().shape(validatorSchema);

  return validation;
}


