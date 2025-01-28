import { useLayoutContext } from '@/context/layoutContext'
import PopupLayout from '@/layout/common/popupLayout'
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import FormLayout from '@/layout/formLayout/formLayout';
import { Link } from 'react-router';
import {addClient} from '@/redux/features/clientSlice'
import { useDispatch } from 'react-redux';


const initialValues = {
  clientName: '',
  clientEmail: '',
  clientNumber: '',
  clientAltNumber: '',
  clientAddress: '',
  clientDetails: ''
}


const ClientSchema = Yup.object().shape({
  clientName: Yup.string()
    .min(2, 'Too Short!')
    .max(70, 'Too Long!')
    .required('Required'),
  clientEmail: Yup.string()
    .email('Invalid email')
    .required('Required'),
  clientNumber: Yup.number().required('Number is required!').positive().integer(),
  clientAltNumber: Yup.number().required('Alt. Number is required!').positive().integer(),
  clientAddress: Yup.string()
    .min(2, 'Too Short!')
    .max(70, 'Too Long!')
    .required('Address is required!'),
  clientDetails: Yup.string()
    .min(2, 'Too Short!')
    .max(70, 'Too Long!')
    .required('Required'),
});


function AddClientForm() {
  const dispatch = useDispatch()

  function addNewClient(clientData) {
    dispatch(addClient(clientData))
  }

  return (
    <PopupLayout>
      <div className="add-clients-prospects blur">
        <div className="form">
          <h2>Add a Client</h2>
          <Link to={`/clients`}>
            <button type="button" className="btn-warning close">Close</button>
          </Link>
          <hr />
          <FormLayout validationSchema={ClientSchema} initialValues={initialValues} formHandler={addNewClient}>
            <div className="grid gtc-2 gap-10">
              <div className="field">
                <p className="title">Name</p>
                <Field type="text" name="clientName" id="" />
                <ErrorMessage name="clientName" className='err' component="span" />
              </div>
              <div className="field">
                <p className="title">Contact Number</p>
                <Field type="number" name="clientNumber" id="" />
                <ErrorMessage name="clientNumber" className='err' component="span" />
              </div>
              <div className="field">
                <p className="title">Alternate Number<span>(*optional)</span></p>
                <Field type="number" name="clientAltNumber" id="" />
                <ErrorMessage name="clientAltNumber" className='err' component="span" />
              </div>
              <div className="field">
                <p className="title">Email<span>(*optional)</span></p>
                <Field type="email" name="clientEmail" id="" />
                <ErrorMessage name="clientEmail" className='err' component="span" />
              </div>
              <div className="field">
                <p className="title">Address<span>(*optional)</span></p>
                <Field type="text" name="clientAddress" id="" />
                <ErrorMessage name="clientAddress" className='err' component="span" />
              </div>
              <div className="field">
                <p className="title">Other Details<span>(optional)</span></p>
                <Field type="text" name="clientDetails" id="" />
                <ErrorMessage name="clientDetails" className='err' component="span" />
              </div>
            </div>
            <div className="action-btn flex gap-10">
              <button type="submit" className="btn-success flex-1">Add</button>
              <button type="button" className="btn-warning flex-1">Cancel</button>
            </div>
          </FormLayout>
        </div>
      </div>
    </PopupLayout>
  )
}

export default AddClientForm