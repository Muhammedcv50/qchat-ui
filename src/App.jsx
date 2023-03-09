import { useState } from "react";
import ChatScreen from "./components/ChatScreen";
import { LoadScreen } from "./components/LoadScreen";

function App() {
 
 const [screen,setScreen]=useState('loading')

  return (
    <div className="md:w-[700px] relative mx-auto h-screen  bg-gray-100">
      <>
      {screen==='loading'?
      (<LoadScreen  setScreen={setScreen}/>):
    (<ChatScreen/>)}
      </>
    </div>
  );
}

export default App;
