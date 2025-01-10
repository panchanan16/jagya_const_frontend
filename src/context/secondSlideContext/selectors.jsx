const detailSelectors = (state) => {
    return {
      isSubModalOpen: () => {
        return state.openDetailsSubModal;
      },
      isFormOpen: () => {
        return state.openDetailsForm;
      },
    };
  };
  
  export default detailSelectors;