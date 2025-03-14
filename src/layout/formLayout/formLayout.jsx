import { Formik, Form } from "formik";
import toast from "react-hot-toast";

function FormLayout({
  MainForm,
  initialValues,
  validationSchema,
  formHandler,
}) {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (values, actions) => {
        formHandler(values).then(() => {
          actions.resetForm();
          actions.setSubmitting(false);
        });
      }}
    >
      {({ values, resetForm, isSubmitting }) => (
        <MainForm
          values={values}
          resetFn={resetForm}
          isSubmitting={isSubmitting}
        />
      )}
    </Formik>
  );
}

export default FormLayout;
