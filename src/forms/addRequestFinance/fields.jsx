export const initialValues = {
    mr_project_id: "",
    mr_project_ref: "",
    mr_phase: "",
    mr_date: "",
    materialItemsData: [{ mr_item_name: "", mr_item_quantity: "", mr_item_amount: "", fd_approval: "" }],
  };
  
  export const validate = {
    mr_project_id: "number",
    mr_phase: "text",
    mr_date: "text",
  };
  