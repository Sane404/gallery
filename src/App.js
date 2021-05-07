import "./App.css";
import SingleQueryItem from "./SingleQueryItem";
import Home from "./Home";
import About from "./About";
import Navbar from "./Navbar";
import Header from "./Header";
import SingleImage from "./SingleImage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Header />
      <div className="nav_and_output">
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="gallery_react/">
              <Home />
            </Route>
            <Route path="gallery_react/about">
              <About />
            </Route>
            <Route path="gallery_react/full_image/:id">
              <SingleImage />
            </Route>
            <Route
              path="gallery_react/query/:name"
              children={<SingleQueryItem />}
            ></Route>
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App;
