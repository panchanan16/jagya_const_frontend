import { useLayoutContext } from '@/context/layoutContext'
import PopupLayout from '@/layout/common/popupLayout'


function AddClientForm() {
   const { dispatchActions } = useLayoutContext()
   const {closeFormAction} = dispatchActions

   console.log('I am client form re rendering..')

  return (
    <PopupLayout>
      <div class="add-clients-prospects blur">
        <div class="form">
          <h2>Add a Client</h2>
          <button type="button" class="btn-warning close" onClick={closeFormAction}>Close</button>
          <hr />

            <div class="grid gtc-2 gap-10">
              <div class="field">
                <p class="title">Name</p>
                <input type="text" name="" id="" required />
                  <span class="err hide">Field cannot be empty</span>
              </div>
              <div class="field">
                <p class="title">Contact Number</p>
                <input type="number" name="" id="" required />
                  <span class="err hide">Field cannot be empty</span>
              </div>
              <div class="field">
                <p class="title">Alternate Number<span>(*optional)</span></p>
                <input type="number" name="" id="" />
              </div>
              <div class="field">
                <p class="title">Email<span>(*optional)</span></p>
                <input type="email" name="" id="" />
              </div>
              <div class="field">
                <p class="title">Address<span>(*optional)</span></p>
                <input type="text" name="" id="" />
              </div>
              <div class="field">
                <p class="title">Other Details<span>(optional)</span></p>
                <input type="text" name="" id="" />
              </div>
            </div>

            <div class="action-btn flex gap-10">
              <button type="button" class="btn-success flex-1">Add</button>
              <button type="button" class="btn-warning flex-1" onclick="closemainPopup()">Cancel</button>
            </div>
        </div>
      </div>
    </PopupLayout>
  )
}

export default AddClientForm