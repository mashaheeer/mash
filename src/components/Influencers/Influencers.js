import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
const Influencers = () => {
  return (
    <div>
      <h1>This is the influencers page</h1>
      <div className="buttons">
        <Link to="/">Back to home page </Link>
        <Link to="/InfluencerReview">Review the influencer</Link>
      </div>
    </div>
  );
};

export default Influencers;
