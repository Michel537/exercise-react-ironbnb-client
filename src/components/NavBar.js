import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className="container">
      <nav className="navbar navbar-light bg-light">
        <NavLink exact activeclassname="active" className="col-3 navbar-brand" to="/">
          Home
        </NavLink>
        <NavLink activeclassname="active" className="col-3 navbar-brand" to="/apartments/create">
          Create
        </NavLink>
        <NavLink activeclassname="active" className="col-3 navbar-brand" to="/apartments">
          Apartments 
        </NavLink>
      </nav>
    </div>
  );
}

export default NavBar;
