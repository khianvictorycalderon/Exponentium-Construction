import { NavBar } from "./component/navbar";
import { CiHome } from "react-icons/ci";
import { CiSettings } from "react-icons/ci";
import { CiCircleInfo } from "react-icons/ci";
import { FiBriefcase } from "react-icons/fi";
import { FiCreditCard } from "react-icons/fi";
import { NavBarDivClassname, NavBarButton } from "./component/navbar-button";
import { Hero } from "./component/hero";
import { BaseText } from "./component/typography";
import { useOnScrollAt } from "./utility/scroll-detection";
import { useState } from "react";
import { slideToID } from "./utility/slide-to-section";
import { ServicesSection } from "./sections/services";
import { LoremIpsum } from "./sections/lorem";

export default function App() {

  const [navbarBG, setNavbarBG] = useState<string>("bg-transparent");
  useOnScrollAt(
    "hero-section",
    () => setNavbarBG("lg:bg-transparent bg-slate-700"),
    () => setNavbarBG("bg-slate-700")
  );

  // Section IDs
  const sectionIDs = {
    hero: "hero-section",
    service: "services-section",
    about: "about-section",
    project: "projects-section",
    certificates: "certificate-section",
    contact: "contact-section"
  }

  return (
    <>

      <NavBar 
        className={`${navbarBG} text-white`}
        image="icons/exponentium-construction.png"
        title="Exponentium"
        buttonsAlignment="right"
        buttons={[
          {
            label: <NavBarButton><><CiHome size={32} strokeWidth={1.25}/>Home</></NavBarButton>,
            action: () => slideToID(sectionIDs.hero),
            className: NavBarDivClassname
          },
          {
            label: <NavBarButton><><CiSettings size={32} strokeWidth={0.6}/>Services</></NavBarButton>,
            action: () => slideToID(sectionIDs.service, 50),
            className: NavBarDivClassname
          },
          {
            label: <NavBarButton><><CiCircleInfo  size={32} strokeWidth={0.8}/>About</></NavBarButton>,
            action: () => slideToID(sectionIDs.about),
            className: NavBarDivClassname
          },
          {
            label: <NavBarButton><><FiBriefcase  size={32} strokeWidth={1.6}/>Projects</></NavBarButton>,
            action: () => slideToID(sectionIDs.project),
            className: NavBarDivClassname
          },
          {
            label: <NavBarButton><><FiCreditCard  size={32} strokeWidth={1.8}/>Certificates</></NavBarButton>,
            action: () => slideToID(sectionIDs.certificates),
            className: NavBarDivClassname
          },
        ]}
      />

      <section id={sectionIDs.hero}>
        <Hero
          background="linear-gradient(135deg, #FFA600, #FF3B05)"
          heading="Building the Future"
          subheading="We shape cities and strengthen communities through innovative construction solutions."
          cta_buttons={[
            <button 
              onClick={() => slideToID(sectionIDs.contact)}
              className="bg-purple-800 hover:bg-purple-700 text-white px-6 py-3 rounded w-full duration-300 transition cursor-pointer"
              >
              <BaseText className="text-white font-semibold">Contact Us</BaseText>
            </button>
          ]}
          logo="images/hero/Construction-Workers.png"
          dark_cover_opacity={0}
        />
      </section>

      <div id={sectionIDs.service} />
      <ServicesSection/>

      {/* Temporary Lorem Ipsum Section */}
      <LoremIpsum/>

    </>
  )
}