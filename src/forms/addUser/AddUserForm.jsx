// import PopupLayout from "@/layout/common/popupLayout";
// import { Form, Field, ErrorMessage } from "formik";
// import FormLayout from "@/layout/formLayout/formLayout";
// import { Link } from "react-router-dom";
// import { initialValues, validate } from "./fields";
// import useFormSubmit from "@/hooks/useFormSubmit";


// function UserFormWithField({ resetFn, isSubmitting }) {
//   return (
//     <Form>
//       <div className="grid gtc-2 gap-10">
//         <div className="field">
//           <p className="title">Name</p>
//           <Field type="text" name="su_name" id="" />
//           <ErrorMessage name="su_name" className="err" component="span" />
//         </div>
//         <div className="field">
//           <p className="title">Contact Number</p>
//           <Field type="number" name="su_contact" id="" />
//           <ErrorMessage
//             name="su_contact"
//             className="err"
//             component="span"
//           />
//         </div>
//         <div className="field">
//           <p className="title">
//             Alternate Number<span>(*optional)</span>
//           </p>
//           <Field type="number" name="su_alt_contact" id="" />
//           <ErrorMessage
//             name="su_alt_contact"
//             className="err"
//             component="span"
//           />
//         </div>
//         <div className="field">
//           <p className="title">
//             Email<span>(*optional)</span>
//           </p>
//           <Field type="email" name="su_email" id="" />
//           <ErrorMessage name="su_email" className="err" component="span" />
//         </div>
//         <div className="field">
//           <p className="title">
//             Address<span>(*optional)</span>
//           </p>
//           <Field type="text" name="su_address" id="" />
//           <ErrorMessage
//             name="su_address"
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

// function AddUserForm() {
//   const [submithandler, initialSchema, validateSchema, isReturn] =
//     useFormSubmit(initialValues, validate, "", {name: 'users', route: "create/super_admin"});

//   function testSubmit(values) {
//     alert(JSON.stringify(values, null));
//   }

//   return (
//     <PopupLayout>
//       <div className="add-clients-prospects blur">
//         <div className="form">
//           <h2>Add a New Admin</h2>
//           <Link to={`/admin/users`}>
//             <button type="button" className="btn-warning close">
//               Close
//             </button>
//           </Link>
//           <hr />
//           <FormLayout
//             MainForm={UserFormWithField}
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

// export default AddUserForm;



import PopupLayout from "@/layout/common/popupLayout";
import { Form, Field, ErrorMessage } from "formik";
import FormLayout from "@/layout/formLayout/formLayout";
import { Link } from "react-router-dom";
import { initialValues, validate } from "./fields";
import useFormSubmit from "@/hooks/useFormSubmit";
import styles from "@/forms/form.module.css";

function UserFormWithField({ resetFn, isSubmitting }) {
  return (
    <Form>
      <div className={styles.formBody}>
        <div className={styles.formGrid}>
          <div className={styles.fieldGroup}>
            <label className={`${styles.fieldLabel} ${styles.required}`}>
              Name
            </label>
            <Field
              type="text"
              name="su_name"
              className={styles.formInput}
              placeholder="Enter name"
            />
            <ErrorMessage
              name="su_name"
              className={styles.errorMessage}
              component="span"
            />
          </div>

          <div className={styles.fieldGroup}>
            <label className={`${styles.fieldLabel} ${styles.required}`}>
              Contact Number
            </label>
            <Field
              type="number"
              name="su_contact"
              className={styles.formInput}
              placeholder="Enter contact number"
            />
            <ErrorMessage
              name="su_contact"
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
              name="su_alt_contact"
              className={styles.formInput}
              placeholder="Enter alternate number"
            />
            <ErrorMessage
              name="su_alt_contact"
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
              name="su_email"
              className={styles.formInput}
              placeholder="Enter email address"
            />
            <ErrorMessage
              name="su_email"
              className={styles.errorMessage}
              component="span"
            />
          </div>

          <div className={styles.fieldGroup}>
            <label className={`${styles.fieldLabel} ${styles.fieldLabelOptional}`}>
              Address
            </label>
            <Field
              type="text"
              name="su_address"
              className={styles.formInput}
              placeholder="Enter address"
            />
            <ErrorMessage
              name="su_address"
              className={styles.errorMessage}
              component="span"
            />
          </div>
        </div>

        <div className={styles.formActions}>
          <button
            type="submit"
            disabled={isSubmitting}
            className={styles.primaryButton}
          >
            Add
          </button>
          <button
            type="button"
            onClick={resetFn}
            className={styles.secondaryButton}
          >
            Cancel
          </button>
        </div>
      </div>
    </Form>
  );
}

function AddUserForm() {
  const [submithandler, initialSchema, validateSchema, isReturn] =
    useFormSubmit(initialValues, validate, "", {
      name: "users",
      route: "create/super_admin",
    });

  function testSubmit(values) {
    alert(JSON.stringify(values, null));
  }

  return (
    <PopupLayout>
      <div className={`add-clients-prospects blur ${styles.formContainer}`}>
        <div className={styles.formHeader}>
          <h2 className={styles.formTitle}>Add a New Admin</h2>
          <Link to={`/admin/users`}>
            <button type="button" className={styles.closeButton}>
              Close
            </button>
          </Link>
        </div>
        <hr className={styles.divider} />
        <FormLayout
          MainForm={UserFormWithField}
          initialValues={initialSchema}
          validationSchema={validateSchema}
          formHandler={submithandler}
          isReturn={isReturn}
        />
      </div>
    </PopupLayout>
  );
}

export default AddUserForm;
