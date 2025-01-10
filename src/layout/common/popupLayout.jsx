import { useLayoutContext } from '@/context/layoutContext';

function PopupLayout({ children }) {
    const { state } = useLayoutContext();

    return (
            <div className={`main-popup ${state.openPopupLayout ? '' : 'hide'}`}>
                {children}
            </div>
    )
}

export default PopupLayout;