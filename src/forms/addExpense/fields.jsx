export const validate = {
  dateofexpense: "text",
  expenseName: "text",
  Amount: "number",
  remarks: "text",
  expenseItems: "arrayItems"
};

export const initialValues = {
  dateofexpense: "",
  Amount: "",
  expenseName: "",
  remarks: "",
  expenseItems: [{ client: "", amount: "", note: "" }],
};
