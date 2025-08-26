import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { NavLink, Outlet } from 'react-router-dom';

export const App = () => {
  return (
    <>
      <nav
        className="navbar is-light is-fixed-top is-mobile has-shadow"
        data-cy="Nav"
      >
        <div className="container">
          <div className="navbar-brand">
            <ul className="navbar-start">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `navbar-item${isActive ? ' is-active' : ''}`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/tabs"
                  className={({ isActive }) =>
                    `navbar-item${isActive ? ' is-active' : ''}`
                  }
                >
                  Tabs
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="section">
        <div className="container">
          <Outlet />
        </div>
      </div>
    </>
  );
};
