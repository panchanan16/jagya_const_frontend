import crudActions from "@/redux/features/crudActions";
import { buildInitialValues } from "@/utils/buildInitialValue";
import { validateForm } from "@/utils/validation/formValidation";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function useFormSubmit(initialValueObj, validateObj, IdKey, entity) {
  const { itemList } = useSelector((state) => state[entity]);
  const dispatch = useDispatch();
  const { id: urlParam } = useParams();
  const {createItem, updateItem} = crudActions
  const initialSchema = buildInitialValues(itemList, urlParam, initialValueObj, IdKey);
  const validateSchema = validateForm(validateObj);
  const isReturn = itemList.length > 0 || !urlParam

  async function addNewItem(clientData) {
    createItem(entity, dispatch, clientData);
  }

  async function updateTheItem(clientData) {
    updateItem(entity, dispatch, clientData);
  }

  const submithandler = urlParam ? updateTheItem : addNewItem

  return [submithandler, initialSchema, validateSchema, isReturn]
}

export default useFormSubmit;
