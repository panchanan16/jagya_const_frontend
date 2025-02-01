import { useLayoutContext } from '@/context/layoutContext'
import PopupLayout from '@/layout/common/popupLayout'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import FormLayout from '@/layout/formLayout/formLayout';
import { Link } from 'react-router-dom';
import {addClient} from '@/redux/features/clientSlice'
import { useDispatch } from 'react-redux';
import { validateForm } from '@/utils/validation/formValidation';
import { initialValues, validate } from './fields';


function AddClientForm() {
  const dispatch = useDispatch()
  const ClientSchema = validateForm(validate)

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