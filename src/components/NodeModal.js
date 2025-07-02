import React, { useState, useEffect } from 'react';
import './NodeModal.css';

const NodeModal = ({ onClose, onSubmit }) => {
  const [nodeName, setNodeName] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nodeName.trim()) {
      onSubmit(nodeName);
    }
  };

  return (
    <div className={`modal-overlay ${isVisible ? 'visible' : ''}`}>
      <div className="modal-content">
        <h3>Add New Node</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={nodeName}
            onChange={(e) => setNodeName(e.target.value)}
            placeholder="Enter node name"
            autoFocus
          />
          <div className="modal-buttons">
            <button type="button" className="cancel-button" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="submit-button">
              Add Node
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NodeModal;