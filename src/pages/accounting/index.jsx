import AccountMain from "@/pages/accounting/modules/accountMain";
import AccountSec from "@/pages/accounting/modules/accountSec";
import DynamicLayout from "@/layout/common/dynamicLayout";
import PageLayout from "@/layout/common/dynamicPageLayout";
import FirstSlideLayout from "@/layout/common/firstSlideLayout";
import SecondSlideLayout from "@/layout/common/secondSlideLayout";


function AccountPage() {
    return (
        <PageLayout>
            <DynamicLayout>
                <FirstSlideLayout Contents={AccountMain} />
                <SecondSlideLayout Contents={AccountSec} />
            </DynamicLayout>
        </PageLayout>
    )
}

export default AccountPage;