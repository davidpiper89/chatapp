import React from "react";

const Message = ({ msg }) => {
  return (
    <div>
      <div>
        <p>{msg.name}</p>
        <p>{msg.text}</p>
      </div>
    </div>
  );
};

export default Message;
