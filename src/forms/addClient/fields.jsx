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
  client_ref_no: "name",
  client_details: "text",
};


// return {
//   client_id: id ? id : "", 
//   client_name: client && client.length > 0 ? client[0].client_name : "",
//   client_email: client && client.length > 0 ? client[0].client_email : "",
//   client_contact: client && client.length > 0 ? client[0].client_contact : "",
//   client_alt_contact: client && client.length > 0 ? client[0].client_alt_contact : "",
//   client_address: client && client.length > 0 ? client[0].client_address : "",
//   client_ref_no: client && client.length > 0 ? client[0].client_ref_no : "",
// };
