import { BaseText } from "../components/typography";

export const AboutSection = () => (
  <section className="bg-orange-600 text-white flex lg:max-h-[80vh]">

    <div className="w-full md:w-1/2 flex items-center px-4 md:pl-8 lg:pl-32 py-16">
      <div className="flex flex-col gap-8">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center md:text-left">Who We Are</h2>
        <BaseText className="leading-8 tracking-wide text-justify">
            Founded with a passion for excellence, Exponentium Construction Incorporated is a private and public construction contractor dedicated to elevating industry standards.
        </BaseText>
        <BaseText className="leading-8 tracking-wide text-justify">
            We believe every structure tells a story of innovation, integrity, and commitment. Our team combines decades of expertise with cutting-edge technology to ensure every project stands the test of time.
        </BaseText>
      </div>
    </div>

    <div className="w-1/2 relative hidden md:block">
      <img
        src="images/about/hugu.png"
        alt="About"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-l from-transparent to-orange-600" />
    </div>

  </section>
);
