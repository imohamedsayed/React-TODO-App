import Header from "./Header";
import Palestine from "./Palestine";
import AddTask from "./AddTask";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Tasks from "./Tasks";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <Router>
      <div className="App">
        <Palestine />
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={<Tasks />}></Route>
            <Route path="/tasks/create" element={<AddTask />}></Route>
          </Routes>
        </div>
        <ToastContainer />
      </div>
    </Router>
  );
}

export default App;
