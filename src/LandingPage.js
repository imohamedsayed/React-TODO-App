import intro from "./intro.svg";
import { useNavigate } from "react-router-dom";
const LandingPage = () => {
  const negative = useNavigate();

  return (
    <div className="landing-page d-flex justify-content-between  align-items-center">
      <div className="intro ">
        <h1>React ToDo</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
          laborum iste porro? Id, tenetur corporis?
        </p>
        <button
          onClick={() => {
            negative("/login");
          }}
        >
          Get Started
        </button>
      </div>
      <div className="img">
        <img src={intro} className="img-fluid" alt="" />
      </div>
    </div>
  );
};

export default LandingPage;
