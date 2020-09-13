import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import './header.scss'
import { Menu, X } from 'react-feather'

const NavLink = props => (
  <Link className='nav-item'>
    <Link to={props.to}>{props.children}</Link>
  </Link>
)

const Header = ({ siteTitle }) => (
  <header className="header">
      <nav>
        <Link to="/" className="header-title">
          <h1>
            {siteTitle}
          </h1>
        </Link>
        <ul>
        <div className='nav-list'>
          <li>
            <NavLink to="/posts/">The Book</NavLink>
          </li>
          <li>
            <NavLink to="/whatandwhy/">What and Why</NavLink>
          </li>
          <li>
            <NavLink to="/whereandhow/">Where and How</NavLink>
          </li>
        </div>
        </ul>
      </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
