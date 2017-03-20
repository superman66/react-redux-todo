/**
 * Created by superman on 2017/3/20.
 */

import React, {PropTypes} from 'react'

function TodoLis({onClick, completed, text}) {
  return (
      <li
          onClick={onClick}
          style={{textDecoration: completed ? 'line-through' : 'none'}}
      >
        {text}
      </li>
  )

}

TodoList.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
};

export default Todo