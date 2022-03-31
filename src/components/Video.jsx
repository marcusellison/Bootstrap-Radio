import "./Video.css";

const Video = ({
  path = "https://static.videezy.com/system/resources/previews/000/038/595/original/alb_lightfx2072_1080p.mp4"
}) => {
  return (
    <video
      id="background-cover-video"
      autoPlay={true}
      muted={true}
      loop={true}
      src={path}
    ></video>
  );
};

export default Video;
