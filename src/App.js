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
            <Route exact path="react_gallery/">
              <Home />
            </Route>
            <Route path="react_gallery/about">
              <About />
            </Route>
            <Route path="react_gallery/full_image/:id">
              <SingleImage />
            </Route>
            <Route
              path="react_gallery/query/:name"
              children={<SingleQueryItem />}
            ></Route>
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App;
