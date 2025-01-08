import DynamicLayout from '@/layout/common/dynamicLayout'
import PageLayout from '@/layout/common/dynamicPageLayout'
import FirstSlideLayout from '@/layout/common/firstSlideLayout'
import SecondSlideLayout from '@/layout/common/secondSlideLayout'
import FirstSlideProject from './modules/firstSlide'
import SecondSlideProject from './modules/secondSlide'


function ProjectPage() {
    return (
        <PageLayout>
            <DynamicLayout>
                <FirstSlideLayout Contents={FirstSlideProject} />
                <SecondSlideLayout Contents={SecondSlideProject} />
            </DynamicLayout>
        </PageLayout>
    )
}

export default ProjectPage