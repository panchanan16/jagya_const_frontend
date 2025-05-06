import FormLayout from "@/layout/formLayout/formLayout";
import { Field, FieldArray, Form } from "formik";
import { validate } from "./fields";
import { validateForm } from "@/utils/validation/formValidation";

function EditRequestForm({ showEditForm, originalItems }) {
  const editRequestSchema = validateForm(validate);
  const initialValues = {
    requestedItems:
      originalItems &&
      originalItems.map((el) => {
        return { item: el[1], quantity: el[2], rate: el[3], amount: el[4] };
      }),
  };

  function editMaterialRequest(values) {
    console.log(values);
    alert(JSON.stringify(values));
  }

  function EditRequestFormWithField({ values, resetFn }) {
    return (
      <div class={`editInchargeItem-popup ${showEditForm ? "" : "hide"}`}>
        <div class="form">
          <Form>
            <FieldArray name="requestedItems">
              {({ remove, push }) => (
                <>
                  {values &&
                    values.requestedItems.map((item, index) => (
                      <div class="grid gtc-4 gap-10" key={index}>
                        <div class="field">
                          <p class="title">Item</p>
                          <Field
                            type="text"
                            name={`requestedItems[${index}].item`}
                            id=""
                          />
                        </div>
                        <div class="field">
                          <p class="title">Quantity</p>
                          <Field
                            type="text"
                            name={`requestedItems[${index}].quantity`}
                            id=""
                          />
                        </div>
                        <div class="field">
                          <p class="title">Rate</p>
                          <Field
                            type="text"
                            name={`requestedItems[${index}].rate`}
                            id=""
                          />
                        </div>
                        <div class="field">
                          <p class="title">Amount</p>
                          <Field
                            type="text"
                            name={`requestedItems[${index}].amount`}
                            id=""
                          />
                        </div>
                      </div>
                    ))}
                </>
              )}
            </FieldArray>

            <div class="action-btn flex gap-10">
              <button type="submit" class="btn-success flex-1">
                Update
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
        </div>
      </div>
    );
  }

  return (
    <FormLayout
      MainForm={EditRequestFormWithField}
      initialValues={initialValues}
      validationSchema={editRequestSchema}
      formHandler={editMaterialRequest}
      isReturn={true}
    />
  );
}

export default EditRequestForm;
