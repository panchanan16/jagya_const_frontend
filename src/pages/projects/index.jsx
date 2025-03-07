import DynamicLayout from '@/layout/common/dynamicLayout'
import PageLayout from '@/layout/common/dynamicPageLayout'
import FirstSlideProject from './modules/firstSlideProject'
import { Outlet } from 'react-router-dom'


function ProjectPage() {
    return (
        <PageLayout>
            <DynamicLayout>
                <FirstSlideProject />
                <Outlet />
            </DynamicLayout>
        </PageLayout>
    )
}

export default ProjectPage;