// ----- State to toggle display -----
import { Card, Form, FormControl, FormLabel } from "react-bootstrap";
import { X } from "react-bootstrap-icons";

const ChatWindow = ({ msg, toggleChatWindowDisplay }) => {
  // helper functions

  return (
    <div className="position-absolute bottom-0 start-0 z-index-top chat-window">
      <Card body className="bg-dark">
        <X
          size={24}
          className="float-end pe-auto cursor-pointer"
          onClick={toggleChatWindowDisplay}
        />

        <div className="clearfix">
          <p className="p-3 mb-2 bg-secondary text-white bg-gradient w-75 rounded">
            Please indicate how much you prefer or value each item in relation
            to the others
          </p>
          <p className="p-3 mb-2 bg-info text-white bg-gradient shadow w-75 rounded float-end rounded-2">
            {msg}
          </p>
        </div>
        <hr />
        <Form className="mt-2">
          <FormLabel>Can I help you with something else?</FormLabel>
          <FormControl type="text" placeholder="Your text here..." />
        </Form>
      </Card>
    </div>
  );
};

export default ChatWindow;

// // ----- Using Details Element -----
// import { Card, Form, FormControl, FormLabel } from "react-bootstrap";
// import { X } from "react-bootstrap-icons";

// const ChatWindow = ({ msg, closeChatWindow }) => {
//   // event handlers

//   return (
//     <div className="position-absolute bottom-0 start-0 z-index-top chat-window">
//       <Card body className="bg-dark">
//         <X
//           size={24}
//           className="float-end pe-auto cursor-pointer"
//           onClick={closeChatWindow}
//         />

//         <div className="clearfix">
//           <p className="p-3 mb-2 bg-secondary text-white bg-gradient w-75 rounded">
//             Please indicate how much you prefer or value each item in relation
//             to the others
//           </p>
//           <p className="p-3 mb-2 bg-info text-white bg-gradient shadow w-75 rounded float-end rounded-2">
//             {msg}
//           </p>
//         </div>
//         <hr />
//         <Form className="mt-2">
//           <FormLabel>Can I help you with something else?</FormLabel>
//           <FormControl type="text" placeholder="Your text here..." />
//         </Form>
//       </Card>
//     </div>
//   );
// };

// export default ChatWindow;
