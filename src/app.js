import ReactDOM from "react-dom";
import Pet from "./Pet";
import SearchParams from "./SearchParams";

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <SearchParams />
      <Pet name="Tiggs" animal="cat" breed="mix" />
      <Pet name="Simba" animal="cat" breed="mix" />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
