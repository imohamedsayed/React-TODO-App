import AddTask, { AddTaskAction } from "./pages/task/AddTask";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Tasks, { tasksLoader } from "./pages/task/Tasks";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import RootLayout from "./layouts/RootLayout";
import TasksLayout from "./layouts/TasksLayout";
import NotFound from "./pages/NotFound";
import EditTask, { taskLoader } from "./pages/task/EditTask";
import TaskDetails, { taskDetailsLoader } from "./pages/task/TaskDetails";
import Error from "./components/Error";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/tasks" element={<TasksLayout />} errorElement={<Error />}>
        <Route index element={<Tasks />} loader={tasksLoader} />
        <Route
          path=":id"
          element={<TaskDetails />}
          loader={taskDetailsLoader}
        />
        <Route path="create" element={<AddTask />} action={AddTaskAction} />
        <Route path=":id/edit" element={<EditTask />} loader={taskLoader} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
