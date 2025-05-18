import useFormSubmit from "@/hooks/useFormSubmit";
import PopupLayout from "@/layout/common/popupLayout";
import FormLayout from "@/layout/formLayout/formLayout";
import { ErrorMessage, Field, Form } from "formik";
import { initialValues, validate } from "./fields";
import { Link } from "react-router-dom";

function LabourFormWithField({ resetFn }) {
  return (
    <Form>
      <div className="grid gtc-2 gap-10">
        <div className="field">
          <p className="title">Labour Name</p>
          <Field type="text" name="lab_name" id="" />
          <ErrorMessage name="lab_name" className="err" component="span" />
        </div>
        <div className="field">
          <p className="title">Number</p>
          <Field type="number" name="lab_contact" id="" />
          <ErrorMessage name="lab_contact" className="err" component="span" />
        </div>
        <div className="field">
          <p className="title">
            Alternate Number<span>(*optional)</span>
          </p>
          <Field type="number" name="lab_alt_contact" id="" />
          <ErrorMessage
            name="lab_alt_contact"
            className="err"
            component="span"
          />
        </div>
        <div className="field">
          <p className="title">
            Email<span>(*optional)</span>
          </p>
          <Field type="email" name="lab_email" id="" />
          <ErrorMessage name="lab_email" className="err" component="span" />
        </div>
        <div className="field">
          <p className="title">
            Address<span>(*optional)</span>
          </p>
          <Field type="text" name="lab_address" id="" />
          <ErrorMessage name="lab_address" className="err" component="span" />
        </div>
      </div>
      <div className="action-btn flex gap-10">
        <button type="submit" className="btn-success flex-1">
          Add
        </button>
        <button
          type="button"
          onClick={() => resetFn()}
          className="btn-warning flex-1"
        >
          Cancel
        </button>
      </div>
    </Form>
  );
}

function AddLabourForm() {
  const [submithandler, initialSchema, validateSchema, isReturn] =
    useFormSubmit(initialValues, validate, "lab_id", "labour");

  const addExpense = (values) => {
    alert(JSON.stringify(values, null, 2));
  };

  return (
    <PopupLayout>
      <div className="add-clients-prospects blur">
        <div className="form">
          <h2>Add a Labour</h2>
          <Link to={`/admin/labour`}>
            <button type="button" className="btn-warning close">
              Close
            </button>
          </Link>
          <hr />
          <FormLayout
            MainForm={LabourFormWithField}
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

export default AddLabourForm;
