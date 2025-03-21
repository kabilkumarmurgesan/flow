// src/components/FlowWithSidebar.jsx
import React, { useCallback } from 'react';
import {
  ReactFlow,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
} from '@xyflow/react';
import Sidebar from './Sidebar';
import CustomNode from './CustomNode';
import Layout from './Layout';

const FlowWithSidebar = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  // Handle connecting nodes
  const onConnect = useCallback(
    (params) => {
      // Add the new edge to the edges state
      setEdges((eds) => addEdge(params, eds));
    },
    [setEdges]
  );

  // Handle adding a new node
  const onAddNode = useCallback(
    (nodeType) => {
      const newNode = {
        id: `${nodes.length + 1}`, // Generate a unique ID
        type: 'custom', // Use the custom node type
        position: { x: Math.random() * 500, y: Math.random() * 500 }, // Random position
        data: {
          label: nodeType.label,
          width: nodeType.width,
          height: nodeType.height,
          background: nodeType.background,
        },
        selectable: true, // Make node selectable
        draggable: true, // Make node draggable
      };
      setNodes((nds) => nds.concat(newNode));
    },
    [nodes.length, setNodes]
  );

  // Define custom node types
  const nodeTypes = {
    custom: CustomNode,
  };

  return (
    <Layout
      sidebar={<Sidebar onAddNode={onAddNode} />}
      flowArea={
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect} // Enable edge creation
          nodeTypes={nodeTypes} // Pass custom node types
          fitView
        >
          <MiniMap />
          <Controls />
          <Background />
        </ReactFlow>
      }
    />
  );
};

export default FlowWithSidebar;