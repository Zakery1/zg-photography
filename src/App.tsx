import React from "react";

//components
import Header from "./component/Header/Header";
import PhotosContainer from "./component/PhotosContainer/PhotosContainer";
import Footer from "./component/Footer/Footer";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />

      <PhotosContainer />

      <Footer />
    </div>
  );
}

export default App;
