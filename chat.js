import React from 'react';

function Chat() {
  return (
    <div className="chat">
      <div className="chat-header">
        <p>Steve Rogers</p>
        <p>Online</p>
      </div>
      <div className="chat-messages">
        <p>Shared a file: decentralized_network.pdf</p>
        {/* Add more chat messages here */}
      </div>
      <div className="chat-input">
        <input type="text" placeholder="Type a message" />
        <div className="plus">+</div>
        <i className="far fa-smile"></i>
        <button>Send</button>
      </div>
    </div>
  );
}

export default Chat;
