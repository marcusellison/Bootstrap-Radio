import "./BackgroundOverlayTint.css";

const BackgroundOverlayTint = ({
  direction = "131.3deg",
  startColor = "rgba(0, 71, 187, 0.92) 11.94%",
  endColor = "rgba(33, 0, 70, 0.96) 89.35%"
}) => {
  return (
    <div
      className="background-overlay-tint"
      style={{
        background: `linear-gradient(${direction}, ${startColor}, ${endColor})`
      }}
    />
  );
};

export default BackgroundOverlayTint;
