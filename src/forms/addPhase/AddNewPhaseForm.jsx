import SelectOption from "@/components/SelectOption/SelectOption";
import PopupLayout from "@/layout/common/popupLayout";
import FormLayout from "@/layout/formLayout/formLayout";
import { ErrorMessage, Field, Form } from "formik";
import { Link } from "react-router-dom";

function PhaseFormWithField({ resetFn }) {
  return (
    <Form>
      <div>
        <SelectOption Name={"Phase"} Label={"Phase"} />
      </div>
      <div class="field">
        <p class="title">Date: </p>
        <Field type="date" name="exp_date" />
        <ErrorMessage name="exp_date" className="err" component="span" />
      </div>
      <div class="field">
        <Field as="select" name={'status'} id="" class="v-selector">
          <option value="" disabled selected>
            Select from here
          </option>
          <option value="Pending">
           Pending
          </option>               
          <option value="In Progress">
           In Progress
          </option>      

        </Field>
        <ErrorMessage name={'status'} className="err" component="span" />
      </div>

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
    console.log(values);
    alert(JSON.stringify(values));
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
            isReturn={true}
          />
        </div>
      </div>
    </PopupLayout>
  );
}

export default AddNewPhaseForm;
