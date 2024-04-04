import adequasysLogo from "/Adequasys_long2.png";
import profilePicture from "/profilePicture.jpg";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";

import "./ProfileNavbar.scss";

export default function ProfileNavbar() {
  return (
    <div className="ProfileNavbar">
      <div className="ProfileNavbar-logo">
        <img src={adequasysLogo} alt="adequasys logo" />
      </div>
      <div className="ProfileNavbar-button">
        <button>
          <AccessTimeOutlinedIcon /> Historique
        </button>
        <button>
          <StarBorderOutlinedIcon /> Favoris
        </button>
      </div>
      <div className="ProfileNavbar-info">
        <img src={profilePicture} alt="profile picture" />
        Hafsa Wilhem
      </div>
    </div>
  );
}
