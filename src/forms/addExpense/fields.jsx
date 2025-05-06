export const validate = {
  exp_date: "text",
  exp_name: "text",
  exp_amount: "number",
  exp_remark: "text",
  vendor: "vendor",
  contractor: "contractor",
};

export const initialValues = {
  exp_date: "",
  exp_amount: "",
  exp_name: "",
  exp_remark: "",
  vendor: [
    {
      clientname: "",       
      pay_id: "",
      pay_project_id: "",
      pay_vendor_id: "",
      pay_amount: "",
      pay_note: "",
    },
  ],
  contractor: [
    {
      clientname : "",
      pay_id: "",
      pay_project_id: "",
      pay_con_id: "",
      pay_amount: "",
      pay_note: "",
    },
  ],
};
