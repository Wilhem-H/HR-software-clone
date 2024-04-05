import Navbar from "./components/Navbar";
import ProfileNavbar from "./components/ProfileNavbar";
import Home from "./pages/Home";

import "./App.scss";

function App() {
  return (
    <div className="app">
      <div className="app-nav">
        <Navbar />
      </div>
      <div className="app-content">
        <div className="app-content-profileNavbar">
          <ProfileNavbar />
        </div>
        <div className="app-content-page">
          <Home />
        </div>
      </div>
    </div>
  );
}

export default App;
