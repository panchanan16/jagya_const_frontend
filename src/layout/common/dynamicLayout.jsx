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

                {/* <SubAppContextProvider>
                    {children[1] && children[1]}
                </SubAppContextProvider> */}
                {/* <!-- POPUP WINDOWS --> */}
                {/* {children[2] && children[2]} */}
            {/* </LayoutContextProvider> */}
            <div className="section-popup hide"></div>
        </div>

    )
}

export default DynamicLayout;