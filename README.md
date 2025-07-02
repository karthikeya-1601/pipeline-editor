# Pipeline Editor (DAG Builder) - React Application

## Overview

This is a React-based Pipeline Editor that allows users to visually create and manage Directed Acyclic Graphs (DAGs). The application provides functionality to add nodes, draw connections between them, delete elements, and validate the graph structure in real-time.

## Features

- **Add Nodes**: Create new nodes with custom labels
- **Draw Edges**: Connect nodes with directional edges
- **Delete Elements**: Remove nodes or edges using the delete key
- **Real-time Validation**: Checks if the graph is a valid DAG
- **Visual Feedback**: Clear status messages about graph validity

## Project Structure

```
src/
├── components/
│   ├── AddNodeButton.js
│   ├── DAGStatus.js
│   ├── NodeModal.js
│   └── PipelineEditor.js
├── hooks/ (optional)
│   └── useDAGValidation.js
├── utils/ (optional)
│   └── dagValidation.js
├── App.js
├── index.js
└── styles.css
```

## Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install reactflow react-icons
   ```
3. Start the development server:
   ```bash
   npm start
   ```

## Available Scripts

- `npm start`: Runs the app in development mode
- `npm test`: Launches the test runner
- `npm run build`: Builds the app for production
- `npm run eject`: Ejects from Create React App (advanced)

## Dependencies

- `reactflow`: For graph visualization and interaction
- `react-icons`: For UI icons
- React (v18+)
- React DOM

## Validation Rules

The application checks if the graph is a valid DAG by verifying:
1. At least 2 nodes exist
2. No cycles in the graph
3. All nodes are connected
4. No self-loops
5. All edges follow correct directionality rules

## Usage

1. Click "Add Node" to create new nodes
2. Drag from a node's right handle to another node's left handle to create connections
3. Select nodes or edges and press Delete to remove them
4. View real-time validation status at the bottom of the screen

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.
