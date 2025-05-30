import { Formik } from "formik";

function FormLayout({
  MainForm,
  initialValues,
  validationSchema,
  formHandler,
  isReturn,
  loading,
  isError
}) {
  return (
    isReturn && (
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, actions) => {
          formHandler(values).then(() => {
            actions.resetForm();
            actions.setSubmitting(false);
          });
        }}
      >
        {({ values, resetForm, errors, isSubmitting }) => (
          <MainForm
            values={values}
            resetFn={resetForm}
            errors={isError}
            isSubmitting={loading}
          />
        )}
      </Formik>
    )
  );
}

export default FormLayout;
