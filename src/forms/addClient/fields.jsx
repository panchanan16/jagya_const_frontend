export const initialValues = {
  client_name: "",
  client_email: "",
  client_contact: "",
  client_alt_contact: "",
  client_address: "",
  client_ref_no: "",
};

export const validate = {
  client_name: "name",
  client_email: "email",
  client_contact: "phnumber",
  client_alt_contact: "phnumber",
  client_address: "text",
  client_ref_no: "name",
};
