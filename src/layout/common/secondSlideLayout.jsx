import { usePopupContext } from "@/context/popupContext";

function SecondSlideLayout({ children }) {
    const { state } = usePopupContext();

    return (
        <div className={`second-slide ${state.openSlide ? 'hide' : ''}`} id="second-slide">
            {children}
        </div>
    )
}

export default SecondSlideLayout;