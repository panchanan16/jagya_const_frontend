import AccountMain from "@/components/accounting/accountMain";
import AccountSec from "@/components/accounting/accountSec";
import DynamicLayout from "@/layout/common/dynamicLayout";
import FirstSlideLayout from "@/layout/common/firstSlideLayout";
import SecondSlideLayout from "@/layout/common/secondSlideLayout";



function AccountPage() {
    return (
        <DynamicLayout>
            <FirstSlideLayout Contents={AccountMain} />
            <SecondSlideLayout Contents={AccountSec} />
        </DynamicLayout>
    )
}

export default AccountPage;