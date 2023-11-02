import aboutUs from "../../assets/images/aboutus.jpg";
import Button from "../../components/buttons/button";
import { useNavigate } from "react-router-dom";

const AboutSection = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/about");
  };

  return (
    <div className="mt-10 mb-20 p-4 md:p-8 lg:p-12 flex flex-col md:flex-row gap-8 max-w-[1440px] mx-auto text-center">
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
        <h2 className="text-Raleway text-3xl font-bold mb-4">Know About us</h2>
        <p className="text-roboto text-lg text-gray-700 leading-relaxed max-w-xl mb-8">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
        <Button text="About Us" className="mt-4" onClick={handleClick} />
      </div>
    </div>
  );
};

export default AboutSection;
