import PopupLayout from "@/layout/common/popupLayout";
import React from "react";
import { Link } from "react-router-dom";
import ExpenseField from "./expenseField";
import FormLayout from "@/layout/formLayout/formLayout";
import { ErrorMessage, Field, FieldArray, Form } from "formik";
import { initialValues, validate } from "./fields";
import useFormSubmit from "@/hooks/useFormSubmit";

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

      <FieldArray name="vendorExpenses">
        {({ remove, push }) => (
          <div>
            {values.vendorExpenses.map((friend, index) => (
              <ExpenseField
                key={index}
                FieldNameList={{
                  client: `vendorExpenses[${index}].client`,
                  vendor: `vendorExpenses[${index}].vendor`,
                  amount: `vendorExpenses[${index}].amount`,
                  note: `vendorExpenses[${index}].note`,
                }}
                RemoveFn={remove}
                Ind={index}
                Type={"vendor"}
                typeDisplay = {{id: 'vendor_id', name: 'vendor_name'}}
              />
            ))}
          </div>
        )}
      </FieldArray>

      <FieldArray name="contractorExpenses">
        {({ remove }) => (
          <div>
            {values.contractorExpenses.map((friend, index) => (
              <ExpenseField
                key={index}
                FieldNameList={{
                  client: `contractorExpenses[${index}].client`,
                  contractor: `contractorExpenses[${index}].contractor`,
                  amount: `contractorExpenses[${index}].amount`,
                  note: `contractorExpenses[${index}].note`,
                }}
                RemoveFn={remove}
                Ind={index}
                Type={"contractor"}
                typeDisplay = {{id: 'con_id', name: 'con_name'}}
              />
            ))}
          </div>
        )}
      </FieldArray>

      <div className="flex gap-10">
        <FieldArray name="vendorExpenses">
          {({ push }) => (
            <button
              type="button"
              className="btn-success"
              onClick={() =>
                push({ client: "", vendor: "", amount: "", note: "" })
              }
            >
              Add Vendor Expense
            </button>
          )}
        </FieldArray>
        <FieldArray name="contractorExpenses">
          {({ push }) => (
            <button
              type="button"
              className="btn-success"
              onClick={() =>
                push({ client: "", contractor: "", amount: "", note: "" })
              }
            >
              Add Contractor Expense
            </button>
          )}
        </FieldArray>
      </div>

      <div class="action-btn flex gap-10">
        <button type="submit" className="btn-success flex-1">
          Add
        </button>
        <button
          type="button"
          onClick={() => resetFn()}
          className="btn-warning flex-1"
        >
          Cancel
        </button>
      </div>
    </Form>
  );
}

function AddExpenseForm() {
  const [submithandler, initialSchema, validateSchema, isReturn] =
  useFormSubmit(initialValues, validate, "exp_id", {name: "expense", route: 'create'});


  // const addExpense = (values) => {
  //   alert(JSON.stringify(values, null, 2));
  // };

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

export default AddExpenseForm;
