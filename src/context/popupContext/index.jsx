import { useMemo, useReducer, createContext, useContext } from 'react';
import { initialPopupState, popupReducer } from './reducers';
import popupActions from './actions';

const PopupContext = createContext();

export default function PopupContextProvider({ children }) {
  const [state, dispatch] = useReducer(popupReducer, initialPopupState);
  const value = useMemo(() => [state, dispatch], [state]);

  return <PopupContext.Provider value={value}>{children}</PopupContext.Provider>;
}


export function usePopupContext() {
    const display = useContext(PopupContext);
    const [state, dispatch] = display;
    const dispatchActions = popupActions(dispatch)
    return {state, dispatch, dispatchActions};
}
