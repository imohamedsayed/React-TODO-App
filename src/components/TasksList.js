import Task from "./Task";
const TasksList = () => {
  return (
    <div className="TasksList">
      <span>7 tasks</span>
      <div className="list">
        <Task />
      </div>
    </div>
  );
};

export default TasksList;
