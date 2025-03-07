import PopupLayout from "@/layout/common/popupLayout"
import FormLayout from "@/layout/formLayout/formLayout";
import { validateForm } from "@/utils/validation/formValidation";
import { ErrorMessage, Field, Form } from "formik";
import { useDispatch } from "react-redux";
import { initialValues, validate } from "./fields";
import { Link } from "react-router-dom";



function VendorFormWithField({resetFn}) {
  return (
    <Form>
      <div className="grid gtc-2 gap-10">
        <div className="field">
          <p className="title">Name</p>
          <Field type="text" name="clientName" id="" />
          <ErrorMessage name="clientName" className="err" component="span" />
        </div>
        <div className="field">
          <p className="title">Contact Number</p>
          <Field type="number" name="clientNumber" id="" />
          <ErrorMessage name="clientNumber" className="err" component="span" />
        </div>
        <div className="field">
          <p className="title">
            Alternate Number<span>(*optional)</span>
          </p>
          <Field type="number" name="clientAltNumber" id="" />
          <ErrorMessage
            name="clientAltNumber"
            className="err"
            component="span"
          />
        </div>
        <div className="field">
          <p className="title">
            Email<span>(*optional)</span>
          </p>
          <Field type="email" name="clientEmail" id="" />
          <ErrorMessage name="clientEmail" className="err" component="span" />
        </div>
        <div className="field">
          <p className="title">
            Address<span>(*optional)</span>
          </p>
          <Field type="text" name="clientAddress" id="" />
          <ErrorMessage name="clientAddress" className="err" component="span" />
        </div>
        <div className="field">
          <p className="title">
            Other Details<span>(optional)</span>
          </p>
          <Field type="text" name="clientDetails" id="" />
          <ErrorMessage name="clientDetails" className="err" component="span" />
        </div>
      </div>
      <div className="action-btn flex gap-10">
        <button type="submit" className="btn-success flex-1">
          Add
        </button>
        <button type="button" onClick={()=> resetFn()} className="btn-warning flex-1">
          Cancel
        </button>
      </div>
    </Form>
  );
}

function AddvendorForm() {
  const dispatch = useDispatch();
  const ClientSchema = validateForm(validate);

  function addNewVendor(clientData) {
    // dispatch(addClient(clientData))
    alert(JSON.stringify(clientData));
  }

  return (
    <PopupLayout>
      <div className="add-clients-prospects blur">
        <div className="form">
          <h2>Add a Vendor</h2>
          <Link to={`/vendors`}>
            <button type="button" className="btn-warning close">
              Close
            </button>
          </Link>
          <hr />
          <FormLayout
            MainForm={VendorFormWithField}
            initialValues={initialValues}
            validationSchema={ClientSchema}
            formHandler={addNewVendor}
          />
        </div>
      </div>
    </PopupLayout>
  );
}

export default AddvendorForm