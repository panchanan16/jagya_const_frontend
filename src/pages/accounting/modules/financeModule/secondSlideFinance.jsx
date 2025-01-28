import SecondSlideLayout from '@/layout/common/secondSlideLayout'
import React, { useState } from 'react'
import { Link } from 'react-router';

function SecondSlideFinance() {
    return (
        <SecondSlideLayout>
            <main>
                <Link to='/finance'>
                    <div className="main-btn flex">
                        <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"
                            id="arrow-left" className="main-svg" onclick="openProjectDetails('first-slide', this)">
                            <path fill=""
                                d="M17,11H9.41l3.3-3.29a1,1,0,1,0-1.42-1.42l-5,5a1,1,0,0,0-.21.33,1,1,0,0,0,0,.76,1,1,0,0,0,.21.33l5,5a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L9.41,13H17a1,1,0,0,0,0-2Z">
                            </path>
                        </svg>
                    </div>
                </Link>

                <div className="header-text">
                    <h2>Mintu Sharma</h2>
                </div>

                {/* <!-- DETAILS  --> */}
                <div className="contents grid gtc-2 gap-10">
                    <div className="description flex align-center gap-5">
                        <h3>Client Name:</h3>
                        <p className="text">Kankan Jyoti Nath</p>
                    </div>
                    <div className="description flex align-center gap-5">
                        <h3>Phone / Alternate Number:</h3>
                        <p className="text">6002649802 / 7636896075</p>
                    </div>
                    <div className="description flex align-center gap-5">
                        <h3>Email ID:</h3>
                        <p className="text">jyotikankan222@gmail.com</p>
                    </div>
                    <div className="description flex align-center gap-5">
                        <h3>Address:</h3>
                        <p className="text">House No. 60, Ashram Road, Lachitnagar, Guwahati, Assam</p>
                    </div>
                    <div className="description flex align-center gap-5">
                        <h3>House type:</h3>
                        <p className="text">Assam Type</p>
                    </div>
                    <div className="description flex align-center gap-5">
                        <h3>Site Description:</h3>
                        <p className="text">Assam Type of ghor juntu assamese hoi</p>
                    </div>
                    <div className="description flex align-center gap-5">
                        <h3>Project Initiated:</h3>
                        <p className="text">12-June-2024</p>
                    </div>
                    <div className="description flex align-center gap-5">
                        <h3>Project Duration:</h3>
                        <p className="text">1.5 years</p>
                    </div>
                </div>

                <hr />
                <div className="tabs">
                    <div className="tabs-list flex align-center gap-10">
                        <h3 className="">Installments</h3>
                        <h3 className="active">Expenses</h3>
                    </div>
                    <div className="tabs-content">
                        {/* <!-- COLLECTIONS LIST --> */}
                        <div className="c-installments hide">
                            <div className="c-installments-heading flex align-start j-between">
                                <h3 className="heading">Installments</h3>
                                <div className="action-btn flex">
                                    <button className="btn-primary" type="button" onclick="addInstallment()">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="plus-circle"
                                            className="">
                                            <path fill=""
                                                d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Zm4-9H13V8a1,1,0,0,0-2,0v3H8a1,1,0,0,0,0,2h3v3a1,1,0,0,0,2,0V13h3a1,1,0,0,0,0-2Z">
                                            </path>
                                        </svg>
                                        <span className="text">Add Installment</span>
                                    </button>
                                </div>
                            </div>
                            <div className="installment-section flex flex-column gap-10">
                                <div className="installment grid gtc-6 gap-10">
                                    <div className="data">
                                        <p className="title">Installment No.</p>
                                    </div>
                                    <div className="data">
                                        <p className="title">Date</p>
                                    </div>
                                    <div className="data">
                                        <p className="title">Amount</p>
                                    </div>
                                    <div className="data">
                                        <p className="title">Mode</p>
                                    </div>
                                    <div className="data">
                                        <p className="title">Remarks<span>(*optional)</span></p>
                                    </div>
                                    <div className="data action">
                                        <p className="title">Action</p>
                                    </div>
                                </div>
                                <div className="installment grid gtc-6 gap-10">
                                    <div className="data">
                                        <p className="info">1</p>
                                    </div>
                                    <div className="data">
                                        <p className="info">19-Jun-2024</p>
                                    </div>
                                    <div className="data">
                                        <p className="info">&#8377; <span>50,000</span></p>
                                    </div>
                                    <div className="data">
                                        <p className="info">Cash</p>
                                    </div>
                                    <div className="data">
                                        <p className="info">Anything less than 15 words</p>
                                    </div>
                                    <div className="data action">
                                        <div className="action-dropdown">
                                            <span className="action-icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                    className="svg-15">
                                                    <path fill=""
                                                        d="M12,7a2,2,0,1,0-2-2A2,2,0,0,0,12,7Zm0,10a2,2,0,1,0,2,2A2,2,0,0,0,12,17Zm0-7a2,2,0,1,0,2,2A2,2,0,0,0,12,10Z">
                                                    </path>
                                                </svg>
                                            </span>
                                            <div className="action-dropdown-list flex align-center flex-column hide">
                                                <p className="title flex align-center gap-5"
                                                    onclick="">
                                                    <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" id="share" className="svg-18"><path d="m21.707 11.293-8-8A1 1 0 0 0 12 4v3.545A11.015 11.015 0 0 0 2 18.5V20a1 1 0 0 0 1.784.62 11.456 11.456 0 0 1 7.887-4.049c.05-.006.175-.016.329-.026V20a1 1 0 0 0 1.707.707l8-8a1 1 0 0 0 0-1.414ZM14 17.586V15.5a1 1 0 0 0-1-1c-.255 0-1.296.05-1.562.085a14.005 14.005 0 0 0-7.386 2.948A9.013 9.013 0 0 1 13 9.5a1 1 0 0 0 1-1V6.414L19.586 12Z"></path></svg>
                                                    <span className="text">Share</span>
                                                </p>
                                                <p className="title flex align-center gap-5" onclick="editInstallment()">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                        className="svg-18">
                                                        <path fill=""
                                                            d="M21,12a1,1,0,0,0-1,1v6a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V5A1,1,0,0,1,5,4h6a1,1,0,0,0,0-2H5A3,3,0,0,0,2,5V19a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V13A1,1,0,0,0,21,12ZM6,12.76V17a1,1,0,0,0,1,1h4.24a1,1,0,0,0,.71-.29l6.92-6.93h0L21.71,8a1,1,0,0,0,0-1.42L17.47,2.29a1,1,0,0,0-1.42,0L13.23,5.12h0L6.29,12.05A1,1,0,0,0,6,12.76ZM16.76,4.41l2.83,2.83L18.17,8.66,15.34,5.83ZM8,13.17l5.93-5.93,2.83,2.83L10.83,16H8Z">
                                                        </path>
                                                    </svg>
                                                    <span className="text">Edit</span>
                                                </p>
                                                <p className="title flex align-center gap-5" onclick="confirmAlert()">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                        className="svg-18">
                                                        <path fill=""
                                                            d="M10,18a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,10,18ZM20,6H16V5a3,3,0,0,0-3-3H11A3,3,0,0,0,8,5V6H4A1,1,0,0,0,4,8H5V19a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3V8h1a1,1,0,0,0,0-2ZM10,5a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1V6H10Zm7,14a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V8H17Zm-3-1a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,14,18Z">
                                                        </path>
                                                    </svg>
                                                    <span className="text">Delete</span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- cLIENT EXPENSES  --> */}
                        <div className="c-expenses">
                            <div className="c-expenses-heading flex align-start j-between">
                                <h3 className="heading">Expenses</h3>                           
                            </div>
                            <table>
                                <thead>
                                    <tr>
                                        <th><input type="checkbox" name="checkbox" className="select-all" /></th>
                                        <th className="">No.</th>
                                        <th className="">Date</th>
                                        <th className="">Amount</th>
                                        <th className="">Mode</th>
                                        <th className="">Vendor Name</th>
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
                                        <td className="text">Khagen Mahanta</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </main>
        </SecondSlideLayout>
    )
}

export default SecondSlideFinance