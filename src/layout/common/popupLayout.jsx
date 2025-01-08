import React from 'react'

function PopupLayout({ children, showPopup }) {
    return (
        <div class={`main-popup ${showPopup ? '' : 'hide'}`}>
            {children}
        </div>
    )
}

export default PopupLayout;