function fulfilledStateReducer(state, action, src, type) {

    switch (type) {
        case 'POST':
            if (action.payload?.source == src) {
                state.loading = false
                console.log(action.payload.response.data)
                state.itemList.push(action.payload.response.data)
            }

            break;
        case 'GET':
            if (action.payload?.source == src) {
                state.loading = false;
                state.itemList = action.payload.response.data;
                state.error = null
            }

            break;
        case 'DELETE':

            break;
        case 'UPDATE':

            break;

        default:
            break;
    }
}

export default fulfilledStateReducer;