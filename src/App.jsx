import { createRoot } from "react-dom/client";
// import Pet from "./Pet";
import Navbar from './Navbar'
import SearchParams  from "./SearchParams";

const App = () => {
  return(
      <div>
          <Navbar />
          <SearchParams />
      </div>
  );
}


const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
