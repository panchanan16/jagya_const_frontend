import coreCrudActions from "@/redux/coreCrudAction";
import crudActions from "@/redux/crudActions";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useSearchParams   } from "react-router-dom";

function usePageRender(entity, tail, key, itemId, loc) {
  const { itemList, itemData } = useSelector((state) => state[entity]);
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const Actions = tail ? coreCrudActions : crudActions;
  const { getItemList } = Actions;
  let viewedItem = null

  if (id && itemId) {
    const Item = itemList.filter((item)=> item[itemId] == id)
    viewedItem = Item[0]
  }

  useEffect(() => {
    getItemList(entity, dispatch, tail, key);
  }, [loc]);

  return { itemList, itemData, viewedItem, id };
}

export default usePageRender;
