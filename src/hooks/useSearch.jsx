import {
  modifySearchLoading,
  SEARCH_ITEM,
  setFilteredItems,
  setSearchEntity,
  setQuery,
} from "@/redux/features/searchSlice/slice";
import { _GET } from "@/request/request";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// searchFields:[] Its type of array of string which contain all fields of the item where search occur

function useSearch(searchQuery, entity) {
  const itemList = useSelector((state) => state[entity]);
  const dispatch = useDispatch();
  // console.log(searchFields)
  useEffect(() => {
    dispatch(setQuery(searchQuery));
    dispatch(setSearchEntity(entity));
    searchQuery
      ? dispatch(modifySearchLoading(true))
      : dispatch(modifySearchLoading(false));
    // searchQuery !== "" && dispatch(SEARCH_ITEM({ query: searchQuery, entity }));
    const handler = setTimeout(() => {
      searchQuery && searchQuery !== "" &&
        dispatch(SEARCH_ITEM({ query: searchQuery, entity }));
    }, 2000);
    return () => clearTimeout(handler);
  }, [searchQuery]);
  return { itemList };
}

export default useSearch;

// const filtered =
//       itemList &&
//       itemList?.itemList?.filter(
//         (
//           el // {el} is project object
//         ) =>
//           searchFields.some((elem) => {
//             console.log(
//               el[elem].toLowerCase().includes(searchQuery?.toLowerCase())
//             );
//             if (
//               el[elem] &&
//               el[elem].toLowerCase().includes(searchQuery?.toLowerCase())
//             ) {
//               return el;
//             }
//           })
//       );
