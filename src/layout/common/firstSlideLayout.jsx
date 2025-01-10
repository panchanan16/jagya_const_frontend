import Header from '@/apps/header/header'
import { useLayoutContext } from '@/context/layoutContext';

function FirstSlideLayout({children}) {
    const {state} = useLayoutContext();

    return (
        <div className={`first-slide ${state.openLayout ? '' : 'hide'}`} id="first-slide">
            <Header />
            {children}
        </div>
    )
}

export default FirstSlideLayout