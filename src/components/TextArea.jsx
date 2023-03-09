import { useState } from "react";
import sendIcon from "../Icons/send.svg";
export function TextArea({ setMessages, messages }) {
  const [text, setText] = useState("");

  function changeTextHandler(event) {
    setText(event.target.value);
  }
  function postTextHandler() {
    if(text.trim()!==''){
    setMessages((messages) => [...messages, text]);
    setText('')}
  }
 
  function handleKeyPress(event) {
    if (event.keyCode === 13) {
      postTextHandler();
    }
  }

  return (
    <div>
      <div className="flex fixed bottom-0  md:w-[670px] w-full md:px-11 px-3 py-2 mx-auto ">
        <input
          className="relative py-4 w-full px-5 bg-white border border-slate-300 placeholder-slate-400
        focus:outline-none rounded-full sm:text-sm"
          placeholder="Type your message here"
          onKeyDown={handleKeyPress}
          onChange={changeTextHandler}
          value={text}
        />
        <button
          className="absolute md:right-14 md:top-4 right-5 top-5"
          onClick={postTextHandler}
        >
          <img src={sendIcon} alt="send button" className="h-[35px]" />
        </button>
      </div>
    </div>
  );
}

