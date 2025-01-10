import { useMemo, useReducer, createContext, useContext } from 'react';
import { initialDetailSectionState, detailReducer } from './reducers';
import detailActions from './action';
import detailSelectors from './selectors';

const ItemDetailsContext = createContext();

export default function SubAppContextProvider({ children }) {
  const [state, dispatch] = useReducer(detailReducer, initialDetailSectionState);
  const value = useMemo(() => [state, dispatch], [state]);

  return <ItemDetailsContext.Provider value={value}>{children}</ItemDetailsContext.Provider>;
}


export function useSubAppContext() {
    const display = useContext(ItemDetailsContext);
    const [state, dispatch] = display;
    const detailDispatchActions = detailActions(dispatch)
    const detailSelectorFn = detailSelectors(state)
    return {state, dispatch, detailDispatchActions, detailSelectorFn};
}
