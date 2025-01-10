import { useMemo, useReducer, createContext, useContext } from 'react';
import { initialPopupState, popupReducer } from './reducers';
import popupActions from './actions';
import popupSelectors from './selectors';

const PopupContext = createContext();

export default function MainAppContextProvider({ children }) {
  const [state, dispatch] = useReducer(popupReducer, initialPopupState);
  const value = useMemo(() => [state, dispatch], [state]);

  return <PopupContext.Provider value={value}>{children}</PopupContext.Provider>;
}


export function useMainAppContext() {
    const display = useContext(PopupContext);
    const [state, dispatch] = display;
    const dispatchActions = popupActions(dispatch)
    const popupSelectorFn = popupSelectors(state)
    return {state, dispatch, dispatchActions, popupSelectorFn};
}
