import Header from '@/apps/header/header'
// import { useLayoutContext } from '@/context/layoutContext';

function FirstSlideLayout({children}) {
    // ${state.openLayout ? '' : 'hide'}

    return (
        <div className={`first-slide`} id="first-slide">
            <Header />
            {children}
        </div>
    )
}

export default FirstSlideLayout;