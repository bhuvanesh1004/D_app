import React from 'react';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="logo">DecentraBox</div>
      <ul>
        <li>Dashboard</li>
        <li>All Files</li>
        <li>Recent</li>
        <li>Recycle Bin</li>
      </ul>
      <div className="storage">
        <p>64.0 GB / 1 TB</p>
        <p>Upgrade to Premium for More Space</p>
      </div>
    </div>
  );
}

export default Sidebar;
