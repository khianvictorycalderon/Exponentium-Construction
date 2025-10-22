import { NavBar } from "./components/navbar";

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
            label: "Home",
            action: () => alert("Clicked Home"),
            className: "hover:bg-gray-700 px-5 py-2 font-medium rounded-lg"
          },
          {
            label: "Shop",
            action: () => alert("Clicked Shop"),
            className: "hover:bg-gray-700 px-5 py-2 font-medium rounded-lg"
          },
          {
            label: "Contact",
            action: () => alert("Clicked Contact"),
            className: "hover:bg-gray-700 px-5 py-2 font-medium rounded-lg"
          }
        ]}
      />

    </>
  )
}