import React from "react";
import PageRouter from "./pages/PageRouter";
import Footer from "./components/basicpage/FooterComponent";
import Navigation from "./components/basicpage/NavigationComponent";

const App = () => {
  return (
    <div className="App">
      <Navigation />

      <PageRouter />

      <Footer />
    </div>
  );
};

export default App;
