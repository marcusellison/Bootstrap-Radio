/*
 * 1) Have state to toggle display here, bottom commented out code
 * uses display HTML element (both works here)
 *
 * 2) ChatHelp & ChatWindow no longer uses custom css (all done with bootstrap).
 *
 * 3) Refactored button to be a div: buttons do not work
 * with detail HTML element (not clickable), but divs do. Also by using divs, don't need to worry
 * about button outline and shadow when active/focused (extra inline styles).
 *
 * 4) Created custom global css names in styles.css file for styling I couldn't handle
 * with Bootstrap - so I don't have to use inline styles and can use them as class names.
 * For example: created a class cursor-pointer, so I can simply add that class name
 * and not create a separate inline-style
 *
 * 5) No built-in way to animate transition between open & closed for details HTML tag:
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details
 */

// ----- State to toggle display -----
import { useState } from "react";
import { EmojiLaughing, CaretLeftFill } from "react-bootstrap-icons";
import ChatWindow from "./ChatWindow";

const ChatHelp = ({ msg }) => {
  // state
  const [open, setOpen] = useState(false);

  // event handlers
  const toggleChatWindowDisplay = () => {
    setOpen(!open);
  };

  // helper functions
  const renderChatWindow = open ? (
    <ChatWindow
      msg={msg}
      open={open}
      toggleChatWindowDisplay={toggleChatWindowDisplay}
    />
  ) : (
    ""
  );

  // render content
  return (
    <div className="d-flex align-items-center">
      <EmojiLaughing size={24} />
      <div className="d-inline-block position-relative bg-dark text-white p-2 ms-3">
        <CaretLeftFill
          className="text-dark position-absolute top-50 start-0 translate-middle cursor-pointer"
          size={35}
          onClick={toggleChatWindowDisplay}
        />
        <span
          className="d-inline-block mb-1 cursor-pointer"
          onClick={toggleChatWindowDisplay}
        >
          How can I help you?
        </span>
        {renderChatWindow}
      </div>
    </div>
  );
};

export default ChatHelp;

// // ----- Using Details element -----
// import { EmojiLaughing, CaretLeftFill } from "react-bootstrap-icons";
// import ChatWindow from "./ChatWindow";

// const ChatHelp = ({ msg }) => {
//   const closeChatWindow = () => {
//     const detailsElement = document.getElementsByTagName("details")[0];
//     return detailsElement.removeAttribute("open");
//   };

//   return (
//     <div className="d-flex align-items-center">
//       <EmojiLaughing size={24} />
//       <details className="position-relative ms-3 p-2 text-white bg-dark">
//         <summary style={{ listStyle: "none" }}>
//           <CaretLeftFill
//             className="text-dark position-absolute top-50 start-0 translate-middle"
//             size={35}
//           />
//           <span className="d-inline-block mb-1">How can I help you?</span>
//         </summary>

//         <ChatWindow msg={msg} closeChatWindow={closeChatWindow} />
//       </details>
//     </div>
//   );
// };

// export default ChatHelp;
