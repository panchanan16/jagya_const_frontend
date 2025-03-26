export const initialValues = {
  client_name: "",
  client_ref_no: "",
  client_contact: "",
  client_alt_contact: "",
  client_address: "",
  client_email: "",
  client_details: "",
};

export const validate = {
  client_name: "name",
  client_email: "email",
  client_contact: "phnumber",
  client_alt_contact: "phnumber",
  client_address: "text",
  client_details: "text",
};

