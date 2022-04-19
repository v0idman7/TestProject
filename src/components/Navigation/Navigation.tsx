import { Link } from "react-router-dom";

import "./Navigation.scss";

const Navigation = ({
  jogs,
  info,
  open,
}: {
  jogs: boolean;
  info: boolean;
  open: boolean;
}) => {
  return (
    <nav className={`navigation ${open ? "navigation__open" : ""}`}>
      <ul className="navigation__list">
        <li className="navigation__item">
          <Link
            className={`navigation__link${
              jogs ? " navigation__link--active" : ""
            }`}
            to="/"
          >
            JOGS
          </Link>
        </li>
        <li className="navigation__item">
          <Link
            className={`navigation__link${
              info ? " navigation__link--active" : ""
            }`}
            to="/info"
          >
            INFO
          </Link>
        </li>
        <li className="navigation__item">
          <a className="navigation__link" href="mailto:hi@yellow.systems">
            CONTACT US
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
