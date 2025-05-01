import PopupLayout from "@/layout/common/popupLayout";
import { Field, Form } from "formik";
import { Link } from "react-router-dom";
import { initialValues, validate } from "./fields";
import FormLayout from "@/layout/formLayout/formLayout";
import SearchInput from "@/components/searchInput/searchInput";
import { useState } from "react";
import useFormSubmit from "@/hooks/useFormSubmit";

function AssignFormWithField({resetFn}) {
  const [showNewContractor, setShowNewContractor] = useState(false)


  return (
    <Form>
      <div class="grid gtc-3 gap-10">
        <SearchInput Name={'contractor'} Label={'Contractor'} Entity={'contractor'} SetDisplayKey={{id: 'con_id', name: 'con_name'}} SetFKey={{con_id: 'con_id'}} />
        <div class="field">
          <p class="title">
            Select phase<span>(*optional)</span>
          </p>
          <Field as='select' name="phase" id="" class="phase">
            <option value="pone">Phase I</option>
            <option value="ptwo">Phase II</option>
            <option value="pthree">Phase III</option>
          </Field>
        </div>
        <div class="field">
          <p class="title">
            Select sub task<span>(*optional)</span>
          </p>
          <Field as='select' name="subphase" id="" class="sub-task">
            <option value="slab">Slab Casting</option>
            <option value="tlab">Phase II</option>
            <option value="ulab">Phase III</option>
          </Field>
        </div>
      </div>
      <hr />
      <div class="field">
        <button class="btn-secondary" type="button" onClick={()=> setShowNewContractor(true)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            id="plus-circle"
            class=""
          >
            <path
              fill=""
              d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Zm4-9H13V8a1,1,0,0,0-2,0v3H8a1,1,0,0,0,0,2h3v3a1,1,0,0,0,2,0V13h3a1,1,0,0,0,0-2Z"
            ></path>
          </svg>
          <span class="text">Add New Contractor</span>
        </button>
      </div>

      <div class={`grid gtc-2 gap-10 employeeField ${showNewContractor ? '' : 'hide'}`}>
        <div class="field">
          <p class="title">Name</p>
          <Field type="text" name="contractorName" id="" placeholder="Add Employee" />
        </div>
        <div class="field">
          <p class="title">Designation</p>
          <Field type="text" name="contractorDesignation" id="" placeholder="Designation" />
        </div>
        <div class="field">
          <p class="title">Contact Number</p>
          <Field type="text" name="contractorContact" id="" placeholder="phone number" />
        </div>       
      </div>

      <div class="action-btn flex align-center gap-10">
        <button type="submit" class="btn-success flex-1">
          Update
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

function AssignContractorForm() {
  const [submithandler, initialSchema, validateSchema, isReturn] =
  useFormSubmit(initialValues, validate, "vendor_id", "vendor");

  function assignContractorToProject(values) {
    console.log(values)
    alert(JSON.stringify(values))
  }

  return (
    <PopupLayout>
      <div class="add-employee-popup blur">
        <div class="form">
          <h2>Add an Contractor</h2>
          <Link to="/projects/80">
            <button
              type="button"
              class="btn-warning close"
              onclick="closemainPopup()"
            >
              Close
            </button>
          </Link>
          <hr />
          <FormLayout
            MainForm={AssignFormWithField}
            initialValues={initialSchema}
            validationSchema={validateSchema}
            formHandler={assignContractorToProject}
            isReturn={isReturn}
          />
        </div>
      </div>
    </PopupLayout>
  );
}

export default AssignContractorForm;
