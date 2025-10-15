// import PopupLayout from "@/layout/common/popupLayout";
// import FormLayout from "@/layout/formLayout/formLayout";
// import { ErrorMessage, Field, Form } from "formik";
// import { initialValues, validate } from "./fields";
// import { Link, redirect, useNavigate } from "react-router-dom";
// import useFormSubmit from "@/hooks/useFormSubmit";

// function VendorFormWithField({ resetFn }) {
//   return (
//     <Form>
//       <div className="grid gtc-2 gap-10">
//         <div className="field">
//           <p className="title">Name</p>
//           <Field type="text" name="vendor_name" id="" />
//           <ErrorMessage name="vendor_name" className="err" component="span" />
//         </div>
//         <div className="field">
//           <p className="title">Contact Number</p>
//           <Field type="number" name="vendor_contact" id="" />
//           <ErrorMessage
//             name="vendor_contact"
//             className="err"
//             component="span"
//           />
//         </div>
//         <div className="field">
//           <p className="title">
//             Alternate Number<span>(*optional)</span>
//           </p>
//           <Field type="number" name="vendor_alt_contact" id="" />
//           <ErrorMessage
//             name="vendor_alt_contact"
//             className="err"
//             component="span"
//           />
//         </div>
//         <div className="field">
//           <p className="title">
//             Email<span>(*optional)</span>
//           </p>
//           <Field type="email" name="vendor_email" id="" />
//           <ErrorMessage name="vendor_email" className="err" component="span" />
//         </div>
//         <div className="field">
//           <p className="title">Address</p>
//           <Field type="text" name="vendor_address" id="" />
//           <ErrorMessage
//             name="vendor_address"
//             className="err"
//             component="span"
//           />
//         </div>
//       </div>
//       <div className="action-btn flex gap-10">
//         <button type="submit" className="btn-success flex-1">
//           Add
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

// function AddvendorForm() {
//   const [submithandler, initialSchema, validateSchema, isReturn] =
//     useFormSubmit(initialValues, validate, "vendor_id", "vendor");

//   function testSubmit(values) {
//     alert(JSON.stringify(values, null));
//   }

//   return (
//     <PopupLayout>
//       <div className="add-clients-prospects blur">
//         <div className="form">
//           <h2>Add a Vendor</h2>
//           <Link to={`/admin/vendors`}>
//             <button type="button" className="btn-warning close">
//               Close
//             </button>
//           </Link>
//           <hr />
//           <FormLayout
//             MainForm={VendorFormWithField}
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

// export default AddvendorForm;


import PopupLayout from "@/layout/common/popupLayout";
import FormLayout from "@/layout/formLayout/formLayout";
import { ErrorMessage, Field, Form } from "formik";
import { initialValues, validate } from "./fields";
import { Link, redirect, useNavigate } from "react-router-dom";
import useFormSubmit from "@/hooks/useFormSubmit";
import styles from "@/forms/form.module.css";

function VendorFormWithField({ resetFn }) {
  return (
    // <div className={styles.formBody}>
      <Form>
        <div className={`${styles.formGrid} ${styles.formGridTwoColumns}`}>
          <div className={styles.fieldGroup}>
            <label className={`${styles.fieldLabel} ${styles.required}`}>Name</label>
            <Field 
              type="text" 
              name="vendor_name" 
              className={styles.formInput}
            />
            <ErrorMessage 
              name="vendor_name" 
              className={styles.errorMessage} 
              component="span" 
            />
          </div>
          
          <div className={styles.fieldGroup}>
            <label className={`${styles.fieldLabel} ${styles.required}`}>Contact Number</label>
            <Field 
              type="number" 
              name="vendor_contact" 
              className={styles.formInput}
            />
            <ErrorMessage
              name="vendor_contact"
              className={styles.errorMessage}
              component="span"
            />
          </div>
          
          <div className={styles.fieldGroup}>
            <label className={`${styles.fieldLabel} ${styles.fieldLabelOptional}`}>
              Alternate Number
            </label>
            <Field 
              type="number" 
              name="vendor_alt_contact" 
              className={styles.formInput}
            />
            <ErrorMessage
              name="vendor_alt_contact"
              className={styles.errorMessage}
              component="span"
            />
          </div>
          
          <div className={styles.fieldGroup}>
            <label className={`${styles.fieldLabel} ${styles.fieldLabelOptional}`}>
              Email
            </label>
            <Field 
              type="email" 
              name="vendor_email" 
              className={styles.formInput}
            />
            <ErrorMessage 
              name="vendor_email" 
              className={styles.errorMessage} 
              component="span" 
            />
          </div>
          
          <div className={styles.fieldGroup}>
            <label className={`${styles.fieldLabel} ${styles.required}`}>Address</label>
            <Field 
              type="text" 
              name="vendor_address" 
              className={styles.formInput}
            />
            <ErrorMessage
              name="vendor_address"
              className={styles.errorMessage}
              component="span"
            />
          </div>
        </div>
        
        <div className={styles.formActions}>
          <button 
            type="submit" 
            className={`${styles.primaryButton}`}
          >
            Add
          </button>
          <button
            type="button"
            onClick={() => resetFn()}
            className={`${styles.secondaryButton}`}
          >
            Cancel
          </button>
        </div>
      </Form>
    // </div>
  );
}

function AddvendorForm() {
  const [submithandler, initialSchema, validateSchema, isReturn] =
    useFormSubmit(initialValues, validate, "vendor_id", "vendor");

  function testSubmit(values) {
    alert(JSON.stringify(values, null));
  }

  return (
    <PopupLayout>
      <div className={`add-clients-prospects blur ${styles.formContainer}`}>
        <div className={`${styles.formHeader}`}>
          <h2 className={styles.formTitle}>Add a Vendor</h2>
          <Link to={`/admin/vendors`}>
            <button type="button" className={styles.closeButton}>
             ✕ Close
            </button>
          </Link>
        </div>
        
        <hr className={styles.divider} />
        
        <FormLayout
          MainForm={VendorFormWithField}
          initialValues={initialSchema}
          validationSchema={validateSchema}
          formHandler={submithandler}
          isReturn={isReturn}
        />
      </div>
    </PopupLayout>
  );
}

export default AddvendorForm;
