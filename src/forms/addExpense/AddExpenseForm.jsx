// import PopupLayout from "@/layout/common/popupLayout";
// import { Link, useNavigate, useParams } from "react-router-dom";
// import ExpenseField from "./expenseField";
// import FormLayout from "@/layout/formLayout/formLayout";
// import { ErrorMessage, Field, FieldArray, Form } from "formik";
// import { initialValues, validate } from "./fields";
// import useFormSubmit from "@/hooks/useFormSubmit";
// import ExpenseSchema from "@/utils/validation/expenseSchema";
// import { useAction } from "@/hooks/useAction";
// import { GET_ONE_EXPENSE } from "@/redux/features/expenseSlice/slice";
// import { useEffect } from "react";
// import usePageRender from "@/hooks/usePageRender";
// import BackButtton from "@/components/BackButton/BackButtton";

// function ExpenseFormWithField({ values, resetFn }) {
//   return (
//     <Form>
//       <div className="grid gtc-2 gap-10">
//         <div class="field">
//           <p class="title">Date: </p>
//           <Field type="date" name="exp_date" />
//           <ErrorMessage name="exp_date" className="err" component="span" />
//         </div>
//         <div class="field">
//           <p class="title">Total Amount: </p>
//           <Field type="number" name="exp_amount" />
//           <ErrorMessage name="exp_amount" className="err" component="span" />
//         </div>

//         <div class="field">
//           <p class="title">Expense Name</p>
//           <Field type="text" name="exp_name" />
//           <ErrorMessage name="exp_name" className="err" component="span" />
//         </div>

//         <div class="field">
//           <p class="title">Remarks: </p>
//           <Field type="text" name="exp_remark" />
//           <ErrorMessage name="exp_remark" className="err" component="span" />
//         </div>
//       </div>

//       <FieldArray name="vendor">
//         {({ remove, push }) => (
//           <div>
//             {values.vendor.map((friend, index) => (
//               <ExpenseField
//                 key={index}
//                 FieldNameList={{
//                   cname: friend.pro_name, // to be display to the user
//                   showname: friend.vendor_name,
//                   client: `vendor[${index}].pay_project_id`,
//                   vendor: `vendor[${index}].pay_vendor_id`,
//                   amount: `vendor[${index}].pay_amount`,
//                   note: `vendor[${index}].pay_note`,
//                 }}
//                 RemoveFn={remove}
//                 Ind={index}
//                 Type={"vendor"}
//                 typeDisplay={{ id: "vendor_id", name: "vendor_name" }}
//               />
//             ))}
//           </div>
//         )}
//       </FieldArray>

//       <FieldArray name="contractor">
//         {({ remove }) => (
//           <div>
//             {values.contractor.map((friend, index) => (
//               <ExpenseField
//                 key={index}
//                 FieldNameList={{
//                   cname: friend.pro_name,
//                   showname: friend.con_name,
//                   client: `contractor[${index}].pay_project_id`,
//                   contractor: `contractor[${index}].pay_con_id`,
//                   amount: `contractor[${index}].pay_amount`,
//                   note: `contractor[${index}].pay_note`,
//                 }}
//                 RemoveFn={remove}
//                 Ind={index}
//                 Type={"contractor"}
//                 typeDisplay={{ id: "con_id", name: "con_name" }}
//               />
//             ))}
//           </div>
//         )}
//       </FieldArray>

//       <div className="action-btn flex">
//         <FieldArray name="vendor">
//           {({ push }) => (
//             <button
//               type="button"
//               className="btn-secondary"
//               onClick={() =>
//                 push({
//                   pay_project_id: "",
//                   pay_vendor_id: "",
//                   pay_amount: "",
//                   pay_note: "",
//                 })
//               }
//             >
//               Add Vendor Expense
//             </button>
//           )}
//         </FieldArray>
//         <FieldArray name="contractor">
//           {({ push }) => (
//             <button
//               type="button"
//               className="btn-secondary"
//               onClick={() =>
//                 push({
//                   pay_project_id: "",
//                   pay_con_id: "",
//                   pay_amount: "",
//                   pay_note: "",
//                 })
//               }
//             >
//               Add Contractor Expense
//             </button>
//           )}
//         </FieldArray>
//       </div>

//       <div class="action-btn flex">
//         <button type="submit" className="btn-success flex-1">
//           Update
//         </button>
//         <button
//           type="button"
//           onClick={() => resetFn()}
//           className="btn-warning flex-1"
//         >
//           Cancel
//         </button>
//       </div>
//     </Form>
//   );
// }

// function AddExpenseForm() {
//   const [submithandler, initialSchema, isReturn] = useFormSubmit(
//     initialValues,
//     validate,
//     "exp_id",
//     { name: "expense", route: "create" }
//   );
//   const { id } = useParams();
//   const { itemData } = usePageRender({
//     entity: "expense",
//     tail: `get_expense_details/${id}`,
//     key: "itemData",
//     itemId: "exp_id",
//   });

//   const expenseEditData = {
//     ...initialSchema,
//     ...itemData,
//   };

//   const addExpense = (values) => {
//     alert(JSON.stringify(values, null, 2));
//     console.log(values);
//   };

//   return (
//     <PopupLayout>
//       <div class="add-expense blur">
//         <div class="form">
//           <h2>Expense Update Form</h2>
//           <BackButtton />
//           <hr />

//           <FormLayout
//             MainForm={ExpenseFormWithField}
//             initialValues={expenseEditData}
//             validationSchema={ExpenseSchema}
//             formHandler={submithandler}
//             isReturn={isReturn}
//           />
//         </div>
//       </div>
//     </PopupLayout>
//   );
// }

// export default AddExpenseForm;

import PopupLayout from "@/layout/common/popupLayout";
import {
  Link,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import ExpenseField from "./expenseField";
import FormLayout from "@/layout/formLayout/formLayout";
import { ErrorMessage, Field, FieldArray, Form } from "formik";
import { initialValues, validate } from "./fields";
import useFormSubmit from "@/hooks/useFormSubmit";
import ExpenseSchema from "@/utils/validation/expenseSchema";
import { useAction } from "@/hooks/useAction";
import { GET_ONE_EXPENSE } from "@/redux/features/expenseSlice/slice";
import usePageRender from "@/hooks/usePageRender";
import BackButtton from "@/components/BackButton/BackButtton";
import styles from "@/forms/form.module.css";

function ExpenseFormWithField({ values, resetFn }) {
  const [searchParam] = useSearchParams();
  return (
    <Form>
      {/* Basic Expense Information */}
      <div className={styles.formSection}>
        <h3 className={styles.sectionTitle}>Expense Details</h3>
        <p className={styles.sectionSubtitle}>
          Enter the basic expense information
        </p>

        <div
          className={`grid gtc-2 gap-10 ${styles.formGrid} ${styles.formGridTwoColumns}`}
        >
          {/* Date Field */}
          <div className={`field ${styles.fieldGroup}`}>
            <label
              className={`title ${styles.fieldLabel} ${styles.required}`}
              htmlFor="exp_date"
            >
              Date
            </label>
            <Field
              type="date"
              name="exp_date"
              id="exp_date"
              className={styles.formInput}
            />
            <ErrorMessage
              name="exp_date"
              className={`err ${styles.errorMessage}`}
              component="div"
            />
          </div>

          {/* Total Amount Field */}
          <div className={`field ${styles.fieldGroup}`}>
            <label
              className={`title ${styles.fieldLabel} ${styles.required}`}
              htmlFor="exp_amount"
            >
              Total Amount
            </label>
            <Field
              type="number"
              name="exp_amount"
              id="exp_amount"
              className={styles.formInput}
              placeholder="Enter total expense amount"
            />
            <ErrorMessage
              name="exp_amount"
              className={`err ${styles.errorMessage}`}
              component="div"
            />
          </div>

          {/* Expense Name Field */}
          <div className={`field ${styles.fieldGroup}`}>
            <label
              className={`title ${styles.fieldLabel} ${styles.required}`}
              htmlFor="exp_name"
            >
              Expense Name
            </label>
            <Field
              type="text"
              name="exp_name"
              id="exp_name"
              className={styles.formInput}
              placeholder="Enter expense name/title"
            />
            <ErrorMessage
              name="exp_name"
              className={`err ${styles.errorMessage}`}
              component="div"
            />
          </div>

          {/* Remarks Field */}
          <div className={`field ${styles.fieldGroup}`}>
            <label
              className={`title ${styles.fieldLabel} ${styles.fieldLabelOptional}`}
              htmlFor="exp_remark"
            >
              Remarks
            </label>
            <Field
              type="text"
              name="exp_remark"
              id="exp_remark"
              className={styles.formInput}
              placeholder="Add any remarks or notes"
            />
            <ErrorMessage
              name="exp_remark"
              className={`err ${styles.errorMessage}`}
              component="div"
            />
          </div>
        </div>
      </div>

      {/* Vendor Expenses Section */}
      <div className={styles.formSection}>
        <h3 className={styles.sectionTitle}>
          Vendor Expenses
          <span
            style={{ fontSize: "14px", fontWeight: "400", color: "#6b7280" }}
          >
            ({values.vendor.length}{" "}
            {values.vendor.length === 1 ? "entry" : "entries"})
          </span>
        </h3>
        <p className={styles.sectionSubtitle}>
          Manage vendor-related expenses for this transaction
        </p>

        <FieldArray name="vendor">
          {({ remove, push }) => (
            <div>
              {values.vendor.map((friend, index) => (
                <div key={index}>
                  <ExpenseField
                    FieldNameList={{
                      cname: friend.pro_name, // to be display to the user
                      showname: friend.vendor_name,
                      client: `vendor[${index}].pay_project_id`,
                      vendor: `vendor[${index}].pay_vendor_id`,
                      amount: `vendor[${index}].pay_amount`,
                      note: `vendor[${index}].pay_note`,
                    }}
                    RemoveFn={remove}
                    Ind={index}
                    Type={"vendor"}
                    typeDisplay={{ id: "vendor_id", name: "vendor_name" }}
                    projectId={searchParam.get("formProject")}
                  />
                </div>
              ))}

              {/* Add Vendor Button */}
              <button
                type="button"
                className={`btn-secondary ${styles.secondaryButton}`}
                onClick={() =>
                  push({
                    pay_project_id: "",
                    pay_vendor_id: "",
                    pay_amount: "",
                    pay_note: "",
                  })
                }
                style={{
                  marginTop: values.vendor.length > 0 ? "12px" : "0",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <span>➕</span>
                Add Vendor Expense
              </button>
            </div>
          )}
        </FieldArray>
      </div>

      {/* Contractor Expenses Section */}
      <div className={styles.formSection}>
        <h3 className={styles.sectionTitle}>
          Contractor Expenses
          <span
            style={{ fontSize: "14px", fontWeight: "400", color: "#6b7280" }}
          >
            ({values.contractor.length}{" "}
            {values.contractor.length === 1 ? "entry" : "entries"})
          </span>
        </h3>
        <p className={styles.sectionSubtitle}>
          Manage contractor-related expenses for this transaction
        </p>

        <FieldArray name="contractor">
          {({ remove, push }) => (
            <div>
              {values.contractor.map((friend, index) => (
                <div key={index} style={{ marginBottom: "16px" }}>
                  <ExpenseField
                    FieldNameList={{
                      cname: friend.pro_name,
                      showname: friend.con_name,
                      client: `contractor[${index}].pay_project_id`,
                      contractor: `contractor[${index}].pay_con_id`,
                      amount: `contractor[${index}].pay_amount`,
                      note: `contractor[${index}].pay_note`,
                    }}
                    RemoveFn={remove}
                    Ind={index}
                    Type={"contractor"}
                    typeDisplay={{ id: "con_id", name: "con_name" }}
                    projectId={searchParam.get("formProject")}
                  />
                </div>
              ))}

              {/* Add Contractor Button */}
              <button
                type="button"
                className={`btn-secondary ${styles.secondaryButton}`}
                onClick={() =>
                  push({
                    pay_project_id: "",
                    pay_con_id: "",
                    pay_amount: "",
                    pay_note: "",
                  })
                }
                style={{
                  marginTop: values.contractor.length > 0 ? "12px" : "0",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <span>🔨</span>
                Add Contractor Expense
              </button>
            </div>
          )}
        </FieldArray>
      </div>

      {/* Action Buttons */}
      <div className={`action-btn flex ${styles.formActions}`}>
        <button
          type="submit"
          className={`btn-success flex-1 ${styles.primaryButton} ${styles.primaryButtonGreen}`}
        >
          Update Expense
        </button>
        <button
          type="button"
          onClick={() => resetFn()}
          className={`btn-warning flex-1 ${styles.secondaryButton}`}
        >
          Cancel
        </button>
      </div>
    </Form>
  );
}

function AddExpenseForm() {
  const [submithandler, initialSchema, isReturn] = useFormSubmit(
    initialValues,
    validate,
    "exp_id",
    { name: "expense", route: "create" }
  );
  const { id } = useParams();
  const { itemData } = usePageRender({
    entity: "expense",
    tail: `get_expense_details/${id}`,
    key: "itemData",
    itemId: "exp_id",
  });

  const expenseEditData = {
    ...initialSchema,
    ...itemData,
  };

  const addExpense = (values) => {
    alert(JSON.stringify(values, null, 2));
    console.log(values);
  };

  return (
    <PopupLayout>
      <div
        className={`add-expense blur ${styles.formContainer} ${styles.formContainerLarge}`}
      >
        {/* Modern Header */}
        <div className={`${styles.formHeader}`}>
          <h2 className={styles.formTitle}>Expense Update Form</h2>
          <p className={styles.formSubtitle}>
            Update expense details including vendor and contractor payments
          </p>
          <BackButtton />
        </div>

        {/* Form Body */}
        <div className={`form ${styles.formBody}`}>
          <FormLayout
            MainForm={ExpenseFormWithField}
            initialValues={expenseEditData}
            validationSchema={ExpenseSchema}
            formHandler={submithandler}
            isReturn={isReturn}
          />
        </div>
      </div>
    </PopupLayout>
  );
}

export default AddExpenseForm;
