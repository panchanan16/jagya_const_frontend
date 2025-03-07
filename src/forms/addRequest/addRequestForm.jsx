import SearchInput from "@/components/searchInput/searchInput";
import PopupLayout from "@/layout/common/popupLayout";
import FormLayout from "@/layout/formLayout/formLayout";
import { ErrorMessage, Field, FieldArray, Form } from "formik";
import { Link } from "react-router-dom";
import { initialValues, validate } from "./fields";
import { validateForm } from "@/utils/validation/formValidation";

function RequestFormWithField({ values, resetFn }) {
  return (
    <Form>
      <div class="grid gtc-3 gap-10">
        <SearchInput Name={"client"} />
        <div class="field">
          <p class="title v-selector">Select a Phase</p>
          <Field as="select" name="phase" id="" class="v-selector">
            <option value="mulukj">Mukunda Sharma</option>
            <option value="vuhuho">Vidit Gujrati</option>
          </Field>
          <ErrorMessage name="phase" className="err" component="span" />
        </div>
      </div>

      <FieldArray name="itemList">
        {({ remove, push }) => (
          <div>
            <button
              class="btn-dashed flex align-items j-center"
              type="button"
              onClick={() => push({ itemName: "", itemQnt: "" })}
            >
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
              <span class="text">Add Item</span>
            </button>
            {values.itemList.map((friend, index) => (
              <div class="newItem">
                <div class="grid gap-10 inventoryGrid">
                  <div class="field">
                    <p class="title">Item</p>
                    <Field type="text" name={`itemList[${index}].itemName`} id="" />
                    <ErrorMessage
                      name={`itemList[${index}].itemName`}
                      className="err"
                      component="span"
                    />
                  </div>
                  <div class="field">
                    <p class="title">Quantity</p>
                    <Field type="text" name={`itemList[${index}].itemQnt`} id="" />
                    <ErrorMessage
                      name={`itemList[${index}].itemQnt`}
                      className="err"
                      component="span"
                    />
                  </div>
                  <div class="field" onClick={()=> remove(index)}>
                    <p class="opacity-0">p</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      id="trash-alt"
                    >
                      <path
                        fill=""
                        d="M10,18a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,10,18ZM20,6H16V5a3,3,0,0,0-3-3H11A3,3,0,0,0,8,5V6H4A1,1,0,0,0,4,8H5V19a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3V8h1a1,1,0,0,0,0-2ZM10,5a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1V6H10Zm7,14a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V8H17Zm-3-1a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,14,18Z"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </FieldArray>

      <div class="action-btn flex gap-10">
        <button type="submit" class="btn-success flex-1">
          Request
        </button>
        <button
          type="button"
          class="btn-warning flex-1"
          onClick={() => resetFn()}
        >
          Cancel
        </button>
      </div>
    </Form>
  );
}

function AddRequestForm() {
  function addRequest(values) {
    console.log(values);
    alert(JSON.stringify(values));
  }

  const requestSchema = validateForm(validate);
  return (
    <PopupLayout>
      <div class="add-collection blur">
        <div class="form">
          <h2>Request Materials</h2>
          <Link to="/incharge">
            <button type="button" class="btn-warning close">
              Close
            </button>
          </Link>
          <hr />
          <FormLayout
            MainForm={RequestFormWithField}
            initialValues={initialValues}
            validationSchema={requestSchema}
            formHandler={addRequest}
          />
        </div>
      </div>
    </PopupLayout>
  );
}

export default AddRequestForm;
