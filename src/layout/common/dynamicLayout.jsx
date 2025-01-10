import LayoutContextProvider from "@/context/layoutContext";
import ItemDetailsContextProvider from "@/context/secondSlideContext";
import MainAppContextProvider from "@/context/firstSlideContext";
import SubAppContextProvider from "@/context/secondSlideContext";

function DynamicLayout({ children }) {
    return (

        <div className="right">
            <LayoutContextProvider>
                <MainAppContextProvider>
                    {/* <!-- FIRST SLIDE  --> */}
                    {children[0] && children[0]}
                </MainAppContextProvider>

                <SubAppContextProvider>
                    {/* <!-- SECOND SLIDE  --> */}
                    {children[1] && children[1]}
                </SubAppContextProvider>
                {/* <!-- POPUP WINDOWS --> */}
                {children[2] && children[2]}
            </LayoutContextProvider>
            <div className="section-popup hide"></div>
        </div>

    )
}

export default DynamicLayout;