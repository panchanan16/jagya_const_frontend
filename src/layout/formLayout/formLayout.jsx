import { Formik, Form } from "formik";

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
      onSubmit={(values, actions) => {
        formHandler(values);
        console.log(values);
        actions.resetForm();
      }}
    >
      {({ values, resetForm  }) => (
          <MainForm values={values} resetFn={resetForm } />
      )}
    </Formik>
  );
}

export default FormLayout;
