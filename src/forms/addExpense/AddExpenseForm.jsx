import PopupLayout from "@/layout/common/popupLayout";
import { Link } from "react-router-dom";
import ExpenseField from "./expenseField";
import FormLayout from "@/layout/formLayout/formLayout";
import { ErrorMessage, Field, FieldArray, Form } from "formik";
import { initialValues, validate } from "./fields";
import useFormSubmit from "@/hooks/useFormSubmit";
import ExpenseSchema from "@/utils/validation/expenseSchema";

function ExpenseFormWithField({ values, resetFn }) {
  return (
    <Form>
      <div className="grid gtc-2 gap-10">
        <div class="field">
          <p class="title">Date: </p>
          <Field type="date" name="exp_date" />
          <ErrorMessage name="exp_date" className="err" component="span" />
        </div>
        <div class="field">
          <p class="title">Total Amount: </p>
          <Field type="number" name="exp_amount" />
          <ErrorMessage name="exp_amount" className="err" component="span" />
        </div>

        <div class="field">
          <p class="title">Expense Name</p>
          <Field type="text" name="exp_name" />
          <ErrorMessage name="exp_name" className="err" component="span" />
        </div>

        <div class="field">
          <p class="title">Remarks: </p>
          <Field type="text" name="exp_remark" />
          <ErrorMessage name="exp_remark" className="err" component="span" />
        </div>
      </div>

      <FieldArray name="vendor">
        {({ remove, push }) => (
          <div>
            {values.vendor.map((friend, index) => (
              <ExpenseField
                key={index}
                FieldNameList={{
                  cname: friend.pro_name, // to be display to the user
                  showname: friend.vendor_name,
                  client: `vendor[${index}].pay_project_id`,
                  vendor: `vendor[${index}].pay_vendor_id`,
                  amount: `vendor[${index}].pay_amount`,
                  note: `vendor[${index}].pay_note`,
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

      <FieldArray name="contractor">
        {({ remove }) => (
          <div>
            {values.contractor.map((friend, index) => (
              <ExpenseField
                key={index}
                FieldNameList={{
                  cname: friend.pro_name,
                  showname: friend.con_name,
                  client: `contractor[${index}].pay_project_id`,
                  contractor: `contractor[${index}].pay_con_id`,
                  amount: `contractor[${index}].pay_amount`,
                  note: `contractor[${index}].pay_note`,
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

      <div className="action-btn flex">
        <FieldArray name="vendor">
          {({ push }) => (
            <button
              type="button"
              className="btn-secondary"
              onClick={() =>
                push({ pay_project_id: "", pay_vendor_id: "", pay_amount: "", pay_note: "" })
              }
            >
              Add Vendor Expense
            </button>
          )}
        </FieldArray>
        <FieldArray name="contractor">
          {({ push }) => (
            <button
              type="button"
              className="btn-secondary"
              onClick={() =>
                push({ pay_project_id: "", pay_con_id: "", pay_amount: "", pay_note: "" })
              }
            >
              Add Contractor Expense
            </button>
          )}
        </FieldArray>
      </div>

      <div class="action-btn flex">
        <button type="submit" className="btn-success flex-1">
          Update
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
  const [submithandler, initialSchema, isReturn] =
  useFormSubmit(initialValues, validate, "exp_id", {name: "expense", route: 'create'});


  const addExpense = (values) => {
    alert(JSON.stringify(values, null, 2));
    console.log(values)
  };

  return (
    <PopupLayout>
      <div class="add-expense blur">
        <div class="form">
          <h2>Expense Update</h2>
          <Link to="/admin/expense">
            <button type="button" class="btn-warning close">
              Close
            </button>
          </Link>
          <hr />

          <FormLayout
            MainForm={ExpenseFormWithField}
            initialValues={initialSchema}
            validationSchema={ExpenseSchema}
            formHandler={submithandler}
            isReturn={isReturn}
          />
        </div>
      </div>
    </PopupLayout>
  );
}

export default AddExpenseForm;
