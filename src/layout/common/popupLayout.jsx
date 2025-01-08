import { usePopupContext } from '@/context/popupContext';

function PopupLayout({ children }) {
    const { state } = usePopupContext()

    return (
        <div className={`main-popup ${state.openForm ? '' : 'hide'}`}>
            {children}
        </div>
    )
}

export default PopupLayout;