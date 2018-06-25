import React from 'react'

import { NavLink } from 'react-router-dom'

const activeLink = {
  textDecoration: 'none',
  color: 'black'
}

const Navigation = () =>
  <div className="nav">
    <NavLink to="/" exact activeStyle={activeLink}>домашняя страница</NavLink>
    {'-'}
    <NavLink to="/about" activeStyle={activeLink}>о сайте</NavLink>
  </div>

export default Navigation
