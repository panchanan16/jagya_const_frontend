import { Formik, Form } from 'formik';

function FormLayout({ children, validationSchema, initialValues, formHandler }) {
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values, actions) => {
                formHandler(values)
                console.log(values);
                actions.resetForm()
            }}
        >
          {children}
        </Formik>
    )
}

export default FormLayout