import { usePopupContext } from '@/context/popupContext';
import SecondSlideLayout from '@/layout/common/secondSlideLayout'
import React from 'react'

function SecondSlide() {
    const { dispatchActions } = usePopupContext();
    const { closeSecondSlide } = dispatchActions;

    return (
        <SecondSlideLayout>
                <main>
                    <div className="main-btn flex">
                        <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"
                            id="arrow-left" className="main-svg" onClick={closeSecondSlide}>
                            <path fill=""
                                d="M17,11H9.41l3.3-3.29a1,1,0,1,0-1.42-1.42l-5,5a1,1,0,0,0-.21.33,1,1,0,0,0,0,.76,1,1,0,0,0,.21.33l5,5a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L9.41,13H17a1,1,0,0,0,0-2Z">
                            </path>
                        </svg>
                        <button className="btn-primary flex" type="button" onclick="editClientsProspects()">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="">
                                <path fill=""
                                    d="M21,12a1,1,0,0,0-1,1v6a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V5A1,1,0,0,1,5,4h6a1,1,0,0,0,0-2H5A3,3,0,0,0,2,5V19a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V13A1,1,0,0,0,21,12ZM6,12.76V17a1,1,0,0,0,1,1h4.24a1,1,0,0,0,.71-.29l6.92-6.93h0L21.71,8a1,1,0,0,0,0-1.42L17.47,2.29a1,1,0,0,0-1.42,0L13.23,5.12h0L6.29,12.05A1,1,0,0,0,6,12.76ZM16.76,4.41l2.83,2.83L18.17,8.66,15.34,5.83ZM8,13.17l5.93-5.93,2.83,2.83L10.83,16H8Z">
                                </path>
                            </svg>
                            <span>Edit Client</span>
                        </button>
                    </div>

                    <div className="header-text">
                        <h2>Panchanan Deka</h2>
                    </div>
                    {/* <!-- DETAILS  --> */}
                    <div className="contents grid gtc-2 gap-10">
                        <div className="description flex">
                            <h3>Phone / Alternate Number:</h3>
                            <p className="text">6000192289 / 6000192289</p>
                        </div>
                        <div className="description flex">
                            <h3>Email ID:</h3>
                            <p className="text">dekapanchanan16534@gmail.com</p>
                        </div>
                        <div className="description flex">
                            <h3>Address:</h3>
                            <p className="text">House No. 60, Ashram Road, Lachitnagar, Guwahati, Assam</p>
                        </div>
                        <div className="description flex">
                            <h3>On Going Project:</h3>
                            <p className="text">Residential G+2 Building</p>
                        </div>
                        <div className="description flex">
                            <h3>Total Collection:</h3>
                            <p className="text">&#8377; <span>50,000</span></p>
                        </div>
                        <div className="description flex">
                            <h3>Total Expenses:</h3>
                            <p className="text">&#8377; <span>1,00,000</span></p>
                        </div>
                    </div>

                    <hr />
                    <div className="tabs">
                        <div className="tabs-list flex align-center gap-10">
                            <h3 className="active">Collections</h3>
                            <h3>Expenses</h3>
                        </div>
                        <div className="tabs-content">
                            {/* <!-- COLLECTIONS LIST --> */}
                            <div className="c-collections">
                                <div className="c-collections-heading flex align-start j-between">
                                    <h2>Collections</h2>
                                    <div className="action-btn flex">
                                        <button className="btn-primary" type="button" onclick="addClientPayment()">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                id="plus-circle" className="">
                                                <path fill=""
                                                    d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Zm4-9H13V8a1,1,0,0,0-2,0v3H8a1,1,0,0,0,0,2h3v3a1,1,0,0,0,2,0V13h3a1,1,0,0,0,0-2Z">
                                                </path>
                                            </svg>
                                            <span className="text">Add a Collection</span>
                                        </button>
                                    </div>
                                </div>
                                <div className="collections-table">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th><input type="checkbox" name="checkbox" className="select-all" /></th>
                                                <th className="">No.</th>
                                                <th className="">Date</th>
                                                <th className="">Amount</th>
                                                <th className="">Mode</th>
                                                <th className="">Remarks</th>
                                                <th className="">Action</th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            <tr>
                                                <td><input type="checkbox" name="" id=""
                                                    onchange="toggleHighlight(this)" className="row-checkbox" /></td>
                                                <td>1</td>
                                                <td className="text">19-Mar-2024</td>
                                                <td className="text">&#8377; <span>50,000</span></td>
                                                <td className="text">Cash</td>
                                                <td className="text">Bought for false ceiling </td>
                                                <td className="flex">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                        onclick="editClientPayment()">
                                                        <path fill=""
                                                            d="M21,12a1,1,0,0,0-1,1v6a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V5A1,1,0,0,1,5,4h6a1,1,0,0,0,0-2H5A3,3,0,0,0,2,5V19a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V13A1,1,0,0,0,21,12ZM6,12.76V17a1,1,0,0,0,1,1h4.24a1,1,0,0,0,.71-.29l6.92-6.93h0L21.71,8a1,1,0,0,0,0-1.42L17.47,2.29a1,1,0,0,0-1.42,0L13.23,5.12h0L6.29,12.05A1,1,0,0,0,6,12.76ZM16.76,4.41l2.83,2.83L18.17,8.66,15.34,5.83ZM8,13.17l5.93-5.93,2.83,2.83L10.83,16H8Z">
                                                        </path>
                                                    </svg>
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                        <path fill=""
                                                            d="M10,18a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,10,18ZM20,6H16V5a3,3,0,0,0-3-3H11A3,3,0,0,0,8,5V6H4A1,1,0,0,0,4,8H5V19a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3V8h1a1,1,0,0,0,0-2ZM10,5a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1V6H10Zm7,14a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V8H17Zm-3-1a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,14,18Z">
                                                        </path>
                                                    </svg>
                                                </td>
                                            </tr>
                                        </tbody>
                                        <tfoot>
                                            <tr>
                                                <th colspan="6">Total</th>
                                                <th colspan="1">&#8377; <span>50,000</span></th>
                                            </tr>
                                        </tfoot>
                                    </table>
                                </div>
                            </div>
                            {/* <!-- cLIENT EXPENSES  --> */}
                            <div className="c-expenses hide">
                                <div className="c-expenses-heading flex align-start j-between">
                                    <h2>Expenses</h2>
                                    <div className="action-btn flex">
                                        <button className="btn-primary" type="button" onclick="addClientExpense()">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                id="plus-circle" className="">
                                                <path fill=""
                                                    d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Zm4-9H13V8a1,1,0,0,0-2,0v3H8a1,1,0,0,0,0,2h3v3a1,1,0,0,0,2,0V13h3a1,1,0,0,0,0-2Z">
                                                </path>
                                            </svg>
                                            <span className="text">Add an Expense</span>
                                        </button>
                                    </div>
                                </div>
                                <div className="client-expenses-table">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th><input type="checkbox" name="checkbox" className="select-all" /></th>
                                                <th className="">No.</th>
                                                <th className="">Date</th>
                                                <th className="">Amount</th>
                                                <th className="">Mode</th>
                                                <th className="">Remarks</th>
                                                <th className="">Project Reference</th>
                                                <th className="">Action</th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            <tr>
                                                <td><input type="checkbox" name="" id=""
                                                    onchange="toggleHighlight(this)" className="row-checkbox" /></td>
                                                <td>1</td>
                                                <td className="text">19-Mar-2024</td>
                                                <td className="text">&#8377; <span>50,000</span></td>
                                                <td className="text">Cash</td>
                                                <td className="text">Bought for false ceiling </td>
                                                <td className="text">Project No 1A</td>
                                                <td className="flex">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                        onclick="editClientExpense()">
                                                        <path fill=""
                                                            d="M21,12a1,1,0,0,0-1,1v6a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V5A1,1,0,0,1,5,4h6a1,1,0,0,0,0-2H5A3,3,0,0,0,2,5V19a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V13A1,1,0,0,0,21,12ZM6,12.76V17a1,1,0,0,0,1,1h4.24a1,1,0,0,0,.71-.29l6.92-6.93h0L21.71,8a1,1,0,0,0,0-1.42L17.47,2.29a1,1,0,0,0-1.42,0L13.23,5.12h0L6.29,12.05A1,1,0,0,0,6,12.76ZM16.76,4.41l2.83,2.83L18.17,8.66,15.34,5.83ZM8,13.17l5.93-5.93,2.83,2.83L10.83,16H8Z">
                                                        </path>
                                                    </svg>
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                        <path fill=""
                                                            d="M10,18a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,10,18ZM20,6H16V5a3,3,0,0,0-3-3H11A3,3,0,0,0,8,5V6H4A1,1,0,0,0,4,8H5V19a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3V8h1a1,1,0,0,0,0-2ZM10,5a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1V6H10Zm7,14a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V8H17Zm-3-1a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,14,18Z">
                                                        </path>
                                                    </svg>
                                                </td>
                                            </tr>
                                        </tbody>
                                        <tfoot>
                                            <tr>
                                                <th colspan="7">Total</th>
                                                <th colspan="1">&#8377; <span>50,000</span></th>
                                            </tr>
                                        </tfoot>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
        </SecondSlideLayout>
    )
}

export default SecondSlide