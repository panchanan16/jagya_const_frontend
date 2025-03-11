// import { useLayoutContext } from "@/context/layoutContext";

function SecondSlideLayout({ children }) {

    return (
        <div className={`second-slide`} id="second-slide">
            {children}
        </div>
    )
}

export default SecondSlideLayout;