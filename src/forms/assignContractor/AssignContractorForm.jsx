import PopupLayout from "@/layout/common/popupLayout";
import { ErrorMessage, Field, Form, useFormikContext } from "formik";
import { Link, useParams } from "react-router-dom";
import { initialValues, validate } from "./fields";
import FormLayout from "@/layout/formLayout/formLayout";
import SearchInput from "@/components/searchInput/searchInput";
import useFormSubmit from "@/hooks/useFormSubmit";
import SelectOption from "@/components/SelectOption/SelectOption";
import { useEffect } from "react";

function AssignFormWithField({ resetFn }) {
  const { projectId } = useParams();
  const { setFieldValue } = useFormikContext();

  useEffect(() => {
    setFieldValue("pro_id", projectId);
  }, [projectId]);

  return (
    <Form>
      <div class="grid gtc-2 gap-10">
        <SearchInput
          Name={"contractor"}
          Label={"Contractor"}
          Entity={"contractor"}
          SetDisplayKey={{ id: "con_id", name: "con_name" }}
          SetOptinalList={["con_name"]}
          SetFKey={{ con_id: "con_id" }}
          errorKey={"con_id"}
        />

        <SelectOption
          Name={"pro_phase"}
          Label={"Phase"}
          keyValue={"phase_name"}
          // setName={true}
        />
      </div>
      <hr />

      <div class="action-btn flex align-center gap-10">
        <button type="submit" class="btn-success flex-1">
          Update
        </button>
        <button type="button" class="btn-warning flex-1" onClick={resetFn}>
          Cancel
        </button>
      </div>
    </Form>
  );
}

function AssignContractorForm() {
  const { projectId } = useParams();
  const [submithandler, initialSchema, validateSchema, isReturn] =
    useFormSubmit(initialValues, validate, null, "project_contractor");

  function assignContractorToProject(values) {
    console.log(values);
    alert(JSON.stringify(values));
  }

  return (
    <PopupLayout>
      <div class="add-employee-popup blur">
        <div class="form">
          <h2>Add an Contractor</h2>
          <Link to={`/admin/projects/${projectId}`}>
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
            formHandler={submithandler}
            isReturn={isReturn}
          />
        </div>
      </div>
    </PopupLayout>
  );
}

export default AssignContractorForm;
