# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
Here’s a complete `README.md` for your project, based on the structure in your screenshot and the features you’ve implemented:

---

### 📁 `README.md`

```markdown
# 🧠 Pipeline Editor – React DAG Builder

This project is a **React-based Directed Acyclic Graph (DAG) Editor**. It allows users to:
- Visually create and connect nodes with directional edges
- Validate the graph in real time (DAG rules enforced)
- Add, connect, and delete nodes/edges
- View status of DAG validity

---

## 🚀 Features

- ✅ Add nodes with custom labels
- 🔗 Draw edges with clear directionality (arrows)
- ❌ Delete selected nodes or edges (via Delete key or button)
- 📊 DAG validation:
  - At least two nodes
  - No cycles
  - All nodes are connected
  - No self-loops
- 🔁 Real-time validation feedback (with icons)
- 💄 Clean UI with styled buttons and node layout

---

## 🗂️ Project Structure

```

src/
├── components/
│   ├── AddNodeButton.js / .css      # Button to open modal to add nodes
│   ├── DAGStatus.js / .css          # DAG status UI (valid/invalid)
│   ├── NodeModal.js / .css          # Modal for entering node labels
│   └── PipelineEditor.js            # Main DAG editor
│
├── hooks/
│   └── useDAGValidation.js          # (Optional) Hook version of DAG validator (unused if you moved logic inline)
│
├── utils/
│   └── dagValidation.js             # Contains the DAG validation logic (optional if used separately)
│
├── App.js / App.css                 # Root component
├── index.js / index.css             # React app entry
└── styles.css                       # Shared styles

````

---

## 🛠️ Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/your-username/pipeline-editor.git
cd pipeline-editor
````

### 2. Install dependencies

```bash
npm install
```

### 3. Start the dev server

```bash
npm start
```

App runs locally at: `http://localhost:3000`

---

## 📦 Dependencies

* `react`
* `react-dom`
* `react-scripts`
* `reactflow`
* `react-icons`

Install missing packages using:

```bash
npm install reactflow react-icons
```

---

## 📸 Screenshots

| Editor View                | Node Modal               | DAG Status                 |
| -------------------------- | ------------------------ | -------------------------- |
| ![Editor](docs/editor.png) | ![Modal](docs/modal.png) | ![Status](docs/status.png) |

*(You can add screenshots in a `/docs` folder)*

---

## 🧠 DAG Rules Implemented

* ✔️ No cycles (DFS cycle detection)
* ✔️ At least 2 nodes
* ✔️ All nodes must be connected (as either source or target)
* ✔️ No self-loops
* ✔️ Edges must connect from right (source) to left (target)

---

## 🧪 Testing

Currently, this project does not include unit tests. You can add tests in `App.test.js` or integrate libraries like:

* `Jest`
* `React Testing Library`

---

## 📄 License

MIT License © \[Your Name]

```

---

Let me know if you'd like me to:
- Generate screenshots for docs
- Publish this to GitHub with a sample commit
- Add a backend for saving the graph

Would you like me to include JSON import/export or layout features in this editor?
```
