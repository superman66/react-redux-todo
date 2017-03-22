/**
 * Created by superman on 2017/3/21.
 */

import React, {Component} from 'react'
import {Link} from 'react-router'

class FilterLink extends Component {

  render() {
    return (
        <Link
            to={this.props.filter === 'all' ? '' : this.props.filter}>
          {this.props.children}
        </Link>
    )
  }
}

export default FilterLink