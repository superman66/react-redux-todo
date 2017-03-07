/**
 * Created by superman on 2017/3/6.
 */

import React, {Component, PropTypes} from 'react'

class AddTodo extends Component {
  render() {
    return (
        <div>
          <input type="text" ref={input => {this.textInput = input}}/>
          <button
              onClick={e => this.handleClick(e)}
          >
            Add
          </button>
        </div>
    )
  }

  handleClick(e) {
    const node = this.textInput;
    const text = node.value.trim();
    this.props.onAddClick(text)
    node.value = '';
  }
}

AddTodo.propTypes = {
  onAddClick: PropTypes.func.isRequired
}
export default AddTodo