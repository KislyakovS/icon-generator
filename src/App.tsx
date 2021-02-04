import React from "react";

import { Header, Sidebar, IconsList } from "./components";

function App() {
  return (
    <div className="App">
      <Header />
      <div style={{display: "flex", paddingTop: "55px"}}>
        <Sidebar />
        <main>
          <IconsList />
        </main>
      </div>
    </div>
  );
}

export default App;
