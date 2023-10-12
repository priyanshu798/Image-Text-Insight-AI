import React, { useState } from "react";
import { Grid, IconButton, TextField, Tooltip } from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { postQNA } from "../../util/http/index";
import "./Qna.scss";

function Qna() {
  const [answer, setAnswer] = useState();
  const [inputpassage, setPassage] = useState();
  const [inputQuestion, setInputQuestion] = useState();

  const handleChange = (e) => {
    setPassage(e.target.value);
  };

  const handleAnsChange = (e) => {
    setInputQuestion(e.target.value);
  };

  const newpost = async () => {
    const res = await postQNA(inputpassage, inputQuestion);
    console.log(res.data);
    setAnswer(res.data.data);
  };

  return (
    <div className="">
      <Grid container className="qna">
        <Grid container item xs={6} spacing={1} padding={2}>
          <p className="qna__heading">
            <Tooltip title="Write a paragraph here and ask a question in the bellow given box our NLP algorithm will give you all the possible answerers with the confidence level">
              <IconButton>
                <InfoOutlinedIcon />
              </IconButton>
            </Tooltip>{" "}
            Passage
          </p>
          <div className="qna__passageInput">
            <TextField
              id="standard-multiline-flexible"
              label="Write a paragraph here "
              multiline
              fullWidth
              minRows={15}
              maxRows={15}
              value={inputpassage}
              onChange={handleChange}
            />
          </div>

          <p className="qna__heading" style={{ marginTop: " 20px" }}>
            Ask a Question
          </p>

          <div className="qna__qInput">
            <TextField
              id="standard-multiline-flexible"
              label="Ask a Question"
              fullWidth
              value={inputQuestion}
              onChange={handleAnsChange}
              onKeyPress={newpost}
            />
          </div>
        </Grid>

        <br />
        <Grid container item xs={6}>
          <div style={{ width: "100%" }}>
            <div className="qna__ansHeder">
              <p className=""> Answers</p>
            </div>
            <div className="qna__ansBox">
              {answer ? (
                answer.map((ans, idx) => (
                  <div className="qna__ansBoxItem">
                    <p className="qna__ansBoxans">
                      Answer {idx + 1} :{" "}
                      <span className="qna__ansBoxScore">
                        confidence ({Math.floor(0.99 * 100) / 100})
                      </span>{" "}
                    </p>
                    <p className="qna__ansBoxContent">{ans.text}</p>
                  </div>
                ))
              ) : (
                <p style={{ width: "100%", textAlign: "center" }}>
                  {" "}
                  Your Answers will be show here
                </p>
              )}
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Qna;
