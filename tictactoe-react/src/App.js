import "./App.css";
import GridPanel from "./components/GridPanel";
import ResetButton from "./components/ResetButton";

function App() {
  return (
    <div>
      <h1>Tic Tac Toe</h1>
      <GridPanel />
      <ResetButton />
    </div>
  );
}

export default App;
