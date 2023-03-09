import { useState } from "react";
import { MessageList } from "./MessageList";
import { TextArea } from "./TextArea";

function ChatScreen() {
  const [messages,setMessages]=useState([]);
 

  return (
    <div className="md:w-[700px] py-3 relative mx-auto h-screen  bg-gray-100">
      <>
      <MessageList messages={messages}/>
      <TextArea setMessages={setMessages} messages={messages}/>
      </>
    </div>
  );
}

export default ChatScreen;