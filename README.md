
---

```
# 🧠 Pipeline Editor – DAG Builder (React + React Flow)

A visual editor for creating and validating **Directed Acyclic Graphs (DAGs)** using **React** and **React Flow**. This tool lets users build pipelines or workflows with custom nodes, directional connections, and real-time validation.

---


---

## 🚀 Features

- ✅ Add custom-labeled nodes dynamically  
- 🔗 Draw directional edges between nodes (Right ➡️ Left)  
- ❌ Delete nodes and edges (via Delete key or UI button)  
- 🧠 Real-time DAG validation:
  - No cycles
  - No self-loops
  - All nodes are connected
  - At least 2 nodes
- 🎯 Visual feedback on DAG validity  
- 🧩 Built with [React Flow](https://reactflow.dev)

---

## 🖼️ Project Structure

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

---

## 🛠️ Getting Started

### 1. Clone the repository

### 2. Install dependencies

```

npm install

```

### 3. Start the development server

```

npm start

```

Open `http://localhost:3000` in your browser.

---

## 📦 Tech Stack

- React  
- React Flow  
- React Icons  
- JavaScript (ES6)  
- CSS

---

