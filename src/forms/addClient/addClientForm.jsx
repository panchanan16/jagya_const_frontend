import PopupLayout from "@/layout/common/popupLayout";
import { Form, Field, ErrorMessage } from "formik";
import FormLayout from "@/layout/formLayout/formLayout";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { validateForm } from "@/utils/validation/formValidation";
import { initialValues, validate } from "./fields";
import { _POST } from "@/request/request";
import clientActions from "@/redux/features/clientSlice/action";


function ClientFormWithField({ resetFn, isSubmitting }) {
  return (
    <Form>
      <div className="grid gtc-2 gap-10">
        <div className="field">
          <p className="title">Name</p>
          <Field type="text" name="client_name" id="" />
          <ErrorMessage name="client_name" className="err" component="span" />
        </div>
        <div className="field">
          <p className="title">Contact Number</p>
          <Field type="number" name="client_contact" id="" />
          <ErrorMessage
            name="client_contact"
            className="err"
            component="span"
          />
        </div>
        <div className="field">
          <p className="title">
            Alternate Number<span>(*optional)</span>
          </p>
          <Field type="number" name="client_alt_contact" id="" />
          <ErrorMessage
            name="client_alt_contact"
            className="err"
            component="span"
          />
        </div>
        <div className="field">
          <p className="title">
            Email<span>(*optional)</span>
          </p>
          <Field type="email" name="client_email" id="" />
          <ErrorMessage name="client_email" className="err" component="span" />
        </div>
        <div className="field">
          <p className="title">
            Address<span>(*optional)</span>
          </p>
          <Field type="text" name="client_address" id="" />
          <ErrorMessage
            name="client_address"
            className="err"
            component="span"
          />
        </div>
        <div className="field">
          <p className="title">
            Other Details<span>(optional)</span>
          </p>
          <Field type="text" name="client_ref_no" id="" />
          <ErrorMessage name="client_ref_no" className="err" component="span" />
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

function AddClientForm() {
  const dispatch = useDispatch();
  const ClientSchema = validateForm(validate);
  const { loading } = useSelector((state) => state.clients);
  const { createClient } = clientActions;

  async function addNewClient(clientData) {
    createClient(dispatch, clientData);
  }


  return (
    <PopupLayout>
      <div className="add-clients-prospects blur">
        <div className="form">
          <h2>Add a Client</h2>
          <Link to={`/clients`}>
            <button type="button" className="btn-warning close">
              Close
            </button>
          </Link>
          <hr />
          <FormLayout
            MainForm={ClientFormWithField}
            initialValues={initialValues}
            validationSchema={ClientSchema}
            formHandler={addNewClient}
          />
        </div>
      </div>
    </PopupLayout>
  );
}

export default AddClientForm;
