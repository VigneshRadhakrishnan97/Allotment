const initialstate = {
  rooms: 1,
  adults: 1,
  children: 0,
  roomsplus: 1,
  roomminus: 0,
  adultplus: 1,
  adultminus: 0,
  childrenplus: 1,
  childrenminus: 0,
};

function display(payload) {
  let displayval = {
    roomsplus: 1,
    roomminus: 0,
    adultplus: 1,
    adultminus: 0,
    childrenplus: 1,
    childrenminus: 0,
  };

  const { rooms, adults, children } = payload;
  //room
  if (rooms === 1) displayval = { ...displayval, roomsplus: 1, roomminus: 0 };
  else if (rooms === 5)
    displayval = { ...displayval, roomsplus: 0, roomminus: 1 };
  else displayval = { ...displayval, roomsplus: 1, roomminus: 1 };

  //adults
  if (adults === 1) displayval = { ...displayval, adultplus: 1, adultminus: 0 };
  else if (adults + children === 20)
    displayval = { ...displayval, adultplus: 0, adultminus: 1 };
  else displayval = { ...displayval, adultplus: 1, adultminus: 1 };

  //children
  if (children === 0 && adults + children < 20)
    displayval = { ...displayval, childrenplus: 1, childrenminus: 0 };
  else if (adults + children === 20 && children === 0)
    displayval = { ...displayval, childrenplus: 0, childrenminus: 0 };
  else if (adults + children === 20)
    displayval = { ...displayval, childrenplus: 0, childrenminus: 1 };
  else displayval = { ...displayval, childrenplus: 1, childrenminus: 1 };

  return displayval;
}

export const reducer = (state = initialstate, action) => {
  const { type, payload } = action;

  switch (type) {
    case "UPDATE":
      return { ...state, ...payload, ...display(payload) };
      
    default:
      return state;
  }
};
