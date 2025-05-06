import PageLayout from "@/layout/common/dynamicPageLayout";
import DynamicLayout from "@/layout/common/dynamicLayout";
import FirstSlideUsers from "./modules/firstSlideUsers";
import { Outlet } from "react-router-dom";

function UsersPage() {
  return (
    <PageLayout>
      <DynamicLayout>
        <FirstSlideUsers />
        <Outlet />
      </DynamicLayout>
    </PageLayout>
  );
}

export default UsersPage;
