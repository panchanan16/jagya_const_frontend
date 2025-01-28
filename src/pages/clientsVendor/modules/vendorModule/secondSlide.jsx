import React from 'react'

function SecondSlideVendor() {
    return (
        <main>
            <div className="main-btn flex">
                <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"
                    id="arrow-left" className="main-svg" onclick="openProjectDetails('first-slide', this)">
                    <path fill=""
                        d="M17,11H9.41l3.3-3.29a1,1,0,1,0-1.42-1.42l-5,5a1,1,0,0,0-.21.33,1,1,0,0,0,0,.76,1,1,0,0,0,.21.33l5,5a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L9.41,13H17a1,1,0,0,0,0-2Z">
                    </path>
                </svg>
                <button className="btn-primary flex" type="button" onclick="editVendorsSuppliers()">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="">
                        <path fill=""
                            d="M21,12a1,1,0,0,0-1,1v6a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V5A1,1,0,0,1,5,4h6a1,1,0,0,0,0-2H5A3,3,0,0,0,2,5V19a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V13A1,1,0,0,0,21,12ZM6,12.76V17a1,1,0,0,0,1,1h4.24a1,1,0,0,0,.71-.29l6.92-6.93h0L21.71,8a1,1,0,0,0,0-1.42L17.47,2.29a1,1,0,0,0-1.42,0L13.23,5.12h0L6.29,12.05A1,1,0,0,0,6,12.76ZM16.76,4.41l2.83,2.83L18.17,8.66,15.34,5.83ZM8,13.17l5.93-5.93,2.83,2.83L10.83,16H8Z">
                        </path>
                    </svg>
                    <span>Edit Vendors</span>
                </button>
            </div>

            <div className="header-text">
                <h2>Mintu Sharma</h2>
            </div>
            {/* <!-- DETAILS  --> */}
            <div className="contents grid gtc-2 gap-10">
                <div className="description flex">
                    <h3>Phone / Alternate Number:</h3>
                    <p className="text">6000192289 / 6000192289</p>
                </div>
                <div className="description flex">
                    <h3>Email ID:</h3>
                    <p className="text">sharmaMintu@gmail.com</p>
                </div>
                <div className="description flex">
                    <h3>Address:</h3>
                    <p className="text">House No. 60, Ashram Road, Lachitnagar, Guwahati, Assam</p>
                </div>
            </div>

            <hr />

                <div className="tabs">
                    <div className="tabs-list flex align-center gap-10">
                        <h3 className="active">Purchases</h3>
                        <h3>Payments</h3>
                    </div>
                    <div className="tabs-content">
                        {/* <!-- COLLECTIONS LIST --> */}
                        <div className="v-purchases">
                            <div className="v-purchases-heading flex align-start j-between">
                                <h2>Purchases</h2>
                                <div className="action-btn flex">
                                    <button className="btn-primary" type="button" onclick="addVendorPurchase()">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="plus-circle"
                                            className="">
                                            <path fill=""
                                                d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Zm4-9H13V8a1,1,0,0,0-2,0v3H8a1,1,0,0,0,0,2h3v3a1,1,0,0,0,2,0V13h3a1,1,0,0,0,0-2Z">
                                            </path>
                                        </svg>
                                        <span className="text">Add a Purchase</span>
                                    </button>
                                </div>
                            </div>
                            <div className="purchases-table">
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
                                            <th className=""></th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        <tr>
                                            <td><input type="checkbox" name="" id="" onchange="toggleHighlight(this)"
                                                className="row-checkbox" /></td>
                                            <td>1</td>
                                            <td className="text">19-Mar-2024</td>
                                            <td className="text">&#8377; <span>50,000</span></td>
                                            <td className="text">Cash</td>
                                            <td className="text">Bought for false ceiling </td>
                                            <td className="flex">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                    onclick="editVendorPurchase()">
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
                                            <td>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="view-all"
                                                    onclick="openInventory()">
                                                    <path fill=""
                                                        d="M12,7a2,2,0,1,0-2-2A2,2,0,0,0,12,7Zm0,10a2,2,0,1,0,2,2A2,2,0,0,0,12,17Zm0-7a2,2,0,1,0,2,2A2,2,0,0,0,12,10Z">
                                                    </path>
                                                </svg>
                                            </td>
                                        </tr>
                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <th colspan="6">Total</th>
                                            <th colspan="2">&#8377; <span>50,000</span></th>
                                        </tr>
                                    </tfoot>
                                </table>
                            </div>
                        </div>

                        {/* <!-- cLIENT EXPENSES  --> */}
                        <div className="v-payments hide">
                            <div className="v-payments-heading flex align-start j-between">
                                <h2>Payments</h2>
                                <div className="action-btn flex">
                                    <button className="btn-primary" type="button" onclick="addVendorPayments()">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="plus-circle"
                                            className="">
                                            <path fill=""
                                                d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Zm4-9H13V8a1,1,0,0,0-2,0v3H8a1,1,0,0,0,0,2h3v3a1,1,0,0,0,2,0V13h3a1,1,0,0,0,0-2Z">
                                            </path>
                                        </svg>
                                        <span className="text">Add a Payment</span>
                                    </button>
                                </div>
                            </div>
                            <div className="vendor-payments-table">
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
                                            <td><input type="checkbox" name="" id="" onchange="toggleHighlight(this)"
                                                className="row-checkbox" /></td>
                                            <td>1</td>
                                            <td className="text">19-Mar-2024</td>
                                            <td className="text">&#8377; <span>50,000</span></td>
                                            <td className="text">Cash</td>
                                            <td className="text">Bought for false ceiling </td>
                                            <td className="text">Project No 1A</td>
                                            <td className="flex">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                    onclick="editVendorPayments()">
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
    )
}

export default SecondSlideVendor