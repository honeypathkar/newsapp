import React, { useState } from "react";
import Navbar from "./comonents/Navbar";
import News from "./comonents/News";
import LoadingBar from "react-top-loading-bar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  //Link
} from "react-router-dom";
import About from "./comonents/About";
export default function App() {
  let pagesize = 9;
  let apiKey = process.env.REACT_APP_NEWS_API;
  const [progress, setProgress] = useState(0);
  return (
    <div>
      <Router>
        <Navbar />
        <LoadingBar color="#f11946" progress={progress} height={3} />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="general"
                pagesize={pagesize}
                country="in"
                category="general"
              />
            }
          />

          <Route
            exact
            path="/buisness"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="buisness"
                pagesize={pagesize}
                country="in"
                category="business"
              />
            }
          />

          <Route
            exact
            path="/entertainment"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="entertainment"
                pagesize={pagesize}
                country="in"
                category="entertainment"
              />
            }
          />

          <Route
            exact
            path="/sports"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="sports"
                pagesize={pagesize}
                country="in"
                category="sports"
              />
            }
          />

          <Route
            exact
            path="/health"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="health"
                pagesize={pagesize}
                country="in"
                category="health"
              />
            }
          />

          <Route
            exact
            path="/science"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="science"
                pagesize={pagesize}
                country="in"
                category="science"
              />
            }
          />

          <Route
            exact
            path="/technology"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="technology"
                pagesize={pagesize}
                country="in"
                category="technology"
              />
            }
          />

          <Route exact path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}
