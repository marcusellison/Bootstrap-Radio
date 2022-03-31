import "./styles.css";
import BackgroundCoverImage from "./components/BackgroundCoverImage";
import Welcome from "./components/Welcome";
import Footer from "./components/Footer";
import Header from "./components/Header";
import BackgroundOverlayTint from "./components/BackgroundOverlayTint";
import MockScrollingBlock from "./components/_MockScrollingBlock";
//import Video from "./components/Video"; // Uncomment to import and use <Video />

export default function App() {
  return (
    <div className="d-flex flex-column">
      <Header fluid={false} />
      {/* Uncomment and move the <Video /> bellow the BackgroundCoverImage or BackgroundOverlayTint */}
      {/* <Video /> */}
      <BackgroundCoverImage
        zoom
        bgImageUrl="https://previews.123rf.com/images/efetova/efetova1506/efetova150600053/41047963-borrosa-multitud-de-gente-que-camina-en-la-ciudad-con-edificios-en-el-fondo-en-blanco-y-negro.jpg"
      />
      <BackgroundOverlayTint startColor="green" endColor="blue" />
      <Welcome
        rowAlignment="align-items-start justify-content-center"
        bsColumn="col-sm-12"
        textAlignment="text-start"
        bsBgColor="text-white bg-transparent border-5 shadow-lg p-3 mb-5 rounded border-success border-top "
      />
      <MockScrollingBlock />
      <Footer />
    </div>
  );
}
