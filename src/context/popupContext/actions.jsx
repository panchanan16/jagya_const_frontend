
function popupActions(dispatch) {
  return {
     openFormAction: ()=> dispatch({type: 'OPEN_FORM'}),
     closeFormAction: ()=> dispatch({type: 'CLOSE_FORM'}),
     openSecondSlide: ()=> dispatch({type: 'CLOSE_SLIDE'}),
     closeSecondSlide: ()=> dispatch({type: 'OPEN_SLIDE'})
  }
}

export default popupActions;