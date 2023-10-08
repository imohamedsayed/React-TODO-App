import imgUpload from "./imgUpload.svg";
import { useState } from "react";
const AddTask = () => {
  // Variables
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [deadline, setDeadline] = useState("");
  const [image, setImage] = useState("");

  // Functions
  const changeImagePlaceholder = (uploadedImage) => {
    const placeholder = document.querySelector("#img-placeholder");
    placeholder.src = URL.createObjectURL(uploadedImage);
    setImage(uploadedImage);
  };

  // Ui
  return (
    <div className="add-task">
      <form>
        <div className="form-field">
          <label>Title:</label>
          <input
            type="text"
            placeholder="task title..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-field">
          <label>Description:</label>
          <textarea
            type="text"
            placeholder="task description..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <div className="form-field">
          <label>Deadline:</label>
          <input
            type="date"
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
          />
        </div>
        <div className="upload-field">
          <img
            src={imgUpload}
            className="img-fluid"
            alt=""
            id="img-placeholder"
          />
          <input
            type="file"
            hidden
            id="img"
            onChange={(e) => {
              changeImagePlaceholder(e.target.files[0]);
            }}
          />
          <label htmlFor="img">
            <i className="fa-solid fa-cloud-arrow-up"></i>
            Upload Image
          </label>
        </div>
        <div className="submit text-center ">
          {!loading && <button>Add Task</button>}
          {loading && (
            <button disabled>
              {" "}
              <span className="spinner-grow-sm  spinner-grow "></span> Loading
              ....
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default AddTask;
