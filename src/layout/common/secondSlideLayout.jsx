import { useLayoutContext } from "@/context/layoutContext";

function SecondSlideLayout({ children }) {
    const {state} = useLayoutContext();

    return (
        <div className={`second-slide ${state.openLayout ? 'hide' : ''}`} id="second-slide">
            {children}
        </div>
    )
}

export default SecondSlideLayout;