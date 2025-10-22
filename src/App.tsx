import { NavBar } from "./components/navbar";
import { CiHome } from "react-icons/ci";
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
            label: <NavBarButton><><CiHome size={24} strokeWidth={1.25}/>Home</></NavBarButton>,
            action: () => alert("Clicked Home"),
            className: NavBarDivClassname
          },
        ]}
      />

    </>
  )
}