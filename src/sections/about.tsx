export const AboutSection = () => (
  <section className="bg-orange-600 text-white flex max-h-[80vh]">

    <div className="w-1/2 flex items-center justify-center p-8">
      <h2 className="text-4xl font-bold">
        About Us
      </h2>
      <p className="mt-4 text-lg">
        Some description about your company or project goes here.
      </p>
    </div>

    <div className="w-1/2 relative">
      <img
        src="images/about/hugu.png"
        alt="About"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-l from-transparent to-orange-600" />
    </div>
    
  </section>
);
