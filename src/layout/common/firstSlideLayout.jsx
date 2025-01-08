import Header from '@/apps/header/header'

function FirstSlideLayout({children, showSlide}) {
    return (
        <div class={`first-slide ${showSlide ? '' : 'hide'}`} id="first-slide">
            <Header />
            {children}
        </div>
    )
}

export default FirstSlideLayout