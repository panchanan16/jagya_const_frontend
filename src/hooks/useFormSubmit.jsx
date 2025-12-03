import coreCrudActions from "@/redux/coreCrudAction";
import crudActions from "@/redux/crudActions";
import { buildInitialValuesWithArray } from "@/utils/builds/formArrayBuilder";
import { validateForm } from "@/utils/validation/formValidation";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function useFormSubmit(initialValueObj, validateObj, IdKey, entity, urlkey) {
  const { itemList, itemData } = useSelector(
    (state) => state[`${typeof entity == "object" ? entity?.name : entity}`]
  );
  const dispatch = useDispatch();
  const { [urlkey ? urlkey : 'id']: urlParam } = useParams();
  const Actions = typeof entity == "object" ? coreCrudActions : crudActions;
  const { createItem, updateItem } = Actions;
  const initialSchema = buildInitialValuesWithArray(
    itemList,
    urlParam,
    initialValueObj,
    IdKey,
    itemData
  );


  const validateSchema = validateForm(validateObj);
  const isReturn = itemList.length > 0 || !urlParam;

  async function addNewItem(clientData) {
    const route = typeof entity == "object" ? entity?.route : undefined
    const entityName = typeof entity == "object" ? entity?.name : entity
    createItem(entityName, dispatch, clientData, route);
  }

  async function updateTheItem(clientData) {
    const entityName = typeof entity == "object" ? entity?.name : entity
    updateItem(entityName, dispatch, clientData);
  }

  const submithandler = urlParam ? updateTheItem : addNewItem;

  return [submithandler, initialSchema, validateSchema, isReturn, urlParam];
}



export default useFormSubmit;
