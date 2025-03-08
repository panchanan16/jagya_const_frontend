import PopupLayout from "@/layout/common/popupLayout";
import FormLayout from "@/layout/formLayout/formLayout";
import { validateForm } from "@/utils/validation/formValidation";
import { ErrorMessage, Field, Form } from "formik";
import { Link } from "react-router-dom";

const initialValues = {
    subphase: "",
    phase: ""
}

function SubphaseFormWithField({resetFn}) {
    return (
      <Form>
        <div class="grid gtc-2 gap-10">
          <div class="field">
            <p class="title">Sub-Task</p>
            <Field type="text" name="subphase" id="" placeholder="Sub-task" />
            <ErrorMessage name="subphase" className="err" component="span" />
          </div>
          <div class="field">
            <p class="title">Select phase</p>
            <Field as='select' name="phase" id="" class="sub-task">
              <option value="1">Phase I</option>
              <option value="2">Phase II</option>
              <option value="3">Phase III</option>
            </Field>
            <ErrorMessage name="phase" className="err" component="span" />
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

function AddSubphaseForm() {

  function addSubphase(values) {
    console.log(values)
    alert(JSON.stringify(values))
  }

  const subphaseSchema = validateForm({subphase: 'name', phase: 'number'})

  return (
    <PopupLayout>
      <div class="sub-tasks-popup blur">
        <div class="form">
          <h2>Add Sub-Tasks</h2>
          <Link to="/projects/3">
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
            MainForm={SubphaseFormWithField}
            initialValues={initialValues}
            validationSchema={subphaseSchema}
            formHandler={addSubphase}
          />

        </div>
      </div>
    </PopupLayout>
  );
}

export default AddSubphaseForm;
