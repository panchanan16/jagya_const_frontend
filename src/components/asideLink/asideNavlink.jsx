import { useState } from "react"
import { useNavigate } from "react-router";

function AsideNavlink({ name, redirect, submenu, SvgImg }) {
    const [active, setactive] = useState(false)
    let navigate = useNavigate();

    function openSubmenu() {
        if (redirect) { return navigate(redirect) }
        setactive(!active)
    }

    return (
        <li className={active ? 'active' : ''} onClick={openSubmenu}>
            <a className="flex align-center gap-5">
                {SvgImg && <SvgImg />}
                <span className="text">{name}</span>
                {
                    submenu.length > 0 && <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="angle-right"
                        className={`icon svg-secondary arrow ${active ? 'active' : ''}`}>
                        <path
                            d="M14.83,11.29,10.59,7.05a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41L12.71,12,9.17,15.54a1,1,0,0,0,0,1.41,1,1,0,0,0,.71.29,1,1,0,0,0,.71-.29l4.24-4.24A1,1,0,0,0,14.83,11.29Z">
                        </path>
                    </svg>
                }

            </a>
            <div className={`sub-menu ${active ? 'active' : ''}`}>
                {
                    submenu.length > 0 && submenu.map((el, ind) => (
                        <p key={ind} onClick={()=> navigate(`/${el.url}`)}>{el.name}</p>
                    ))
                }
            </div>
        </li>
    )
}

export default AsideNavlink