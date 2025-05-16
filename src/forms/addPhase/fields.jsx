export const initialValues = {
  phase_id: "",
  pro_id: "",
  pro_phase_status: "In Progress",
  pro_phase_deadline: "",
  phase_name: ""
};

export const validate = {
  phase_id: "number",
  pro_phase_status: "text",
  pro_phase_deadline: "text",
};
