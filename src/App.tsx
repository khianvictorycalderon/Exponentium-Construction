import { NavBar } from "./components/navbar";
import { CiHome } from "react-icons/ci";
import { CiSettings } from "react-icons/ci";
import { NavBarDivClassname, NavBarButton } from "./components/navbar-button";

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
            label: <NavBarButton><><CiSettings size={32} strokeWidth={0.8}/>Services</></NavBarButton>,
            action: () => alert("Clicked Services"),
            className: NavBarDivClassname
          },
        ]}
      />

    </>
  )
}