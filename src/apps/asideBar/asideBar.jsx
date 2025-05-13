import AsideNavlink from "@/components/asideLink/asideNavlink";
import asideMenuItems from "@/utils/others/asideMenu";
import React from "react";

function AsideBar() {
  console.log("I am aside bar rendering");
  return (
    <div className="left">
      <div className="logo flex align-center">
        {/* <img src="/img/logo.png" alt="Logo" /> */}
        <h3 className="uppercase">JAGYA CONSTRUCTION</h3>
      </div>
        <div className="side-menu flex align-center j-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            id="angle-double-right"
            className="sideArrow"
          >
            <path d="M8.46,8.29A1,1,0,1,0,7,9.71L9.34,12,7,14.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l3-3a1,1,0,0,0,0-1.42Zm8.5,3-3-3a1,1,0,0,0-1.42,1.42L14.84,12l-2.3,2.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l3-3A1,1,0,0,0,17,11.29Z"></path>
          </svg>
        </div>
      <nav>
        <ul>
          {asideMenuItems &&
            asideMenuItems.map((item, ind) => (
              <AsideNavlink
                key={ind}
                name={item.name}
                redirect={item.redirect}
                submenu={item.submenu}
                SvgImg={item.svgImg}
              />
            ))}
        </ul>
      </nav>
    </div>
  );
}

export default AsideBar;
