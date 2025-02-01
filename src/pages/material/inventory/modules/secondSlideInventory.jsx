import SecondSlideLayout from '@/layout/common/secondSlideLayout'
import React from 'react'
import { Link } from 'react-router-dom'

function SecondSlideInventory() {
    return (
        <SecondSlideLayout>
            <main>
                <Link to='/inventory'>
                    <div class="main-btn flex">
                        <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"
                            id="arrow-left" class="main-svg" onclick="openProjectDetails('first-slide', this)">
                            <path fill=""
                                d="M17,11H9.41l3.3-3.29a1,1,0,1,0-1.42-1.42l-5,5a1,1,0,0,0-.21.33,1,1,0,0,0,0,.76,1,1,0,0,0,.21.33l5,5a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L9.41,13H17a1,1,0,0,0,0-2Z">
                            </path>
                        </svg>
                    </div>
                </Link>

                <div class="header-text">
                    <h2>Panchanan Deka</h2>
                </div>

                <div class="contents grid gtc-2 gap-10">
                    <div class="description flex align-center gap-5">
                        <h3>Phone / Alternate Number:</h3>
                        <p class="text">6002649802 / 7636896075</p>
                    </div>
                    <div class="description flex align-center gap-5">
                        <h3>House type:</h3>
                        <p class="text">Assam Type</p>
                    </div>
                </div>
                <hr />
                <div class="v-inventory">
                    <div class="v-inventory-heading flex align-start j-between">
                        <h3 class="heading">Inventory</h3>
                        <div class="action-btn flex">
                            <button class="btn-primary" type="button" onclick="addInventoryItem()">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="plus-circle"
                                    class="">
                                    <path fill=""
                                        d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Zm4-9H13V8a1,1,0,0,0-2,0v3H8a1,1,0,0,0,0,2h3v3a1,1,0,0,0,2,0V13h3a1,1,0,0,0,0-2Z">
                                    </path>
                                </svg>
                                <span class="text">Add an Item</span>
                            </button>
                        </div>
                    </div>
                    <div class="description flex align-center gap-5">
                        <h3>Total amount:</h3>
                        <p class="text">&#8377; <span>50,000</span></p>
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <th><input type="checkbox" name="checkbox" class="select-all" /></th>
                                <th class="">No.</th>
                                <th class="">Item</th>
                                <th class="">Quantity</th>
                                <th class="">Rate</th>
                                <th class="">Amount</th>
                                <th class=""></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><input type="checkbox" name="" id="" onchange="toggleHighlight(this)"
                                    class="row-checkbox" /></td>
                                <td class="text">1</td>
                                <td class="text">Cement</td>
                                <td class="text">10</td>
                                <td class="text">100</td>
                                <td class="text">&#8377; <span>1,000</span></td>
                                <td>
                                    <div class="menu-dropdown">
                                        <div class="dropdown-icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                class="view-all">
                                                <path fill=""
                                                    d="M12,7a2,2,0,1,0-2-2A2,2,0,0,0,12,7Zm0,10a2,2,0,1,0,2,2A2,2,0,0,0,12,17Zm0-7a2,2,0,1,0,2,2A2,2,0,0,0,12,10Z">
                                                </path>
                                            </svg>
                                        </div>
                                        <div class="menu-dropdown-list flex align-center flex-column">
                                            <p class="title flex align-center gap-5" onclick="editProject()">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                    class="svg-18">
                                                    <path fill=""
                                                        d="M21,12a1,1,0,0,0-1,1v6a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V5A1,1,0,0,1,5,4h6a1,1,0,0,0,0-2H5A3,3,0,0,0,2,5V19a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V13A1,1,0,0,0,21,12ZM6,12.76V17a1,1,0,0,0,1,1h4.24a1,1,0,0,0,.71-.29l6.92-6.93h0L21.71,8a1,1,0,0,0,0-1.42L17.47,2.29a1,1,0,0,0-1.42,0L13.23,5.12h0L6.29,12.05A1,1,0,0,0,6,12.76ZM16.76,4.41l2.83,2.83L18.17,8.66,15.34,5.83ZM8,13.17l5.93-5.93,2.83,2.83L10.83,16H8Z">
                                                    </path>
                                                </svg>
                                                <span class="text">Edit</span>
                                            </p>
                                            <p class="title flex align-center gap-5" onclick="confirmAlert()">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                    class="svg-18">
                                                    <path fill=""
                                                        d="M10,18a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,10,18ZM20,6H16V5a3,3,0,0,0-3-3H11A3,3,0,0,0,8,5V6H4A1,1,0,0,0,4,8H5V19a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3V8h1a1,1,0,0,0,0-2ZM10,5a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1V6H10Zm7,14a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V8H17Zm-3-1a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,14,18Z">
                                                    </path>
                                                </svg>
                                                <span class="text">Delete</span>
                                            </p>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </main>
        </SecondSlideLayout>
    )
}

export default SecondSlideInventory