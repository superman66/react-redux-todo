/**
 * Created by superman on 2017/3/20.
 */

import React, {Component} from 'react'
import AddTodo from '../component/AddTodo'
import TodoList from '../component/TodoList'
import Footer from '../component/Footer'

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
        <div>
          <AddTodo/>
          <TodoList/>
          <Footer/>
        </div>
    )
  }
}

export default App