import ReactDOM from "react-dom";
import Pet from "./Pet";
import SearchParams from "./SearchParams";

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <SearchParams />
    </div>
  );
};

ReactDOM.render(
  <strictMode>
    <App />
  </strictMode>,
  document.getElementById("root")
);

// rendering Pet with name, animal and breed arguemnets

// rendering SearchParams
