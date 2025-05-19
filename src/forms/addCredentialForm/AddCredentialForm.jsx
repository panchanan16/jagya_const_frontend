import PopupLayout from "@/layout/common/popupLayout";
import { Form, Field, ErrorMessage, useFormikContext } from "formik";
import FormLayout from "@/layout/formLayout/formLayout";
import { Link, useParams } from "react-router-dom";
import { initialValues, validate } from "./fields";
import useFormSubmit from "@/hooks/useFormSubmit";
import { useEffect } from "react";

function CredentialsFormWithField({ resetFn, isSubmitting }) {
  const { id } = useParams();
  const { setFieldValue } = useFormikContext();

  useEffect(() => {
    setFieldValue("id", id);
  }, [id]);
  return (
    <Form>
      <div className="grid gtc-2 gap-10">
        <div className="field">
          <p className="title">Username</p>
          <Field type="text" name="user_id" id="" />
          <ErrorMessage name="user_id" className="err" component="span" />
        </div>
        <div className="field">
          <p className="title">Password</p>
          <Field type="password" name="password" id="" />
          <ErrorMessage name="password" className="err" component="span" />
        </div>
        <div className="field">
          <p className="title">Confirm Password</p>
          <Field type="password" name="cpassword" id="" />
          <ErrorMessage name="cpassword" className="err" component="span" />
        </div>
      </div>
      <div className="action-btn flex gap-10">
        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-success flex-1"
        >
          Add
        </button>
        <button type="button" onClick={resetFn} className="btn-warning flex-1">
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

  function testSubmit(values) {
    alert(JSON.stringify(values, null));
  }

  return (
    <PopupLayout>
      <div className="add-clients-prospects blur">
        <div className="form">
          <h2>Add Credentials</h2>
          <Link to={`/admin/users/${id}`}>
            <button type="button" className="btn-warning close">
              Close
            </button>
          </Link>
          <hr />
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
