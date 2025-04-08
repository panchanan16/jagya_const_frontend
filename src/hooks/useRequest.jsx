import entityEndpoint from "@/api/api";
import coreEndpoint from "@/api/coreApi";
import { _GET, _POST } from "@/request/request";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

function useRequest(entity, action, tail) {
  const [requestData, setRequestData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  async function makeRequest(body, action) {
    try {
      const endpoint = tail ? coreEndpoint.createItem(entity, tail) : entityEndpoint.createItem(entity)
      const response = await _POST(endpoint, body);
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
      const endpoint = tail ? coreEndpoint.getAll(entity, tail) : entityEndpoint.getAll(entity)
      const data = await _GET(endpoint);
      setRequestData(data.data);
      action && dispatch(action(data.data));
    }
    makeRequest();
  }, []);

  return { requestData, loading, makeRequest };
}

export default useRequest;
