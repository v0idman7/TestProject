import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";

import "./Header.scss";
import logo from "../../asset/images/logo.svg";
import logoGreen from "../../asset/images/logo-green.svg";
import Navigation from "../Navigation/Navigation";
import JogsFilter from "../JogsFilter/JogsFilter";

const Header = () => {
  const location = useLocation();
  const [filter, setFilter] = useState({ display: false, disabled: false });
  const [visible, setVisible] = useState(true);
  const [navigation, setNavigation] = useState(false);

  useEffect(() => {
    if (location.pathname !== "/") {
      setFilter({ display: false, disabled: true });
    } else setFilter({ display: false, disabled: false });
    if (location.pathname !== "/login") {
      setVisible(false);
    } else setVisible(true);
    setNavigation(false);
  }, [location]);
  return (
    <>
      <header className={`header ${navigation ? "header--close" : ""}`}>
        <div className="header__wrap">
          <img
            className="header__logo"
            src={navigation ? logoGreen : logo}
            alt="LogoBear"
          />
          {!visible ? (
            <>
              <Navigation
                open={navigation}
                jogs={location.pathname === "/"}
                info={location.pathname === "/info"}
              />
              <button
                disabled={filter.disabled}
                className={`filterButton${
                  filter.display ? " filterButton--active" : ""
                }`}
                onClick={() =>
                  setFilter((prev) => ({ ...prev, display: !prev.display }))
                }
              />
              <button
                className="header__burger"
                data-testid="filter"
                onClick={() => setNavigation((prev) => !prev)}
              />
            </>
          ) : null}
        </div>
      </header>
      {filter.display ? <JogsFilter /> : null}
      <Outlet />
    </>
  );
};

export default Header;
