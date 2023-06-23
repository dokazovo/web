import {Link} from "react-router-dom";
import Search from "./Search";

function Header() {
  return (
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="nav-link" to="/">Dokazovo 👍</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                  aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/">Головна</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/medications">Ліки</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/ingredients">Активні речовини</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/diseases">Захворювання</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/atc">АТХ класифікація</Link>
              </li>
            </ul>
            <Search/>
          </div>
        </div>
      </nav>
  );
}

export default Header;