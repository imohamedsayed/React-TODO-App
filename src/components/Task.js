import task from "../assets/images/task.jpg";
import user from "../assets/images/user.jpg";
import { Link } from "react-router-dom";
const Task = () => {
  return (
    <div className="task d-flex pe-4">
      <div className="img">
        <img src={task} className="img-fluid" alt="" />
      </div>
      <div className="preview">
        <span className="d-block  mt-2">
          <img src={user} width="30px" alt="" /> Mohamed Sayed
        </span>
        <Link to="/tasks/5" style={{ color: "#111", textDecoration: "none" }}>
          <p className="title">Math Homework</p>
        </Link>

        <p className="date text-secondary ">Deadline: 8/10/2023</p>
        <div className="mt-3">
          <button className="btn btn-primary me-3">Edit</button>
          <button className="btn btn-danger">Delete</button>
        </div>
      </div>
      <div className="status">
        <input type="checkbox" name="status" />
      </div>
    </div>
  );
};

export default Task;
