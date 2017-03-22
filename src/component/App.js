/**
 * Created by superman on 2017/3/20.
 */

import React, {Component, PropTypes} from 'react'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import Footer from '../component/Footer'

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
        <div>
          <AddTodo/>
          <VisibleTodoList filter={this.props.params.filter || 'all'}/>
          <Footer/>
        </div>
    )
  }
}


export default App;