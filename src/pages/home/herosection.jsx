import heroImage from "../../assets/images/heroImage.jpg";

const HeroSection = () => {
  return (
    <div className="bg-gray-100 p-4 md:p-8 lg:p-12 rounded-lg shadow-md flex flex-col md:flex-row">
      <div className="md:w-1/2 text-start md:pr-8">
        <h4 className="text-roboto text-base text-gray-600 mb-2">Welcome to my website.</h4>
        <h1 className="text-Raleway text-3xl font-bold mb-4">What is Lorem Ipsum</h1>
        <p className="text-roboto text-lg text-gray-700 leading-relaxed max-w-xl">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
      <div className="md:w-1/2 mt-4 md:mt-0">
        <img className="w-full h-auto rounded-lg" src={heroImage} alt="an image of the research project" />
      </div>
    </div>
  );
};

export default HeroSection;

