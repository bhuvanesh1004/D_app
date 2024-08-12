import React from 'react';

function InboxItem({ avatar, name, description, time }) {
  return (
    <div className="inbox-item">
      <img src={avatar} alt="Avatar" />
      <div className="inbox-details">
        <p>{name}</p>
        <p>{description}</p>
      </div>
      <p className="time">{time}</p>
    </div>
  );
}

export default InboxItem;
