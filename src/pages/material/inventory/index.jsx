import PageLayout from '@/layout/common/dynamicPageLayout'
import React from 'react'
import { Outlet } from 'react-router-dom'
import FirstSlideInventory from './modules/firstSlideInventory'
import DynamicLayout from '@/layout/common/dynamicLayout'

function InventoryPage() {
    return (
        <PageLayout>
            <DynamicLayout>
                <FirstSlideInventory />
                <Outlet />
            </DynamicLayout>
        </PageLayout>
    )
}

export default InventoryPage