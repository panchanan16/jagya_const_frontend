import AsideNavlink from '@/components/asideLink/asideNavlink'
import React from 'react'

function AsideBar() {
  return (
    <div class="left">
    <div class="logo flex align-center gap-5">
        <img src="/img/logo.png" alt="Logo" />
        <div class="logo-title">
            <h3 class="uppercase">JAGYA CONSTRUCTION</h3>
        </div>
    </div>
    <nav>
        <div class="side-menu flex align-center j-center hide">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="angle-double-right" class="svg-25 sideArrow"><path d="M8.46,8.29A1,1,0,1,0,7,9.71L9.34,12,7,14.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l3-3a1,1,0,0,0,0-1.42Zm8.5,3-3-3a1,1,0,0,0-1.42,1.42L14.84,12l-2.3,2.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l3-3A1,1,0,0,0,17,11.29Z"></path></svg>
        </div>
        <ul class="nav-list">
            <li onclick="location.href = ``">
                <a class="flex align-center gap-5">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="analytics" class="icon"><path d="M5,12a1,1,0,0,0-1,1v8a1,1,0,0,0,2,0V13A1,1,0,0,0,5,12ZM10,2A1,1,0,0,0,9,3V21a1,1,0,0,0,2,0V3A1,1,0,0,0,10,2ZM20,16a1,1,0,0,0-1,1v4a1,1,0,0,0,2,0V17A1,1,0,0,0,20,16ZM15,8a1,1,0,0,0-1,1V21a1,1,0,0,0,2,0V9A1,1,0,0,0,15,8Z"></path></svg>
                    <span class="text">Dashboard</span>
                </a>
            </li>
            <li onclick="location.href = `/`">
                <a class="flex align-center gap-5">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="folder" class="icon"><path d="M19,5.5H12.72l-.32-1a3,3,0,0,0-2.84-2H5a3,3,0,0,0-3,3v13a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V8.5A3,3,0,0,0,19,5.5Zm1,13a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V5.5a1,1,0,0,1,1-1H9.56a1,1,0,0,1,.95.68l.54,1.64A1,1,0,0,0,12,7.5h7a1,1,0,0,1,1,1Z"></path></svg>
                    <span class="text">Projects</span>
                </a>
            </li>

            <li className='active'>
                <a class="flex align-center gap-5">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="users-alt" class="icon">
                        <path
                            d="M12.3,12.22A4.92,4.92,0,0,0,14,8.5a5,5,0,0,0-10,0,4.92,4.92,0,0,0,1.7,3.72A8,8,0,0,0,1,19.5a1,1,0,0,0,2,0,6,6,0,0,1,12,0,1,1,0,0,0,2,0A8,8,0,0,0,12.3,12.22ZM9,11.5a3,3,0,1,1,3-3A3,3,0,0,1,9,11.5Zm9.74.32A5,5,0,0,0,15,3.5a1,1,0,0,0,0,2,3,3,0,0,1,3,3,3,3,0,0,1-1.5,2.59,1,1,0,0,0-.5.84,1,1,0,0,0,.45.86l.39.26.13.07a7,7,0,0,1,4,6.38,1,1,0,0,0,2,0A9,9,0,0,0,18.74,11.82Z">
                        </path>
                    </svg>
                    <span class="text">Clients & Vendors</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="angle-right"
                        class="icon svg-secondary arrow active">
                        <path
                            d="M14.83,11.29,10.59,7.05a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41L12.71,12,9.17,15.54a1,1,0,0,0,0,1.41,1,1,0,0,0,.71.29,1,1,0,0,0,.71-.29l4.24-4.24A1,1,0,0,0,14.83,11.29Z">
                        </path>
                    </svg>
                </a>
                <div class="sub-menu active">
                    <p onclick="location.href=`/clients-prospects`">Clients</p>
                    <p onclick="location.href=`/vendors-suppliers`">Vendors</p>
                </div>
            </li>
            <AsideNavlink name="Accounting" submenu={['Finance', 'Expense']} />          
            <li>
                <a class="flex align-center gap-5">
                    <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" id="briefcase" class="svg-18"><path d="M21,6H17V5a3,3,0,0,0-3-3H10A3,3,0,0,0,7,5V6H3A1,1,0,0,0,2,7v4a3,3,0,0,0,1,2.22V19a3,3,0,0,0,3,3H18a3,3,0,0,0,3-3V13.22A3,3,0,0,0,22,11V7A1,1,0,0,0,21,6ZM9,5a1,1,0,0,1,1-1h4a1,1,0,0,1,1,1V6H9ZM19,19a1,1,0,0,1-1,1H6a1,1,0,0,1-1-1V14H7v1a1,1,0,0,0,2,0V14h6v1a1,1,0,0,0,2,0V14h2Zm1-8a1,1,0,0,1-1,1H17V11a1,1,0,0,0-2,0v1H9V11a1,1,0,0,0-2,0v1H5a1,1,0,0,1-1-1V8H20Z"></path></svg>
                    <span class="text">Materials</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="angle-right"
                        class="icon svg-secondary arrow">
                        <path
                            d="M14.83,11.29,10.59,7.05a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41L12.71,12,9.17,15.54a1,1,0,0,0,0,1.41,1,1,0,0,0,.71.29,1,1,0,0,0,.71-.29l4.24-4.24A1,1,0,0,0,14.83,11.29Z">
                        </path>
                    </svg>
                </a>
                <div class="sub-menu">
                    <p onclick="location.href=`/inventory`">Inventory</p>
                    <p onclick="location.href=`/request-materials`">Material Requests</p>
                    <p onclick="location.href=`/incharge`">Incharge</p>
                </div>
            </li>
            <li>
                <a class="flex align-center gap-5">
                    <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" id="constructor" class="svg-18"><path d="M20,9.67V9.5a7.95,7.95,0,0,0-5.59-7.62l-.06,0a8.32,8.32,0,0,0-2.59-.36A8.21,8.21,0,0,0,4,9.67a3,3,0,0,0,0,5.66,8,8,0,0,0,8,7.17h.23a8.13,8.13,0,0,0,7.68-7.16A3,3,0,0,0,20,9.67ZM12.18,20.5a6,6,0,0,1-6.09-5H17.86A6.09,6.09,0,0,1,12.18,20.5Zm6.82-7H5a1,1,0,0,1,0-2H7a1,1,0,0,0,0-2H6A6.4,6.4,0,0,1,9,4.35V7.5a1,1,0,0,0,2,0V3.59a7.34,7.34,0,0,1,.82-.09H12a6.64,6.64,0,0,1,1,.09V7.5a1,1,0,0,0,2,0V4.32a6.65,6.65,0,0,1,1.18.87A6,6,0,0,1,18,9.5H17a1,1,0,0,0,0,2h2a1,1,0,0,1,0,2Z"></path></svg>
                    <span class="text">Labours</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="angle-right"
                        class="icon svg-secondary arrow">
                        <path
                            d="M14.83,11.29,10.59,7.05a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41L12.71,12,9.17,15.54a1,1,0,0,0,0,1.41,1,1,0,0,0,.71.29,1,1,0,0,0,.71-.29l4.24-4.24A1,1,0,0,0,14.83,11.29Z">
                        </path>
                    </svg>
                </a>
                <div class="sub-menu">
                    <p onclick="location.href=`/labourList`">Labour List</p>
                    <p onclick="location.href=`/contractors`">Contractor List</p>
                    <p onclick="location.href=`/labourPayments`">Contractor Payments</p>
                </div>
            </li>
            <li>
                <a class="flex align-center gap-5">
                    <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" id="code-branch" class="svg-18"><path  d="M17 6.06a3 3 0 0 0-1.15 5.77A2 2 0 0 1 14 13.06h-4a3.91 3.91 0 0 0-2 .56V7.88a3 3 0 1 0-2 0v8.36a3 3 0 1 0 2.16.05A2 2 0 0 1 10 15.06h4a4 4 0 0 0 3.91-3.16A3 3 0 0 0 17 6.06Zm-10-2a1 1 0 1 1-1 1 1 1 0 0 1 1-1Zm0 16a1 1 0 1 1 1-1 1 1 0 0 1-1 1Zm10-10a1 1 0 1 1 1-1 1 1 0 0 1-1 1Z"></path></svg>
                    <span class="text">Branches</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="angle-right"
                        class="icon svg-secondary arrow">
                        <path
                            d="M14.83,11.29,10.59,7.05a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41L12.71,12,9.17,15.54a1,1,0,0,0,0,1.41,1,1,0,0,0,.71.29,1,1,0,0,0,.71-.29l4.24-4.24A1,1,0,0,0,14.83,11.29Z">
                        </path>
                    </svg>
                </a>
                <div class="sub-menu">
                    <p onclick="location.href=``">Branch List</p>
                    <p onclick="location.href=``">Branch Requests</p>
                </div>
            </li>

            <li class="">
                <a class="flex align-center gap-5">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="user-square" class="icon">
                        <path
                            d="M14.81,12.28a3.73,3.73,0,0,0,1-2.5,3.78,3.78,0,0,0-7.56,0,3.73,3.73,0,0,0,1,2.5A5.94,5.94,0,0,0,6,16.89a1,1,0,0,0,2,.22,4,4,0,0,1,7.94,0A1,1,0,0,0,17,18h.11a1,1,0,0,0,.88-1.1A5.94,5.94,0,0,0,14.81,12.28ZM12,11.56a1.78,1.78,0,1,1,1.78-1.78A1.78,1.78,0,0,1,12,11.56ZM19,2H5A3,3,0,0,0,2,5V19a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V5A3,3,0,0,0,19,2Zm1,17a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V5A1,1,0,0,1,5,4H19a1,1,0,0,1,1,1Z">
                        </path>
                    </svg>
                    <span class="text">User Manager</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="angle-right"
                        class="icon svg-secondary arrow">
                        <path
                            d="M14.83,11.29,10.59,7.05a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41L12.71,12,9.17,15.54a1,1,0,0,0,0,1.41,1,1,0,0,0,.71.29,1,1,0,0,0,.71-.29l4.24-4.24A1,1,0,0,0,14.83,11.29Z">
                        </path>
                    </svg>
                {/* </a> */}
                <div class="sub-menu">
                    <p onclick="location.href=`/users`">Users</p>
                    <p>Security & Access</p>
                </div>
                </a>
            </li>
            <li class="" onclick="openNotification(this)">
                <a class="flex align-center gap-5">
                    <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" id="bell"
                        class="icon">
                        <path fill="##000000"
                            d="M18,13.18V10a6,6,0,0,0-5-5.91V3a1,1,0,0,0-2,0V4.09A6,6,0,0,0,6,10v3.18A3,3,0,0,0,4,16v2a1,1,0,0,0,1,1H8.14a4,4,0,0,0,7.72,0H19a1,1,0,0,0,1-1V16A3,3,0,0,0,18,13.18ZM8,10a4,4,0,0,1,8,0v3H8Zm4,10a2,2,0,0,1-1.72-1h3.44A2,2,0,0,1,12,20Zm6-3H6V16a1,1,0,0,1,1-1H17a1,1,0,0,1,1,1Z">
                        </path>
                    </svg>
                    <span class="text">Notifications</span>
                    <span id="notification-count" class="btn-warning">5</span>
                </a>
            </li>

            <li class="" onclick="location.href=`/settings`">
                <a class="flex align-center gap-5">
                    <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" id="setting"
                        class="icon">
                        <path fill=""
                            d="M19.9 12.66a1 1 0 0 1 0-1.32l1.28-1.44a1 1 0 0 0 .12-1.17l-2-3.46a1 1 0 0 0-1.07-.48l-1.88.38a1 1 0 0 1-1.15-.66l-.61-1.83a1 1 0 0 0-.95-.68h-4a1 1 0 0 0-1 .68l-.56 1.83a1 1 0 0 1-1.15.66L5 4.79a1 1 0 0 0-1 .48L2 8.73a1 1 0 0 0 .1 1.17l1.27 1.44a1 1 0 0 1 0 1.32L2.1 14.1a1 1 0 0 0-.1 1.17l2 3.46a1 1 0 0 0 1.07.48l1.88-.38a1 1 0 0 1 1.15.66l.61 1.83a1 1 0 0 0 1 .68h4a1 1 0 0 0 .95-.68l.61-1.83a1 1 0 0 1 1.15-.66l1.88.38a1 1 0 0 0 1.07-.48l2-3.46a1 1 0 0 0-.12-1.17ZM18.41 14l.8.9-1.28 2.22-1.18-.24a3 3 0 0 0-3.45 2L12.92 20h-2.56L10 18.86a3 3 0 0 0-3.45-2l-1.18.24-1.3-2.21.8-.9a3 3 0 0 0 0-4l-.8-.9 1.28-2.2 1.18.24a3 3 0 0 0 3.45-2L10.36 4h2.56l.38 1.14a3 3 0 0 0 3.45 2l1.18-.24 1.28 2.22-.8.9a3 3 0 0 0 0 3.98Zm-6.77-6a4 4 0 1 0 4 4 4 4 0 0 0-4-4Zm0 6a2 2 0 1 1 2-2 2 2 0 0 1-2 2Z">
                        </path>
                    </svg>
                    <span class="text">Settings</span>
                </a>
            </li>
            <li onclick="location.href=`/admin/logout`">
                <a class="flex align-center gap-5">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="signout" class="icon">
                        <path
                            d="M4,12a1,1,0,0,0,1,1h7.59l-2.3,2.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l4-4a1,1,0,0,0,.21-.33,1,1,0,0,0,0-.76,1,1,0,0,0-.21-.33l-4-4a1,1,0,1,0-1.42,1.42L12.59,11H5A1,1,0,0,0,4,12ZM17,2H7A3,3,0,0,0,4,5V8A1,1,0,0,0,6,8V5A1,1,0,0,1,7,4H17a1,1,0,0,1,1,1V19a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V16a1,1,0,0,0-2,0v3a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V5A3,3,0,0,0,17,2Z">
                        </path>
                    </svg>
                    <span class="text">Log Out</span>
                </a>
            </li>
        </ul>
    </nav>
</div>
  )
}

export default AsideBar


