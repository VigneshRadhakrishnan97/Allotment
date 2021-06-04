export const addadults = () => async (dispatch, getstate) => {
  
  let { rooms, adults, children } = getstate().status;
  adults = adults + 1;
  if (adults + children > rooms*4) {
    rooms=rooms+1;
  }

  dispatch({ type: "UPDATE", payload: { rooms, adults, children } });
};


export const removeadults = () => async (dispatch, getstate) => {
  
  let { rooms, adults, children } = getstate().status;
  adults = adults - 1;

  if(adults<rooms)
  {
      rooms=rooms-1;
  }

  while (adults + children > rooms * 4) {
    if (children === 0) 
    break;
    else children = children - 1;
  }

  dispatch({ type: "UPDATE", payload: { rooms, adults, children } });
};