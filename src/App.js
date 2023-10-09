import Header from "./Header";
import Palestine from "./Palestine";
import AddTask from "./AddTask";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Tasks from "./Tasks";
import { ToastContainer } from "react-toastify";
import LandingPage from "./LandingPage";
import Login from "./Login";
import Signup from "./Signup";
import Profile from "./Profile";

function App() {
  return (
    <Router>
      <div className="App">
        <Palestine />
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={<LandingPage />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/signup" element={<Signup />}></Route>
            <Route path="/profile" element={<Profile />}></Route>
            <Route path="/tasks" element={<Tasks />}></Route>
            <Route path="/tasks/create" element={<AddTask />}></Route>
          </Routes>
        </div>
        <ToastContainer />
      </div>
    </Router>
  );
}

export default App;
