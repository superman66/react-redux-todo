/**
 * Created by superman on 17/3/6.
 */
import {combineReducers} from 'redux'
import {
    VisibilityFilters,
    SET_VISIBILITY_FILTER,
    ADD_TODO,
    TOGGLE_TODO
} from './actions'
const {SHOW_ALL} = VisibilityFilters


function visibilityFilter(state = SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state;
  }
}

function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ]
    case TOGGLE_TODO:
      return [
        ...state.slice(0, action.index),
        Object.assign({}, state[action.index], {
          completed: true
        }),
        ...state.slice(action.index + 1)
      ]
    default:
      return state;
  }
}


const todoApp = combineReducers({
  visibilityFilter,
  todos
})

export default todoApp

