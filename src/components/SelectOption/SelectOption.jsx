import useRequest from "@/hooks/useRequest";
import { ErrorMessage, Field, useFormikContext } from "formik";
import styles from "@/forms/form.module.css";
import { useDispatch, useSelector } from "react-redux";
import { GET_PHASES_BY_PROJECT_ID } from "@/redux/features/projectPhaseSlice/slice";
import entityEndpoint from "@/api/api";
import { useEffect } from "react";

function SelectOption({ Name, Label, action, keyValue, setName, byProjectId, isProjectPhase }) {
  // const { requestData } = useRequest("phase", action, null, byProjectId ? `?pro_id=${byProjectId}` : null);
  const dispatch = useDispatch();
  const requestData = useSelector((state) => state.project_phase);
  const { setFieldValue } = useFormikContext();

  console.log(byProjectId)

  useEffect(()=> {
    if (isProjectPhase) {
      if (byProjectId) {
        dispatch(GET_PHASES_BY_PROJECT_ID({endpoint: entityEndpoint.getAllWithQuery('phase', `?pro_id=${byProjectId}`)}))
      }
    } else {
      dispatch(GET_PHASES_BY_PROJECT_ID({endpoint: entityEndpoint.getAll('phase')}))
    }
  }, [byProjectId])

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
          requestData.itemList.map((el) => (
            <option value={el[keyValue]}>{el.phase_name}</option>
          ))}
      </Field>
      <ErrorMessage name={Name} className={`err ${styles.errorMessage}`}  component="span" />
    </div>
  );
}

export default SelectOption;
