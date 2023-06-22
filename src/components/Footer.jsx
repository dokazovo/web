import {Link} from "react-router-dom";

function Footer() {
  return (
      <footer className="py-3 my-4">
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          <li className="nav-item">
            <Link className="nav-link px-2 text-body-secondary" to="/about">Про проект</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link px-2 text-body-secondary" to="/feedback">Відгук</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link px-2 text-body-secondary" to="/agreement">Угода</Link>
          </li>
        </ul>
        <p className="text-center text-body-secondary">© 2023 Dokazovo</p>
      </footer>
  );
}

export default Footer;