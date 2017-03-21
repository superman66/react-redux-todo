/**
 * Created by superman on 2017/3/20.
 */

import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import AddTodo from '../component/AddTodo'
import TodoList from '../component/TodoList'
import Footer from '../component/Footer'
import {addTodo, toggleTodo, setVisibilityFilter} from '../actions/index'
import {VisibilityFilters} from '../constants/filterTypes'

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {dispatch, visibleTodos, visibilityFilter} = this.props;
    return (
        <div>
          <AddTodo
              onAddClick={text =>
                  dispatch(addTodo(text))}
          />
          <TodoList onTodoClick={ index => {
            dispatch(toggleTodo(index))
          }} todos={visibleTodos} />
          <Footer
              filter={visibilityFilter}
              onFilterChange={ nextFilter =>
                  dispatch(setVisibilityFilter(nextFilter))}
          />
        </div>
    )
  }
}
App.propTypes = {
  visibleTodos: PropTypes.arrayOf(PropTypes.shape({
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  visibilityFilter: PropTypes.oneOf([
    VisibilityFilters.SHOW_ALL,
    VisibilityFilters.SHOW_COMPLETED,
    VisibilityFilters.SHOW_ACTIVE
  ])
}

function selectTodos(todos, filter) {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos;
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(todo => todo.completed)
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(todo => !todo.completed)
  }
}

function select(state) {
  return {
    visibleTodos: selectTodos(state.todos, state.visibilityFilter),
    visibilityFilter: state.visibilityFilter
  }
}

export default connect(select)(App)