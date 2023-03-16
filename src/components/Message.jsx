import React from "react";
import { auth } from "../firebase";

const Message = ({ msg }) => {
  const style = {
    message: `flex items-center shadow-xl m-4 py-2 px-3 rounded-tl-full rounded-tr-full`,
    name: `absolute mt-[-4rem] text-gray-600 text-xs`,
    text: `text-justify`,
    sent: `bg-[#395dff] text-white flex-row-reverse text-end float-right rounded-bl-full`,
    received: `bg-[#e5e5ea] text-black float-left rounded-br-full`,
  };
  const messageClass =
    msg.uid === auth.currentUser.uid ? `${style.sent}` : `${style.received}`;
  return (
    <div>
      <div className={`${style.message} ${messageClass}`}>
        <p className={style.name}>{msg.name}</p>
        <p className={style.text}>{msg.text}</p>
      </div>
    </div>
  );
};

export default Message;
