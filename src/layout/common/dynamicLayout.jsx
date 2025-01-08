import PopupContextProvider from "@/context/popupContext"

function DynamicLayout({ children }) {
    return (
        <PopupContextProvider>
            <div className="right">
                {/* <!-- FIRST SLIDE  --> */}
                {/* <!-- SECOND SLIDE  --> */}
                {/* <!-- POPUP WINDOWS --> */}
                {children}
                <div className="section-popup hide"></div>
            </div>
        </PopupContextProvider>
    )
}

export default DynamicLayout;