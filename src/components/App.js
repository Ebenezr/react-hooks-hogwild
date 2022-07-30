import React, { useState } from "react";
import Nav from "./Nav";

import hogs from "../porkers_data";
import Hogs from "./Hogs";

function App() {
  const [allhogs, setHogs] = useState(hogs);
  return (
    <div className="App">
      <Nav />
      <Hogs hogs={allhogs} />
    </div>
  );
}

export default App;
