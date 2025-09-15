// import useLogin from "@/hooks/useLogin";
// import FormLayout from "@/layout/formLayout/formLayout";
// import { validateForm } from "@/utils/validation/formValidation";
// import { ErrorMessage, Field, Form } from "formik";
// import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// const initialValues = {
//   login_type: "super-admin",
//   user_id: "",
//   password: "",
// };

// const validate = {
//   user_id: "name",
//   password: "text",
// };

// function AdminLoginFormWithField({ errors, isSubmitting }) {
//   return (
//     <Form>
//       <span style={{ color: "red", fontSize: "13px" }}>
//         {errors && errors.message}
//       </span>
//       <div class="field">
//         <label htmlFor="your_name">Login As</label>
//         <Field
//           as="select"
//           name="login_type"
//           id="login_type"
//           className="house-type"
//         >
//           <option value="super-admin">Superadmin</option>
//           <option value="finance">Finance Department</option>
//           <option value="branch">Branch Login</option>
//           <option value="superviser">Superviser</option>
//         </Field>
//         <ErrorMessage name="user_id" className="err" component="span" />
//       </div>
//       <div class="field">
//         <label htmlFor="your_name">Email Address</label>
//         <Field type="text" name="user_id" id="user_id" />
//         <ErrorMessage name="user_id" className="err" component="span" />
//       </div>
//       <div class="field">
//         <label htmlFor="your_pass">Password</label>
//         <Field type="text" name="password" id="password" />
//         <ErrorMessage name="password" className="err" component="span" />
//         <i class="uil uil-eye-slash" id="eye"></i>
//       </div>
//       <div class="field field-btn">
//         <button type="submit" name="signin" id="signin" className="btn-primary">
//           {isSubmitting ? "Wait for a while..." : "Log In"}
//         </button>
//       </div>
//     </Form>
//   );
// }

// function AdminLoginForm() {
//   const validateSchema = validateForm(validate);
//   const navigate = useNavigate();
//   const { stateItem, LoginUser } = useLogin("super-admin", "super_admin");

//   useEffect(() => {
//     stateItem.isLoggedIn && navigate("/admin/projects");
//   }, [stateItem.isLoggedIn]);

//   async function testSubmit(values) {
//     LoginUser(values);
//   }

//   return (
//     <>
//       <FormLayout
//         MainForm={AdminLoginFormWithField}
//         initialValues={initialValues}
//         validationSchema={validateSchema}
//         formHandler={testSubmit}
//         isReturn={true}
//         loading={stateItem?.loading}
//         isError={stateItem.error}
//       />
//     </>
//   );
// }

// export default AdminLoginForm;



import useLogin from "@/hooks/useLogin";
import FormLayout from "@/layout/formLayout/formLayout";
import { validateForm } from "@/utils/validation/formValidation";
import { ErrorMessage, Field, Form } from "formik";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./AdminLoginForm.module.css";

const initialValues = {
  login_type: "super-admin",
  user_id: "",
  password: "",
};

const validate = {
  user_id: "name",
  password: "text",
};

function AdminLoginFormWithField({ errors, isSubmitting }) {
  return (
    <div className={styles.loginForm}>
      <Form>
        {errors && errors.message && (
          <span className={styles.errorMessage}>
            {errors.message}
          </span>
        )}
        
        <div className={styles.field}>
          <label htmlFor="login_type">Login As</label>
          <Field
            as="select"
            name="login_type"
            id="login_type"
            className={styles.houseType}
          >
            <option value="super-admin">Superadmin</option>
            <option value="finance">Finance Department</option>
            <option value="branch">Branch Login</option>
            <option value="superviser">Superviser</option>
          </Field>
        </div>

        <div className={styles.field}>
          <label htmlFor="user_id">Email Address</label>
          <Field type="text" name="user_id" id="user_id" />
          <ErrorMessage name="user_id" className={styles.err} component="span" />
        </div>

        <div className={`${styles.field} ${styles.passwordField}`}>
          <label htmlFor="password">Password</label>
          <Field type="text" name="password" id="password" />
          <ErrorMessage name="password" className={styles.err} component="span" />
          <i className={`uil uil-eye-slash ${styles.eyeIcon}`} id="eye"></i>
        </div>

        <div className={`${styles.field} ${styles.fieldBtn}`}>
          <button 
            type="submit" 
            name="signin" 
            id="signin" 
            className={styles.btnPrimary}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Wait for a while..." : "Log In"}
          </button>
        </div>
      </Form>
    </div>
  );
}

function AdminLoginForm() {
  const validateSchema = validateForm(validate);
  const navigate = useNavigate();
  const { stateItem, LoginUser } = useLogin("super-admin", "super_admin");

  useEffect(() => {
    stateItem.isLoggedIn && navigate("/admin/projects");
  }, [stateItem.isLoggedIn]);

  async function testSubmit(values) {
    LoginUser(values);
  }

  return (
    <>
      <FormLayout
        MainForm={AdminLoginFormWithField}
        initialValues={initialValues}
        validationSchema={validateSchema}
        formHandler={testSubmit}
        isReturn={true}
        loading={stateItem?.loading}
        isError={stateItem.error}
      />
    </>
  );
}

export default AdminLoginForm;
