const MobileColoumImage = ({
  bgImageUrl = "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
}) => {
  return (
    <div className="col col-12 d-block d-sm-none">
      <img src={`${bgImageUrl}`} className="img-fluid img-thumbnail" alt="" />
    </div>
  );
};

export default MobileColoumImage;
