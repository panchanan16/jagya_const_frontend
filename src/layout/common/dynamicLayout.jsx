import LayoutContextProvider from "@/context/layoutContext";
import ItemDetailsContextProvider from "@/context/secondSlideContext";
import MainAppContextProvider from "@/context/firstSlideContext";
import SubAppContextProvider from "@/context/secondSlideContext";
import Alert from "@/components/alert/Alert";
import { Toaster } from "react-hot-toast";

function DynamicLayout({ children }) {
    return (

        <div className="right">
            {/* <LayoutContextProvider> */}
                <MainAppContextProvider>
                    {children && children}
                </MainAppContextProvider> 
                <Toaster />         
        </div>

    )
}

export default DynamicLayout;