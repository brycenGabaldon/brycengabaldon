import Mandala from "./Mandala.png";
import "./App.css";
import { motion } from "framer-motion";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <motion.button
          class="Mandala"
          whileHover={{ rotate: -90 }}
          whileTap={{ scale: 1.6, rotate: 90 }}>
          <img src={Mandala} className="App-logo" alt="Mandala" />
        </motion.button>
        
      </header>
     
    </div>
  );
}

export default App;
