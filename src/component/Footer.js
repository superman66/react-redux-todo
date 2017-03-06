/**
 * Created by superman on 17/3/6.
 */
import React, {Component} from 'react'
import FilterLink from '../containers/FilterLink'

const Footer = () => (
    <p>
      Show:
      {" "}
      <FilterLink filter="SHOW_ALL">
        SHOW_ALL
      </FilterLink>
      <FilterLink filter="SHOW_ACTIVE">
        SHOW_ACTIVE
      </FilterLink>
      <FilterLink filter="SHOW_COMPLETED">
        SHOW_COMPLETED
      </FilterLink>
    </p>
)

export default Footer