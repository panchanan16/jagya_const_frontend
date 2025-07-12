import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

function useSecondSlideData(entity, itemId, urlKey = "id") {
  const { [urlKey]: urlParam } = useParams();
  const { itemList } = useSelector((state) => state[entity]);
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1); 
  };

  let viewedItem = null;

  if (urlParam && itemId) {
    const Item = itemList.filter((item) => item[itemId] == urlParam);
    viewedItem = Item[0];
  }

  return {viewedItem, goBack};
}

export default useSecondSlideData;
