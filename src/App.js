import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import Influencers from "./components/Influencers";
function App() {
  return (
    <section>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/influencers" element={<Influencers />} />
      </Routes>
    </section>
  );
}

export default App;
