import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        {/* Navbar Brand */}
        <NavLink className="navbar-brand text-white" to="#">Online Banking System</NavLink>

        {/* Toggler for mobile view */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <NavLink className="nav-link text-white" to="/home">Home </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-white" to="/">Login</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-white" to="#"></NavLink>
            </li>
            <li className="nav-item dropdown">
              <NavLink className="nav-link dropdown-toggle text-white" to="#" id="navbarDropdownMenuLink" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Services
              </NavLink>
              <div className="dropdown-menu bg-dark" aria-labelledby="navbarDropdownMenuLink">
                <NavLink className="dropdown-item text-white" to="#">Issuing Cards</NavLink>
                <NavLink className="dropdown-item text-white" to="#">Create Online Accounts in Seconds</NavLink>
                <NavLink className="dropdown-item text-white" to="#">Pay Bills</NavLink>
              </div>
            </li>
          </ul>

          {/* Search Bar Positioned to the Right */}
          <form className="d-flex ms-auto">
            <input
              className="form-control me-2 bg-white text-dark"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success text-white" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  );
};
