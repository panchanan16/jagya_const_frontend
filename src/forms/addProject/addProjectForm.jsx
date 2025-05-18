import SearchInput from "@/components/searchInput/searchInput";
import PopupLayout from "@/layout/common/popupLayout";
import FormLayout from "@/layout/formLayout/formLayout";
import { ErrorMessage, Field, Form } from "formik";
import React, { useState } from "react";
import { initialValues, validate } from "./fields";
import useFormSubmit from "@/hooks/useFormSubmit";
import { Link } from "react-router-dom";

function ProjectFormWithField({ resetFn }) {
  const [profileAcc, setprofileAcc] = useState(false);
  const setFieldItem = [
    "client_name",
    "client_email",
    "client_contact",
    "client_alt_contact",
    "client_address",
  ];

  return (
    <Form>
      <div className="grid gtc-2 gap-10 add-project-header">
        <SearchInput
          Name="name"
          Label="Client"
          Entity="client"
          SetOptinalList={setFieldItem}
          SetFKey={{pro_client_r_id: 'client_id'}}
          SetDisplayKey={{name: 'client_name', id: 'client_ref_no'}}
        />
        {/* <div className="field add-field-btn">
          <p className="opacity-0">0</p>
          <button className="btn-primary j-center" type="button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              id="plus-circle"
              className=""
            >
              <path
                fill=""
                d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Zm4-9H13V8a1,1,0,0,0-2,0v3H8a1,1,0,0,0,0,2h3v3a1,1,0,0,0,2,0V13h3a1,1,0,0,0,0-2Z"
              ></path>
            </svg>
            <span className="text">Add a New Client</span>
          </button>
        </div> */}
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
          className={`accordion-data profile-accordion`}
        >
          <div className="grid gtc-2 gap-10">
            <div className="field">
              <p className="title">Name</p>
              <Field type="text" name="client_name" id="" />
              <ErrorMessage
                name="client_name"
                className="err"
                component="span"
              />
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
              <ErrorMessage
                name="client_email"
                className="err"
                component="span"
              />
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
          className={`accordion-data profile-accordion`}
        >
          <div className="grid gtc-2 gap-10">
            <div className="field">
              <p className="title">Project Name</p>
              <Field type="text" name="pro_name" id="" />
              <ErrorMessage
                name="pro_name"
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
              <Field type="text" name="pro_totalcost" id="" />
              <ErrorMessage
                name="pro_totalcost"
                className="err"
                component="span"
              />
            </div>
            <div className="field">
              <p className="title">Advance Amount</p>
              <Field type="text" name="pro_advancepayment" id="" />
              <ErrorMessage
                name="pro_advancepayment"
                className="err"
                component="span"
              />
            </div>
            <div className="field">
              <p className="title">House Type</p>
              <Field
                as="select"
                name="pro_housetype"
                id="houseType"
                className="house-type"
              >
                <option value="ASSAMTYPE">Assam Type</option>
                <optgroup label="RCC">
                  <option value="G+1">G+1</option>
                  <option value="G+2">G+2</option>
                </optgroup>
              </Field>
              <ErrorMessage name="pro_housetype" className="err" component="span" />
            </div>
            <div className="field">
              <p className="title">
                Site Description<span>(*optional)</span>
              </p>
              <Field type="text" name="pro_sitedesc" id="" />
              <ErrorMessage
                name="pro_sitedesc"
                className="err"
                component="span"
              />
            </div>
            <div className="field">
              <p className="title">
                Project Duration <span>in years</span>
                <span>(*optional)</span>
              </p>
              <Field type="text" name="pro_duration" id="" />
              <ErrorMessage
                name="pro_duration"
                className="err"
                component="span"
              />
            </div>
          </div>
        </div>
      </div>

      <hr />
      {/* <div className="accordion">
        <div className="accordion-heading flex align-center j-between">
          <h3>Attached files</h3>
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
          <div className="field">
            <button className="btn-secondary" type="button" onclick="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                id="image-plus"
              >
                <path d="M19,10a1,1,0,0,0-1,1v3.38L16.52,12.9a2.79,2.79,0,0,0-3.93,0l-.7.71L9.41,11.12a2.79,2.79,0,0,0-3.93,0L4,12.61V7A1,1,0,0,1,5,6h8a1,1,0,0,0,0-2H5A3,3,0,0,0,2,7V19.22A2.79,2.79,0,0,0,4.78,22H17.22a2.88,2.88,0,0,0,.8-.12h0a2.74,2.74,0,0,0,2-2.65V11A1,1,0,0,0,19,10ZM5,20a1,1,0,0,1-1-1V15.43l2.89-2.89a.78.78,0,0,1,1.1,0L15.46,20Zm13-1a1,1,0,0,1-.18.54L13.3,15l.71-.7a.77.77,0,0,1,1.1,0L18,17.21ZM21,4H20V3a1,1,0,0,0-2,0V4H17a1,1,0,0,0,0,2h1V7a1,1,0,0,0,2,0V6h1a1,1,0,0,0,0-2Z"></path>
              </svg>
              <span className="text">Upload</span>
            </button>
          </div>
          <div className="uploaded-files flex align-center gap-10 f-wrap">
            <figure className="hide">
              <img src="/img/admin.jpg" alt="file" />
              <figcaption>Admin.jpg</figcaption>
              <span>&times</span>
            </figure>
          </div>
        </div>
      </div> */}

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

function AddProjectForm() {
  const [submithandler, initialSchema, validateSchema, isReturn] =
    useFormSubmit(initialValues, validate, "pro_id", "project");

  function testSubmit(values) {
    alert(JSON.stringify(values, null));
  }

  return (
    <PopupLayout>
      <div className="add-project-popup blur">
        <div className="form">
          <h2>Add a Project</h2>
          <Link to="/admin/projects">
            <button type="button" className="btn-warning close">
              Close
            </button>
          </Link>
          <hr />
          <FormLayout
            MainForm={ProjectFormWithField}
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

export default AddProjectForm;
