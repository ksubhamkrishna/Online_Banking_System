import { NavLink } from "react-router-dom";

export const Header = () => {

  return (

    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">Navbar</a>
  {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button> */}
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      <a className="nav-item nav-link active me-auto mb-4 " href="#">Home <span className="sr-only">(current)</span></a>
      <a className="nav-item nav-link me-auto mb-4" href="#">Features</a>
      <a className="nav-item nav-link me-auto mb-4" href="#">Pricing</a>
      <a className="nav-item nav-link disabled me-auto mb-4" href="#">Disabled</a>
    </div>
  </div>
</nav>
  );
}