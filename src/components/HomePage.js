import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <h1>This is the home page</h1>
      <Link to="/influencers">Book your influencer</Link>
    </div>
  );
};

export default HomePage;
