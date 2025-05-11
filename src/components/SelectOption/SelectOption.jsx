import useRequest from "@/hooks/useRequest";
import { ErrorMessage, Field } from "formik";

function SelectOption({ Name, Label, action, keyValue }) {
  const { requestData } = useRequest("phase", action);

  return (
    <div class="field">
      <p class="title v-selector">Select a {Label}</p>
      <Field as="select" name={Name} id="" class="v-selector">
        <option value="" disabled selected>Select from here</option>
        {requestData &&
          requestData.map((el) => (
            <option value={el[keyValue]}>{el.phase_name}</option>
          ))}
      </Field>
      <ErrorMessage name={Name} className="err" component="span" />
    </div>
  );
}

export default SelectOption;
