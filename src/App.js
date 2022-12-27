import logo from "./logo.svg";
import "./App.css";
import CreateTask from "./component/CreateTask";
import { DataProvider } from "./context/DataContext";
import AllTask from "./component/AllTask";
import Header from "./component/Header";

function App() {
  return (
    <DataProvider>
      <div className="App">
        <Header />
        {/* <CreateTask /> */}
        <AllTask />
      </div>
    </DataProvider>
  );
}

export default App;
