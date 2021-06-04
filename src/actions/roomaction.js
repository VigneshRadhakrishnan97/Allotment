export const addrooms = () => async (dispatch, getstate) => {
  
  let { rooms, adults, children } = getstate().status;
  rooms = rooms + 1;
  if (rooms > adults) {
    adults = adults+1;
  }

  dispatch({ type: "UPDATE", payload: { rooms, adults, children } });
};

export const removerooms = () => async (dispatch, getstate) => {
  
  let { rooms, adults, children } = getstate().status;
  rooms = rooms - 1;
  
    while(adults+children > (rooms*4))
    {
        if(children===0)
        adults=adults-1;
        else
        children=children-1;
    }

  dispatch({ type: "UPDATE", payload: { rooms, adults, children } });
};
