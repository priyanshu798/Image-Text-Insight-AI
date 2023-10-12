import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import Nav from "./components/Nav/Nav";
import Qna from "./pages/Qna/Qna";
import Models from "./pages/Models/Models";
import Footer from "./components/Footer/Footer";
import ImageClassifier from "./pages/ImageClassifier/ImageClassifier";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/imageClassifier">
            <ImageClassifier />
          </Route>

          <Route exact path="/qna">
            <Qna />
          </Route>

          <Route exact path="/aimodels">
            <Models />
          </Route>
          {/*  */}
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
