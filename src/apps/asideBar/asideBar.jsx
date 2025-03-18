import AsideNavlink from '@/components/asideLink/asideNavlink'
import React from 'react'
import asideMenuItems from '@/utils/asideMenu'

function AsideBar() {
    console.log('I am aside bar rendering')
    return (
        <div className="left">
            <div className="logo flex align-center gap-5">
                <img src="/img/logo.png" alt="Logo" />
                <div className="logo-title">
                    <h3 className="uppercase">CONSTRUCTION</h3>
                </div>
            </div>
            <nav>
                <div className="side-menu flex align-center j-center hide">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="angle-double-right" className="svg-25 sideArrow"><path d="M8.46,8.29A1,1,0,1,0,7,9.71L9.34,12,7,14.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l3-3a1,1,0,0,0,0-1.42Zm8.5,3-3-3a1,1,0,0,0-1.42,1.42L14.84,12l-2.3,2.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l3-3A1,1,0,0,0,17,11.29Z"></path></svg>
                </div>
                <ul className="nav-list">
                    {
                        asideMenuItems && asideMenuItems.map((item, ind) => (
                            <AsideNavlink
                                key={ind}
                                name={item.name}
                                redirect={item.redirect}
                                submenu={item.submenu}
                                SvgImg={item.svgImg}
                            />
                        ))
                    }
                </ul>
            </nav>
        </div>
    )
}

export default AsideBar


