import { Message } from "./Message"

export function MessageList({messages}){
  return(
  <>
  <ul>
  {messages.map((message)=>{return(
  <Message data={message}/>)
  })}
  </ul>
  </>
  );
}