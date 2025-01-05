import React from 'react'

function FirstSlide() {
    return (
        <main>
            <div class="heading">
                <h1>All Clients</h1>
                <p class="title">Find the list of clients here</p>
            </div>

            <div class="top-section flex align-center j-between">

                <div class="section-text">
                    <h2 class="flex gap-10">All Clients</h2>
                </div>
                <div class="utility-section flex align-center gap-10">
                    <div class="search flex align-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="search-icon">
                            <path
                                d="M21.71,20.29,18,16.61A9,9,0,1,0,16.61,18l3.68,3.68a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM11,18a7,7,0,1,1,7-7A7,7,0,0,1,11,18Z">
                            </path>
                        </svg>
                        <input type="text" id="searchQuery" oninput="search()" placeholder="Search" />
                    </div>
                    <div class="filter">
                        <div class="filter-button">
                            <button class="btn-filter flex align-center gap-5">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="filter"
                                    class="filter-icon">
                                    <path
                                        d="M19,2H5A3,3,0,0,0,2,5V6.17a3,3,0,0,0,.25,1.2l0,.06a2.81,2.81,0,0,0,.59.86L9,14.41V21a1,1,0,0,0,.47.85A1,1,0,0,0,10,22a1,1,0,0,0,.45-.11l4-2A1,1,0,0,0,15,19V14.41l6.12-6.12a2.81,2.81,0,0,0,.59-.86l0-.06A3,3,0,0,0,22,6.17V5A3,3,0,0,0,19,2ZM13.29,13.29A1,1,0,0,0,13,14v4.38l-2,1V14a1,1,0,0,0-.29-.71L5.41,8H18.59ZM20,6H4V5A1,1,0,0,1,5,4H19a1,1,0,0,1,1,1Z">
                                    </path>
                                </svg>
                                <span class="text">Filter</span>
                            </button>
                        </div>
                        <div class="filter-list">

                        </div>
                    </div>
                    <div class="add-button">
                        <button class="btn-primary" type="button" onclick="addClientsProspects()">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="plus-circle"
                                class="">
                                <path fill=""
                                    d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Zm4-9H13V8a1,1,0,0,0-2,0v3H8a1,1,0,0,0,0,2h3v3a1,1,0,0,0,2,0V13h3a1,1,0,0,0,0-2Z">
                                </path>
                            </svg>
                            <span class="text">Add a Client</span>
                        </button>
                    </div>

                </div>
            </div>

            <div class="main-table">
                <table>
                    <thead>
                        <tr>
                            <th><input type="checkbox" name="checkbox" class="select-all" /></th>
                            <th class="">No.</th>
                            <th class="">Name</th>
                            <th class="">Phone Number</th>
                            <th class="">Alternate Number</th>
                            <th class="">Email</th>
                            <th class="">Address</th>
                            <th class=""></th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td><input type="checkbox" name="" id="" onchange="toggleHighlight(this)"
                                class="row-checkbox" /></td>
                            <td>1</td>
                            <td class="text">Panchanan Deka</td>
                            <td class="text">+91 <span>6000192289</span></td>
                            <td class="text">+91 <span>6000192289</span></td>
                            <td class="text">dekapanchanan16534@gmail.com</td>
                            <td class="text">Guwahati, Assam</td>
                            <td class="flex">
                                <div class="menu-dropdown">
                                    <div class="dropdown-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                            class="view-all">
                                            <path fill=""
                                                d="M12,7a2,2,0,1,0-2-2A2,2,0,0,0,12,7Zm0,10a2,2,0,1,0,2,2A2,2,0,0,0,12,17Zm0-7a2,2,0,1,0,2,2A2,2,0,0,0,12,10Z">
                                            </path>
                                        </svg>
                                    </div>
                                    <div class="menu-dropdown-list flex align-center flex-column hide">
                                        <p class="title flex align-center gap-5"
                                            onclick="openProjectDetails('second-slide', this)">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                id="eye" class="svg-18">
                                                <path
                                                    d="M21.92,11.6C19.9,6.91,16.1,4,12,4S4.1,6.91,2.08,11.6a1,1,0,0,0,0,.8C4.1,17.09,7.9,20,12,20s7.9-2.91,9.92-7.6A1,1,0,0,0,21.92,11.6ZM12,18c-3.17,0-6.17-2.29-7.9-6C5.83,8.29,8.83,6,12,6s6.17,2.29,7.9,6C18.17,15.71,15.17,18,12,18ZM12,8a4,4,0,1,0,4,4A4,4,0,0,0,12,8Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,14Z">
                                                </path>
                                            </svg>
                                            <span class="text">View</span>
                                        </p>
                                        <p class="title flex align-center gap-5"
                                            onclick="confirmAlert()">
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
                    <tfoot>
                        <tr>
                            <td>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                    id="left-arrow-to-left">
                                    <path fill=""
                                        d="M21,11H9.41l2.3-2.29a1,1,0,1,0-1.42-1.42l-4,4a1,1,0,0,0-.21.33,1,1,0,0,0,0,.76,1,1,0,0,0,.21.33l4,4a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L9.41,13H21a1,1,0,0,0,0-2ZM3,3A1,1,0,0,0,2,4V20a1,1,0,0,0,2,0V4A1,1,0,0,0,3,3Z">
                                    </path>
                                </svg>
                            </td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                    id="arrow-to-right">
                                    <path fill=""
                                        d="M17.71,11.29l-4-4a1,1,0,1,0-1.42,1.42L14.59,11H3a1,1,0,0,0,0,2H14.59l-2.3,2.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l4-4a1,1,0,0,0,.21-.33,1,1,0,0,0,0-.76A1,1,0,0,0,17.71,11.29ZM21,4a1,1,0,0,0-1,1V19a1,1,0,0,0,2,0V5A1,1,0,0,0,21,4Z">
                                    </path>
                                </svg>
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </main>
    )
}

export default FirstSlide