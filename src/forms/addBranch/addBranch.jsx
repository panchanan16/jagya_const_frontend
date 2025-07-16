import PopupLayout from "@/layout/common/popupLayout";
import FormLayout from "@/layout/formLayout/formLayout";
import { ErrorMessage, Field, Form } from "formik";
import { Link } from "react-router-dom";
import { initialValues, validate } from "./fields";
import useFormSubmit from "@/hooks/useFormSubmit";

function BranchFromWithFields({ resetFn }) {
  return (
    <Form>
      <div class="grid gtc-3 gap-10">
        <div class="field">
          <p class="title">Branch Name</p>
          <Field type="text" name="b_name" id="" />
          <ErrorMessage name="b_name" className="err" component="span" />
        </div>
        <div class="field">
          <p class="title">Branch Owner</p>
          <Field type="text" name="b_head" id="" />
          <ErrorMessage name="b_head" className="err" component="span" />
        </div>
        <div class="field">
          <p class="title">Phone Number</p>
          <Field type="text" name="b_contact_number" id="" />
          <ErrorMessage name="b_contact_number" className="err" component="span" />
        </div>
        <div class="field">
          <p class="title">Alt Phone Number</p>
          <Field type="text" name="b_alt_number" id="" />
          <ErrorMessage name="b_alt_number" className="err" component="span" />
        </div>
         <div class="field">
          <p class="title">Email</p>
          <Field type="text" name="b_email" id="" />
          <ErrorMessage name="b_email" className="err" component="span" />
        </div>
        <div class="field">
          <p class="title">Location</p>
          <Field type="text" name="b_location" id="" />
          <ErrorMessage name="b_location" className="err" component="span" />
        </div>
      </div>
      <div class="action-btn flex gap-10">
        <button type="submit" class="btn-success flex-1">
          Add
        </button>
        <button type="button" class="btn-warning flex-1" onClick={resetFn}>
          Cancel
        </button>
      </div>
    </Form>
  );
}

function AddBranchForm() {
  const [submithandler, initialSchema, validateSchema, isReturn] =
    useFormSubmit(initialValues, validate, "br_id", "branch_data");

  function addNewBranch(values) {
    console.log(values);
    alert(JSON.stringify(values));
  }

  return (
    <PopupLayout>
      <div class="add-branch blur">
        <div class="form">
          <h2>Add a Branch</h2>
          <Link to="/admin/branch-list">
            <button type="button" class="btn-warning close">
              Close
            </button>
          </Link>
          <hr />

          <FormLayout
            MainForm={BranchFromWithFields}
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

export default AddBranchForm;
