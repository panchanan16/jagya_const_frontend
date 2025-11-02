import useRequest from "@/hooks/useRequest";
import { ErrorMessage, Field, useFormikContext } from "formik";
import styles from "@/forms/form.module.css";
import { useEffect } from "react";

function SelectOption({ Name, Label, action, keyValue, setName, byProjectId = null }) {
  const { requestData } = useRequest("phase", action, byProjectId ? byProjectId : null);
  const { setFieldValue } = useFormikContext();


  // useEffect(()=> {}, [])

  function SetPhaseName(e) {
    setFieldValue(Name, e.target.value);
    if (setName) {
      const curPhase = requestData.filter(
        (el) => el.phase_id == e.target.value
      );
      setFieldValue("phase_name", curPhase[0]?.phase_name);
    }
  }
  // class="v-selector"
  return (
    <div class={styles.fieldGroup}>
      <label className={styles.fieldLabel}>Select from here</label>
      <Field
        as="select"
        name={Name}
        id=""
        className={styles.formSelect}
        onChange={SetPhaseName}
      >
        <option value="" disabled selected>
          Select from here
        </option>
        {requestData &&
          requestData.map((el) => (
            <option value={el[keyValue]}>{el.phase_name}</option>
          ))}
      </Field>
      <ErrorMessage name={Name} className={`err ${styles.errorMessage}`}  component="span" />
    </div>
  );
}

export default SelectOption;
