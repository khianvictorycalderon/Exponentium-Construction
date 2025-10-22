import { NavBar } from "./component/navbar";
import { CiHome } from "react-icons/ci";
import { CiSettings } from "react-icons/ci";
import { CiCircleInfo } from "react-icons/ci";
import { FiBriefcase } from "react-icons/fi";
import { FiCreditCard } from "react-icons/fi";
import { NavBarDivClassname, NavBarButton } from "./component/navbar-button";

export default function App() {
  return (
    <>

      <NavBar 
        className="bg-purple-800 text-white shadow-lg"
        image="icons/exponentium-construction.png"
        title="Exponentium"
        buttonsAlignment="right"
        buttons={[
          {
            label: <NavBarButton><><CiHome size={32} strokeWidth={1.25}/>Home</></NavBarButton>,
            action: () => alert("Clicked Home"),
            className: NavBarDivClassname
          },
          {
            label: <NavBarButton><><CiSettings size={32} strokeWidth={0.6}/>Services</></NavBarButton>,
            action: () => alert("Clicked Services"),
            className: NavBarDivClassname
          },
          {
            label: <NavBarButton><><CiCircleInfo  size={32} strokeWidth={0.8}/>About</></NavBarButton>,
            action: () => alert("Clicked About"),
            className: NavBarDivClassname
          },
          {
            label: <NavBarButton><><FiBriefcase  size={32} strokeWidth={1.6}/>Projects</></NavBarButton>,
            action: () => alert("Clicked Projects"),
            className: NavBarDivClassname
          },
          {
            label: <NavBarButton><><FiCreditCard  size={32} strokeWidth={1.8}/>Certificates</></NavBarButton>,
            action: () => alert("Clicked Certificates"),
            className: NavBarDivClassname
          },
        ]}
      />

    </>
  )
}