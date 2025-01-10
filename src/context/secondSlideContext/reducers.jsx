export const initialDetailSectionState = {
    openDetailsSubModal: false,
    openDetailsForm: false,
}

export function detailReducer(state, action) {
    switch (action.type) {
        case 'OPEN_FORM':
            return {
                ...state,
                openDetailsForm: true,
            };
        case 'CLOSE_FORM':
            return {
                ...state,
                openDetailsForm: false,
            };
        case 'OPEN_SUB_MODAL':
            return {
                ...state,
                openDetailsSubModal: true,
            };
        case 'CLOSE_SUB_MODAL':
            return {
                ...state,
                openDetailsSubModal: false,
            };
        default: {
            console.error("Unknown action type provided!")
        }
    }
}