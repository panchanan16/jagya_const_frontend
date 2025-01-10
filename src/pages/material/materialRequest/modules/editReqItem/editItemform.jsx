import {useSubAppContext } from '@/context/secondSlideContext'

function EditReqItemForm({closeFormfn}) {
  const {detailSelectorFn} = useSubAppContext()
  const isSubModalOpen = detailSelectorFn.isSubModalOpen()

  console.log('I am editform rendering...')

  return (
    <div class={`editInchargeItem-popup ${isSubModalOpen ? '' : 'hide'}`}>
      <div class="form">
        <div class="grid gtc-4 gap-10">
          <div class="field">
            <p class="title">Item</p>
            <input type="text" name="" id="" />
          </div>
          <div class="field">
            <p class="title">Quantity</p>
            <input type="text" name="" id="" />
          </div>
          <div class="field">
            <p class="title">Rate</p>
            <input type="text" name="" id="" />
          </div>
          <div class="field">
            <p class="title">Amount</p>
            <input type="text" name="" id="" />
          </div>
        </div>
        <div class="action-btn flex gap-10">
          <button type="button" class="btn-success flex-1">Update</button>
          <button type="button" class="btn-warning flex-1" onClick={closeFormfn}>Cancel</button>
        </div>
      </div>
    </div>

  )
}

export default EditReqItemForm