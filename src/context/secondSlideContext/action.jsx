
function detailActions(dispatch) {
    return {
       openDetailFormAction: ()=> dispatch({type: 'OPEN_FORM'}),
       closeDetailFormAction: ()=> dispatch({type: 'CLOSE_FORM'}),
       openDetailSubModal: ()=> dispatch({type: 'OPEN_SUB_MODAL'}),
       closeDetailSubModal: ()=> dispatch({type: 'CLOSE_SUB_MODAL'}),
    }
  }
  
  export default detailActions;