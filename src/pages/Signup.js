import { Link } from "react-router-dom";
const Signup = () => {
  return (
    <div className="signup">
      <form style={{ margin: "80px auto", width: "720px" }}>
        <h2>Signup</h2>
        <hr />
        <div className="form-field mt-5">
          <label>Name :</label>
          <input type="email" placeholder="EX: John Doe " />
        </div>
        <div className="form-field">
          <label>Email :</label>
          <input type="email" placeholder="xxx@xxx.com" />
        </div>
        <div className="form-field">
          <label>Password :</label>
          <input type="password" placeholder="xxxxxxx" />
        </div>
        <div className="form-field">
          <label>Confirm Password :</label>
          <input type="password" placeholder="xxxxxxx" />
        </div>
        <p>
          Already Have an account?
          <Link to="/login" className="ms-1 text-decoration-none ">
            login
          </Link>
        </p>
        <div className="submit text-center">
          <button style={{ width: "100%" }}>Signup</button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
