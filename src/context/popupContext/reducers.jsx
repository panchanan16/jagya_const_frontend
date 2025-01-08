export const initialPopupState = {
    openSlide: true,
    closeSlide: false,
    openForm: false,
    closeForm: true
}

export function popupReducer(state, action) {
    switch (action.type) {
        case 'OPEN_SLIDE':
            return {
                ...state,
                openSlide: true,
            };
        case 'CLOSE_SLIDE':
            return {
                ...state,
                openSlide: false,
            };
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
        default: {
            console.error("Unknown action type provided!")
        }
    }
}