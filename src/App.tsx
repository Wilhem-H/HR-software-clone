import Navbar from "./components/Navbar";
import ProfileNavbar from "./components/ProfileNavbar";

import "./App.scss";

function App() {
  return (
    <div className="app">
      <div className="app-nav">
        <Navbar />
      </div>
      <div className="app-content">
        <div>
          {" "}
          <ProfileNavbar />
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default App;
