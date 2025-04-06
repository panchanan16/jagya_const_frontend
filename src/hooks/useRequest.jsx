import entityEndpoint from "@/api/api";
import { _GET, _POST } from "@/request/request";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

function useRequest(entity, action) {
  const [requestData, setRequestData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  async function makeRequest(body, action) {
    try {
      const response = await _POST(entityEndpoint.createItem(entity), body);
      setRequestData(response.data);
      action && dispatch(action(response.data))
      return response.data;
    } catch (err) {
      setError(err);
      return null;
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    async function makeRequest() {
      const data = await _GET(entityEndpoint.getAll(entity));
      setRequestData(data.data);
      dispatch(action(data.data));
    }
    makeRequest();
  }, []);

  return { requestData, loading, makeRequest };
}

export default useRequest;
