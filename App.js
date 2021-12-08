import React from "react";
import Navbar from "./Navbar";
import Routes from "./Routes";

function App() {
  return (
    <main>
      <Navbar />
      <div>
        <h1>Welcome to the shopping cart!</h1>
        <Routes />
      </div>
    </main>
  );
}

export default App;
