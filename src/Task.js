import task from "./task.jpg";

const Task = () => {
  return (
    <div className="task d-flex">
      <div className="img">
        <img src={task} className="img-fluid" alt="" />
      </div>
      <div className="preview">
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
