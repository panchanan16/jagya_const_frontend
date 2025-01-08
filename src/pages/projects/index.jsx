import DynamicLayout from '@/layout/common/dynamicLayout'
import PageLayout from '@/layout/common/dynamicPageLayout'
import FirstSlideProject from './modules/firstSlide'
import SecondSlideProject from './modules/secondSlide'
import AddProjectForm from '@/forms/addProject/addProjectForm'


function ProjectPage() {
    return (
        <PageLayout>
            <DynamicLayout>
               <FirstSlideProject />
               <SecondSlideProject />
               <AddProjectForm />
            </DynamicLayout>
        </PageLayout>
    )
}

export default ProjectPage;