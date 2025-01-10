function layoutActions(dispatch) {
    return {
        openFirstLayout: ()=> dispatch({type: 'OPEN_FIRST_LAYOUT'}),
        closeFirstLayout: ()=> dispatch({type: 'CLOSE_FIRST_LAYOUT'}),
        openSecondLayout: ()=> dispatch({type: 'OPEN_SECOND_LAYOUT'}),
        closeSecondLayout: ()=> dispatch({type: 'CLOSE_SECOND_LAYOUT'}),
        openPopupLayout: ()=> dispatch({type: 'OPEN_POPUP_LAYOUT'}),
        closePopupLayout: ()=> dispatch({type: 'CLOSE_POPUP_LAYOUT'})
    }
}

export default layoutActions;