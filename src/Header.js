import logo from "./logo.png";
import user from "./user.jpg";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="Header d-flex justify-content-between align-items-center p-3 px-4">
      <Link to="/" style={{ textDecoration: "none", color: "white" }}>
        <div className="logo d-flex align-items-center gap-2 ">
          <img src={logo} alt="our logo" width="50px" />
          <h2 className="m-0 p-0">TODO</h2>
        </div>
      </Link>
      <div className="navs">
        <ul className="list-unstyled d-flex gap-4 align-items-center p-0 m-0">
          <li>
            <Link className="nav-link fs-5 " to="/tasks">
              My tasks
            </Link>
          </li>
          <li>
            <Link className="nav-link fs-5" to="/tasks/create">
              Add task
            </Link>
          </li>
          <li>
            <Link to="/profile">
              <div className="pf">
                <img
                  src={user}
                  className="img-fluid"
                  alt="user"
                  title="profile"
                />
              </div>
            </Link>
          </li>
        </ul>
        {/* <ul className="list-unstyled d-flex gap-4 align-items-center p-0 m-0">
          <li>
            <Link className="nav-link fs-5 " to="/signup">
              <span className="btn btn-light">Sign up</span>
            </Link>
          </li>
          <li>
            <Link className="nav-link fs-5" to="/login">
              <span className="btn btn-outline-light">Login</span>
            </Link>
          </li>
        </ul> */}
      </div>
    </header>
  );
};

export default Header;
