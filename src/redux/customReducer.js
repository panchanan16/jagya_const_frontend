function fulfilledStateReducer(state, action, src, type, key) {

    switch (type) {
        case 'POST':
            if (action.payload?.source == src) {
                state.loading = false
                state[action.payload?.stateKey ? action.payload?.stateKey : 'itemList'].push(action.payload.response.data)
                state.error = null
            }

            break;
        case 'GET':
            if (action.payload?.source == src) {
                console.log(action.payload)
                state.loading = false;
                state[action.payload?.stateKey ? action.payload?.stateKey : 'itemList'] = action.payload.response.data;
                state.error = null
                if (action.payload.response.pagination) {
                    state["pagination"] = action.payload.response.pagination
                }
            }

            break;
        case 'DELETE':
            if (action.payload?.source == src) {
                state.loading = false
                state.itemList = state.itemList.filter((item) => item[key] != action.payload.response.data[key])
            }

            break;
        case 'UPDATE':
            if (action.payload?.source == src) {
                console.log(action.payload)
                state.loading = false
                state.itemList = state.itemList.filter((item) => item[key] != action.payload.response?.data[key])
                state.itemList.push(action.payload.response.data)
            }

            break;

        default:
            break;
    }
}


export default fulfilledStateReducer;