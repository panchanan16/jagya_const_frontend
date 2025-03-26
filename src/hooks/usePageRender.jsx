import crudActions from "@/redux/features/crudActions";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function usePageRender(entity) {
  const { itemList } = useSelector((state) => state[entity]);
  const dispatch = useDispatch();
  const { getItemList } = crudActions;

  useEffect(() => {
    getItemList(entity, dispatch);
  }, []);

  return {itemList}
}

export default usePageRender;
