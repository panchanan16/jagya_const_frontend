
function popupActions(dispatch) {
  return {
     openFormAction: ()=> dispatch({type: 'OPEN_FORM'}),
     closeFormAction: ()=> dispatch({type: 'CLOSE_FORM'}),
     openSubModal: ()=> dispatch({type: 'OPEN_SUB_MODAL'}),
     closeSubModal: ()=> dispatch({type: 'CLOSE_SUB_MODAL'})
  }
}

export default popupActions;