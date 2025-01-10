import { createContext, useContext, useMemo, useReducer } from "react"
import { initialLayoutState, layoutReducer } from "./reducers";
import layoutActions from "./action";

const LayoutContext = createContext()

export default function LayoutContextProvider({ children }) {
    const [state, dispatch] = useReducer(layoutReducer, initialLayoutState);
    const value = useMemo(() => [state, dispatch], [state]);

    return <LayoutContext.Provider value={value}>{children}</LayoutContext.Provider>

}

export function useLayoutContext() {
    const context = useContext(LayoutContext)
    const [state, dispatch] = context
    const dispatchLayoutAction = layoutActions(dispatch)

    return {state, dispatchLayoutAction}
}