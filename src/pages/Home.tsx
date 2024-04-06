import { useState } from "react";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import { menuSelector, MenuItem } from "../utils/menuSelector.ts";
import { advertisements } from "../utils/advertisements.ts";

import "./Home.scss";

function Home() {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Réponse sélectionnée :", selectedOption);
  };

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
      <div className="Home-announcement">
        <div className="Home-advertisements">
          <h3>Annonces</h3>
          {advertisements.map((ad) => (
            <article key={ad.id}>
              {ad.img && <img src={ad.img} alt="ad illustration" />}
              <h4>{ad.title}</h4>
              <p>{ad.text}</p>
            </article>
          ))}
        </div>
        <div className="Home-survey">
          <h3>Sondages</h3>
          <div>
            <h4>Nouvelle technologie</h4>
            <form onSubmit={handleSubmit}>
              <p>Connaissez vous le cloud computing?</p>

              <label>
                <input
                  type="checkbox"
                  value="Depuis des années"
                  checked={selectedOption === "Depuis des années"}
                  onChange={handleOptionChange}
                />
                Depuis des années
              </label>

              <label>
                <input
                  type="checkbox"
                  value="Peu importe ce que c'est"
                  checked={selectedOption === "Peu importe ce que c'est"}
                  onChange={handleOptionChange}
                />
                Peu importe ce que c'est
              </label>

              <label>
                <input
                  type="checkbox"
                  value="Non"
                  checked={selectedOption === "Non"}
                  onChange={handleOptionChange}
                />{" "}
                Non
              </label>
              <button type="submit">VOTER !</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
