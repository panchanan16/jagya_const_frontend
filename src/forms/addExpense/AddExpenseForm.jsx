import PopupLayout from '@/layout/common/popupLayout'
import React from 'react'
import { Link } from 'react-router-dom'

function AddExpenseForm() {
    return (
        <PopupLayout>
            <div class="add-expense blur">
                <div class="form">
                    <h2>Add an Expense</h2>
                    <Link to='/expense'>
                        <button type="button" class="btn-warning close" onclick="closemainPopup()">Close</button>
                    </Link>
                    <hr />
                    <div class="grid gtc-2 gap-10">
                        <div class="field">
                            <p class="title">Date</p>
                            <input type="date" name="" id="" required />
                        </div>
                        <div class="field">
                            <p class="title">Expense Name</p>
                            <input type="text" name="" id="" />
                        </div>
                        <div class="field">
                            <p class="title">Amount</p>
                            <input type="number" name="" id="" required />
                        </div>
                        <div class="field">
                            <p class="title client-selector">Select category</p>
                            <select name="cname" id="" class="client-selector">
                                <option value="">Project</option>
                                <option value="">Others</option>
                            </select>
                        </div>
                        <div class="field">
                            <p class="title">Mode</p>
                            <select name="cname" id="" class="">
                                <option value="">Cash</option>
                                <option value="">UPI</option>
                                <option value="">Cheque</option>
                            </select>
                        </div>
                        <div class="field">
                            <p class="title">Remarks<span>(*optional)</span></p>
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

export default AddExpenseForm