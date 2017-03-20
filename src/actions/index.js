/**
 * Created by superman on 2017/3/20.
 */
import {ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER} from '../constants/actionTypes'
import {VisibilityFilters} from '../constants/filterTypes'

function addTodo(text) {
  return {
    type: ADD_TODO,
    text
  }
}

function toggleTodo(id) {
  return {
    type: TOGGLE_TODO,
    id
  }
}
function setVisibilityFilter(filter) {
  return {
    type: SET_VISIBILITY_FILTER,
    filter
  }
}


