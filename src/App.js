import Mandala from "./Mandala.png";
import "./App.scss";
import { motion } from "framer-motion";
import LayoutCards from "./layoutCards";

function App() {
  return (
    <div className="App">
              <LayoutCards />
      <header className="App-header">
        <motion.button
          class="Mandala"
          whileHover={{ rotate: -90 }}
          whileTap={{ scale: 1.6, rotate: 90 }}
        >
          <img src={Mandala} className="App-logo" alt="Mandala" />
        </motion.button>
      </header>
      <div className="Hello">

      </div>
    </div>
  );
}

export default App;
