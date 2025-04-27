import PopupLayout from "@/layout/common/popupLayout";
import FormLayout from "@/layout/formLayout/formLayout";
import { ErrorMessage, Field, Form } from "formik";
import { Link } from "react-router-dom";
import { initialValues, validate } from "./fields";
import useFormSubmit from "@/hooks/useFormSubmit";

function ContractorFormWithField({ resetFn }) {
  return (
    <Form>
      <div className="grid gtc-2 gap-10">
        <div className="field">
          <p className="title">Name</p>
          <Field type="text" name="con_name" id="" />
          <ErrorMessage
            name="con_name"
            className="err"
            component="span"
          />
        </div>
        <div className="field">
          <p className="title">Contact Number</p>
          <Field type="number" name="con_contact" id="" />
          <ErrorMessage
            name="con_contact"
            className="err"
            component="span"
          />
        </div>
        <div className="field">
          <p className="title">
            Alternate Number<span>(*optional)</span>
          </p>
          <Field type="number" name="con_alt_contact" id="" />
          <ErrorMessage
            name="con_alt_contact"
            className="err"
            component="span"
          />
        </div>
        <div className="field">
          <p className="title">
            Email<span>(*optional)</span>
          </p>
          <Field type="email" name="con_email" id="" />
          <ErrorMessage
            name="con_email"
            className="err"
            component="span"
          />
        </div>
        <div className="field">
          <p className="title">
            Address<span>(*optional)</span>
          </p>
          <Field type="text" name="con_address" id="" />
          <ErrorMessage
            name="con_address"
            className="err"
            component="span"
          />
        </div>
        <div className="field">
          <p className="title">
            Other Details<span>(optional)</span>
          </p>
          <Field type="text" name="contractorOthers" id="" />
          <ErrorMessage
            name="contractorOthers"
            className="err"
            component="span"
          />
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

function AddContractorForm() {
  const [submithandler, initialSchema, validateSchema, isReturn] =
    useFormSubmit(initialValues, validate, "con_id", "contractor");

  return (
    <PopupLayout>
      <div className="add-clients-prospects blur">
        <div className="form">
          <h2>Add a Contractor</h2>
          <Link to={`/contractor`}>
            <button type="button" className="btn-warning close">
              Close
            </button>
          </Link>
          <hr />
          <FormLayout
            MainForm={ContractorFormWithField}
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

export default AddContractorForm;
