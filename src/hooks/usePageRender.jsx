import coreCrudActions from "@/redux/coreCrudAction";
import crudActions from "@/redux/crudActions";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function usePageRender(entity, tail, key) {
  const { itemList, itemData } = useSelector((state) => state[entity]);
  const dispatch = useDispatch();
  const Actions = tail ? coreCrudActions : crudActions
  const { getItemList } = Actions;

  useEffect(() => {
    getItemList(entity, dispatch, tail, key);
  }, []);

  return {itemList, itemData}
}

export default usePageRender;
