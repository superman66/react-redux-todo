/**
 * Created by superman on 2017/3/21.
 */

import {connect} from 'react-redux'
import TodoList from '../component/TodoList'
import {toggleTodo} from '../actions/index'
import {VisibilityFilters} from '../constants/filterTypes'

function visibleTodos(todos, filter) {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos;
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(todo => !todo.completed);
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(todo => !todo.completed)
    default:
      return todos
  }
}

function mapState2Props(state, ownProps) {
  return {
    todos: visibleTodos(state.todos, ownProps.fliter)
  }
}

function mapDispatch2Props(dispatch) {
  return {
    onTodoClick: (id) => {
      dispatch(toggleTodo(id))
    }
  }
}

export default connect(
    mapState2Props,
    mapDispatch2Props
)(TodoList)