import SearchInput from "@/components/searchInput/searchInput";
import PopupLayout from "@/layout/common/popupLayout";
import FormLayout from "@/layout/formLayout/formLayout";
import { Form } from "formik";
import { useState } from "react";
import { Link } from "react-router-dom";

function BranchApprovalFormWithFields(params) {
  const [isClient, setIsClient] = useState(false);

  const handleChange = (event) => {
    setIsClient(event.target.value);
  };

  return (
    <Form>
      <div class="field flex">
        <input type="radio" name="approve" value={0} id="" onChange={handleChange}  />
        <p>Add as a new client</p>
      </div>
      <div class="grid gtc-2">
        <div class="field flex flex-column align-center">
          <input type="radio" name="approve" value={1} id="" onChange={handleChange} />
          <p>Select an existing client</p>
        </div>

        {isClient == 1 && (
          <SearchInput
            Name={"client_id"}
            Label={"Client"}
            Entity={"client"}
            SetDisplayKey={{ id: "client_id", name: "client_name" }}
            SetFKey={"b_client_id"}
          />
        )}
      </div>
      <div class="action-btn flex gap-10">
        <button type="button" class="btn-success flex-1">
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
  function testSubmit(values) {
    alert(JSON.stringify(values, null));
  }

  return (
    <PopupLayout>
      <div class="approve-request blur">
        <div class="form">
          <h2>Approve Request</h2>
          <Link to="/admin/branch-request/5">
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
            MainForm={BranchApprovalFormWithFields}
            initialValues={{}}
            validationSchema={{}}
            formHandler={testSubmit}
            isReturn={true}
          />
        </div>
      </div>
    </PopupLayout>
  );
}

export default BranchApprovalForm;
