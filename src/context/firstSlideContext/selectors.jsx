const popupSelectors = (state) => {
    return {
      isSubModalOpen: () => {
        return state.openSubModal;
      },
      isFormOpen: () => {
        return state.openForm;
      },
      isSlideOpen: () => {
        return state.openSlide;
      },
    };
  };
  
  export default popupSelectors;