import logo from "./logo.svg";
import "./App.css";
import CreateTask from "./component/CreateTask";
import { DataProvider } from "./context/DataContext";
import AllTask from "./component/AllTask";

function App() {
  return (
    <DataProvider>
      <div className="App">
        <CreateTask />
        <AllTask />
      </div>
    </DataProvider>
  );
}

export default App;
