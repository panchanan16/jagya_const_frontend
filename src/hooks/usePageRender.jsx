import coreCrudActions from "@/redux/coreCrudAction";
import crudActions from "@/redux/crudActions";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useSearchParams } from "react-router-dom";

//entity: which slice need to access
//tail: if it is core
//key: which key need to update on the initial state
//itemid: which item need to access from itemList.

function usePageRender(entity, tail, key, itemId, loc, urlKey) {
  const { itemList, itemData, pagination } = useSelector((state) => state[entity]);
  const { itemList: filterList, searchQuery } = useSelector(
    (state) => state["search"]
  );
  const { [urlKey ? urlKey : "id"]: urlParam } = useParams();
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const Actions = tail ? coreCrudActions : crudActions;
  const { getItemList, getPaginateItems } = Actions;
  let viewedItem = null;

  const pageNo = searchParams.get("page");
  const pageSize = searchParams.get("pageSize");

  if (urlParam && itemId) {
    const Item = itemList.filter((item) => item[itemId] == urlParam);
    viewedItem = Item[0];
  }

  useEffect(() => {
    if (pageNo && pageSize) {
      getPaginateItems(entity, dispatch, pageNo, pageSize);
    } else {
      getItemList(entity, dispatch, tail, key);
    }
  }, [loc, pageNo]);

  const outputItemList = searchQuery ? filterList : itemList;

  return { outputItemList, itemList, itemData, viewedItem, urlParam, pagination };
}

export default usePageRender;
