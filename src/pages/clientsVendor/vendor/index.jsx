import DynamicLayout from '@/layout/common/dynamicLayout'
import PageLayout from '@/layout/common/dynamicPageLayout'
import FirstSlideLayout from '@/layout/common/firstSlideLayout'
import SecondSlideLayout from '@/layout/common/secondSlideLayout'
import FirstSlideVendor from '../modules/vendorModule/firstSlide'
import SecondSlideVendor from '../modules/vendorModule/secondSlide'


function VendorPage() {
    return (
        <PageLayout>
            <DynamicLayout>
                <FirstSlideLayout Contents={FirstSlideVendor} />
                <SecondSlideLayout Contents={SecondSlideVendor} />
            </DynamicLayout>
        </PageLayout>
    )
}

export default VendorPage