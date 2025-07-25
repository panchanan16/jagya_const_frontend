import coreCrudActions from "@/redux/coreCrudAction";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function useRenderProjects(entity, endpoint, query, detail) {
  const { getItemList } = coreCrudActions;
  const dispatch = useDispatch();
  const { id } = useParams();
  const { itemData, itemDetails } = useSelector((state) => state[entity]);

  const [isHighlight, seIsHighlight] = useState(
    itemData.length !== 0 && itemData[0].pro_ref_no
  );
  const [detailQuery, setDetailQuery] = useState(
    itemData.length !== 0 && itemData[0].pro_ref_no
  );

  useEffect(() => {
    getItemList(
      entity,
      dispatch,
      `${endpoint.item}?${query.item}=${id}`,
      "itemData"
    );
  }, [id]);

  useEffect(() => {
    console.log("Useeffect executing twice")
    getItemList(
      entity,
      dispatch,
      `${endpoint.details}?${query.details}=${detailQuery}`,
      "itemDetails"
    );
  }, [detailQuery, detail]);

  function changeTabContent(highlightItem) {
    seIsHighlight(highlightItem);
    setDetailQuery(highlightItem);
  }
  return { changeTabContent, isHighlight, itemData, itemDetails };
}

export default useRenderProjects;
