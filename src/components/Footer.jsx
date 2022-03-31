import ChatHelp from "./ChatHelp";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="flex-shrink-0 py-2 footer-tray text-white-50">
      <div className="container">
        <ChatHelp
          msg="You cannot have the same preference value for all the choices shown.
   Can I help you with something else?"
        />
      </div>
      <div className="container copyright-navigation text-white-50 text-opacity-50">
        <small>Logo © TrueChoice Solutions, Inc. | Privacy Policy</small>
      </div>
    </footer>
  );
};

export default Footer;
