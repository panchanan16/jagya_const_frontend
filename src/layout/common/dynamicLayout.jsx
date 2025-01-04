
function DynamicLayout({children}) {
    return (
        <div class="right">
            {/* <!-- FIRST SLIDE  --> */}
            {/* <!-- SECOND SLIDE  --> */}
            {children}

            {/* <!-- POPUP WINDOWS --> */}
            <div class="main-popup hide"></div>

            <div class="section-popup hide"></div>
        </div>
    )
}

export default DynamicLayout