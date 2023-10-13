import { NavLink, Outlet } from "react-router-dom";
import AllTasks from "../pages/task/AllTasks.js";
export default function TasksLayout() {
  return (
    <div className="tasks mt-5">
      <h2>All Tasks</h2>
      <div className="all-tasks-container">
        <AllTasks />
      </div>
      <div className="links d-flex  gap-2 justify-content-center mt-5">
        <NavLink to="my_tasks" className="nav-link">
          My Tasks
        </NavLink>
        <NavLink to="create" className="nav-link">
          Create Task
        </NavLink>
      </div>
      <hr />
      <Outlet />
    </div>
  );
}
