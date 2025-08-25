import SearchInput from "@/components/searchInput/searchInput";
import PopupLayout from "@/layout/common/popupLayout";
import FormLayout from "@/layout/formLayout/formLayout";
import { ErrorMessage, Field, FieldArray, Form } from "formik";
import { Link } from "react-router-dom";
import { initialValues, validate } from "./fields";
import useFormSubmit from "@/hooks/useFormSubmit";
import SelectOption from "@/components/SelectOption/SelectOption";
import { addPhase } from "@/redux/features/settingsSlice/slice";

function RequestFinanceFormWithField({ values, resetFn }) {
  console.log(values);
  return (
    <Form>
      <div class="grid gtc-3 gap-10">
        <SearchInput
          Name={"mr_project_ref"}
          Label={"Project"}
          Entity="project"
          SetFKey={{ mr_project_id: "pro_id" }} // setting client ref key in the form which is not displayed
          SetDisplayKey={{ id: "pro_ref_no", name: "pro_name" }}
          editDisplayInput={values.mr_phase}
          errorKey={"mr_project_id"}
        />
        <SelectOption Name={"mr_phase"} Label={"Phase"} action={addPhase} />
        <div class="field">
          <p class="title v-selector">Select Date</p>
          <Field type="date" name="mr_date" id="" />
          <ErrorMessage name="mr_date" className="err" component="span" />
        </div>
      </div>

      <FieldArray name="materialItemsData">
        {({ remove, push }) => (
          <div>
            <button
              class="btn-dashed flex align-items j-center"
              type="button"
              onClick={() =>
                push({
                  mr_item_name: "",
                  mr_item_quantity: "",
                  mr_item_amount: "",
                  fd_approval: 0,
                  vendor_id: null,
                })
              }
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
            <div class="newItem">
              {values.materialItemsData.map((friend, index) => (
                <div class="grid gap-10 inventoryGrid">                 
                  <SearchInput
                    Name={"vendor_id"}
                    Label={"Vendor"}
                    Entity="vendor"
                    SetFKey={{
                      [`materialItemsData[${index}].vendor_id`]: "vendor_id",
                    }} // setting client ref key in the form which is not displayed
                    SetDisplayKey={{ id: "vendor_id", name: "vendor_name" }}
                    editDisplayInput={friend.mr_item_name}
                    errorKey={"vendor_id"}
                  />
                  <div class="field">
                    <p class="title">Item</p>
                    <Field
                      type="text"
                      name={`materialItemsData[${index}].mr_item_name`}
                      id=""
                    />
                    <ErrorMessage
                      name={`materialItemsData[${index}].mr_item_name`}
                      className="err"
                      component="span"
                    />
                  </div>
                  <div class="field">
                    <p class="title">Quantity</p>
                    <Field
                      type="text"
                      name={`materialItemsData[${index}].mr_item_quantity`}
                      id=""
                    />
                    <ErrorMessage
                      name={`materialItemsData[${index}].mr_item_quantity`}
                      className="err"
                      component="span"
                    />
                  </div>

                  <div class="field">
                    <p class="title">Amount</p>
                    <Field
                      type="text"
                      name={`materialItemsData[${index}].mr_item_amount`}
                      id=""
                    />
                    <ErrorMessage
                      name={`materialItemsData[${index}].mr_item_amount`}
                      className="err"
                      component="span"
                    />
                  </div>

                  <div class="field">
                    <p class="title v-selector">Select Status</p>
                    <Field
                      as="select"
                      name={`materialItemsData[${index}].fd_approval`}
                      id=""
                      class="v-selector"
                    >
                      <option value="1">Approve</option>
                      <option value="0">Decline</option>
                    </Field>
                    <ErrorMessage
                      name={`materialItemsData[${index}].fd_approval`}
                      className="err"
                      component="span"
                    />
                  </div>

                  <div class="field" onClick={() => remove(index)}>
                    <p class="opacity-0 title">p</p>
                    <button type="button" className="btn-warning delete">Delete Item</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </FieldArray>

      <div class="action-btn flex gap-10">
        <button type="submit" class="btn-success flex-1">
          Confirm
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

function AddRequestFinance() {
  const [submithandler, initialSchema, validateSchema, isReturn, urlParam] =
    useFormSubmit(initialValues, validate, "mr_r_id", {
      name: "material_req",
      route: "create",
    });

  function addRequest(values) {
    console.log(values);
    alert(JSON.stringify(values));
  }

  return (
    <PopupLayout>
      <div class="add-collection blur">
        <div class="form">
          <h2>Request Materials</h2>
          <Link to={`/admin/finance-request/${urlParam}`}>
            <button type="button" class="btn-warning close">
              Close
            </button>
          </Link>
          <hr />
          <FormLayout
            MainForm={RequestFinanceFormWithField}
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

export default AddRequestFinance;
