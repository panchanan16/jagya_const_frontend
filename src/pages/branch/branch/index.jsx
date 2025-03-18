import DynamicLayout from '@/layout/common/dynamicLayout'
import PageLayout from '@/layout/common/dynamicPageLayout'
import React from 'react'
import FirstSlideBranchList from './modules/firstSlideBranchList'
import { Outlet } from 'react-router-dom'

function BranchListPage() {
  return (
    <PageLayout>
        <DynamicLayout>
            <FirstSlideBranchList />
            <Outlet />
        </DynamicLayout>
    </PageLayout>
  )
}

export default BranchListPage