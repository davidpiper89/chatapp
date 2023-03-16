import React from "react";
import { auth } from "../firebase";

const Message = ({ msg }) => {
  const style = {
    message: `flex items-center shadow-xl m-4 py-2 px-5 text-left relative `,
    name: `absolute text-gray-600 text-xs -top-5 right-0 min-w-max`,
    text: `break-all`,
    sent: {
      main: `bg-[#395dff] text-white flex-row-reverse float-right`,
      nameSent: `-top-5 right-0`,
    },
    received: {
      main: `bg-[#e5e5ea] text-black float-left content-start`,
      nameRec: `-top-5 left-0`,
    },
  };
  const messageClass =
    msg.uid === auth.currentUser.uid
      ? `${style.sent.main}`
      : `${style.received}`;

  const nameClass =
    msg.uid === auth.currentUser.uid
      ? `${style.sent.nameSent}`
      : `${style.sent.nameRec}`;
  return (
    <div>
      <div className={`${style.message} ${messageClass}`}>
        <p className={`${style.name} ${nameClass}`}>{msg.name}</p>
        <p className={style.text}>{msg.text}</p>
      </div>
    </div>
  );
};

export default Message;
