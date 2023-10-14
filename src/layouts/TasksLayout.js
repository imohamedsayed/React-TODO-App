import { NavLink, Outlet } from "react-router-dom";
export default function TasksLayout() {
  return (
    <div className="tasks mt-5">
      <div className="links d-flex  gap-2 justify-content-center mt-5">
        <NavLink to="" className="nav-link">
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
