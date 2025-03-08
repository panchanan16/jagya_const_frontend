import PopupLayout from "@/layout/common/popupLayout";
import FormLayout from "@/layout/formLayout/formLayout";
import { validateForm } from "@/utils/validation/formValidation";
import { ErrorMessage, Field, Form } from "formik";
import { Link } from "react-router-dom";
import { initialValues, validate } from "./fields";

function ContractorFormWithField({resetFn}) {
  return (
    <Form>
      <div className="grid gtc-2 gap-10">
        <div className="field">
          <p className="title">Name</p>
          <Field type="text" name="contractorName" id="" />
          <ErrorMessage name="contractorName" className="err" component="span" />
        </div>
        <div className="field">
          <p className="title">Contact Number</p>
          <Field type="number" name="contractorContact" id="" />
          <ErrorMessage name="contractorContact" className="err" component="span" />
        </div>
        <div className="field">
          <p className="title">
            Alternate Number<span>(*optional)</span>
          </p>
          <Field type="number" name="contractorAltContact" id="" />
          <ErrorMessage
            name="contractorAltContact"
            className="err"
            component="span"
          />
        </div>
        <div className="field">
          <p className="title">
            Email<span>(*optional)</span>
          </p>
          <Field type="email" name="contractorEmail" id="" />
          <ErrorMessage name="contractorEmail" className="err" component="span" />
        </div>
        <div className="field">
          <p className="title">
            Address<span>(*optional)</span>
          </p>
          <Field type="text" name="contractorAddress" id="" />
          <ErrorMessage name="contractorAddress" className="err" component="span" />
        </div>
        <div className="field">
          <p className="title">
            Other Details<span>(optional)</span>
          </p>
          <Field type="text" name="contractorOthers" id="" />
          <ErrorMessage name="contractorOthers" className="err" component="span" />
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
  const contractorSchema = validateForm(validate)

  function addContractor(values) {
    console.log(values)
    alert(JSON.stringify(values))
  }

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
            initialValues={initialValues}
            validationSchema={contractorSchema}
            formHandler={addContractor}
          />
        </div>
      </div>
    </PopupLayout>
  );
}

export default AddContractorForm;
