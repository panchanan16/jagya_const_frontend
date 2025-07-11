import useDebounce from "@/hooks/useDebounce";
import useSearch from "@/hooks/useSearch";
import crudActions from "@/redux/crudActions";
import { ErrorMessage, Field, useFormikContext } from "formik";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

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
    setShowList(!showList);
  }

  return (
    <div className="field selectBox">
      <p className="title client-selector">Select a {Label}</p>
      <Field
        name={Name}
        value={inputDisplay}
        type="text"
        id="searchInp"
        // placeholder={Label}
        onFocus={() => setOnFocus()}
        onClick={() => setShowList(!showList)}
        readOnly="true"
      />
      <ErrorMessage
        name={errorKey ? errorKey : Name}
        className="err"
        component="span"
      />
      <ul className={`${showList ? "" : "hide"} list-options`}>
        <div className="flex align-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="search-icon"
          >
            <path d="M21.71,20.29,18,16.61A9,9,0,1,0,16.61,18l3.68,3.68a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM11,18a7,7,0,1,1,7-7A7,7,0,0,1,11,18Z"></path>
          </svg>
          <input
            style={{ width: "100%" }}
            onChange={(e) => SearchInputData(e.target.value, SetDisplayKey)}
            type="text"
            id="searchQuery"
            placeholder="Search"
          />
        </div>
        {searchedItemList && !isLoading
          ? searchedItemList?.map((item, ind) => (
              <li
                key={ind}
                id="fieldDis"
                onClick={() => setInput(item, Name, item[SetDisplayKey?.name])}
              >
                {item[SetDisplayKey?.id]} -| {item[SetDisplayKey?.name]}
              </li>
            ))
          : "Wait for a While..."}
      </ul>
    </div>
  );
}

export default SearchInput;
