import DynamicLayout from "@/layout/common/dynamicLayout";
import PageLayout from "@/layout/common/dynamicPageLayout";
import { Outlet } from "react-router-dom";
import FirstSlideInvoice from "./modules/firstSlideInvoice";

function InvoicePage() {
  return (
    <PageLayout>
      <DynamicLayout>
        <FirstSlideInvoice />
        <Outlet />
      </DynamicLayout>
    </PageLayout>
  );
}

export default InvoicePage;
