import MainAppContextProvider from "@/context/firstSlideContext";
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