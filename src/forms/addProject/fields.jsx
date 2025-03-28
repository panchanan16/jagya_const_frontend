export const initialValues = {
  client_name: "",
  client_contact: "",
  client_alt_contact: "",
  client_email: "",
  client_address: "",
  others: "",
  pro_ref_no: "",
  pro_client_r_id: "",
  pro_name: "",
  pro_housetype: "",
  pro_sitedesc: "",
  pro_duration: "",
  pro_totalcost: "",
  pro_advancepayment:"",
};

export const validate = {
  pro_client_r_id: "number",
  pro_name: "name",
  pro_totalcost: "number",
  pro_advancepayment: "number",
  pro_housetype: "name",
  pro_sitedesc: "text",
  pro_duration: "name",
};
