import DynamicLayout from "@/layout/common/dynamicLayout";
import PageLayout from "@/layout/common/dynamicPageLayout";
import FirstSlideFinance from "@/pages/accounting/modules/financeModule/firstSlideFinance";
import { Outlet } from "react-router-dom";


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