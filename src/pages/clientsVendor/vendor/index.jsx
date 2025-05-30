import DynamicLayout from '@/layout/common/dynamicLayout'
import PageLayout from '@/layout/common/dynamicPageLayout'
import FirstSlideVendor from './modules/firstSlideVendor'
import { Outlet } from 'react-router-dom'


function VendorPage() {
    return (
        <PageLayout>
            <DynamicLayout>
                <FirstSlideVendor />
                <Outlet />       
            </DynamicLayout>
        </PageLayout>
    )
}

export default VendorPage