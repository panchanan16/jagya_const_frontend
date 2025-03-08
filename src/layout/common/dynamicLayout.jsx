import LayoutContextProvider from "@/context/layoutContext";
import ItemDetailsContextProvider from "@/context/secondSlideContext";
import MainAppContextProvider from "@/context/firstSlideContext";
import SubAppContextProvider from "@/context/secondSlideContext";

function DynamicLayout({ children }) {
    return (

        <div className="right">
            {/* <LayoutContextProvider> */}
                <MainAppContextProvider>
                    {children && children}
                </MainAppContextProvider>
            <div className="section-popup hide"></div>
        </div>

    )
}

export default DynamicLayout;