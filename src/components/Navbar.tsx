import { menuSelector, MenuItem } from "../utils/menuSelector.ts";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import BuildOutlinedIcon from "@mui/icons-material/BuildOutlined";

import "./Navbar.scss";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-toggle-button">
        <button>
          <MenuOutlinedIcon />
        </button>
      </div>
      <div className="navbar-navigation-buttons">
        {menuSelector.map((selector: MenuItem) => (
          <button key={selector.id}>
            <selector.icon />
          </button>
        ))}
      </div>
      <div className="navbar-settings-button">
        <button>
          <BuildOutlinedIcon />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
