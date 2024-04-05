import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import { menuSelector, MenuItem } from "../utils/menuSelector.ts";

import "./Home.scss";

function Home() {
  return (
    <div className="Home">
      <div className="Home-dashboard">
        <div className="Home-dashboard-selectors">
          <div className="Home-dashboard-title">
            <p>
              <NotificationsNoneOutlinedIcon sx={{ fontSize: 50 }} />
            </p>
            <div className="Home-dashboard-title-text">
              <h2>Bonjour</h2>
              <p>Vous avez 002 tâches en attente aujourd'hui</p>
            </div>
          </div>
          <div className="Home-dashboard-selector">
            {menuSelector.map(
              (selector: MenuItem) =>
                selector.id > 1 && (
                  <div key={selector.id}>
                    <selector.icon sx={{ fontSize: 50 }} />
                    <h4>{selector.name}</h4>
                  </div>
                )
            )}
          </div>
        </div>
        <div className="Home-dashboard-shortcutBar">
          <strong>Mes actions rapides :</strong>{" "}
          <div>{<AccessTimeOutlinedIcon fontSize="small" />}</div>
          <div>{<CalendarMonthOutlinedIcon fontSize="small" />}</div>
        </div>
      </div>
      <div className="Home-announcement">2</div>
    </div>
  );
}

export default Home;
