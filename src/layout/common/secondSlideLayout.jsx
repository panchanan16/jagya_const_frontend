// import { useLayoutContext } from "@/context/layoutContext";

function SecondSlideLayout({ children }) {
    // const {state} = useLayoutContext();
    // ${state.openLayout ? 'hide' : ''}

    return (
        <div className={`second-slide`} id="second-slide">
            {children}
        </div>
    )
}

export default SecondSlideLayout;