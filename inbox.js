import React from 'react';
import InboxItem from './InboxItem';

function Inbox() {
  return (
    <div className="inbox">
      <div className="inbox-header">
        <input type="text" placeholder="Search in DecentraBox" />
        <button>Upload</button>
      </div>
      <div className="inbox-list">
        <InboxItem
          avatar="avatar1.jpeg"
          name="Steve Rogers"
          description="Shared a file: decentralized_network.pdf"
          time="11:35 PM"
        />
        {/* Add more <InboxItem /> components here as needed */}
      </div>
    </div>
  );
}

export default Inbox;
