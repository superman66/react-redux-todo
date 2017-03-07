/**
 * Created by superman on 17/3/7.
 */
import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {
  addTodo,
  toggleTodo,
  setVisibilityFilter,
  VisibilityFilters
} from '../actions'
import AddTodo from '../containers/AddTodo'
import TodoList from '../component/TodoList'
import Footer from '../component/Footer'

class App extends Component {
  render() {
    const {dispatch, visibleTodos, visibilityFilter} = this.props;
    return (
        <div>
          <AddTodo
              onAddClick={text => {
                dispatch(addTodo(text))
              }}
          />

          <TodoList
              todos={visibleTodos}
              onTodoClick={index => {
                dispatch(toggleTodo(index))
              }}/>
          <Footer
              filter={visibilityFilter}
              onFilterChange={nextFilter => {
                dispatch(setVisibilityFilter(nextFilter))
              }}
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
    'SHOW_ALL',
    'SHOW_COMPLETED',
    'SHOW_ACTIVE'
  ]).isRequired
}

function selectTodos(todos, filter) {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL: {
      return todos;
    }
    case VisibilityFilters.SHOW_COMPLETED: {
      return todos.filter(t => t.completed)
    }
    case VisibilityFilters.SHOW_ACTIVE: {
      return todos.filter(t => !t.completed)
    }
  }
}

function select(state) {
  return {
    visibleTodos: selectTodos(state.todos, state.visibilityFilter),
    visibilityFilter: state.visibilityFilter
  }
}
export default connect(select)(App)