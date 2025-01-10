export const initialLayoutState = {
    openLayout: true,
    openPopupLayout: false
}

export function layoutReducer(state, action) {
    switch (action.type) {
        case 'OPEN_FIRST_LAYOUT':
            return {
                ...state,
                openLayout: true
            }
        case 'CLOSE_FIRST_LAYOUT':
            return {
                ...state,
                openLayout: false
            }
        case 'OPEN_SECOND_LAYOUT':
            return {
                ...state,
                openLayout: false
            }
        case 'CLOSE_SECOND_LAYOUT':
            return {
                ...state,
                openLayout: true
            }
        case 'OPEN_POPUP_LAYOUT':
            return {
                ...state,
                openPopupLayout: true
            }
        case 'CLOSE_POPUP_LAYOUT':
            return {
                ...state,
                openPopupLayout: false
            }
        default:
            console.log("Unknown action types provided!")
    }
}