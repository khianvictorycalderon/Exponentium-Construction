import { NavBar } from "./components/navbar";
import { CiHome } from "react-icons/ci";
import { CiSettings } from "react-icons/ci";
import { CiCircleInfo } from "react-icons/ci";
import { FiBriefcase } from "react-icons/fi";
import { FiCreditCard } from "react-icons/fi";
import { NavBarDivClassname, NavBarButton } from "./components/navbar-button";
import { Hero } from "./components/hero";
import { BaseText } from "./components/typography";
import { useOnScrollAt } from "./utility/scroll-detection";
import { useEffect, useState } from "react";
import { slideToID } from "./utility/slide-to-section";
import { ServicesSection } from "./sections/services";
import { AboutSection } from "./sections/about";
import { ProjectSection } from "./sections/projects";
import { CertificatesSection } from "./sections/certificates";
import { ContactSection } from "./sections/contact";
import Footer from "./components/footer";

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

  const handleMockButton = () => {
    alert("You have clicked a dummy button, it does not do anything.");
  }

  useEffect(() => {
    alert("This is a demo website created for presentation purposes only and does not represent a real business.");
  },[]);

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
            action: () => slideToID(sectionIDs.service, 30),
            className: NavBarDivClassname
          },
          {
            label: <NavBarButton><><CiCircleInfo  size={32} strokeWidth={0.8}/>About</></NavBarButton>,
            action: () => slideToID(sectionIDs.about, 80),
            className: NavBarDivClassname
          },
          {
            label: <NavBarButton><><FiBriefcase  size={32} strokeWidth={1.6}/>Projects</></NavBarButton>,
            action: () => slideToID(sectionIDs.project, 80),
            className: NavBarDivClassname
          },
          {
            label: <NavBarButton><><FiCreditCard  size={32} strokeWidth={1.8}/>Certificates</></NavBarButton>,
            action: () => slideToID(sectionIDs.certificates, 100),
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
              onClick={() => slideToID(sectionIDs.contact, 80)}
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

      <div id={sectionIDs.about} />
      <AboutSection/>

      <div id={sectionIDs.project} />
      <ProjectSection/>

      <div id={sectionIDs.certificates} />
      <CertificatesSection/>

      <div id={sectionIDs.contact} />
      <ContactSection/>

      <Footer
          className="!bg-gray-700 mt-32"
          logo="icons/exponentium-construction.png"
          texts={[
            {
              title: "Social Media",
              content: (
                <ul className="space-y-1">
                  <li>
                    <a onClick={handleMockButton} className="hover:text-white cursor-pointer">
                      LinkedIn
                    </a>
                  </li>
                  <li>
                    <a onClick={handleMockButton} className="hover:text-white cursor-pointer">
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a onClick={handleMockButton} className="hover:text-white cursor-pointer">
                      Instagram
                    </a>
                  </li>
                </ul>
              ),
            },
            {
              title: "Contact Info",
              content: (
                <ul className="space-y-1">
                  <li>
                    <a onClick={handleMockButton} className="hover:text-white cursor-pointer">
                      exponentium@fakemail.com
                    </a>
                  </li>
                  <li>
                    <a onClick={handleMockButton} className="hover:text-white cursor-pointer">
                      +63 123 456 7891
                    </a>
                  </li>
                </ul>
              ),
            },
            {
              title: "Website Created by",
              content: (
                <ul className="space-y-1">
                  <li>
                    <a title="Develoepr's Official Website" href="https://khian.netlify.app" target="_blank" className="hover:text-white">
                      Khian Victory D. Calderon
                    </a>
                  </li>
                </ul>
              ),
            },
          ]}
        />
    </>
  )
}