export function buildInitialValuesWithArray(List, id, obj, dkey, editList) {
    const client = id && List && List.filter((item) => item[dkey] == id);
    const initialObject = {}
    initialObject[dkey] = id ? id : ""
    for (const key in obj) {
        if (client && client.length) { 
            if (typeof obj[key] == 'object') {  
                console.log(editList[key])
                initialObject[key] = editList[key]
            } else {
                console.log(client[0])
                initialObject[key] = client[0][key]
            }
        } else {
            if (typeof obj[key] == 'object') {
                initialObject[key] = obj[key]
            } else {
                initialObject[key] = ""
            }
        }
    }

    return initialObject;

}