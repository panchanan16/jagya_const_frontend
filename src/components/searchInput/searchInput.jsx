// import useDebounce from "@/hooks/useDebounce";
// import useSearch from "@/hooks/useSearch";
// import crudActions from "@/redux/crudActions";
// import { ErrorMessage, Field, useFormikContext } from "formik";
// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";

// // Name: Name of the searchinput
// // Label: Display Label of the input field
// // Entity: Which entity list should be show in the list
// // SetOptionalList: Onclick the entity from list these field to be show in the form fields// generally for update form
// // SetFkey: to Set foreignkey which hidded in the form type = {fieldName: ItemEntityKey}
// // SetDisplayKey: Which field's data like name, uniqueid.. to be show in list item. type = {id: string, name: string} object
// // editDisplayInput: On edit what data should be show in input field since actual field data will be hidden to user. string type
// // errorKey is Errormessage key errorKey: string;

// function SearchInput({
//   Name,
//   Label,
//   Entity,
//   SetOptinalList,
//   SetFKey,
//   SetDisplayKey,
//   editDisplayInput,
//   errorKey,
// }) {
//   const [showList, setShowList] = useState(false);
//   const dispatch = useDispatch();
//   const [inputDisplay, setInputDisplay] = useState(
//     editDisplayInput ? editDisplayInput : ""
//   );
//   const [findInput, setFindInput] = useState({ value: "", delay: 500 });
//   const { setFieldValue } = useFormikContext();
//   const { getItemList } = crudActions;
//   const { itemList } = useSelector((state) => state[Entity]);
//   const [searchedItemList, setSearchedItemList] = useState([]);
//   const { debouncedValue, isLoading } = useDebounce(itemList, findInput);

//   function setOnFocus() {
//     !itemList?.length && getItemList(Entity, dispatch);
//     setSearchedItemList(itemList);
//   }

//   useEffect(() => {
//     if (itemList.length) {
//       setSearchedItemList(itemList);
//     }
//   }, [itemList]);

//   function SearchInputData(sValue, searchFieldsParam) {
//     const searchFields = [searchFieldsParam.id, searchFieldsParam.name];
//     const filtered =
//       itemList &&
//       itemList?.filter((el) => {
//         return searchFields.some((elem) => {
//           if (
//             el[elem] &&
//             el[elem].toLowerCase().includes(sValue?.toLowerCase())
//           ) {
//             return el;
//           }
//         });
//       });
//     setSearchedItemList(filtered);
//     if (filtered && !filtered.length) {
//       setFindInput({ value: sValue, delay: 3000 });
//     }
//   }

//   function setInput(ItemEntity, name, value) {
//     setInputDisplay(value);
//     SetOptinalList?.length &&
//       SetOptinalList.forEach((fieldItem) => {
//         setFieldValue(fieldItem, ItemEntity[fieldItem]);
//       });

//     if (SetFKey) {
//       for (const key in SetFKey) {
//         setFieldValue(key, ItemEntity[SetFKey[key]]);
//       }
//     }
//     setShowList(!showList);
//   }

//   return (
//     <div className="field selectBox">
//       <p className="title client-selector">Select a {Label}</p>
//       <Field
//         name={Name}
//         value={inputDisplay}
//         type="text"
//         id="searchInp"
//         // placeholder={Label}
//         onFocus={() => setOnFocus()}
//         onClick={() => setShowList(!showList)}
//         readOnly="true"
//       />
//       <ErrorMessage
//         name={errorKey ? errorKey : Name}
//         className="err"
//         component="span"
//       />
//       <ul className={`${showList ? "" : "hide"} list-options`}>
//         <div className="flex align-center">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             viewBox="0 0 24 24"
//             className="search-icon"
//           >
//             <path d="M21.71,20.29,18,16.61A9,9,0,1,0,16.61,18l3.68,3.68a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM11,18a7,7,0,1,1,7-7A7,7,0,0,1,11,18Z"></path>
//           </svg>
//           <input
//             style={{ width: "100%" }}
//             onChange={(e) => SearchInputData(e.target.value, SetDisplayKey)}
//             type="text"
//             id="searchQuery"
//             placeholder="Search"
//           />
//         </div>
//         {searchedItemList && !isLoading
//           ? searchedItemList?.map((item, ind) => (
//               <li
//                 key={ind}
//                 id="fieldDis"
//                 onClick={() => setInput(item, Name, item[SetDisplayKey?.name])}
//               >
//                 {item[SetDisplayKey?.id]} -| {item[SetDisplayKey?.name]}
//               </li>
//             ))
//           : "Wait for a While..."}
//       </ul>
//     </div>
//   );
// }

// export default SearchInput;



import useDebounce from "@/hooks/useDebounce";
import useSearch from "@/hooks/useSearch";
import crudActions from "@/redux/crudActions";
import { ErrorMessage, Field, useFormikContext } from "formik";
import { useEffect, useState, useRef, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./SearchInput.module.css";

// Name: Name of the searchinput
// Label: Display Label of the input field
// Entity: Which entity list should be show in the list
// SetOptionalList: Onclick the entity from list these field to be show in the form fields// generally for update form
// SetFkey: to Set foreignkey which hidded in the form type = {fieldName: ItemEntityKey}
// SetDisplayKey: Which field's data like name, uniqueid.. to be show in list item. type = {id: string, name: string} object
// editDisplayInput: On edit what data should be show in input field since actual field data will be hidden to user. string type
// errorKey is Errormessage key errorKey: string;

function SearchInput({
  Name,
  Label,
  Entity,
  SetOptinalList,
  SetFKey,
  SetDisplayKey,
  editDisplayInput,
  errorKey,
}) {
  const [showList, setShowList] = useState(false);
  const dispatch = useDispatch();
  const [inputDisplay, setInputDisplay] = useState(
    editDisplayInput ? editDisplayInput : ""
  );
  const [findInput, setFindInput] = useState({ value: "", delay: 500 });
  const { setFieldValue } = useFormikContext();
  const { getItemList } = crudActions;
  const { itemList } = useSelector((state) => state[Entity]);
  const [searchedItemList, setSearchedItemList] = useState([]);
  const { debouncedValue, isLoading } = useDebounce(itemList, findInput);
  
  // Ref for click outside detection
  const containerRef = useRef(null);

  const closeDropdown = useCallback(() => {
    setShowList(false);
  }, []);

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        closeDropdown();
      }
    };

    const handleEscapeKey = (event) => {
      if (event.key === 'Escape') {
        closeDropdown();
      }
    };

    // Add event listeners
    document.addEventListener('mousedown', handleClickOutside, true);
    document.addEventListener('touchstart', handleClickOutside, true);
    document.addEventListener('keydown', handleEscapeKey);

    // Cleanup
    return () => {
      document.removeEventListener('mousedown', handleClickOutside, true);
      document.removeEventListener('touchstart', handleClickOutside, true);
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [closeDropdown]);

  function setOnFocus() {
    !itemList?.length && getItemList(Entity, dispatch);
    setSearchedItemList(itemList);
  }

  useEffect(() => {
    if (itemList.length) {
      setSearchedItemList(itemList);
    }
  }, [itemList]);

  function SearchInputData(sValue, searchFieldsParam) {
    const searchFields = [searchFieldsParam.id, searchFieldsParam.name];
    const filtered =
      itemList &&
      itemList?.filter((el) => {
        return searchFields.some((elem) => {
          if (
            el[elem] &&
            el[elem].toLowerCase().includes(sValue?.toLowerCase())
          ) {
            return el;
          }
        });
      });
    setSearchedItemList(filtered);
    if (filtered && !filtered.length) {
      setFindInput({ value: sValue, delay: 3000 });
    }
  }

  function setInput(ItemEntity, name, value) {
    setInputDisplay(value);
    SetOptinalList?.length &&
      SetOptinalList.forEach((fieldItem) => {
        setFieldValue(fieldItem, ItemEntity[fieldItem]);
      });

    if (SetFKey) {
      for (const key in SetFKey) {
        setFieldValue(key, ItemEntity[SetFKey[key]]);
      }
    }
    setShowList(false); // Close dropdown after selection
  }

  const handleInputClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setOnFocus();
    setShowList(!showList);
  };

  const handleOptionClick = (e, item) => {
    e.preventDefault();
    e.stopPropagation();
    setInput(item, Name, item[SetDisplayKey?.name]);
  };

  return (
    <div className={`${styles.searchInputContainer}`} ref={containerRef}>
      <label className={`title client-selector ${styles.searchLabel}`}>
        {Label}
      </label>
      
      <div className={styles.inputWrapper}>              
        <Field
          name={Name}
          value={inputDisplay}
          type="text"
          id="searchInp"
          className={styles.searchField}
          placeholder={`Search ${Label.toLowerCase()}...`}
          onClick={handleInputClick}
          readOnly="true"
        />
      </div>
      
      <div className={`${styles.dropdown} ${showList ? styles.show : ''} list-options`}>
        <div className={styles.searchContainer}>
          <div className={styles.searchInputWrapper}>
            <svg
              className={styles.searchIcon}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              className={styles.searchInput}
              onChange={(e) => SearchInputData(e.target.value, SetDisplayKey)}
              type="text"
              id="searchQuery"
              placeholder="Search..."
            />
          </div>
        </div>

        <ul className={styles.optionsList}>
          {isLoading ? (
            <li className={styles.loadingState}>
              Loading...
            </li>
          ) : searchedItemList && searchedItemList.length > 0 ? (
            searchedItemList.map((item, ind) => (
              <li
                key={ind}
                id="fieldDis"
                className={styles.optionItem}
                onClick={(e) => handleOptionClick(e, item)}
              >
                <span className={styles.optionId}>
                  {item[SetDisplayKey?.id]}
                </span>
                <span className={styles.optionName}>
                  {item[SetDisplayKey?.name]}
                </span>
              </li>
            ))
          ) : (
            <li className={styles.emptyState}>
              No results found
            </li>
          )}
        </ul>
      </div>

      <ErrorMessage
        name={errorKey ? errorKey : Name}
        className={`err ${styles.errorMessage}`}
        component="div"
      />
    </div>
  );
}

export default SearchInput;