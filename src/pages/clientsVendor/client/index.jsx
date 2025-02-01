import PageLayout from "@/layout/common/dynamicPageLayout";
import FirstSlide from "../modules/clientsModule/firstSlide";
import SecondSlide from "../modules/clientsModule/secondSlide";
import DynamicLayout from "@/layout/common/dynamicLayout";
import AddClientForm from "@/forms/addClient/addClientForm";
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