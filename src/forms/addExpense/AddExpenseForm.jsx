import PopupLayout from "@/layout/common/popupLayout";
import React from "react";
import { Link } from "react-router-dom";
import ExpenseField from "./expenseField";
import FormLayout from "@/layout/formLayout/formLayout";
import { ErrorMessage, Field, FieldArray, Form } from "formik";
import { validateForm } from "@/utils/validation/formValidation";
import { initialValues, validate } from "./fields";

function ExpenseFormWithField({ values, resetFn }) {
  return (
    <Form>
      <div className="grid gtc-2 gap-10">
        <div class="field">
          <p class="title">Date: </p>
          <Field type="date" name="dateofexpense" />
          <ErrorMessage name="dateofexpense" className="err" component="span" />
        </div>
        <div class="field">
          <p class="title">Total Amount: </p>
          <Field type="number" name="Amount" />
          <ErrorMessage name="Amount" className="err" component="span" />
        </div>

        <div class="field">
          <p class="title">Expense Name</p>
          <Field type="text" name="expenseName" />
          <ErrorMessage name="expenseName" className="err" component="span" />
        </div>

        <div class="field">
          <p class="title">Remarks: </p>
          <Field type="text" name="remarks" />
          <ErrorMessage name="remarks" className="err" component="span" />
        </div>
      </div>

      <FieldArray name="expenseItems">
        {({remove, push}) => (
          <div>
            {values.expenseItems.map((friend, index) => (
              <ExpenseField
                key={index}
                FieldNameList={{
                  client: `expenseItems[${index}].client`,
                  amount: `expenseItems[${index}].amount`,
                  note: `expenseItems[${index}].note`,
                }}
                RemoveFn={remove}
                Ind={index}
              />
            ))}
            <button
              type="button"
              className="btn-success flex-1"
              onClick={() =>
                push({ client: "", amount: "", note: "" })
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
        <button type="button" onClick={() => resetFn()} className="btn-warning flex-1">
          Cancel
        </button>
      </div>
    </Form>
  );
}

function AddExpenseForm() {
  const addExpense = (values) => {
    console.log(values);
    alert(JSON.stringify(values, null, 2));
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

          <FormLayout
            MainForm={ExpenseFormWithField}            
            initialValues={initialValues}
            validationSchema={ClientSchema}
            formHandler={addExpense}
          />
        </div>
      </div>
    </PopupLayout>
  );
}

export default AddExpenseForm;
