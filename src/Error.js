import errorImg from "./error.png";
const Error = ({ error }) => {
  return (
    <div className="Error" style={{ textAlign: "center", marginTop: "40px" }}>
      <img src={errorImg} style={{ width: "150px" }} alt="" />
      <p
        style={{
          color: "crimson",
          margin: "20px 0",
          fontWeight: "bold",
          fontSize: "1.5rem",
        }}
      >
        {error}
      </p>
    </div>
  );
};

export default Error;
