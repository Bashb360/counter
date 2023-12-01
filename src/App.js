import "./App.css";
import ClassComponent from "./classCounter.js";
import FunctionalCounter from "./functionalCounter.js";

<ClassComponent />;

function App() {
  return (
    <div className="App">
      <h1>Class Component</h1>
      <ClassComponent />
      <h1>Functional Counter</h1>
      <FunctionalCounter />
    </div>
  );
}

export default App;
