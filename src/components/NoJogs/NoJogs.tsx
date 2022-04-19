import { Link } from "react-router-dom";

import "./NoJogs.scss";
import sadFace from "../../asset/images/sad.png";

const NoJogs = () => {
  return (
    <div className="noJogs">
      <div className="noJogs__block">
        <img className="noJogs__image" src={sadFace} alt="Sad face" />
        <span className="noJogs__text">Nothing is there</span>
        <Link to="/add" className="noJogs__button">
          Create your jog first
        </Link>
      </div>
    </div>
  );
};

export default NoJogs;
