import SelectOption from "@/components/SelectOption/SelectOption";
import useFormSubmit from "@/hooks/useFormSubmit";
import PopupLayout from "@/layout/common/popupLayout";
import FormLayout from "@/layout/formLayout/formLayout";
import { ErrorMessage, Field, Form, useFormikContext } from "formik";
import { Link, useParams } from "react-router-dom";
import { initialValues, validate } from "./fields";
import { useEffect } from "react";
import { useSelector } from "react-redux";

function PhaseFormWithField({ resetFn }) {
  const { projectId } = useParams();
  const { setFieldValue } = useFormikContext();

  useEffect(() => {
    setFieldValue("pro_id", projectId);
  }, [projectId]);

  return (
    <Form>
      <div className="grid gtc-3">
        <SelectOption
          Name={"phase_id"}
          Label={"Phase"}
          keyValue={"phase_id"}
          setName={true}
        />

      <div class="field">
        <p class="title">Date: </p>
        <Field type="date" name="pro_phase_deadline" />
        <ErrorMessage
          name="pro_phase_deadline"
          className="err"
          component="span"
        />
      </div>
      <div class="field">
        <p class="title">Select status: </p>
        <Field as="select" name={"pro_phase_status"} id="" class="v-selector">
          <option value="" disabled selected>
            Select from here
          </option>
          <option value="Pending">Pending</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </Field>
        <ErrorMessage
          name={"pro_phase_status"}
          className="err"
          component="span"
        />
      </div>
      </div>

      <div class="action-btn flex align-center gap-10">
        <button type="submit" class="btn-success flex-1">
          Confirm
        </button>
        <button type="button" onClick={resetFn} class="btn-warning flex-1">
          Cancel
        </button>
      </div>
    </Form>
  );
}

function AddNewPhaseForm() {
  const { projectId } = useParams();
  const [submithandler, initialSchema, validateSchema, isReturn] =
    useFormSubmit(initialValues, validate, "phase_id", "project_phase");


  function addPhase(values) {
    console.log(values);
    alert(JSON.stringify(values));
  }
  return (
    <PopupLayout>
      <div class="phase-popup blur">
        <div class="form">
          <h2>Phase</h2>
          <Link to={`/admin/projects/${projectId}`}>
            <button type="button" class="btn-warning close">
              Close
            </button>
          </Link>
        <hr />
          <FormLayout
            MainForm={PhaseFormWithField}
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

export default AddNewPhaseForm;
