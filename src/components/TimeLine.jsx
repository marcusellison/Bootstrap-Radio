const TimeLine = () => {
  return (
    <>
      <small>Welcome</small>
      <br />
      <div
        className="progress float-end"
        style={{ width: "25%", height: "0.5rem" }}
      >
        <div
          className="progress-bar bg-primary"
          role="progressbar"
          style={{ width: "25%" }}
          aria-valuenow="25"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
    </>
  );
};

export default TimeLine;
