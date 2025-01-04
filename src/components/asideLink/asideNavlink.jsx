import { useState } from "react"

function AsideNavlink({ name, submenu }) {
    const [active, setactive] = useState(false)

    function openSubmenu() {
        setactive(!active)
    }

    return (
        <li className={active ? 'active':''} onClick={openSubmenu}>
            <a className="flex align-center gap-5">
                <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" id="rupee-sign"
                    className="icon">
                    <path
                        d="M18 7h-2.21a5.49 5.49 0 0 0-1-2H18a1 1 0 0 0 0-2H7a1 1 0 0 0 0 2h3.5a3.5 3.5 0 0 1 3.15 2H7a1 1 0 0 0 0 2h7a3.5 3.5 0 0 1-3.45 3H7a.7.7 0 0 0-.14 0 .65.65 0 0 0-.2 0 .69.69 0 0 0-.19.1l-.12.07a.75.75 0 0 0-.14.17 1.1 1.1 0 0 0-.09.14.61.61 0 0 0 0 .18A.65.65 0 0 0 6 13a.7.7 0 0 0 0 .14.65.65 0 0 0 0 .2.69.69 0 0 0 .1.19s0 .08.07.12l6 7a1 1 0 0 0 1.52-1.3L9.18 14h1.32A5.5 5.5 0 0 0 16 9h2a1 1 0 0 0 0-2Z">
                    </path>
                </svg>
                <span className="text">{name}</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="angle-right"
                    className={`icon svg-secondary arrow ${active ? 'active':''}`}>
                    <path
                        d="M14.83,11.29,10.59,7.05a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41L12.71,12,9.17,15.54a1,1,0,0,0,0,1.41,1,1,0,0,0,.71.29,1,1,0,0,0,.71-.29l4.24-4.24A1,1,0,0,0,14.83,11.29Z">
                    </path>
                </svg>
            </a>
            <div className={`sub-menu ${active ? 'active':''}`}>
                {
                    submenu.length > 0 && submenu.map((el) => (
                        <p onclick="location.href=`/finances`">{el}</p>
                    ))
                }
            </div>
        </li>
    )
}

export default AsideNavlink