import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="login">
      <form style={{ margin: "80px auto", width: "720px" }}>
        <h2>Login</h2>
        <hr />
        <div className="form-field mt-5">
          <label>Email :</label>
          <input type="email" placeholder="xxx@xxx.com" />
        </div>
        <div className="form-field">
          <label>Password :</label>
          <input type="password" placeholder="xxxxxxx" />
        </div>
        <p>
          Don't have an account?
          <Link to="/signup" className="ms-1 text-decoration-none ">
            Create account
          </Link>
        </p>
        <div className="submit text-center">
          <button style={{ width: "100%" }}>Login</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
