// src/components/Layout.jsx
import React from 'react';

const Layout = ({ sidebar, flowArea }) => {
  return (
    <div style={{ display: 'flex', width: '100vw', height: '100vh' }}>
      {/* Sidebar */}
      <div style={{ width: '200px', background: '#f4f4f4', padding: '10px' }}>
        {sidebar}
      </div>

      {/* Flow Area */}
      <div style={{ flexGrow: 1 }}>{flowArea}</div>
    </div>
  );
};

export default Layout;