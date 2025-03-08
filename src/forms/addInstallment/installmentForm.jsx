import SearchInput from "@/components/searchInput/searchInput";
import PopupLayout from "@/layout/common/popupLayout";
import FormLayout from "@/layout/formLayout/formLayout";
import { Field, Form } from "formik";
import { Link } from "react-router-dom";
import { initialValues, validate } from "./fields";
import { validateForm } from "@/utils/validation/formValidation";

function InstallmentFormWithField({ resetFn }) {
  return (
    <Form>
      <div className="grid gtc-3 gap-10">
        <SearchInput Name="project" Label={'client'} />
        <div className="field">
          <p className="title">Date</p>
          <Field type="date" name="dateofInstallment" id="" />
        </div>
        <div className="field">
          <p className="title">Amount</p>
          <Field type="number" name="amount" id="" />
        </div>
        <div className="field">
          <p className="title">Mode</p>
          <div className="flex f-wrap gap-10">
            <div className="flex gap-2">
              <Field type="radio" name="modeofpay" value="cash" id="" />
              <p className="text">Cash</p>
            </div>
            <div className="flex gap-2">
              <Field type="radio" name="modeofpay" value="upi" id="" />
              <p className="text">UPI</p>
            </div>
            <div className="flex gap-2">
              <Field type="radio" name="modeofpay" value="cheque" id="" />
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

  const installmentSchema = validateForm(validate)

  function addInstallment(values) {
    console.log(values)
    alert(JSON.stringify(values))
  }

  return (
    <PopupLayout>
      <div className="add-installment-popup blur">
        <div className="form">
          <h2>Add Installment</h2>
          <Link to={`/finance`}>
            <button type="button" className="btn-warning close">
              Close
            </button>
          </Link>
          <hr />

          <FormLayout
            MainForm={InstallmentFormWithField}
            initialValues={initialValues}
            validationSchema={installmentSchema}
            formHandler={addInstallment}
          />
        </div>
      </div>
    </PopupLayout>
  );
}

export default InstallmentForm;
