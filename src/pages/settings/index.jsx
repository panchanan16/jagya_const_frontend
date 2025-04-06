import DynamicLayout from "@/layout/common/dynamicLayout";
import PageLayout from "@/layout/common/dynamicPageLayout";
import { Outlet } from "react-router-dom";
import FirstSlideSettings from "./modules/firstSlideSettings";

function SettingsPage() {
  return (
    <PageLayout>
      <DynamicLayout>
        <FirstSlideSettings />
        <Outlet />
      </DynamicLayout>
    </PageLayout>
  );
}

export default SettingsPage;
