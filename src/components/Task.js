import task from "../assets/images/task.jpg";
import user from "../assets/images/user.jpg";
const Task = () => {
  return (
    <div className="task d-flex">
      <div className="img">
        <img src={task} className="img-fluid" alt="" />
      </div>
      <div className="preview">
        <span className="d-block mb-1">
          <img src={user} width="30px" alt="" /> Mohamed Sayed
        </span>
        <p className="title">Math Homework</p>
        <p className="description">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora ipsa
          voluptatibus excepturi animi sapiente adipisci impedit ullam
          cupiditate quisquam delectus.
        </p>
        <p className="date text-secondary ">8/10/2023</p>
      </div>
      <div className="status">
        <input type="checkbox" name="status" />
      </div>
    </div>
  );
};

export default Task;
