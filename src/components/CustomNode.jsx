// src/components/CustomNode.jsx
import React from 'react';

const CustomNode = ({ data, selected }) => {
  return (
    <div
      style={{
        width: data.width || 150, // Set node width
        height: data.height || 50, // Set node height
        background: data.background || '#fff', // Set node background color
        border: '2px solid',
        borderColor: selected ? '#ff0072' : '#000', // Highlight selected node
        borderRadius: '5px',
        padding: '10px',
        textAlign: 'center',
        cursor: 'grab', // Indicate draggable area
      }}
    >
      <div
        style={{
          background: '#ddd', // Non-draggable area background
          padding: '5px',
          borderRadius: '3px',
          cursor: 'default', // Non-draggable area
        }}
      >
        {data.label}
      </div>
    </div>
  );
};

export default CustomNode;