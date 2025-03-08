export const validate = {
  dateofexpense: "text",
  expenseName: "text",
  Amount: "number",
  remarks: "text",
  vendorExpenses: "vendorExpense",
  contractorExpenses: "contractorExpense"
};

export const initialValues = {
  dateofexpense: "",
  Amount: "",
  expenseName: "",
  remarks: "",
  vendorExpenses: [{ client: "", vendor: "", amount: "", note: "" }],
  contractorExpenses: [{ client: "", contractor: "", amount: "", note: "" }],
};
