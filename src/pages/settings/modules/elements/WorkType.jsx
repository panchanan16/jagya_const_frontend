import useRequest from "@/hooks/useRequest";
import FormLayout from "@/layout/formLayout/formLayout";
import { addPhase, insertPhase } from "@/redux/features/settingsSlice/slice";
import { _GET, _POST } from "@/request/request";
import { validateForm } from "@/utils/validation/formValidation";
import { ErrorMessage, Field, Form } from "formik";
import { useSelector } from "react-redux";

function InputField() {
  return (
    <Form>
      <div className="action-btn flex">
        <div className="field">
          <Field
            type="text"
            name="phase_name"
            id=""
            placeholder="Type work-type here"
          />
          <ErrorMessage name="phase_name" className="err" component="span" />
        </div>
        <button className="btn-primary" type="submit">
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
          <span className="text">Add</span>
        </button>
      </div>
    </Form>
  );
}

const initialValues = {
  phase_name: "",
};

const validate = {
  phase_name: "name",
};

function WorkType() {
  const validationSchema = validateForm(validate);
  const { phaseList } = useSelector((state) => state.settings);
  const { makeRequest, loading } = useRequest("phase", addPhase);

  const addAPhase = async (values) => {
    makeRequest(values, insertPhase);
  };

  return (
    <div className="set-details work-type grid-box">
      <div className="work-type flex align-center j-between">
        <h1>Work Type {loading && "Loading"}</h1>
        <FormLayout
          MainForm={InputField}
          isReturn={true}
          formHandler={addAPhase}
          initialValues={initialValues}
          validationSchema={validationSchema}
        />
      </div>

      <div className="edit-details">
        <ul>
          {phaseList.length &&
            phaseList.map((item, key) => (
              <li class="flex align-center" key={key}>
                <span class="dot"></span>
                <span class="flex-1">{item.phase_name}</span>
                <button class="btn-secondary" onclick="editWorkType(this)">
                  Edit
                </button>
                <span class="flex align-center j-center icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    id="trash-alt"
                  >
                    <path d="M10,18a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,10,18ZM20,6H16V5a3,3,0,0,0-3-3H11A3,3,0,0,0,8,5V6H4A1,1,0,0,0,4,8H5V19a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3V8h1a1,1,0,0,0,0-2ZM10,5a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1V6H10Zm7,14a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V8H17Zm-3-1a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,14,18Z"></path>
                  </svg>
                </span>
              </li>

              // <div key={key} className="set-title flex align-center j-between">
              //   <h2>{item.phase_name}</h2>
              //   <div className="flex">
              //     <span
              //       className="flex align-center j-center"
              //     >
              //       <svg
              //         xmlns="http://www.w3.org/2000/svg"
              //         viewBox="0 0 24 24"
              //         id="pen"
              //       >
              //         <path d="M22,7.24a1,1,0,0,0-.29-.71L17.47,2.29A1,1,0,0,0,16.76,2a1,1,0,0,0-.71.29L13.22,5.12h0L2.29,16.05a1,1,0,0,0-.29.71V21a1,1,0,0,0,1,1H7.24A1,1,0,0,0,8,21.71L18.87,10.78h0L21.71,8a1.19,1.19,0,0,0,.22-.33,1,1,0,0,0,0-.24.7.7,0,0,0,0-.14ZM6.83,20H4V17.17l9.93-9.93,2.83,2.83ZM18.17,8.66,15.34,5.83l1.42-1.41,2.82,2.82Z"></path>
              //       </svg>
              //     </span>
              //     <span className="flex align-center j-center">
              //       <svg
              //         xmlns="http://www.w3.org/2000/svg"
              //         viewBox="0 0 24 24"
              //         id="trash-alt"
              //       >
              //         <path d="M10,18a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,10,18ZM20,6H16V5a3,3,0,0,0-3-3H11A3,3,0,0,0,8,5V6H4A1,1,0,0,0,4,8H5V19a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3V8h1a1,1,0,0,0,0-2ZM10,5a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1V6H10Zm7,14a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V8H17Zm-3-1a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,14,18Z"></path>
              //       </svg>
              //     </span>
              //   </div>
              // </div>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default WorkType;
