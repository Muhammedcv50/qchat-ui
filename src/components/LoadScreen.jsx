import qchat from "../Icons/qChat.webp";
import sendIcon3 from "../Icons/send3.svg";
import ChatScreen from "./ChatScreen";

export function LoadScreen({setScreen}) {
  function postNameHandler() {
    setScreen("ChatScreen")
  }

  function handleKeyPress(event) {
    if (event.keyCode === 13) {
      postNameHandler();
    }
  }
  return (
    <>
      <div className=" mx-auto  w-fit py-[20%]">
        <img src={qchat} alt="logo" className=" h-[250px] rounded-[50px]" />
      </div>

      <div className="fixed bottom-[50%]  md:w-[670px] w-full md:px-32 px-3  mx-auto ">
        <input
          className="relative py-4 w-full px-5 bg-white border border-slate-300 placeholder-slate-400
        focus:outline-none rounded-full sm:text-sm md:left-2"
          placeholder="Enter your name"
          onKeyDown={handleKeyPress}
        />
        <button
          className="absolute md:right-[21%] md:top-2 right-9 top-5"
          onClick={postNameHandler}
        >
          <img src={sendIcon3} alt="send button" className=" h-[35px]" />
        </button>
      </div>
    </>
  );
}
