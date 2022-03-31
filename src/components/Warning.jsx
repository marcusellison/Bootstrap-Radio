import { ExclamationTriangleFill } from "react-bootstrap-icons";

const Warning = ({ text, children }) => {
  return (
    <section className="d-flex align-items-stretch p-0">
      <div className="bg-danger d-flex align-items-center p-0">
        <ExclamationTriangleFill size={72} className="p-3" />
      </div>

      <div
        // style={{ backgroundColor: "rgba(255, 255, 255, 0.15)" }}
        className="p-3 d-flex flex-column justify-content-center w-100 bg-white bg-opacity-10"
      >
        <p className="mb-0">{text}</p>
        {children}
      </div>
    </section>
  );
};

export default Warning;
