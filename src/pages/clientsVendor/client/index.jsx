import PageLayout from "@/layout/common/dynamicPageLayout";
import FirstSlide from "./modules/firstSlide";
import DynamicLayout from "@/layout/common/dynamicLayout";
import { Outlet } from "react-router-dom";


function ClientPage() {
    return (
        <PageLayout>
            <DynamicLayout>
                <FirstSlide />
                <Outlet />       
            </DynamicLayout>
        </PageLayout>
    )
}

export default ClientPage;