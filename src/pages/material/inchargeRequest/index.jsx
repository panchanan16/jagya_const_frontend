import DynamicLayout from '@/layout/common/dynamicLayout'
import PageLayout from '@/layout/common/dynamicPageLayout'
import React from 'react'
import { Outlet } from 'react-router-dom'
import FirstSlideInchargeReq from './modules/firstSlideInchargeReq'


function InchargeReqPage() {
    return (
        <PageLayout>
            <DynamicLayout>
                <FirstSlideInchargeReq />
                <Outlet />
            </DynamicLayout>
        </PageLayout>
    )
}

export default InchargeReqPage;