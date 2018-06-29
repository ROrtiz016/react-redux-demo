const defaultState = {
  list: [],
  item: "apple"
};

const ADD_TO_LIST = "ADD_TO_LIST";

export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case ADD_TO_LIST:
      let listCopy = state.list.slice();
      listCopy.push(action.payload);
      return Object.assign({}, state, { list: listCopy });

    default:
      return state;
  }
}

export function addToList(str) {
  if (typeof str !== "string") return;
  return {
    type: ADD_TO_LIST,
    payload: str
  };
}
