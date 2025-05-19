import PopupLayout from "@/layout/common/popupLayout";
import FormLayout from "@/layout/formLayout/formLayout";
import { ErrorMessage, Field, Form, useFormikContext } from "formik";
import { initialValues, validate } from "./fields";
import { validateForm } from "@/utils/validation/formValidation";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import useFormSubmit from "@/hooks/useFormSubmit";

function BranchProjectFormWithField({ resetFn }) {
  const { setFieldValue } = useFormikContext();
  useEffect(() => {
    setFieldValue('b_r_id', 3)
  }, []);


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
          >
            <path d="M17,9.17a1,1,0,0,0-1.41,0L12,12.71,8.46,9.17a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42l4.24,4.24a1,1,0,0,0,1.42,0L17,10.59A1,1,0,0,0,17,9.17Z"></path>
          </svg>
        </div>
        <div className={`accordion-data profile-accordion`}>
          <div className="grid gtc-2 gap-10">
            <div className="field">
              <p className="title">Name</p>
              <Field type="text" name="b_client_name" id="" />
              <ErrorMessage
                name="b_client_name"
                className="err"
                component="span"
              />
            </div>
            <div className="field">
              <p className="title">Contact Number</p>
              <Field type="number" name="b_client_contact" id="" />
              <ErrorMessage
                name="b_client_contact"
                className="err"
                component="span"
              />
            </div>
            <div className="field">
              <p className="title">
                Alternate Number<span>(*optional)</span>
              </p>
              <Field type="number" name="b_client_alt_contact" id="" />
              <ErrorMessage
                name="b_client_alt_contact"
                className="err"
                component="span"
              />
            </div>
            <div className="field">
              <p className="title">
                Email<span>(*optional)</span>
              </p>
              <Field type="email" name="b_client_email" id="" />
              <ErrorMessage
                name="b_client_email"
                className="err"
                component="span"
              />
            </div>
            <div className="field">
              <p className="title">
                Address<span>(*optional)</span>
              </p>
              <Field type="text" name="b_client_address" id="" />
              <ErrorMessage
                name="b_client_address"
                className="err"
                component="span"
              />
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
        <div className={`accordion-data profile-accordion`}>
          <div className="grid gtc-2 gap-10">
            <div className="field">
              <p className="title">Project Name</p>
              <Field type="text" name="b_project_name" id="" />
              <ErrorMessage
                name="b_project_name"
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
              <Field type="text" name="b_client_totalcost" id="" />
              <ErrorMessage
                name="b_client_totalcost"
                className="err"
                component="span"
              />
            </div>
            <div className="field">
              <p className="title">Advance Amount</p>
              <Field type="text" name="b_client_advancepayment" id="" />
              <ErrorMessage
                name="b_client_advancepayment"
                className="err"
                component="span"
              />
            </div>
            <div className="field">
              <p className="title">House Type</p>
              <Field
                as="select"
                name="b_client_housetype"
                id="b_client_housetype"
                className="house-type"
              >
                <option value="" disabled>
                  Select House Type
                </option>
                <option value="ASSAM TYPE">Assam Type</option>
                <optgroup label="RCC">
                  <option value="G+1">G+1</option>
                  <option value="G+2">G+2</option>
                </optgroup>
              </Field>
              <ErrorMessage
                name="b_client_housetype"
                className="err"
                component="span"
              />
            </div>
            <div className="field">
              <p className="title">
                Site Description<span>(*optional)</span>
              </p>
              <Field type="text" name="b_client_sitedesc" id="" />
              <ErrorMessage
                name="b_client_sitedesc"
                className="err"
                component="span"
              />
            </div>
            <div className="field">
              <p className="title">
                Project Duration <span>in years</span>
                <span>(*optional)</span>
              </p>
              <Field type="text" name="b_client_duration" id="" />
              <ErrorMessage
                name="b_client_duration"
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
  const [submithandler, initialSchema, validateSchema, isReturn] =
    useFormSubmit(initialValues, validate, "b_client_id", "branch_client");

  function testSubmit(values) {
    alert(JSON.stringify(values, null));
    console.log(values);
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

export default AddBranchProjectForm;
