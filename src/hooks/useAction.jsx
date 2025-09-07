import { useDispatch } from "react-redux";
import { useCallback } from "react";

export function useAction(actionCreator) {
  const dispatch = useDispatch();

  return useCallback(
    (...args) => dispatch(actionCreator(...args)),
    [dispatch, actionCreator]
  );
}
