// import { useState } from "react"
// import { Link, useNavigate } from "react-router-dom";

// function AsideNavlink({ name, redirect, submenu, SvgImg }) {
//     const [active, setactive] = useState(false)
//     let navigate = useNavigate();

//     function openSubmenu(e) {
//         e.stopPropagation()
//         if (redirect) { return navigate(redirect) }
//         setactive(!active)
//     }

//     return (
//         <li className={active ? 'active' : ''} onClick={()=> openSubmenu(event)}>
//             <a className="flex align-center">
//                 {SvgImg && <SvgImg />}
//                 <span className="text">{name}</span>
//                 {
//                     submenu.length > 0 && <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="angle-right"
//                         className={`icon svg-secondary arrow ${active ? 'active' : ''}`}>
//                         <path
//                             d="M14.83,11.29,10.59,7.05a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41L12.71,12,9.17,15.54a1,1,0,0,0,0,1.41,1,1,0,0,0,.71.29,1,1,0,0,0,.71-.29l4.24-4.24A1,1,0,0,0,14.83,11.29Z">
//                         </path>
//                     </svg>
//                 }

//             </a>
//             <div className={`sub-menu ${active ? 'active' : ''}`}>
//                 {
//                     submenu.length > 0 && submenu.map((el, ind) => (
//                        <Link key={ind} to={`/${el.url}`}><p key={ind}>{el.name}</p></Link>
//                     ))
//                 }
//             </div>
//         </li>
//     )
// }

// export default AsideNavlink

import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./asideNavlink.module.css";

function AsideNavlink({ name, redirect, submenu, SvgImg }) {
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const location = useLocation();

  const toggleSubmenu = () => {
    setIsSubmenuOpen(!isSubmenuOpen);
  };

  const isActive = (path) => {
    return (
      location.pathname === path || location.pathname.startsWith(path + "/")
    );
  };

  const isParentActive = () => {
    if (redirect && isActive(redirect)) return true;
    if (submenu) {
      return submenu.some((item) => isActive(item.redirect));
    }
    return false;
  };

  return (
    <li className={styles.navItem}>
      {submenu.length > 0 ? (
        <>
          <button
            className={`${styles.navLink} ${styles.navButton} ${
              isParentActive() ? styles.active : ""
            } ${isSubmenuOpen ? styles.expanded : ""}`}
            onClick={toggleSubmenu}
            aria-expanded={isSubmenuOpen}
            aria-controls={`submenu-${name.replace(/\s+/g, "-").toLowerCase()}`}
          >
            <div className={styles.navContent}>
              <div className={styles.navIcon}>
                {SvgImg ? (
                  //   <div dangerouslySetInnerHTML={{ __html: SvgImg }} />
                  <SvgImg />
                ) : (
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <circle cx="12" cy="12" r="3" />
                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1 1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
                  </svg>
                )}
              </div>
              <span className={styles.navText}>{name}</span>
              <div className={styles.navArrow}>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className={styles.arrowIcon}
                >
                  <polyline points="6,9 12,15 18,9"></polyline>
                </svg>
              </div>
            </div>
          </button>

          <ul
            className={`${styles.submenu} ${
              isSubmenuOpen ? styles.submenuOpen : ""
            }`}
            id={`submenu-${name.replace(/\s+/g, "-").toLowerCase()}`}
            role="region"
            aria-labelledby={`button-${name
              .replace(/\s+/g, "-")
              .toLowerCase()}`}
          >
            {submenu.map((subItem, index) => (
              <li key={index} className={styles.submenuItem}>
                <Link
                  to={`/${subItem.url}`}
                  className={`${styles.submenuLink} ${
                    isActive(subItem.redirect) ? styles.submenuActive : ""
                  }`}
                >
                  <div className={styles.submenuContent}>
                    <div className={styles.submenuDot}></div>
                    <span className={styles.submenuText}>{subItem.name}</span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <Link
          to={redirect}
          className={`${styles.navLink} ${
            isActive(redirect) ? styles.active : ""
          }`}
        >
          <div className={styles.navContent}>
            <div className={styles.navIcon}>
              {SvgImg ? (
                // <div dangerouslySetInnerHTML={{ __html: SvgImg }} />
                <SvgImg />
              ) : (
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="12" cy="12" r="3" />
                  <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1 1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
                </svg>
              )}
            </div>
            <span className={styles.navText}>{name}</span>
          </div>
        </Link>
      )}
    </li>
  );
}

export default AsideNavlink;
