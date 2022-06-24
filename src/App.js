import './App.css';
import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchPage from './pages/SearchPage'

function App() {
  return (
    <BrowserRouter>
      <div className="App">

        <Routes>
          <Route path="/search" element={<SearchPage />} />
          <Route path="test" element={<Home />} />

        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;

/*
context api, material ui, react router, goggle custom apu,
make custom hook,
use firebase 
*/