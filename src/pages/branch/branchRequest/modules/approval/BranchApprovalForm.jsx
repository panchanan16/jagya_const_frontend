import SearchInput from "@/components/searchInput/searchInput";
import useFormSubmit from "@/hooks/useFormSubmit";
import useRequest from "@/hooks/useRequest";
import PopupLayout from "@/layout/common/popupLayout";
import FormLayout from "@/layout/formLayout/formLayout";
import { ErrorMessage, Form, useFormikContext } from "formik";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const initialValues = {
  client_id: null,
  b_client_id: 33,
  admin_approval: true,
  approve: "",
};

const validate = {
  client_id: "",
  b_client_id: "",
  admin_approval: "",
  approve: "",
};

function BranchApprovalFormWithFields(params) {
  const [isClient, setIsClient] = useState(false);
  const { id } = useParams();
  const { setFieldValue } = useFormikContext();

  useEffect(() => {
    setFieldValue("b_client_id", id);
    setFieldValue("admin_approval", true);
  }, []);

  const handleChange = (event) => {
    setIsClient(event.target.value);
    setFieldValue("approve", event.target.value);
  };

  return (
    <Form>
      <div class="field flex">
        <input
          type="radio"
          name="approve"
          value={0}
          id=""
          onChange={handleChange}
        />
        <ErrorMessage name="approve" className="err" component="span" />
        <p>Add as a new client</p>
      </div>
      <div class="grid gtc-2">
        <div class="field flex flex-column align-center">
          <input
            type="radio"
            name="approve"
            value={1}
            id=""
            onChange={handleChange}
          />
          <ErrorMessage name="approve" className="err" component="span" />
          <p>Select an existing client</p>
        </div>

        {isClient == 1 && (
          <SearchInput
            Name={"Client_id"}
            Label={"Client"}
            Entity={"client"}
            SetDisplayKey={{ id: "client_id", name: "client_name" }}
            SetFKey={{ client_id: "client_id" }}
            errorKey={"client_id"}
          />
        )}
      </div>
      <div class="action-btn flex gap-10">
        <button type="sumbit" class="btn-success flex-1">
          Submit
        </button>
        <button
          type="button"
          class="btn-warning flex-1"
          onclick="closemainPopup()"
        >
          Cancel
        </button>
      </div>
    </Form>
  );
}

function BranchApprovalForm() {
  const [submithandler, initialSchema, validateSchema, isReturn] =
    useFormSubmit(initialValues, validate, null, "vendor");

  const { makeRequest } = useRequest(
    "branch_client",
    null,
    "approve",
    null,
    false
  );

  async function ApproveTheProject(values) {
    if (values.approve == "") {
      alert(JSON.stringify("Select Any field first!", values));
    } else {
      await makeRequest(values, null, "approve");
    }
    console.log(values);
  }

  return (
    <PopupLayout>
      <div class="approve-request blur">
        <div class="form">
          <h2>Approve Request</h2>
          <Link to="/admin/branch-request/5">
            <button type="button" class="btn-warning close">
              Close
            </button>
          </Link>
          <hr />
          <FormLayout
            MainForm={BranchApprovalFormWithFields}
            initialValues={initialSchema}
            validationSchema={validateSchema}
            formHandler={ApproveTheProject}
            isReturn={true}
          />
        </div>
      </div>
    </PopupLayout>
  );
}

export default BranchApprovalForm;
