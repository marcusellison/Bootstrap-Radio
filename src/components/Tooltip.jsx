/* 1) Have state to toggle display here, bottom commented out code
 * uses display HTML element (both works here)
 * 2) added video tag as well (on parent, Welcome.jsx), to showcase it also fits/works
 */

// ----- State to toggle display -----
import { useState } from "react";
import { InfoCircle, CaretUpFill } from "react-bootstrap-icons";

const Tooltip = ({
  title = "",
  className = "bg-dark",
  iconSize = 32,
  children
}) => {
  // state
  const [open, setOpen] = useState(false);

  // event handlers
  const toggleTooltipText = () => {
    setOpen(!open);
  };

  // helper functions
  const renderTooltipText = open ? (
    <div>
      <CaretUpFill
        className="text-dark position-absolute"
        size={30}
        style={{ top: "1.5625rem", left: "0" }}
      />
      <div
        className={`${className} position-absolute`}
        style={{
          top: "2.8125rem",
          left: "-5rem",
          width: "12.5rem"
        }}
      >
        {children}
        <p className="mt-3 mb-0 cursor-pointer" onClick={toggleTooltipText}>
          {title}
        </p>
      </div>
    </div>
  ) : (
    ""
  );

  // render content
  return (
    <div className="d-inline-block position-relative">
      <div>
        <InfoCircle
          size={iconSize}
          className="bg-info rounded-circle cursor-pointer"
          onClick={toggleTooltipText}
        />
      </div>
      {renderTooltipText}
    </div>
  );
};

export default Tooltip;

// ----- Using Details element -----
// import { CaretUpFill, InfoCircle } from "react-bootstrap-icons";

// const Tooltip = ({ title = "", className = "", children }) => {
//   return (
//     <details className="d-inline-block position-relative">
//       <summary style={{ listStyle: "none" }}>
//         <InfoCircle
//           size={30}
//           className="bg-warning rounded-circle text-primary"
//         />
//       </summary>

//       <CaretUpFill
//         className="text-dark position-absolute start-0"
//         size={30}
//         style={{ top: "25px" }}
//       />
//       <div
//         className={`${className} position-absolute p-3 text-center`}
//         style={{
//           top: "45px",
//           left: "-80px",
//           width: "200px"
//         }}
//       >
//         {children}
//         <p className="mt-3 mb-0">{title}</p>
//       </div>
//     </details>
//   );
// };

// export default Tooltip;
