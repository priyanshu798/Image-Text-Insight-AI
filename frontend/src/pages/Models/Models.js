import { Button, Grid } from "@mui/material";
import React, { useState } from "react";
import CardIn from "../../components/CardIn/CardIn";
import FaceLandmark from "../../components/FaceLandmark/FaceLandmark";
import HandPose from "../../components/HandPose/HandPose";
import ObjectDetection from "../../components/ObjectDetection/ObjectDetection";
import "./Models.scss";

function Models() {
  const [indxer, setIndxer] = useState(0);
  const [cameraOn, setCameraOn] = useState(false);

  return (
    <div className="models">
      <Grid container columns={4}>
        <Grid item xs={2}>
          <div
            style={{
              position: "relative",
              padding: "20px 0px 0px 61px",
              height: "74vh",
            }}
          >
            {cameraOn ? (
              <>
                {indxer === 0 ? (
                  <FaceLandmark />
                ) : indxer === 1 ? (
                  <HandPose />
                ) : indxer === 2 ? (
                  <ObjectDetection />
                ) : (
                  <div></div>
                )}
              </>
            ) : (
              <div className="models__cameraIsOff">
                <p>camera is off</p>
                <img src="/img/offCam.jpg" alt="" />
              </div>
            )}
          </div>
          <div
            style={{
              marginTop: "30px",
              marginBottom: "20px",

              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button
              variant="contained"
              onClick={() => {
                setCameraOn(!cameraOn);
              }}
            >
              {!cameraOn ? "Start Camera" : "Stop Camera"}
            </Button>
          </div>
        </Grid>
        <Grid item xs={2}>
          <div style={{ padding: "20px" }}>
            <Grid spacing={2} container>
              <Grid
                item
                xs={6}
                onClick={() => {
                  setIndxer(0);
                }}
              >
                <CardIn
                  active={indxer === 0}
                  title={"Face Mesh Direction"}
                  src={
                    "https://media.istockphoto.com/photos/facial-recognition-system-picture-id1167845607?k=20&m=1167845607&s=612x612&w=0&h=VZf_R_MXSe1aSwDIcIqrDWlMoL5BLepVxbKEX1tNfOQ="
                  }
                />
              </Grid>
              <Grid
                item
                xs={6}
                onClick={() => {
                  setIndxer(1);
                }}
              >
                <CardIn
                  active={indxer === 1}
                  title={"Hand Position Detection"}
                  src={
                    "https://production-media.paperswithcode.com/thumbnails/task/task-0000000771-8c7472f0.jpg"
                  }
                />
              </Grid>
              <Grid
                item
                xs={6}
                onClick={() => {
                  setIndxer(2);
                }}
              >
                <CardIn
                  title={"Object Direction"}
                  active={indxer === 2}
                  src={
                    "https://149695847.v2.pressablecdn.com/wp-content/uploads/2020/08/object-detection-illustration.png"
                  }
                />
              </Grid>
            </Grid>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Models;
