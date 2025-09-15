import coreCrudActions from "@/redux/coreCrudAction";
import crudActions from "@/redux/crudActions";
import { resetData } from "@/redux/features/paginateSlice/slice";
import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useSearchParams } from "react-router-dom";

//entity: which slice need to access
//tail: if it is core
//key: which key need to update on the initial state
//itemid: which item need to access from itemList.

function usePageRender({entity, tail, key, itemId, loc, urlKey, isPaginate = false}) {
  const { itemList, itemData, pagination } = useSelector(
    (state) => state[entity]
  );
  const { itemList: filterList, searchQuery } = useSelector(
    (state) => state["search"]
  );

  const {pageNo, pageSize} = useSelector((state) => state["paginate"]);
  const { [urlKey ? urlKey : "id"]: urlParam } = useParams();
  const dispatch = useDispatch();
  const Actions = tail ? coreCrudActions : crudActions;
  const { getItemList, getPaginateItems } = Actions;

  // console.log(paginateNumber)

  // const pageNo = useMemo(() => {
  //   return searchParams.get("page") || "1";
  // }, [searchParams]);
  // const pageSize = searchParams.get("pageSize");

  useEffect(()=> {
    dispatch(resetData(1))
  }, [])

  useEffect(() => {
    if (pageNo && pageSize && isPaginate) {
      getPaginateItems(entity, dispatch, pageNo, pageSize);
    } else {
      getItemList(entity, dispatch, tail, key);
    }
  }, [loc, pageNo]);

  const outputItemList = searchQuery ? filterList : itemList;

  return {
    outputItemList,
    itemList,
    itemData,
    urlParam,
    pagination,
  };
}

export default usePageRender;
