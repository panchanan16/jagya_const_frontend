import PageLayout from "@/layout/common/dynamicPageLayout";
import FirstSlide from "../modules/clientsModule/firstSlide";
import SecondSlide from "../modules/clientsModule/secondSlide";
import DynamicLayout from "@/layout/common/dynamicLayout";
import AddClientForm from "@/forms/addClient/addClientForm";
import { Outlet } from "react-router";


function ClientPage() {
    return (
        <PageLayout>
            <DynamicLayout>
                <FirstSlide />
                <Outlet />
                {/* <SecondSlide />
                <AddClientForm /> */}
            </DynamicLayout>
        </PageLayout>
    )
}

export default ClientPage;