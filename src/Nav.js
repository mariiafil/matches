import React from 'react';
import { NavLink } from 'react-router-dom';
// import './styles/header.scss';

export const Nav = () => (
  <header className="header">
    <div className="header__wrapper">
      <h1 className="header__title">Make me up!</h1>
      <nav className="navigation">
        <ul className="navigation__list">
          <li>
            <NavLink
              to="/"
              exact
              className="navigation__item"
              activeClassName="navigation__item--active"
            >
            Matches
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/battles"
              activeClassName="navigation__item--active"
              className="navigation__item"
            >
            Battles
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
);
