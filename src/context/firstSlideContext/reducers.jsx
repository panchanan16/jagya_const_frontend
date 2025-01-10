export const initialPopupState = {
    openSubModal: false,
    closeSubModal: true,
    openForm: false,
    closeForm: true
}

export function popupReducer(state, action) {
    switch (action.type) {
        case 'OPEN_FORM':
            return {
                ...state,
                openForm: true,
            };
        case 'CLOSE_FORM':
            return {
                ...state,
                openForm: false,
            };
        case 'OPEN_SUB_MODAL':
            return {
                ...state,
                openSubModal: true,
            };
        case 'CLOSE_SUB_MODAL':
            return {
                ...state,
                openSubModal: false,
            };
        default: {
            console.error("Unknown action type provided!")
        }
    }
}