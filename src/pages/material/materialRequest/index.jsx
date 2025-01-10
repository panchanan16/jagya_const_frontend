import DynamicLayout from "@/layout/common/dynamicLayout"
import PageLayout from "@/layout/common/dynamicPageLayout"
import FirstSlide from "./modules/firstSlide"
import SecondSlide from "./modules/secondSlide"


function MaterialRequestPage() {
    return (
        <PageLayout>
            <DynamicLayout>
               <FirstSlide />
               <SecondSlide />
            </DynamicLayout>
        </PageLayout>
    )
}

export default MaterialRequestPage