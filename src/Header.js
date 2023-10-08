import logo from "./logo.png";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="Header d-flex justify-content-between align-items-center p-3 px-4">
      <div className="logo d-flex align-items-center gap-2 ">
        <img src={logo} alt="our logo" width="50px" />
        <h2 className="m-0 p-0">TODO</h2>
      </div>
      <div className="navs">
        <ul className="list-unstyled d-flex gap-4 align-items-center p-0 m-0">
          <li>
            <Link className="nav-link fs-5 " to="/">
              My tasks
            </Link>
          </li>
          <li>
            <Link className="nav-link fs-5" to="/tasks/create">
              Add task
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
