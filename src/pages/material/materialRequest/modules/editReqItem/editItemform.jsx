import {useSubAppContext } from '@/context/secondSlideContext'

function EditReqItemForm({closeFormfn}) {
  const {detailSelectorFn} = useSubAppContext()
  const isSubModalOpen = detailSelectorFn.isSubModalOpen()

  console.log('I am editform rendering...')

  return (
    <div className={`editInchargeItem-popup ${isSubModalOpen ? '' : 'hide'}`}>
      <div className="form">
        <div className="grid gtc-4 gap-10">
          <div className="field">
            <p className="title">Item</p>
            <input type="text" name="" id="" />
          </div>
          <div className="field">
            <p className="title">Quantity</p>
            <input type="text" name="" id="" />
          </div>
          <div className="field">
            <p className="title">Rate</p>
            <input type="text" name="" id="" />
          </div>
          <div className="field">
            <p className="title">Amount</p>
            <input type="text" name="" id="" />
          </div>
        </div>
        <div className="action-btn flex gap-10">
          <button type="button" className="btn-success flex-1">Update</button>
          <button type="button" className="btn-warning flex-1" onClick={closeFormfn}>Cancel</button>
        </div>
      </div>
    </div>

  )
}

export default EditReqItemForm