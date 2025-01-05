import PageLayout from "@/layout/common/dynamicPageLayout";
import FirstSlide from "../modules/clientsModule/firstSlide";
import SecondSlide from "../modules/clientsModule/secondSlide";
import DynamicLayout from "@/layout/common/dynamicLayout";
import FirstSlideLayout from "@/layout/common/firstSlideLayout";
import SecondSlideLayout from "@/layout/common/secondSlideLayout";

function ClientPage() {
    return (
        <PageLayout>
            <DynamicLayout>
                <FirstSlideLayout Contents={FirstSlide} />
                <SecondSlideLayout Contents={SecondSlide} />
            </DynamicLayout>
        </PageLayout>
    )
}

export default ClientPage;