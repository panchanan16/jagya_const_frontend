import DynamicLayout from '@/layout/common/dynamicLayout'
import PageLayout from '@/layout/common/dynamicPageLayout'
import React from 'react'
import { Outlet } from 'react-router-dom'
import FirstSlideBranchRequest from './modules/firstSlideBranchRequest'

function BranchRequestPage() {
  return (
    <PageLayout>
        <DynamicLayout>
            <FirstSlideBranchRequest />
            <Outlet />
        </DynamicLayout>
    </PageLayout>
  )
}

export default BranchRequestPage