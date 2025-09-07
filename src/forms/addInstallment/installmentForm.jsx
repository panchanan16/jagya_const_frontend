import SearchInput from "@/components/searchInput/searchInput";
import PopupLayout from "@/layout/common/popupLayout";
import FormLayout from "@/layout/formLayout/formLayout";
import { Field, Form } from "formik";
import { Link } from "react-router-dom";
import { initialValues, validate } from "./fields";
import useFormSubmit from "@/hooks/useFormSubmit";
import SelectOption from "@/components/SelectOption/SelectOption";

function InstallmentFormWithField({ resetFn }) {
  return (
    <Form>
      <div className="grid gtc-3 gap-10">
        <SearchInput
          Name="project_id"
          Label={"project"}
          Entity="project"
          SetDisplayKey={{ id: "pro_ref_no", name: "pro_name" }}
          SetFKey={{col_project_id: "pro_ref_no"}}
          errorKey={'col_project_id'}
        />
        <div className="field">
          <SelectOption Name="Phase" />
        </div>
        <div className="field">
          <p className="title">Date</p>
          <Field type="date" name="col_date" id="" />
        </div>
        <div className="field">
          <p className="title">Amount</p>
          <Field type="number" name="col_amount" id="" />
        </div>
        <div className="field">
          <p className="title">Remarks</p>
          <Field type="text" name="col_remark" id="" />
        </div>
        <div className="field">
          <p className="title">Mode</p>
          <div className="flex f-wrap gap-10">
            <div className="flex gap-2">
              <Field type="radio" name="col_mode" value="cash" id="" />
              <p className="text">Cash</p>
            </div>
            <div className="flex gap-2">
              <Field type="radio" name="col_mode" value="upi" id="" />
              <p className="text">UPI</p>
            </div>
            <div className="flex gap-2">
              <Field type="radio" name="col_mode" value="cheque" id="" />
              <p className="text">Cheque</p>
            </div>
          </div>
        </div>
      </div>

      <div className="action-btn flex align-center gap-10">
        <button type="submit" className="btn-success flex-1">
          Update
        </button>
        <button type="button" className="btn-warning flex-1" onClick={resetFn}>
          Cancel
        </button>
      </div>
    </Form>
  );
}

function InstallmentForm() {
  const [submithandler, initialSchema, validateSchema, isReturn] =
    useFormSubmit(initialValues, validate, "col_id", "collection");

  function addInstallment(values) {
    console.log(values);
    alert(JSON.stringify(values));
  }

  return (
    <PopupLayout>
      <div className="add-installment-popup blur">
        <div className="form">
          <h2>Add Installment</h2>
          <Link to={`/admin/finance`}>
            <button type="button" className="btn-warning close">
              Close
            </button>
          </Link>
          <hr />

          <FormLayout
            MainForm={InstallmentFormWithField}
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

export default InstallmentForm;
