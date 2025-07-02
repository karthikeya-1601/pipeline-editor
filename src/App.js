import React from 'react';
import PipelineEditor from './components/PipelineEditor';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <h1 className="app-title">Pipeline Editor</h1>
      <PipelineEditor />
    </div>
  );
}

export default App;