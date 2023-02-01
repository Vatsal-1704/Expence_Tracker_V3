import "./App.css";
import { NewContextProvider } from "./Component/expence/NewContext";
import Extra from "./Extra";
import Filter from "./Filter/Filter";

function App() {
  return (
    <div className="app-container">
      <NewContextProvider>
        <Extra  />
      </NewContextProvider>
      {/* <Filter /> */}
      <span>: Vatsal Vasani :</span>
    </div>
  );
}
export default App;
