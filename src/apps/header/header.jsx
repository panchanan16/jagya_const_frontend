import React from 'react'

function Header() {
    console.log("I am rendering...")
    return (
        <header class="flex align-center j-between">
            <div class="slashRoutes flex align-center">
                <p>Dashboard<span>/</span></p>
                <p class="active">Projects</p>
            </div>
            <div class="header-icons flex align-center gap-10">
                <div class="notification-icon flex align-center j-center" onclick="openNotification(this)">
                    <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"
                        id="bell" class="lg-icon">
                        <path fill="##000000"
                            d="M18,13.18V10a6,6,0,0,0-5-5.91V3a1,1,0,0,0-2,0V4.09A6,6,0,0,0,6,10v3.18A3,3,0,0,0,4,16v2a1,1,0,0,0,1,1H8.14a4,4,0,0,0,7.72,0H19a1,1,0,0,0,1-1V16A3,3,0,0,0,18,13.18ZM8,10a4,4,0,0,1,8,0v3H8Zm4,10a2,2,0,0,1-1.72-1h3.44A2,2,0,0,1,12,20Zm6-3H6V16a1,1,0,0,1,1-1H17a1,1,0,0,1,1,1Z">
                        </path>
                    </svg>
                </div>

                <div class="dark-icon flex align-center gap-10">
                    <div class="mode flex align-center j-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="sun"
                            class="lg-icon">
                            <path
                                d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z">
                            </path>
                        </svg>
                    </div>
                    <div class="mode flex align-center j-center active">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="moon"
                            class="lg-icon">
                            <path
                                d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z">
                            </path>
                        </svg>
                    </div>
                </div>

                <div class="profile-icon flex gap-5">
                    <img src="/img/admin.jpg" alt="admin" />
                    <div class="profile-text">
                        <p>Howdy</p>
                        <p>Kankan Nath</p>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header