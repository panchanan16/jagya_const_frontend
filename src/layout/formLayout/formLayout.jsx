import { Formik } from "formik";
import { useNavigate } from "react-router-dom";

function FormLayout({
  MainForm,
  initialValues,
  validationSchema,
  formHandler,
  isReturn,
  loading,
  isError,
  goBack = true
}) {
  const navigate = useNavigate()
  function goBackFn() {
    navigate(-1)
  }
  return (
    isReturn && (
      <Formik
        enableReinitialize={true}
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, actions) => {
          formHandler(values).then(() => {
            actions.resetForm();
            actions.setSubmitting(false);
            goBack && goBackFn()
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
