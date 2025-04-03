import entityEndpoint from "@/api/api";
import { _GET, _POST } from "@/request/request";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

function useRequest(entity, action, body) {
  const [requestData, setRequestData] = useState([]);
  const dispatch = useDispatch()
  useEffect(() => {
    async function makeRequest() {
      const data = body ? await _POST(entityEndpoint.createItem(entity, body)) : await _GET(entityEndpoint.getAll(entity)) ;
      setRequestData(data.data);
      dispatch(action(data.data))

    }
    makeRequest();
  }, []);

  return { requestData };
}

export default useRequest;
