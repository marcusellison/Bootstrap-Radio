import "./Welcome.css";
import MobileColoumImage from "./MobileColoumImage";
import RadioInput from "./RadioInput";
import Tooltip from "./Tooltip";
import Badge from "./Badge";
import { Badge8k, BadgeCc, BadgeHd, BadgeTm } from "react-bootstrap-icons";

const Welcome = ({
  bgImageUrl,
  bgPosY = "center",
  bsBgColor = "bg-transparent",
  bsColumn = "col",
  rowAlignment = "align-items-center justify-content-start",
  fluid = false,
  textAlignment = "text-start"
}) => {
  const isFluid = fluid ? "-fluid" : "";

  return (
    <div className="container-fluid outer welcome">
      <div
        className={`container${isFluid} inner mt-sm-3`}
        style={{
          backgroundImage: `url(${bgImageUrl})`,
          backgroundPositionY: `${bgPosY}`
        }}
      >
        <div className={`row ${rowAlignment} ${textAlignment} mb-sm-5`}>
          <div className={`col ${bsColumn} ${bsBgColor}`}>
            {/* ----- SINGLE SELECT ----- */}
            {/* Added minHeight & height because row has a set height & minHeight 100vh */}
            <div
              className="row d-flex"
              style={{ minHeight: "100%", height: "100%" }}
            >
              <div className="col-6 col-sm-3 p-1 p-md-3">
                <RadioInput value="first-item">
                  <div>
                    <Badge8k size={70} />
                  </div>
                  <Tooltip title="This is tooltip 1" iconSize={16} />
                  <Badge
                    className="bg-transparent"
                    title="Employee assistance programs"
                  />
                </RadioInput>
              </div>

              <div className="col-6 col-sm-3 p-1 p-md-3">
                <RadioInput value="second-item">
                  <div>
                    <BadgeCc size={70} />
                  </div>
                  <Tooltip title="This is tooltip 2" iconSize={16} />
                  <Badge
                    className="bg-transparent"
                    title="Absence management and occupational health"
                  />
                </RadioInput>
              </div>

              <div className="col-6 col-sm-3 p-1 p-md-3">
                <RadioInput value="third-item">
                  <div>
                    <BadgeTm size={70} />
                  </div>
                  <Tooltip title="This is tooltip 3" iconSize={16} />
                  <Badge
                    className="bg-transparent"
                    title="Flexible and remote working"
                  />
                </RadioInput>
              </div>

              <div className="col-6 col-sm-3 p-1 p-md-3">
                <RadioInput value="fourth-item">
                  <div>
                    <BadgeHd size={70} />
                  </div>
                  <Tooltip title="This is tooltip 4" iconSize={16} />
                  <Badge
                    className="bg-transparent"
                    title="Workstation assessments"
                  />
                </RadioInput>
              </div>
            </div>
            {/* ----- END SINGLE SELECT ----- */}

            <hr />

            {/* START LIKERT SCALE */}
            <div
              className="row d-flex"
              style={{ minHeight: "100%", height: "100%" }}
            >
              <div className="col p-0 pe-1">
                <RadioInput value="N/A">N/A</RadioInput>
              </div>
              <div className="col p-0 pe-1">
                <RadioInput value="1">1</RadioInput>
              </div>
              <div className="col p-0 pe-1">
                <RadioInput value="2">2</RadioInput>
              </div>
              <div className="col p-0 pe-1">
                <RadioInput value="3">3</RadioInput>
              </div>
              <div className="col p-0 pe-1">
                <RadioInput value="4">4</RadioInput>
              </div>
              <div className="col p-0 pe-1">
                <RadioInput value="5">5</RadioInput>
              </div>
              <div className="col p-0">
                <RadioInput value="6">6</RadioInput>
              </div>
            </div>
            {/* END LIKERT SCALE */}
            {bgImageUrl ? <MobileColoumImage bgImageUrl={bgImageUrl} /> : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
