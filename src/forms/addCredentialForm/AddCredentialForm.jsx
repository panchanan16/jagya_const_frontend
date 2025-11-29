// import PopupLayout from "@/layout/common/popupLayout";
// import { Form, Field, ErrorMessage, useFormikContext } from "formik";
// import FormLayout from "@/layout/formLayout/formLayout";
// import { Link, useParams } from "react-router-dom";
// import { initialValues, validate } from "./fields";
// import useFormSubmit from "@/hooks/useFormSubmit";
// import { useEffect } from "react";
// import useRequest from "@/hooks/useRequest";

// function CredentialsFormWithField({ resetFn, isSubmitting }) {
//   const { id } = useParams();
//   const { setFieldValue } = useFormikContext();

//   useEffect(() => {
//     setFieldValue("id", id);
//   }, [id]);
//   return (
//     <Form>
//       <div className="grid gtc-2 gap-10">
//         <div className="field">
//           <p className="title">Username</p>
//           <Field type="text" name="user_id" id="" />
//           <ErrorMessage name="user_id" className="err" component="span" />
//         </div>
//         <div className="field">
//           <p className="title">Password</p>
//           <Field type="password" name="password" id="" />
//           <ErrorMessage name="password" className="err" component="span" />
//         </div>
//         <div className="field">
//           <p className="title">Confirm Password</p>
//           <Field type="password" name="cpassword" id="" />
//           <ErrorMessage name="cpassword" className="err" component="span" />
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

// function AddCredentialForm() {
//   const { id } = useParams();
//   const [submithandler, initialSchema, validateSchema, isReturn] =
//     useFormSubmit(initialValues, validate, "", {
//       name: "users",
//       route: "create/super_admin",
//     });

//   const { makeRequest } = useRequest('super-admin', null, null, null, false);

//   async function testSubmit(values) {
//     // alert(JSON.stringify(values, null));
//     await makeRequest(values, null, 'create/credentials')
//   }

//   return (
//     <PopupLayout>
//       <div className="add-clients-prospects blur">
//         <div className="form">
//           <h2>Add Credentials</h2>
//           <Link to={`/admin/users/${id}`}>
//             <button type="button" className="btn-warning close">
//               Close
//             </button>
//           </Link>
//           <hr />
//           <FormLayout
//             MainForm={CredentialsFormWithField}
//             initialValues={initialSchema}
//             validationSchema={validateSchema}
//             formHandler={testSubmit}
//             isReturn={isReturn}
//           />
//         </div>
//       </div>
//     </PopupLayout>
//   );
// }

// export default AddCredentialForm;



import PopupLayout from "@/layout/common/popupLayout";
import { Form, Field, ErrorMessage, useFormikContext } from "formik";
import FormLayout from "@/layout/formLayout/formLayout";
import { Link, useParams, useSearchParams } from "react-router-dom";
import { initialValues, validate } from "./fields";
import useFormSubmit from "@/hooks/useFormSubmit";
import { useEffect } from "react";
import useRequest from "@/hooks/useRequest";
import styles from "@/forms/form.module.css"; // Import the CSS module

function CredentialsFormWithField({ resetFn, isSubmitting }) {
  const { id } = useParams();
  const { setFieldValue } = useFormikContext();
  const [searchParams] = useSearchParams()

  useEffect(() => {
    setFieldValue("id", id);
    if (searchParams.get('user')) {
      setFieldValue('user_id', searchParams.get('user'))
    }
  }, [id, setFieldValue]);

  return (
    <Form>
      <div className={styles.formGrid}>
        <div className={styles.fieldGroup}>
          <label className={`${styles.fieldLabel} ${styles.required}`}>
            Username
          </label>
          <Field
            type="text"
            name="user_id"
            className={styles.formInput}
            placeholder="Enter username"
          />
          <ErrorMessage
            name="user_id"
            className={styles.errorMessage}
            component="span"
          />
        </div>

        <div className={styles.fieldGroup}>
          <label className={`${styles.fieldLabel} ${styles.required}`}>
            Password
          </label>
          <Field
            type="password"
            name="password"
            className={styles.formInput}
            placeholder="Enter password"
          />
          <ErrorMessage
            name="password"
            className={styles.errorMessage}
            component="span"
          />
        </div>

        <div className={styles.fieldGroup}>
          <label className={`${styles.fieldLabel} ${styles.required}`}>
            Confirm Password
          </label>
          <Field
            type="password"
            name="cpassword"
            className={styles.formInput}
            placeholder="Confirm password"
          />
          <ErrorMessage
            name="cpassword"
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
    </Form>
  );
}

function AddCredentialForm() {
  const { id } = useParams();
  const [submithandler, initialSchema, validateSchema, isReturn] =
    useFormSubmit(initialValues, validate, "", {
      name: "users",
      route: "create/super_admin",
    });

  const { makeRequest } = useRequest('finance', null, null, null, false);

  async function testSubmit(values) {
    console.log(values)
    await makeRequest(values, null, 'create/credentials');
  }

  return (
    <PopupLayout>
      <div className={`add-clients-prospects blur ${styles.formContainer}`}>       
          <div className={styles.formHeader}>
            <h2 className={styles.formTitle}>Add Credentials</h2>
            <Link to={`/admin/users/${id}`}>
              <button type="button" className={styles.closeButton}>
                Close
              </button>
            </Link>
          </div>

          <hr className={styles.divider} />

          <div className={styles.formBody}>
            <FormLayout
              MainForm={CredentialsFormWithField}
              initialValues={initialSchema}
              validationSchema={validateSchema}
              formHandler={testSubmit}
              isReturn={isReturn}
            />
          </div>
        </div>
    </PopupLayout>
  );
}

export default AddCredentialForm;
