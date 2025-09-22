// import PopupLayout from "@/layout/common/popupLayout";
// import { Form, Field, ErrorMessage } from "formik";
// import FormLayout from "@/layout/formLayout/formLayout";
// import { Link } from "react-router-dom";
// import { initialValues, validate } from "./fields";
// import useFormSubmit from "@/hooks/useFormSubmit";

// function ClientFormWithField({ resetFn, isSubmitting }) {

//   return (
//     <Form>
//       <div className="grid gtc-2 gap-10">
//         <div className="field">
//           <p className="title">Name</p>
//           <Field type="text" name="client_name" id="" />
//           <ErrorMessage name="client_name" className="err" component="span" />
//         </div>
//         <div className="field">
//           <p className="title">Contact Number</p>
//           <Field type="number" name="client_contact" id="" />
//           <ErrorMessage
//             name="client_contact"
//             className="err"
//             component="span"
//           />
//         </div>
//         <div className="field">
//           <p className="title">
//             Alternate Number<span>(*optional)</span>
//           </p>
//           <Field type="number" name="client_alt_contact" id="" />
//           <ErrorMessage
//             name="client_alt_contact"
//             className="err"
//             component="span"
//           />
//         </div>
//         <div className="field">
//           <p className="title">
//             Email<span>(*optional)</span>
//           </p>
//           <Field type="email" name="client_email" id="" />
//           <ErrorMessage name="client_email" className="err" component="span" />
//         </div>
//         <div className="field">
//           <p className="title">
//             Address<span>(*optional)</span>
//           </p>
//           <Field type="text" name="client_address" id="" />
//           <ErrorMessage
//             name="client_address"
//             className="err"
//             component="span"
//           />
//         </div>
//         <div className="field">
//           <p className="title">
//             Other Details<span>(optional)</span>
//           </p>
//           <Field type="text" name="client_details" id="" />
//           <ErrorMessage
//             name="client_details"
//             className="err"
//             component="span"
//           />
//         </div>
//       </div>
//       <div className="action-btn flex gap-10">
//         <button
//           type="submit"
//           disabled={isSubmitting}
//           className="btn-success flex-1"
//         >
//           Add
//         </button>
//         <button type="button" onClick={resetFn} className="btn-warning flex-1">
//           Cancel
//         </button>
//       </div>
//     </Form>
//   );
// }

// function AddClientForm() {
//   const [submithandler, initialSchema, validateSchema, isReturn] =
//     useFormSubmit(initialValues, validate, "client_id", "client");

//   return (
//     <PopupLayout>
//       <div className="add-clients-prospects blur">
//         <div className="form">
//           <h2>Add a Client</h2>
//           <Link to={`/admin/clients`}>
//             <button type="button" className="btn-warning close">
//               Close
//             </button>
//           </Link>
//           <hr />
//           <FormLayout
//             MainForm={ClientFormWithField}
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

// export default AddClientForm;


import PopupLayout from "@/layout/common/popupLayout";
import { Form, Field, ErrorMessage } from "formik";
import FormLayout from "@/layout/formLayout/formLayout";
import { Link } from "react-router-dom";
import { initialValues, validate } from "./fields";
import useFormSubmit from "@/hooks/useFormSubmit";
import styles from "@/forms/form.module.css";

function ClientFormWithField({ resetFn, isSubmitting }) {

  return (
    <Form>
      {/* Client Information Section */}
      <div className={styles.formSection}>
        <h3 className={styles.sectionTitle}>Client Information</h3>
        <p className={styles.sectionSubtitle}>Enter the client's personal and contact details</p>
        
        <div className={`grid gtc-2 gap-10 ${styles.formGrid} ${styles.formGridTwoColumns}`}>
          {/* Name Field */}
          <div className={`field ${styles.fieldGroup}`}>
            <label className={`title ${styles.fieldLabel} ${styles.required}`} htmlFor="client_name">
              Name
            </label>
            <Field 
              type="text" 
              name="client_name" 
              id="client_name"
              className={styles.formInput}
              placeholder="Enter client's full name"
            />
            <ErrorMessage 
              name="client_name" 
              className={`err ${styles.errorMessage}`} 
              component="div" 
            />
          </div>

          {/* Contact Number Field */}
          <div className={`field ${styles.fieldGroup}`}>
            <label className={`title ${styles.fieldLabel} ${styles.required}`} htmlFor="client_contact">
              Contact Number
            </label>
            <Field 
              type="number" 
              name="client_contact" 
              id="client_contact"
              className={styles.formInput}
              placeholder="Enter primary contact number"
            />
            <ErrorMessage
              name="client_contact"
              className={`err ${styles.errorMessage}`}
              component="div"
            />
          </div>

          {/* Alternate Number Field */}
          <div className={`field ${styles.fieldGroup}`}>
            <label className={`title ${styles.fieldLabel} ${styles.fieldLabelOptional}`} htmlFor="client_alt_contact">
              Alternate Number
            </label>
            <Field 
              type="number" 
              name="client_alt_contact" 
              id="client_alt_contact"
              className={styles.formInput}
              placeholder="Enter alternate contact number"
            />
            <ErrorMessage
              name="client_alt_contact"
              className={`err ${styles.errorMessage}`}
              component="div"
            />
          </div>

          {/* Email Field */}
          <div className={`field ${styles.fieldGroup}`}>
            <label className={`title ${styles.fieldLabel} ${styles.fieldLabelOptional}`} htmlFor="client_email">
              Email
            </label>
            <Field 
              type="email" 
              name="client_email" 
              id="client_email"
              className={styles.formInput}
              placeholder="Enter email address"
            />
            <ErrorMessage 
              name="client_email" 
              className={`err ${styles.errorMessage}`} 
              component="div" 
            />
          </div>

          {/* Address Field */}
          <div className={`field ${styles.fieldGroup}`}>
            <label className={`title ${styles.fieldLabel} ${styles.fieldLabelOptional}`} htmlFor="client_address">
              Address
            </label>
            <Field 
              type="text" 
              name="client_address" 
              id="client_address"
              className={styles.formInput}
              placeholder="Enter client's address"
            />
            <ErrorMessage
              name="client_address"
              className={`err ${styles.errorMessage}`}
              component="div"
            />
          </div>

          {/* Other Details Field */}
          <div className={`field ${styles.fieldGroup}`}>
            <label className={`title ${styles.fieldLabel} ${styles.fieldLabelOptional}`} htmlFor="client_details">
              Other Details
            </label>
            <Field 
              type="text" 
              name="client_details" 
              id="client_details"
              className={styles.formInput}
              placeholder="Any additional information"
            />
            <ErrorMessage
              name="client_details"
              className={`err ${styles.errorMessage}`}
              component="div"
            />
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className={`action-btn flex gap-10 ${styles.formActions}`}>
        <button
          type="submit"
          disabled={isSubmitting}
          className={`btn-success flex-1 ${styles.primaryButton} ${styles.primaryButtonGreen}`}
          style={{ opacity: isSubmitting ? 0.7 : 1 }}
        >
          {isSubmitting ? "Adding..." : "Add Client"}
        </button>
        <button 
          type="button" 
          onClick={resetFn} 
          className={`btn-warning flex-1 ${styles.secondaryButton}`}
        >
          Cancel
        </button>
      </div>
    </Form>
  );
}

function AddClientForm() {
  const [submithandler, initialSchema, validateSchema, isReturn] =
    useFormSubmit(initialValues, validate, "client_id", "client");

  return (
    <PopupLayout>
      <div className={`add-clients-prospects blur ${styles.formContainer}`}>
        {/* Modern Header */}
        <div className={`${styles.formHeader}`}>
          <h2 className={styles.formTitle}>Add New Client</h2>
          <p className={styles.formSubtitle}>Register a new client with contact and personal information</p>
          <Link to={`/admin/clients`} className={styles.closeButton}>
            ✕ Close
          </Link>
        </div>

        {/* Form Body */}
        <div className={`form ${styles.formBody}`}>
          <FormLayout
            MainForm={ClientFormWithField}
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

export default AddClientForm;
