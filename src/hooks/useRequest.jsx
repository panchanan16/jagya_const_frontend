import entityEndpoint from "@/api/api";
import coreEndpoint from "@/api/coreApi";
import { _DELETE, _GET, _POST, _UPDATE } from "@/request/request";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

// entity: name of the entity
// tail: api core endpoint.
// action: if we need update redux state then if we pass action then it will be dispatch : optional.

function useRequest(entity, action, tail, query, isOnload = true) {
  const [requestData, setRequestData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  async function makeRequest(body, action, end) {
    try {
      const endpoint = end
        ? coreEndpoint.createItem(entity, end)
        : entityEndpoint.createItem(entity);
      const response = await _POST(endpoint, body);
      setRequestData(response.data);
      action && dispatch(action(response.data));
      return response.data;
    } catch (err) {
      setError(err);
      return null;
    } finally {
      setLoading(false);
    }
  }

  async function deleteRequest(body, action, end) {
    try {
      const endpoint = end
        ? coreEndpoint.deleteItem(entity, endpoint)
        : entityEndpoint.deleteItem(entity);
      const response = await _DELETE(endpoint, body);
      action && dispatch(action(response.data));
      return response.data;
    } catch (err) {
      setError(err);
      return null;
    } finally {
      setLoading(false);
    }
  }


  async function updateRequest(body, action, end) {
    try {
      const endpoint = end
        ? coreEndpoint.updateItemWithEndpoint(entity, end)
        : entityEndpoint.updateItem(entity);
      const response = await _UPDATE(endpoint, body);
      action && dispatch(action(response.data));
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
      const endpoint = tail
        ? coreEndpoint.getAll(entity, tail)
        : query
        ? entityEndpoint.getAllWithQuery(entity, query)
        : entityEndpoint.getAll(entity);
      const data = await _GET(endpoint);
      console.log(data)
      setRequestData(data.data);
      action && dispatch(action(data.data));
    }
    isOnload && makeRequest();
  }, []);

  return { requestData, loading, makeRequest, deleteRequest, updateRequest };
}

export default useRequest;
