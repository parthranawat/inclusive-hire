import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faQuestionCircle,
  faExclamationCircle,
  faCog,
} from "@fortawesome/free-solid-svg-icons";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src="https://cdn.vectorstock.com/i/preview-1x/24/55/monochrome-simple-interview-icon-vector-37872455.jpg" />
        <span className="help-text">Inclusive Hire</span>
      </div>
      <div className="action-btn">
        <FontAwesomeIcon className="icon-block" icon={faQuestionCircle} />
        <FontAwesomeIcon className="icon-block" icon={faExclamationCircle} />
        <FontAwesomeIcon className="icon-block" icon={faCog} />
      </div>
    </div>
  );
};
export default Header;
