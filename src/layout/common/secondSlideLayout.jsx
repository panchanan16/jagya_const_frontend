
function SecondSlideLayout({children, showSlide}) {
    return (
        <div class={`second-slide ${showSlide ? 'hide' : ''}`} id="second-slide">
           {children}
        </div>
    )
}

export default SecondSlideLayout;