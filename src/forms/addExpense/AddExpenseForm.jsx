import PopupLayout from "@/layout/common/popupLayout";
import React from "react";
import { Form, Link } from "react-router-dom";
import ExpenseField from "./expenseField";
import FormLayout from "@/layout/formLayout/formLayout";
import { ErrorMessage, Field, FieldArray, Formik } from "formik";
import { validateForm } from "@/utils/validation/formValidation";

function AddExpenseForm() {
  function addExpense(expense) {
    console.log("hello");
    console.log(JSON.stringify(expense));
    console.log("done");
  }

  const validate = {
    date: "text",
    expenseName: "text",
    Amount: "number",
    remarks: "text",
  };

  const initialValues = {
    date: "",
    expenseName: "",
    Amount: "",
    remarks: "",
    // friends: [{ name: "", email: "" }],
  };

  const ClientSchema = validateForm(validate);

  return (
    <PopupLayout>
      <div class="add-expense blur">
        <div class="form">
          <h2>Add an Expense</h2>
          <Link to="/expense">
            <button type="button" class="btn-warning close">
              Close
            </button>
          </Link>
          <hr />

          <Formik
            initialValues={{
              dateofexpense: "",
              amount: "",
              password: "",
              expenseName: "",
              remarks: "",
              expenseItems: [{ client: "", amount: "", note: "" }],
            }}
            onSubmit={(values, { setSubmitting }) => {
              console.log(values);
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }}
          >
            {({ values, handleSubmit }) => (
              <form onSubmit={handleSubmit}>
                <div className="grid gtc-2 gap-10">
                  <div class="field">
                    <p class="title">Expense Name</p>
                    <Field type="date" name="dateofexpense" />
                    <ErrorMessage
                      name="date"
                      className="err"
                      component="span"
                    />
                  </div>
                  <div class="field">
                    <p class="title">Expense Name</p>
                    <Field type="number" name="amount" />
                    <ErrorMessage
                      name="amount"
                      className="err"
                      component="span"
                    />
                  </div>

                  <div class="field">
                    <p class="title">Expense Name</p>
                    <Field type="text" name="expenseName" />
                    <ErrorMessage
                      name="expenseName"
                      className="err"
                      component="span"
                    />
                  </div>

                  <div class="field">
                    <p class="title">Expense Name</p>
                    <Field type="text" name="remarks" />
                    <ErrorMessage
                      name="expenseName"
                      className="err"
                      component="span"
                    />
                  </div>
                </div>

                <FieldArray name="expenseItems">
                  {(arrayHelpers) => (
                    <div>
                      {values.expenseItems.map((friend, index) => (
                        // <div key={index}>
                        //   <label htmlFor={`expense.${index}.name`}>
                        //     Friend Name
                        //   </label>
                        //   <Field
                        //     name={`expense.${index}.name`}
                        //     placeholder="Friend's Name"
                        //   />

                        //   <label htmlFor={`expense.${index}.age`}>Age</label>
                        //   <Field
                        //     name={`expense.${index}.age`}
                        //     placeholder="Friend's Age"
                        //     type="number"
                        //   />

                        //   {/* Remove a friend */}
                        //   <button
                            // type="button"
                            // onClick={() => arrayHelpers.remove(index)}
                        //   >
                        //     Remove Friend
                        //   </button>
                        // </div>
                        <ExpenseField
                          key={index}
                          FieldNameList={{
                            client: `expenseItems[${index}].client`,
                            amount: `expenseItems[${index}].amount`,
                            note: `expenseItems[${index}].note`,
                          }}
                          RemoveFn={arrayHelpers.remove}
                          Ind={index}
                        />
                      ))}

                      {/* Add a new friend */}
                      <button
                        type="button"
                        className="btn-success flex-1"
                        onClick={
                          () => arrayHelpers.push({ client: "", amount: "", note: "" }) 
                        }
                      >
                        Add a Expense
                      </button>
                    </div>
                  )}
                </FieldArray>

                <div class="action-btn flex gap-10">
                  <button type="submit" className="btn-success flex-1">
                    Add
                  </button>
                  <button type="button" className="btn-warning flex-1">
                    Cancel
                  </button>
                </div>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </PopupLayout>
  );
}

export default AddExpenseForm;
