import useLogin from "@/hooks/useLogin";
import FormLayout from "@/layout/formLayout/formLayout";
import { validateForm } from "@/utils/validation/formValidation";
import { ErrorMessage, Field, Form } from "formik";
import { useEffect } from "react";
import { redirect, useNavigate } from "react-router-dom";

const initialValues = {
  user_id: "",
  password: "",
};

const validate = {
  user_id: "name",
  password: "text",
};

function AdminLoginFormWithField({ errors, isSubmitting }) {
  return (
    <Form>
      <span style={{ color: "red", fontSize: "13px" }}>
        {errors && errors.message}
      </span>
      <div class="field">
        <label htmlFor="your_name">Email Address</label>
        <Field type="text" name="user_id" id="user_id" />
        <ErrorMessage name="user_id" className="err" component="span" />
      </div>
      <div class="field">
        <label htmlFor="your_pass">Password</label>
        <Field type="text" name="password" id="password" />
        <ErrorMessage name="password" className="err" component="span" />
        <i class="uil uil-eye-slash" id="eye"></i>
      </div>
      <div class="field field-btn">
        <button type="submit" name="signin" id="signin" className="btn-primary">
          {isSubmitting ? "Wait for a while..." : "Log In"}
        </button>
      </div>
    </Form>
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
