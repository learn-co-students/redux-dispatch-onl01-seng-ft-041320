function changeState(state, action){
  switch (action.type) {
    case 'INCREASE_COUNT':
      return {count: state.count + 1}
    default:
      return state;
  }
}

let state = {count: 0}
let action = {type: 'INCREASE_COUNT'}

// calling changeState like this doesn't persist the changes to state made by the function
// changeState(state, action)

// using a dispatch function can help to persist the changes you want to make to state
function dispatch(action) {
  state = changeState(state, action)
  return state
}

dispatch(action)