import React from "react";
import "./App.css";
import { DoverOnsiteCodingChallengeBackendAPI } from "./swaggerapi/doverOnsiteCodingChallengeBackendAPI";
import OutReachEditorPage from "./components/pages/OutReach/OutReach";
import Header from "./components/common/Header/Header";

const client = new DoverOnsiteCodingChallengeBackendAPI({
  baseUri: "http://localhost:8000",
});

const App = () => {
  return (
    <div>
      <Header />
      <OutReachEditorPage />
    </div>
  );
};

export default App;
