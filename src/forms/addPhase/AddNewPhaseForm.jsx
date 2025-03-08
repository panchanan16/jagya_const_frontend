import PopupLayout from "@/layout/common/popupLayout";
import FormLayout from "@/layout/formLayout/formLayout";
import { ErrorMessage, Field, Form } from "formik";
import { Link } from "react-router-dom";

function PhaseFormWithField({ resetFn }) {
  return (
    <Form>
      <ul>
        <li class="flex align-center gap-5">
          <Field type="checkbox" name="" id="" />
          <ErrorMessage name="subphase" className="err" component="span" />
          <span class="name">Phase I</span>
        </li>
        <li class="flex align-center gap-5">
          <Field type="checkbox" name="" id="" />
          <ErrorMessage name="subphase" className="err" component="span" />
          <span class="name">Phase II</span>
        </li>
      </ul>
      <div class="action-btn flex align-center gap-10">
        <button type="submit" class="btn-success flex-1">
          Add
        </button>
        <button type="button" onClick={resetFn} class="btn-warning flex-1">
          Cancel
        </button>
      </div>
    </Form>
  );
}

function AddNewPhaseForm() {

  function addPhase(values) {
     console.log(values)
     alert(JSON.stringify(values))
  }
  return (
    <PopupLayout>
      <div class="phase-popup blur">
        <div class="form">
          <h2>Add Phase</h2>
          <Link to="/projects/3">
            <button type="button" class="btn-warning close">
              Close
            </button>
          </Link>

          <FormLayout
            MainForm={PhaseFormWithField}
            initialValues={{}}
            validationSchema={{}}
            formHandler={addPhase}
          />
        </div>
      </div>
    </PopupLayout>
  );
}

export default AddNewPhaseForm;
