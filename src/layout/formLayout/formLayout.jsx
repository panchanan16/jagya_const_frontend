import { Formik } from "formik";

function FormLayout({
  MainForm,
  initialValues,
  validationSchema,
  formHandler,
  isReturn,
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
        {({ values, resetForm, isSubmitting }) => (
          <MainForm
            values={values}
            resetFn={resetForm}
            isSubmitting={isSubmitting}
          />
        )}
      </Formik>
    )
  );
}

export default FormLayout;
