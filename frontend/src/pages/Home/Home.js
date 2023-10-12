import React from "react";
import { useHistory } from "react-router-dom";
import HomeCard from "../../components/HomeCard/HomeCard";
import "./Home.scss";

function Home() {
  const history = useHistory();
  return (
    <div className="home">
      <div style={{ position: "relative" }}>
        <div className="home__banner">
          <div className="home__title">
            <h1>hello welcome to our AI world</h1>
          </div>
          <div className="outTeam">
            <HomeCard
              title={"AI Modals"}
              description={"Face Landmark | Hand Pose Distraction"}
              src={"/img/AI.jpg"}
              onClick={() => {
                history.push("/qna");
              }}
            />
            <HomeCard
              title={"QNA"}
              description={"Write an paragraph and ask question from AI"}
              src={"/img/ONA.jpg"}
              onClick={() => {
                history.push("/aimodels");
              }}
            />
            <HomeCard
              title={"Image Classifier"}
              description={"Classifier images from AI"}
              src={"/img/imageC.jpg"}
              onClick={() => {
                history.push("/imageClassifier");
              }}
            />
          </div>
        </div>
        <div class="custom-shape-divider-bottom-1667311754">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z"
              class="shape-fill"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Home;
