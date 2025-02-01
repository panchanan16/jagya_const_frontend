import DynamicLayout from "@/layout/common/dynamicLayout"
import PageLayout from "@/layout/common/dynamicPageLayout"
import FirstSlideMR from "./modules/firstSlide"
import { Outlet } from "react-router-dom"


function MaterialRequestPage() {
    return (
        <PageLayout>
            <DynamicLayout>
               <FirstSlideMR />
               <Outlet />
            </DynamicLayout>
        </PageLayout>
    )
}

export default MaterialRequestPage