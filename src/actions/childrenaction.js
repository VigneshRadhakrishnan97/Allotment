export const addchildren = () => async (dispatch, getstate) => {
  let { rooms, adults, children } = getstate().status;
  children = children + 1;
  if (adults + children > rooms * 4) {
    rooms = rooms + 1;
  }
  if (rooms > adults) {
    adults = adults + 1;
  }

  dispatch({ type: "UPDATE", payload: { rooms, adults, children } });
};

export const removechildren = () => async (dispatch, getstate) => {
  let { rooms, adults, children } = getstate().status;
  children = children - 1;

  dispatch({ type: "UPDATE", payload: { rooms, adults, children } });
};
