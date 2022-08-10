import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import Influencers from "./components/Influencers/Influencers";
import InfluencerReview from "./components/InfluencerReview/InfluencerReview";
function App() {
  return (
    <section>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/influencers" element={<Influencers />} />
        <Route path="/InfluencerReview" element={<InfluencerReview />} />
      </Routes>
    </section>
  );
}

export default App;
