export const initialValues = {
  mr_project_id: "",
  mr_project_ref: "",
  mr_phase: "",
  mr_date: "",
  materialItemsData: [
    {
      mr_item_name: "",
      mr_item_quantity: "",
      mr_item_amount: "",
      fd_approval: 0,
      vendor_id: "",
      mr_delivery_status: 0,
    },
  ],
};

//     "mr_project_r_id": 10,
//     "mr_item_name": "Daali",
//     "mr_item_quantity": "50",
//     "mr_item_amount": "1600",
//     "mr_item_date": "2025-04-03",
//     "mr_r_id": null,
//     "vendor_id": null,
//     "fd_approval": 0,
//     "md_approval": 0,
//     "mr_delivery_status": 0

export const validate = {
  mr_project_id: "number",
  mr_phase: "text",
  mr_date: "text",
  vendor_id: ""
};
