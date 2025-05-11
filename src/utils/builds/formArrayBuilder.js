// editlist is entity's itemlist in redux state
// List is main entity's list
// id is urlparam of entity's primary key
// dkey is primary field name in db.

export function buildInitialValuesWithArray(List, id, obj, dkey, editList) {
    const client = id && List && List.filter((item) => item[dkey] == id);
    const initialObject = {}
    initialObject[dkey] = id ? id : ""
    for (const key in obj) {
        if (client && client.length) { 
            console.log(editList)
            if (typeof obj[key] == 'object') {  
                initialObject[key] = editList[key] ? editList[key] : editList  // adding initial value in initial object including array if it is.
            } else {
                // console.log(client[0])
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

    console.log(initialObject)

    return initialObject;

}