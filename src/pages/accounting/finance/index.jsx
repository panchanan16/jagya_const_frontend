import DynamicLayout from "@/layout/common/dynamicLayout";
import PageLayout from "@/layout/common/dynamicPageLayout";

import { Outlet } from "react-router-dom";
import FirstSlideFinance from "./modules/firstSlideFinance";


function FinancePage() {
    return (
        <PageLayout>
            <DynamicLayout>
                <FirstSlideFinance /> 
                <Outlet />     
            </DynamicLayout>
        </PageLayout>
    )
}

export default FinancePage;