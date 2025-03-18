export function buildInitialValues(List, id, obj, dkey) {
    const client = id && List && List.filter((item) => item[dkey] == id);
    const initialObject = {}
    initialObject[dkey] = id ? id : ""
    for (const key in obj) {
      initialObject[key] = client && client.length > 0 ? client[0][key] : ""
    }  
    return initialObject;
}