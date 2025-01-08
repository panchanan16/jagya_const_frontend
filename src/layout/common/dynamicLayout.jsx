import PopupContextProvider from "@/context/popupContext"

function DynamicLayout({ children }) {
    return (
        <PopupContextProvider>
            <div class="right">
                {/* <!-- FIRST SLIDE  --> */}
                {/* <!-- SECOND SLIDE  --> */}
                {/* <!-- POPUP WINDOWS --> */}
                {children}
                <div class="section-popup hide"></div>
            </div>
        </PopupContextProvider>
    )
}

export default DynamicLayout;