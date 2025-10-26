import PopupLayout from "@/layout/common/popupLayout";
import { Form, Field, ErrorMessage } from "formik";
import FormLayout from "@/layout/formLayout/formLayout";
import { Link } from "react-router-dom";
import { initialValues, financeUserInitialValues, validate } from "./fields";
import useFormSubmit from "@/hooks/useFormSubmit";
import styles from "@/forms/form.module.css";

function FinanceUserFormWithField({ resetFn, isSubmitting }) {
  return (
    <Form>
      <div className={styles.formBody}>
        <div className={styles.formGrid}>
          <div className={styles.fieldGroup}>
            <label className={`${styles.fieldLabel} ${styles.required}`}>
              Name
            </label>
            <Field
              type="text"
              name="fd_name"
              className={styles.formInput}
              placeholder="Enter name"
            />
            <ErrorMessage
              name="fd_name"
              className={styles.errorMessage}
              component="span"
            />
          </div>

          <div className={styles.fieldGroup}>
            <label className={`${styles.fieldLabel} ${styles.required}`}>
              Contact Number
            </label>
            <Field
              type="number"
              name="fd_contact"
              className={styles.formInput}
              placeholder="Enter contact number"
            />
            <ErrorMessage
              name="fd_contact"
              className={styles.errorMessage}
              component="span"
            />
          </div>

          <div className={styles.fieldGroup}>
            <label className={`${styles.fieldLabel} ${styles.fieldLabelOptional}`}>
              Alternate Number
            </label>
            <Field
              type="number"
              name="fd_alt_contact"
              className={styles.formInput}
              placeholder="Enter alternate number"
            />
            <ErrorMessage
              name="fd_alt_contact"
              className={styles.errorMessage}
              component="span"
            />
          </div>

          <div className={styles.fieldGroup}>
            <label className={`${styles.fieldLabel} ${styles.fieldLabelOptional}`}>
              Email
            </label>
            <Field
              type="email"
              name="fd_email"
              className={styles.formInput}
              placeholder="Enter email address"
            />
            <ErrorMessage
              name="fd_email"
              className={styles.errorMessage}
              component="span"
            />
          </div>

          <div className={styles.fieldGroup}>
            <label className={`${styles.fieldLabel} ${styles.fieldLabelOptional}`}>
              Address
            </label>
            <Field
              type="text"
              name="fd_address"
              className={styles.formInput}
              placeholder="Enter address"
            />
            <ErrorMessage
              name="fd_address"
              className={styles.errorMessage}
              component="span"
            />
          </div>
        </div>

        <div className={styles.formActions}>
          <button
            type="submit"
            disabled={isSubmitting}
            className={styles.primaryButton}
          >
            Add
          </button>
          <button
            type="button"
            onClick={resetFn}
            className={styles.secondaryButton}
          >
            Cancel
          </button>
        </div>
      </div>
    </Form>
  );
}

function AddFinanceUserForm() {
  const [submithandler, initialSchema, validateSchema, isReturn] =
    useFormSubmit(financeUserInitialValues, {}, "", {
      name: "users",
      route: "create/finance",
    });

  function testSubmit(values) {
    alert(JSON.stringify(values, null));
  }

  return (
    <PopupLayout>
      <div className={`add-clients-prospects blur ${styles.formContainer}`}>
        <div className={styles.formHeader}>
          <h2 className={styles.formTitle}>Add a New Financial User</h2>
          <Link to={`/admin/users`}>
            <button type="button" className={styles.closeButton}>
              Close
            </button>
          </Link>
        </div>
        <hr className={styles.divider} />
        <FormLayout
          MainForm={FinanceUserFormWithField}
          initialValues={initialSchema}
          validationSchema={validateSchema}
          formHandler={testSubmit}
          isReturn={isReturn}
        />
      </div>
    </PopupLayout>
  );
}

export default AddFinanceUserForm;
