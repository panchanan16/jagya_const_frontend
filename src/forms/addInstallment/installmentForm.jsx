import PopupLayout from '@/layout/common/popupLayout'
import { Link } from 'react-router-dom'


function InstallmentForm() {

    return (
        <PopupLayout>
            <div className="add-installment-popup blur">
                <div className="form">
                    <h2>Add Installment</h2>
                    <Link to={`/finance`}>
                        <button type="button" className="btn-warning close">Close</button>
                    </Link>
                    <hr />

                    <div className="grid gtc-3 gap-10">
                        <div className="field">
                            <p className="title">Date</p>
                            <input type="date" name="" id="" required />
                        </div>
                        <div className="field">
                            <p className="title">Amount</p>
                            <input type="number" name="" id="" required />
                        </div>
                        <div className="field">
                            <p className="title">Mode</p>
                            <div className="flex f-wrap gap-10">
                                <div className="flex gap-2">
                                    <input type="radio" name="mode" id="" />
                                    <p className="text">Cash</p>
                                </div>
                                <div className="flex gap-2">
                                    <input type="radio" name="mode" id="" />
                                    <p className="text">UPI</p>
                                </div>
                                <div className="flex gap-2">
                                    <input type="radio" name="mode" id="" />
                                    <p className="text">Cheque</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="action-btn flex align-center gap-10">
                        <button type="button" className="btn-success flex-1">Update</button>
                        <button type="button" className="btn-warning flex-1" onclick="closemainPopup()">Cancel</button>
                    </div>
                </div>
            </div>
        </PopupLayout>
    )
}

export default InstallmentForm