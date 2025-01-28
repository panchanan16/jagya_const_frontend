import DynamicLayout from '@/layout/common/dynamicLayout'
import PageLayout from '@/layout/common/dynamicPageLayout'
import FirstSlideProject from './modules/firstSlide'
import SecondSlideProject from './modules/secondSlide'
import AddProjectForm from '@/forms/addProject/addProjectForm'
import { Outlet } from 'react-router'
import AsideBar from '@/apps/asideBar/asideBar'


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