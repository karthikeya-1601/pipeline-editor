import React from 'react';
import { FaPlus } from 'react-icons/fa';
import './AddNodeButton.css';

const AddNodeButton = ({ onClick }) => {
  return (
    <button className="add-node-button" onClick={onClick}>
      <FaPlus className="button-icon" />
      Add Node
    </button>
  );
};

export default AddNodeButton;