// src/components/Sidebar.jsx
import React from 'react';

const Sidebar = ({ onAddNode }) => {
  const nodeTypes = [
    {
      type: 'input',
      label: 'Input Node',
      width: 150,
      height: 50,
      background: '#ffcc99', // Light orange
    },
    {
      type: 'output',
      label: 'Output Node',
      width: 150,
      height: 50,
      background: '#99ccff', // Light blue
    },
    {
      type: 'default',
      label: 'Default Node',
      width: 150,
      height: 50,
      background: '#ccffcc', // Light green
    },
  ];

  return (
    <div style={{ width: '200px', background: '#f4f4f4', padding: '10px' }}>
      <h3>Node Types</h3>
      {nodeTypes.map((node) => (
        <div
          key={node.type}
          style={{
            padding: '10px',
            margin: '5px 0',
            background: '#fff',
            border: '1px solid #ddd',
            cursor: 'pointer',
          }}
          onClick={() => onAddNode(node)}
        >
          {node.label}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;