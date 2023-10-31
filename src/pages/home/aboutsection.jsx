import aboutUs from "../../assets/images/aboutus.jpg";

const AboutSection = () => {
  return (
    <div className="mt-20 p-4 md:p-8 lg:p-12 flex flex-col md:flex-row gap-8">
      {/* image */}
      <div className="md:w-1/2 mt-4 md:mt-0">
        <img
          className="w-full h-auto rounded-lg"
          src={aboutUs}
          alt="an image of the research project"
        />
      </div>
      {/* text */}
      <div className="md:w-1/2 text-start md:pr-8">
        <h1 className="text-Raleway text-3xl font-bold mb-4">Know About us</h1>
        <p className="text-roboto text-lg text-gray-700 leading-relaxed max-w-xl mb-8">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
        <button className="border-2 px-4 py-2 rounded-md bg-[#003d66] text-white/90 ">
          About Us
        </button>
      </div>
    </div>
  );
};

export default AboutSection;
