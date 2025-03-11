import PopupLayout from "@/layout/common/popupLayout";
import FormLayout from "@/layout/formLayout/formLayout";
import { ErrorMessage, Field, Form } from "formik";
import { Link } from "react-router-dom";
import { initialValues, validate } from "./fields";
import { validateForm } from "@/utils/validation/formValidation";

function BranchFromWithFields({resetFn}) {
  return (
    <Form>
      <div class="grid gtc-3 gap-10">
        <div class="field">
          <p class="title">Branch Name</p>
          <Field type="text" name="branchName" id="" />
          <ErrorMessage name="branchName" className="err" component="span" />
        </div>
        <div class="field">
          <p class="title">Branch Owner</p>
          <Field type="text" name="branchOwner" id="" />
          <ErrorMessage name="branchOwner" className="err" component="span" />
        </div>
        <div class="field">
          <p class="title">Phone Number</p>
          <Field type="text" name="branchContact" id="" />
          <ErrorMessage name="branchContact" className="err" component="span" />
        </div>
        <div class="field">
          <p class="title">Location</p>
          <Field type="text" name="branchAddress" id="" />
          <ErrorMessage name="branchAddress" className="err" component="span" />
        </div>
      </div>
      <div class="action-btn flex gap-10">
        <button type="submit" class="btn-success flex-1">
          Add
        </button>
        <button
          type="button"
          class="btn-warning flex-1"
          onClick={resetFn}
        >
          Cancel
        </button>
      </div>
    </Form>
  );
}

function AddBranchForm() {
  
  const branchSchema = validateForm(validate)

  function addNewBranch(values) {
     console.log(values)
     alert(JSON.stringify(values))
  }

  return (
    <PopupLayout>
      <div class="add-branch blur">
        <div class="form">
          <h2>Add a Branch</h2>
          <Link to="/branch-list">
            <button type="button" class="btn-warning close">
              Close
            </button>
          </Link>
          <hr />

          <FormLayout 
            MainForm={BranchFromWithFields}
            initialValues={initialValues}
            validationSchema={branchSchema}
            formHandler={addNewBranch}
          />
        </div>
      </div>
    </PopupLayout>
  );
}

export default AddBranchForm;
