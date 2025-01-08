import AccountMain from "@/pages/accounting/modules/accountMain";
import AccountSec from "@/pages/accounting/modules/accountSec";
import DynamicLayout from "@/layout/common/dynamicLayout";
import PageLayout from "@/layout/common/dynamicPageLayout";
import InstallmentForm from "@/forms/addInstallment/installmentForm";


function AccountPage() {
    return (
        <PageLayout>
            <DynamicLayout>
                <AccountMain /> 
                <AccountSec />  
                <InstallmentForm />        
            </DynamicLayout>
        </PageLayout>
    )
}

export default AccountPage;