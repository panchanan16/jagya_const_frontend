import useRequest from "@/hooks/useRequest";
import { ErrorMessage, Field, useFormikContext } from "formik";

function SelectOption({ Name, Label, action, keyValue, setName }) {
  const { requestData } = useRequest("phase", action);
  const { setFieldValue } = useFormikContext();

  function SetPhaseName(e) {
     setFieldValue(Name, e.target.value)
    if (setName) {
      const curPhase = requestData.filter((el)=> el.phase_id == e.target.value)
      setFieldValue("phase_name", curPhase[0]?.phase_name)
    }
  }

  return (
    <div class="field">
      <p class="title v-selector">Select a {Label}</p>
      <Field as="select" name={Name} id="" class="v-selector" onChange={SetPhaseName}>
        <option value="" disabled selected>
          Select from here
        </option>
        {requestData &&
          requestData.map((el) => (
            <option value={el[keyValue]} >{el.phase_name}</option>
          ))}
      </Field>
      <ErrorMessage name={Name} className="err" component="span" />
    </div>
  );
}

export default SelectOption;
