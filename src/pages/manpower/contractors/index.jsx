import DynamicLayout from "@/layout/common/dynamicLayout";
import PageLayout from "@/layout/common/dynamicPageLayout";
import { Outlet } from "react-router-dom";
import FirstSlideContractor from "./modules/firstSlideContractor";

function ContractorPage() {
  return (
    <PageLayout>
      <DynamicLayout>
        <FirstSlideContractor />
        <Outlet />
      </DynamicLayout>
    </PageLayout>
  );
}

export default ContractorPage;
