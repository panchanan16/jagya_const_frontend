import DynamicLayout from "@/layout/common/dynamicLayout"
import PageLayout from "@/layout/common/dynamicPageLayout"
import FirstSlideBranchDashboard from "./modules/firstSlideBranchDashboard"
import { Outlet } from "react-router-dom"


function BranchDashboard() {
  return (
     <PageLayout>
        <DynamicLayout>
            <FirstSlideBranchDashboard />
            <Outlet />
        </DynamicLayout>
     </PageLayout>
  )
}

export default BranchDashboard