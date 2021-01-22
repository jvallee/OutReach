import React, { useEffect, useState } from "react";
import "./App.css";
import { DoverOnsiteCodingChallengeBackendAPI } from "./swaggerapi/doverOnsiteCodingChallengeBackendAPI";
import { Container, Row } from "reactstrap";
import OutReachEditorPage from "./components/pages/OutReach/OutReach";
import Header from "./components/common/Header/Header";

const client = new DoverOnsiteCodingChallengeBackendAPI({
  baseUri: "http://localhost:8000",
});

const App = () => {
  const [loading, setLoading] = useState(true);

  const init = async () => {
    // Fetch the state... or
    // Create the state...
    // setLoading(false);
  };

  useEffect(() => {
    init();
  }, []);

  const editorReady = !loading;

  // return (
  //   <div className="App">
  //     <Container>
  //       <Row>
  //         <h2>Dover Onsite Coding Challenge</h2>
  //       </Row>
  //       <Row>
  //         {editorReady ? (
  //           <>{/* editor here maybe */}</>
  //         ) : (
  //           <p>Loading...</p>
  //         )}
  //       </Row>
  //     </Container>
  //   </div>
  // );
  return (
    <div>
      <Header />
      <OutReachEditorPage />
    </div>
  );
};

export default App;
