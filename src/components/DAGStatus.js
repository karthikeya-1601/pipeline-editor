import React from 'react';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import './DAGStatus.css';

const DAGStatus = ({ isValid, message }) => {
  return (
    <div
      className={`dag-status ${isValid ? 'valid' : 'invalid'}`}
      role="status"
      aria-live="polite"
    >
      {isValid ? (
        <FaCheckCircle
          className="status-icon"
          aria-label="DAG is valid"
          color="green"
        />
      ) : (
        <FaTimesCircle
          className="status-icon"
          aria-label="DAG is invalid"
          color="red"
        />
      )}
      <span className="status-message">{message}</span>
    </div>
  );
};

export default DAGStatus;
