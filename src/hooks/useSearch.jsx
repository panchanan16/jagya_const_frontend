import { setFilteredItems, setQuery } from "@/redux/features/searchSlice/slice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function useSearch(searchQuery, entity) {
  const itemList = useSelector((state) => state[entity]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setQuery(searchQuery));
    const filtered =
      itemList &&
      itemList?.itemList?.filter((el) => {
        return el.pro_name
          .toLowerCase()
          .includes(searchQuery?.toLowerCase());
      });
    // console.log(filtered);
    dispatch(setFilteredItems(filtered))
  }, [searchQuery]);
  return { itemList };
}

export default useSearch;
