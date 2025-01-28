// import { useLayoutContext } from '@/context/layoutContext';

function PopupLayout({ children }) {
    return (
            <div className={`main-popup`}>
                {children}
            </div>
    )
}

export default PopupLayout;