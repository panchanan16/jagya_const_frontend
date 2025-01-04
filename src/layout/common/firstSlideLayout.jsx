import Header from '@/apps/header/header'

function FirstSlideLayout({Contents}) {
    return (
        <div class="first-slide" id="first-slide">
            <Header />
            <Contents />
        </div>
    )
}

export default FirstSlideLayout