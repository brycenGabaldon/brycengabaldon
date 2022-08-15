import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div class="flex space-x-2 mb-4 text-sm font-medium">
      <div class="flex space-x-4">
        <button class="px-6 h-12 uppercase font-semibold tracking-wider border-2 border-black hover:bg-blue-700 focus:shadow-lg  bg-white text-black" type="submit">
          Shit Now!
        </button>
        <button class="px-6 h-12 uppercase font-semibold tracking-wider border border-slate-200 hover:bg-blue-700 bg-slate-400 text-slate-900" type="button">
          Add Shit to bag
        </button>
      </div>
      <button class="flex-none flex items-center justify-center w-20 h-15 text-black" type="button" aria-label="Like">
        <svg width="20" height="20" fill="currentColor" aria-hidden="true">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
        </svg>
      </button>
    </div>
      </header>
    </div>
  );
}

export default App;
