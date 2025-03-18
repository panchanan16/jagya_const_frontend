import PageLayout from "@/layout/common/dynamicPageLayout";
import FirstSlide from "./modules/firstSlide";
import DynamicLayout from "@/layout/common/dynamicLayout";
import { Outlet } from "react-router-dom";
import Alert from "@/components/alert/Alert";

function ClientPage() {
  return (
    <PageLayout>
      <DynamicLayout>
        <FirstSlide />
        <Outlet />
      </DynamicLayout>
    </PageLayout>
  );
}

export default ClientPage;
