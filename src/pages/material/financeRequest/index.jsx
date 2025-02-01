import DynamicLayout from '@/layout/common/dynamicLayout'
import PageLayout from '@/layout/common/dynamicPageLayout'
import React from 'react'
import { Outlet } from 'react-router-dom'
import FirstSlideFinanceReq from './modules/firstSlideFinanceReq'

function FinanceRequestPage() {
    return (
        <PageLayout>
            <DynamicLayout>
                <FirstSlideFinanceReq />
                <Outlet />
            </DynamicLayout>
        </PageLayout>
    )
}

export default FinanceRequestPage