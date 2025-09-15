// import SearchInput from "@/components/searchInput/searchInput";
// import PopupLayout from "@/layout/common/popupLayout";
// import FormLayout from "@/layout/formLayout/formLayout";
// import { ErrorMessage, Field, Form } from "formik";
// import { Link } from "react-router-dom";
// import { initialValues, validate } from "./fields";
// import useFormSubmit from "@/hooks/useFormSubmit";
// import SelectOption from "@/components/SelectOption/SelectOption";

// function InstallmentFormWithField({ values, resetFn }) {

//   return (
//     <Form>
//       <div className="grid gtc-3 gap-10">
//         <SearchInput
//           Name="project_id"
//           Label={"project"}
//           Entity="project"
//           SetDisplayKey={{ id: "pro_ref_no", name: "pro_name" }}
//           SetFKey={{ col_project_id: "pro_ref_no" }}
//           errorKey={"col_project_id"}
//         />
//         <div className="field">
//           <SelectOption
//             Name="col_project_phase"
//             Label={"Phase"}
//             keyValue={"phase_name"}
//           />
//         </div>
//         <div className="field">
//           <p className="title">Date</p>
//           <Field type="date" name="col_date" id="" />
//         </div>
//         <div className="field">
//           <p className="title">Amount</p>
//           <Field type="number" name="col_amount" id="" />
//           <ErrorMessage name={"col_amount"} className="err" component="span" />
//         </div>
//         <div className="field">
//           <p className="title">Remarks</p>
//           <Field type="text" name="col_remark" id="" />
//         </div>
//         <div className="field">
//           <p className="title">Mode of Payment</p>
//           <div className="flex f-wrap gap-10">
//             <Field as="select" name="col_mode">
//               <option value="" disabled>
//                 --- Select method ---
//               </option>
//               <option value="UPI">UPI</option>
//               <option value="Cash">Cash</option>
//               <option value="Bank Transfer">Bank Transfer</option>
//               <option value="Net banking">Net banking</option>
//             </Field>
//             <ErrorMessage name={"col_mode"} className="err" component="span" />
//           </div>
//         </div>
//       </div>

//       <div className="action-btn flex align-center gap-10">
//         <button type="submit" className="btn-success flex-1">
//           Update
//         </button>
//         <button type="button" className="btn-warning flex-1" onClick={resetFn}>
//           Cancel
//         </button>
//       </div>
//     </Form>
//   );
// }

// function InstallmentForm() {
//   const [submithandler, initialSchema, validateSchema, isReturn] =
//     useFormSubmit(initialValues, validate, "col_id", "collection");

//   function addInstallment(values) {
//     console.log(values);
//     alert(JSON.stringify(values));
//   }

//   return (
//     <PopupLayout>
//       <div className="add-installment-popup blur">
//         <div className="form">
//           <h2>Add Installment</h2>
//           <Link to={`/admin/finance`}>
//             <button type="button" className="btn-warning close">
//               Close
//             </button>
//           </Link>
//           <hr />

//           <FormLayout
//             MainForm={InstallmentFormWithField}
//             initialValues={initialSchema}
//             validationSchema={validateSchema}
//             formHandler={submithandler}
//             isReturn={isReturn}
//           />
//         </div>
//       </div>
//     </PopupLayout>
//   );
// }

// export default InstallmentForm;



import SearchInput from "@/components/searchInput/searchInput";
import PopupLayout from "@/layout/common/popupLayout";
import FormLayout from "@/layout/formLayout/formLayout";
import { ErrorMessage, Field, Form } from "formik";
import { Link } from "react-router-dom";
import { initialValues, validate } from "./fields";
import useFormSubmit from "@/hooks/useFormSubmit";
import SelectOption from "@/components/SelectOption/SelectOption";
import styles from "@/forms/form.module.css";

function InstallmentFormWithField({ values, resetFn }) {

  return (
    <Form>
      <div className={styles.formGrid}>
        {/* Project Selection */}
        <div className={styles.fieldGroup}>
          <SearchInput
            Name="project_id"
            Label={"Project"}
            Entity="project"
            SetDisplayKey={{ id: "pro_ref_no", name: "pro_name" }}
            SetFKey={{ col_project_id: "pro_ref_no" }}
            errorKey={"col_project_id"}
          />
        </div>

        {/* Phase Selection */}
        <div className={`field ${styles.fieldGroup}`}>         
          <SelectOption
            Name="col_project_phase"
            Label={"Phase"}
            keyValue={"phase_name"}
          />
        </div>

        {/* Date Field */}
        <div className={`field ${styles.fieldGroup}`}>
          <label className={`${styles.fieldLabel} ${styles.required}`} htmlFor="col_date">
            Date
          </label>
          <Field 
            type="date" 
            name="col_date" 
            id="col_date"
            className={styles.formInput}
          />
        </div>

        {/* Amount Field */}
        <div className={`field ${styles.fieldGroup}`}>
          <label className={`${styles.fieldLabel} ${styles.required}`} htmlFor="col_amount">
            Amount
          </label>
          <div className={styles.fieldGroup}>
            <Field 
              type="number" 
              name="col_amount" 
              id="col_amount"
              className={styles.formInput}
              placeholder="Enter amount..."
            />
            <ErrorMessage 
              name={"col_amount"} 
              className={`err ${styles.errorMessage}`} 
              component="div" 
            />
          </div>
        </div>

        {/* Remarks Field */}
        <div className={`field ${styles.fieldGroup}`}>
          <label className={styles.fieldLabel} htmlFor="col_remark">
            Remarks
          </label>
          <Field 
            type="text" 
            name="col_remark" 
            id="col_remark"
            className={styles.formInput}
            placeholder="Add remarks (optional)..."
          />
        </div>

        {/* Mode of Payment */}
        <div className={`field ${styles.fieldGroup}`}>
          <label className={`${styles.fieldLabel} ${styles.required}`} htmlFor="col_mode">
            Mode of Payment
          </label>
          <div className={styles.paymentMethodGroup}>
            <Field 
              as="select" 
              name="col_mode"
              id="col_mode"
              className={styles.formSelect}
            >
              <option value="" disabled>
                Select payment method
              </option>
              <option value="UPI">UPI</option>
              <option value="Cash">Cash</option>
              <option value="Bank Transfer">Bank Transfer</option>
              <option value="Net banking">Net Banking</option>
            </Field>
            <ErrorMessage 
              name={"col_mode"} 
              className={`err ${styles.errorMessage}`} 
              component="div" 
            />
          </div>
        </div>
      </div>

      <div className={`action-btn ${styles.formActions}`}>
        <button type="submit" className={`btn-success ${styles.primaryButton}`}>         
          Update Installment
        </button>
        <button 
          type="button" 
          className={`btn-warning ${styles.secondaryButton}`} 
          onClick={resetFn}
        >
          Cancel
        </button>
      </div>
    </Form>
  );
}

function InstallmentForm() {
  const [submithandler, initialSchema, validateSchema, isReturn] =
    useFormSubmit(initialValues, validate, "col_id", "collection");

  function addInstallment(values) {
    console.log(values);
    alert(JSON.stringify(values));
  }

  return (
    <PopupLayout>
      <div className={`add-installment-popup blur ${styles.formContainer}`}>
        {/* Modern Header */}
        <div className={styles.formHeader}>
          <h2 className={styles.formTitle}>Add New Installment</h2>
          <p className={styles.formSubtitle}>Record a new payment installment for the project</p>
          <Link to={`/admin/finance`} className={styles.closeButton}>
            ✕ Close
          </Link>
        </div>

        {/* Form Body */}
        <div className={`form ${styles.formBody}`}>
          <FormLayout
            MainForm={InstallmentFormWithField}
            initialValues={initialSchema}
            validationSchema={validateSchema}
            formHandler={submithandler}
            isReturn={isReturn}
          />
        </div>
      </div>
    </PopupLayout>
  );
}

export default InstallmentForm;
