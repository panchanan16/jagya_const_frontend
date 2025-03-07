import { ErrorMessage, Field, useFormikContext } from "formik";
import { useState } from "react";

function SearchInput({Name}) {
  const [showList, setShowList] = useState(false);
  const {setFieldValue} = useFormikContext()


  function setInput(name, value) {
    setFieldValue(name, value)
    setShowList(!showList);
  }


  return (
    <div className="field selectBox">
      <p className="title client-selector">Select a Client</p>
      <Field
        name={Name}
        type="text"
        placeholder="Search here...."
        onClick={() => setShowList(!showList)}
      />
      <ErrorMessage
        name={Name}
        className="err"
        component="span"
      />
      <ul className={`${showList ? "" : "hide"} list-options`}>
        <li
          data-value="Manash Kakoti"
          onClick={() => setInput(Name, "Rontu kakati")}
        >
          Manash Kakoti
        </li>
        <li
          data-value="Kankan Jyoti Nath"
          onClick={() => setInput(Name, "Kankan Jyoti Nath")}
        >
          Kankan Jyoti Nath
        </li>
        <li
          data-value="Panchanan Deka"
          onClick={() => setInput(Name, "Panchanan Deka")}
        >
          Panchanan Deka
        </li>
        <li
          data-value="Mintu Sharma"
          onClick={() => setInput(Name, "Mintu Sharma")}
        >
          Mintu Sharma
        </li>
        <li
          data-value="Dipankor Doley"
          onClick={() => setInput(Name, "Dipankor Doley")}
        >
          Dipankor Doley
        </li>
      </ul>
    </div>
  );
}

export default SearchInput;
