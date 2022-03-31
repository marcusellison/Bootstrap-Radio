import "./BackgroundCoverImage.css";

const BackgroundCoverImage = ({
  bgImageUrl = "https://static.vecteezy.com/system/resources/thumbnails/001/615/842/original/soft-purple-bokeh-lights-floating-in-windy-dark-night-video.jpg",
  children,
  zoom = false
}) => {
  const zoomClass = zoom ? "zoom" : "";
  return (
    <div
      className={`background-cover-image ${zoomClass}`}
      style={{
        backgroundImage: `url(${bgImageUrl})`
      }}
    >
      {children}
    </div>
  );
};

export default BackgroundCoverImage;
