import Mandala from "./Mandala.png";
import "./App.css";
import { motion } from "framer-motion";

function App() {
  return (
    <div className="App">
      <header className="App-header" >
        <motion.button class="Mandala" whileHover={{ scale: 1.5, rotate: -90, }} whileTap={{ scale: 0.6, rotate: 90 }} style={{ x: 100 }} onD>
        <img src={Mandala} className="App-logo" alt="Mandala" />
        </motion.button>
        <div class="flex space-x-2 mb-4 text-sm font-medium">
          
        </div>
      </header>
    </div>

    
  );
}

export default App;
