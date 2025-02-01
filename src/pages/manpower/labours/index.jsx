import DynamicLayout from '@/layout/common/dynamicLayout'
import PageLayout from '@/layout/common/dynamicPageLayout'
import FirstSlideLabour from './modules/firstSlideLabour'
import { Outlet } from 'react-router'

function LabourPage() {
  return (
    <PageLayout>
        <DynamicLayout>
            <FirstSlideLabour />
            <Outlet />
        </DynamicLayout>
    </PageLayout>
  )
}

export default LabourPage