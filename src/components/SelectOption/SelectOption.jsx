import useRequest from "@/hooks/useRequest";
import { ErrorMessage, Field } from "formik";


function SelectOption({ Name, Label, action }) {
  const { requestData } = useRequest("phase", action);

  return (
    <div class="field">
      <p class="title v-selector">Select a {Label}</p>
      <Field as="select" name={Name} id="" class="v-selector">
        {requestData &&
          requestData.map(() => <option value="mulukj">Mukunda Sharma</option>)}
      </Field>
      <ErrorMessage name={Name} className="err" component="span" />
    </div>
  );
}

export default SelectOption;
