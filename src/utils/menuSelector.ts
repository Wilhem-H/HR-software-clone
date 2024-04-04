import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import MapsHomeWorkOutlinedIcon from "@mui/icons-material/MapsHomeWorkOutlined";
import Groups2OutlinedIcon from "@mui/icons-material/Groups2Outlined";
import { ComponentType } from "react";
import AccountTreeOutlinedIcon from "@mui/icons-material/AccountTreeOutlined";
import LanOutlinedIcon from "@mui/icons-material/LanOutlined";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import MedicalServicesOutlinedIcon from "@mui/icons-material/MedicalServicesOutlined";
import FolderOpenOutlinedIcon from "@mui/icons-material/FolderOpenOutlined";

export type MenuItem = {
  id: number;
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: ComponentType<any>;
  linkTo: string;
};

export const menuSelector: MenuItem[] = [
  { id: 1, name: "home", icon: HomeOutlinedIcon, linkTo: "Home" },
  {
    id: 2,
    name: "dossier personnel",
    icon: AccountCircleOutlinedIcon,
    linkTo: "Home",
  },
  {
    id: 3,
    name: "informations",
    icon: MapsHomeWorkOutlinedIcon,
    linkTo: "Home",
  },
  { id: 4, name: "manager", icon: Groups2OutlinedIcon, linkTo: "Home" },
  { id: 5, name: "superviseur", icon: AccountTreeOutlinedIcon, linkTo: "Home" },
  {
    id: 6,
    name: "mes collaborateurs N-3",
    icon: Groups2OutlinedIcon,
    linkTo: "Home",
  },
  { id: 7, name: "ressources humaines", icon: LanOutlinedIcon, linkTo: "Home" },
  {
    id: 8,
    name: "direction générale",
    icon: TrendingUpOutlinedIcon,
    linkTo: "Home",
  },
  { id: 9, name: "cse", icon: MedicalServicesOutlinedIcon, linkTo: "Home" },
  { id: 10, name: "bdese", icon: FolderOpenOutlinedIcon, linkTo: "Home" },
];
