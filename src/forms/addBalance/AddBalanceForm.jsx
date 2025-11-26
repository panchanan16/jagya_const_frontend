import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useEffect } from "react";
import * as Yup from "yup";
import styles from "@/pages/clientsVendor/client/modules/requestPanel/Materialrequestpanel.module.css";
import useRequest from "@/hooks/useRequest";

// Formik validation schema
const validationSchema = Yup.object({
  payment_date: Yup.date().required("Payment date is required"),
  payment_mode: Yup.string().required("Payment mode is required"),
  total_amount: Yup.number()
    .required("Total amount is required")
    .positive("Must be positive"),
  paid_amount: Yup.number()
    .required("Paid amount is required")
    .positive("Must be positive")
    .max(Yup.ref("total_amount"), "Paid amount cannot exceed total amount"),
  remaining: Yup.number()
    .required("Remaining amount is required")
    .min(0, "Cannot be negative"),
  payment_status: Yup.string().required("Payment status is required"),
});

function AddBalanceForm({
  initialTotalAmount,
  selectedRows,
  onClose,
  pro_id,
}) {
  const initialValues = {
    pro_id: pro_id,
    payment_date: new Date().toISOString().split("T")[0],
    payment_mode: "upi",
    total_amount: initialTotalAmount.toString(),
    paid_amount: "",
    remaining: "",
    payment_status: "remaining",
    items: selectedRows,
  };

  const { loading, makeRequest } = useRequest(
    "material_req",
    null,
    null,
    null,
    false
  );

  return (
    <div className={styles.popupOverlay} onClick={onClose}>
      <div className={styles.popupContent} onClick={(e) => e.stopPropagation()}>
        <div className={styles.popupHeader}>
          <h2>Create Remaining Payment</h2>
          <button className={styles.closeBtn} onClick={onClose}>
            ×
          </button>
        </div>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values)=> makeRequest(values, null, `remaining/create/${32}`)}
        >
          {({ values, setFieldValue }) => {
            // Auto-calculate remaining amount
            useEffect(() => {
              const total = parseFloat(values.total_amount) || 0;
              const paid = parseFloat(values.paid_amount) || 0;
              const remaining = total - paid;
              setFieldValue("remaining", remaining.toString());
            }, [values.total_amount, values.paid_amount, setFieldValue]);

            return (
              <Form className={styles.popupForm}>
                <div className={styles.formGroup}>
                  <label htmlFor="payment_date">Payment Date</label>
                  <Field
                    type="date"
                    id="payment_date"
                    name="payment_date"
                    className={styles.formInput}
                  />
                  <ErrorMessage
                    name="payment_date"
                    component="div"
                    className={styles.errorMessage}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="payment_mode">Payment Mode</label>
                  <Field
                    as="select"
                    id="payment_mode"
                    name="payment_mode"
                    className={styles.formInput}
                  >
                    <option value="upi">UPI</option>
                    <option value="cash">Cash</option>
                    <option value="cheque">Cheque</option>
                    <option value="bank_transfer">Bank Transfer</option>
                    <option value="card">Card</option>
                  </Field>
                  <ErrorMessage
                    name="payment_mode"
                    component="div"
                    className={styles.errorMessage}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="total_amount">Total Amount</label>
                  <Field
                    type="number"
                    id="total_amount"
                    name="total_amount"
                    className={styles.formInput}
                    readOnly
                  />
                  <ErrorMessage
                    name="total_amount"
                    component="div"
                    className={styles.errorMessage}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="paid_amount">Paid Amount</label>
                  <Field
                    type="number"
                    id="paid_amount"
                    name="paid_amount"
                    className={styles.formInput}
                    placeholder="Enter paid amount"
                  />
                  <ErrorMessage
                    name="paid_amount"
                    component="div"
                    className={styles.errorMessage}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="remaining">Remaining Amount</label>
                  <Field
                    type="number"
                    id="remaining"
                    name="remaining"
                    className={styles.formInput}
                    readOnly
                  />
                  <ErrorMessage
                    name="remaining"
                    component="div"
                    className={styles.errorMessage}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="payment_status">Payment Status</label>
                  <Field
                    as="select"
                    id="payment_status"
                    name="payment_status"
                    className={styles.formInput}
                  >
                    <option value="remaining">Remaining</option>
                  </Field>
                  <ErrorMessage
                    name="payment_status"
                    component="div"
                    className={styles.errorMessage}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label>Selected Items</label>
                  <div className={styles.selectedItemsInfo}>
                    {selectedRows.length} item
                    {selectedRows.length > 1 ? "s" : ""} selected
                  </div>
                </div>

                <div className={styles.formActions}>
                  <button
                    type="button"
                    className={styles.cancelBtn}
                    onClick={onClose}
                  >
                    Cancel
                  </button>
                  <button type="submit" className={styles.submitBtn}>
                    Create Remaining
                  </button>
                </div>
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
}

export default AddBalanceForm;
