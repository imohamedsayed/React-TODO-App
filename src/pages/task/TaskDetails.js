import user from "../../assets/images/user.jpg";
import taskimg from "../../assets/images/task.jpg";
import { useLoaderData } from "react-router-dom";
const TaskDetails = () => {
  const task = useLoaderData();

  return (
    <div className="task-details mt-5 mb-5 p-5">
      <h2 className="mb-5">Math Homework</h2>
      <div className="writer d-flex align-items-center gap-2">
        <div className="img">
          <img
            src={user}
            width="50px"
            className="img-fluid rounded-4 "
            alt=""
          />
        </div>
        <h4>Mohamed Ali</h4>
        <input
          type="checkbox"
          className="ms-auto"
          style={{ width: "30px", height: "30px" }}
        />
      </div>
      <hr />
      <p className="fs-5 mt-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
        voluptatem ratione consequuntur nihil dolorum numquam alias, nisi
        pariatur odio itaque sequi, minima eius, quam nobis exercitationem quod!
        Iste, repellat deleniti repellendus ut nam, reprehenderit vitae sunt
        eveniet quam maiores deserunt vero sit aliquid officiis sint porro?
        Totam, vel. Voluptates, perferendis!
      </p>
      <div className="task-img text-center mt-4">
        <img
          src={taskimg}
          className="img-fluid"
          style={{ width: "400px" }}
          alt=""
        />
      </div>
      <p>Deadline : 20/5/2024</p>
      <div className="actions mt-4 text-center mt-5">
        <button className="btn btn-primary me-3">Update</button>
        <button className="btn btn-danger">Delete</button>
      </div>
    </div>
  );
};

//loader

export const taskDetailsLoader = async ({ params }) => {
  const { id } = params;
  /*
    if(res.status!==200){
      throw Error("Could not found this task!")
    }
  */
  return {};
};

export default TaskDetails;
