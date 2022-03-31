import { InfoCircle } from "react-bootstrap-icons";

const HelpfulTip = ({ tipTitle, tipText, iconClassName, children }) => {
  return (
    <section>
      <div className="p-3 d-flex align-items-center p-0 bg-white bg-opacity-10">
        <div className={iconClassName}>
          <InfoCircle size={32} />
        </div>
        <p className="mb-0 ms-3">
          <strong className="d-block">{tipTitle}</strong>
          {tipText}
        </p>
      </div>
      {children}
    </section>
  );
};

export default HelpfulTip;
