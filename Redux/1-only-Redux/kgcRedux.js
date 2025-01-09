const redux = require("redux")

const INITIAL_VALUE = {
  counter: 0
};
const reducer = (store = INITIAL_VALUE, action) => {

 
  let newstore = store;
  if (action.type === "INCREMENT") {
    newstore = { counter: store.counter + 1 };
  } else if (action.type === "DECREMENT") {
    newstore = { counter: store.counter - 1 };
  } else if (action.type === "ADDITION") {
    newstore = { counter: store.counter + action.payload.number };
  }

  return newstore;
}

const store = redux.createStore(reducer)

const subscriber = () => {
  const state = store.getState();
  console.log(state)
}
store.subscribe(subscriber)
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "DECREMENT" });
store.dispatch({ type: "DECREMENT" });
store.dispatch({ type: "DECREMENT" });
store.dispatch({ type: "ADDITION", payload: { number: 7 } });
store.dispatch({ type: "DECREMENT" });
