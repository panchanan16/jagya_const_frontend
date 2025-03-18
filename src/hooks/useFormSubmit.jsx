import { buildInitialValues } from "@/utils/buildInitialValue";
import { validateForm } from "@/utils/validation/formValidation";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

function useFormSubmit(itemList, initialValueObj, validateObj, IdKey, createItem, updateItem) {
  const dispatch = useDispatch();
  const { id: urlParam } = useParams();
  const initialSchema = buildInitialValues(itemList, urlParam, initialValueObj, IdKey);
  const validateSchema = validateForm(validateObj);
  const isReturn = itemList.length > 0 || !urlParam

  async function addNewItem(clientData) {
    createItem(dispatch, clientData);
  }

  async function updateTheItem(clientData) {
    updateItem(dispatch, clientData);
  }

  return [addNewItem, updateTheItem, initialSchema, validateSchema, urlParam, isReturn]
}

export default useFormSubmit;
