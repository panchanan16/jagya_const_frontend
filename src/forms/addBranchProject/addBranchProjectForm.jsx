import PopupLayout from "@/layout/common/popupLayout";
import FormLayout from "@/layout/formLayout/formLayout";
import { ErrorMessage, Field, Form } from "formik";
import { initialValues, validate } from "./fields";
import { validateForm } from "@/utils/validation/formValidation";
import { Link } from "react-router-dom";
import { useState } from "react";

function BranchProjectFormWithField({resetFn}) {
  const [profileAcc, setprofileAcc] = useState(false);
  return (
    <Form>
      <div className="grid gtc-2 gap-10 add-project-header">
        <div className="field add-field-btn">
          <p className="opacity-0">0</p>         
        </div>
      </div>
      <div className="accordion">
        <div className="accordion-heading flex align-center j-between">
          <h3>Profile details</h3>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            id="angle-down"
            className="svg-18 arrow"
            onClick={() => setprofileAcc(!profileAcc)}
          >
            <path d="M17,9.17a1,1,0,0,0-1.41,0L12,12.71,8.46,9.17a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42l4.24,4.24a1,1,0,0,0,1.42,0L17,10.59A1,1,0,0,0,17,9.17Z"></path>
          </svg>
        </div>
        <div
          className={`accordion-data profile-accordion ${
            profileAcc ? "" : "hide"
          }`}
        >
          <div className="grid gtc-2 gap-10">
            <div className="field">
              <p className="title">Name</p>
              <Field type="text" name="name" id="" />
              <ErrorMessage name="name" className="err" component="span" />
            </div>
            <div className="field">
              <p className="title">Contact Number</p>
              <Field type="number" name="contact" id="" />
              <ErrorMessage name="contact" className="err" component="span" />
            </div>
            <div className="field">
              <p className="title">
                Alternate Number<span>(*optional)</span>
              </p>
              <Field type="number" name="altContact" id="" />
              <ErrorMessage
                name="altContact"
                className="err"
                component="span"
              />
            </div>
            <div className="field">
              <p className="title">
                Email<span>(*optional)</span>
              </p>
              <Field type="email" name="email" id="" />
              <ErrorMessage name="email" className="err" component="span" />
            </div>
            <div className="field">
              <p className="title">
                Address<span>(*optional)</span>
              </p>
              <Field type="text" name="address" id="" />
              <ErrorMessage name="address" className="err" component="span" />
            </div>
            <div className="field">
              <p className="title">
                Other Details<span>(*optional)</span>
              </p>
              <Field type="text" name="others" id="" />
              <ErrorMessage name="others" className="err" component="span" />
            </div>
          </div>
        </div>
      </div>
      <hr />

      <div className="accordion">
        <div className="accordion-heading flex align-center j-between">
          <h3>Project details</h3>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            id="angle-down"
            className="svg-18 arrow"
          >
            <path d="M17,9.17a1,1,0,0,0-1.41,0L12,12.71,8.46,9.17a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42l4.24,4.24a1,1,0,0,0,1.42,0L17,10.59A1,1,0,0,0,17,9.17Z"></path>
          </svg>
        </div>
        <div
          className={`accordion-data profile-accordion ${
            profileAcc ? "" : "hide"
          }`}
        >
          <div className="grid gtc-2 gap-10">
            <div className="field">
              <p className="title">Project Name</p>
              <Field type="text" name="projectName" id="" />
              <ErrorMessage
                name="projectName"
                className="err"
                component="span"
              />
            </div>
            <div className="field">
              <p className="title">
                Deadline<span>(*optional)</span>
              </p>
              <Field type="text" name="deadline" id="" />
              <ErrorMessage name="deadline" className="err" component="span" />
            </div>
            <div className="field">
              <p className="title">Total Amount</p>
              <Field type="text" name="totalAmount" id="" />
              <ErrorMessage
                name="totalAmount"
                className="err"
                component="span"
              />
            </div>
            <div className="field">
              <p className="title">Advance Amount</p>
              <Field type="text" name="advanceAmount" id="" />
              <ErrorMessage
                name="advanceAmount"
                className="err"
                component="span"
              />
            </div>
            <div className="field">
              <p className="title">House Type</p>
              <Field
                as="select"
                name="houseType"
                id="houseType"
                className="house-type"
              >
                <option value="">Assam Type</option>
                <optgroup label="RCC">
                  <option value="G+1">G+1</option>
                  <option value="G+2">G+2</option>
                </optgroup>
              </Field>
              <ErrorMessage name="houseType" className="err" component="span" />
            </div>
            <div className="field">
              <p className="title">
                Site Description<span>(*optional)</span>
              </p>
              <Field type="text" name="siteDescription" id="" />
              <ErrorMessage
                name="siteDescription"
                className="err"
                component="span"
              />
            </div>
            <div className="field">
              <p className="title">
                Project Duration <span>in years</span>
                <span>(*optional)</span>
              </p>
              <Field type="text" name="projectDuration" id="" />
              <ErrorMessage
                name="projectDuration"
                className="err"
                component="span"
              />
            </div>
          </div>
        </div>
      </div>   

      <div className="action-btn flex gap-10">
        <button type="submit" className="btn-success flex-1">
          Add
        </button>
        <button type="button" className="btn-warning flex-1" onClick={resetFn}>
          Cancel
        </button>
      </div>
    </Form>
  );
}

function AddBranchProjectForm() {
  const branchProjectSchema = validateForm(validate);

  function addNewBranchProject(values) {
    console.log(values);
    alert(JSON.stringify(values));
  }

  return (
    <PopupLayout>
      <div className="add-project-popup blur">
        <div className="form">
          <h2>Add a Project</h2>
          <Link to="/admin/branch-dashboard">
            <button type="button" className="btn-warning close">
              Close
            </button>
          </Link>
          <hr />
          <FormLayout
            MainForm={BranchProjectFormWithField}
            initialValues={initialValues}
            validationSchema={branchProjectSchema}
            formHandler={addNewBranchProject}
          />
        </div>
      </div>
    </PopupLayout>
  );
}

export default AddBranchProjectForm;
