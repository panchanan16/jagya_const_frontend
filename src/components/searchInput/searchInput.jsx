import crudActions from "@/redux/features/crudActions";
import { ErrorMessage, Field, useFormikContext } from "formik";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";


// Name: Name of the searchinput
// Label: Display Label of the input field
// Entity: Which entity list should be show in the list 
// SetOptionalList: Onclick the entity from list  these field to be show in the form 
// SetFkey: to Set foreignkey which hidded in the form
// SetDisplayKey: Which field's data like name, uniqueid.. to be show in list item.

function SearchInput({ Name, Label, Entity, SetOptinalList, SetFKey, SetDisplayKey }) {
  const [showList, setShowList] = useState(false);
  const dispatch = useDispatch();
  const { setFieldValue } = useFormikContext();
  const { getItemList } = crudActions;
  const { itemList } = useSelector((state) => state[Entity]);

  useEffect(() => {
    !itemList?.length && getItemList(Entity, dispatch);
  }, []);


  function setInput(ItemEntity, name, value) {
    setFieldValue(name, value);
    // set input value ---
    SetOptinalList?.length && SetOptinalList.forEach((fieldItem) => {
      setFieldValue(fieldItem, ItemEntity[fieldItem]);
    });

    if (SetFKey) {
      for (const key in SetFKey) {
        setFieldValue(key, ItemEntity[SetFKey[key]])
      }
    } 
    setShowList(!showList);
  }

  return (
    <div className="field selectBox">
      <p className="title client-selector">Select a {Label}</p>
      <Field
        name={Name}
        type="text"
        id="searchInp"
        placeholder="Search here...."
        onClick={() => setShowList(!showList)}
      />
      <ErrorMessage name={Name} className="err" component="span" />
      <ul className={`${showList ? "" : "hide"} list-options`}>
        {itemList &&
          itemList?.map((item, ind) => (
            <li
              key={ind}
              id="fieldDis"
              onClick={() => setInput(item, Name, item[SetDisplayKey?.id])}
            >
                {item[SetDisplayKey?.id]} -| {item[SetDisplayKey?.name]}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default SearchInput;
