import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./component/layout/Header.js";
import webFont from "webfontloader";
import React from "react";





function App() {

  React.useEffect(() => {
    webFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });
  }
  , []);
  


  return (
    <Router>
      <Header />
    </Router>
  );
}

export default App;
