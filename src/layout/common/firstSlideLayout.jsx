import Header from '@/apps/header/header'
import { usePopupContext } from '@/context/popupContext';

function FirstSlideLayout({children}) {
    const {state} = usePopupContext();

    return (
        <div className={`first-slide ${state.openSlide ? '' : 'hide'}`} id="first-slide">
            <Header />
            {children}
        </div>
    )
}

export default FirstSlideLayout