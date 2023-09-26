import { NavLink, Outlet } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  fa1,
  fa2,
  fa3,
  faRectangleList,
} from "@fortawesome/free-solid-svg-icons";

function NavRoutes() {
  return (
    <>
      <div className="nav-bar">
        <NavLink to="/" className="nav-link" activeClassName="active">
          <FontAwesomeIcon icon={faUser} className="nav-icon" />
          <span className="nav-text">USER INFO</span>
        </NavLink>
        <NavLink to="/question1" className="nav-link" activeClassName="active">
          <FontAwesomeIcon icon={fa1} className="nav-icon" />
          <span className="nav-text">QUESTION 1</span>
        </NavLink>
        <NavLink to="/question2" className="nav-link" activeClassName="active">
          <FontAwesomeIcon icon={fa2} className="nav-icon" />
          <span className="nav-text">QUESTION 2</span>
        </NavLink>
        <NavLink to="/question3" className="nav-link" activeClassName="active">
          <FontAwesomeIcon icon={fa3} className="nav-icon" />
          <span className="nav-text">QUESTION 3</span>
        </NavLink>
        <NavLink to="/summary" className="nav-link" activeClassName="active">
          <FontAwesomeIcon icon={faRectangleList} className="nav-icon" />
          <span className="nav-text">SUMMARY</span>
        </NavLink>
        <Outlet />
      </div>
    </>
  );
}

export default NavRoutes;
