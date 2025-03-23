import { object, string, number, array } from "yup";

export function validateForm(formObject) {
  const validator = {
    name: string()
      .min(2, "Too Short!")
      .max(70, "Too Long!")
      .required("This field is required"),
    number: number().required("This field is required!").positive('This should be a positive integer').integer(),
    phnumber: string().required("This field is required!").min(10, "10 digit should be there").max(13, "Invalid Number"),
    email: string().email("Invalid email").required("Email is required!"),
    text: string()
      .min(2, "Too Short!")
      .max(70, "Too Long!")
      .required("This field is required!"),
    vendorExpense: array().of(
      object().shape({
        client: string().min(2, 'too short').required('This field is required!'),
        vendor: string().min(2, 'too short').required('This field is required!'),
        amount: number().required("Amount is required!").positive('This should be a positive integer').integer(),
        note: string().min(3, "Too short !").required("This field is required!")
      })
    ),
    contractorExpense: array().of(
      object().shape({
        client: string().min(2, 'too short').required('This field is required!'),
        contractor: string().min(2, 'too short').required('This field is required!'),
        amount: number().required("Amount is required!").positive('This should be a positive integer').integer(),
        note: string().min(3, "Too short !").required("This field is required!")
      })
    )
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


