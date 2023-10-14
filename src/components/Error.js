import { useRouteError } from "react-router-dom";
import errorImg from "../assets/images/error.png";
const Error = ({ error }) => {
  const err = useRouteError()?.message || error;

  return (
    <div className="Error " style={{ textAlign: "center", marginTop: "200px" }}>
      <img src={errorImg} style={{ width: "150px" }} alt="" />
      <p
        style={{
          color: "crimson",
          margin: "20px 0",
          fontWeight: "bold",
          fontSize: "1.5rem",
        }}
      >
        {err}
      </p>
    </div>
  );
};

export default Error;
