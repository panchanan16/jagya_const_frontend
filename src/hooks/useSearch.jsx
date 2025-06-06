import { setFilteredItems, setQuery } from "@/redux/features/searchSlice/slice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// searchFields:[] Its type of array which contain all fields of the item where search occur

function useSearch(searchQuery, entity, searchFields) {
  const itemList = useSelector((state) => state[entity]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setQuery(searchQuery));
    const filtered =
      itemList &&
      itemList?.itemList?.filter((el) => {
        return searchFields.some((elem) => {
          if (el[elem] && el[elem].toLowerCase().includes(searchQuery?.toLowerCase())) {
            return el;
          }
        });
      });
    dispatch(setFilteredItems(filtered));
  }, [searchQuery]);
  return { itemList };
}

export default useSearch;
