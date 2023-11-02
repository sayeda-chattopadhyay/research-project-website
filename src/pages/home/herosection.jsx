import heroImage from "../../assets/images/heroImage.jpg";
import Button from "../../components/buttons/button";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/research");
  };

  return (
    <div className="min-h-[60vh] mt-10 mb-20 p-4 md:p-8 lg:p-12 flex flex-col items-center gap-8 md:flex-row-reverse overflow-hidden max-w-[1440px] mx-auto text-center">
      <div className="w-[80%] md:w-1/2 mt-4 md:mt-0">
        <img
          className="w-full h-auto rounded-lg shadow-md"
          src={heroImage}
          alt="an image of the research project"
        />
      </div>
      <div className="md:w-1/2 text-start md:pr-8">
        <h4 className="text-roboto text-base text-gray-600 mb-2">
          Welcome to my website.
        </h4>
        <h1 className="text-Raleway text-4xl font-bold mb-4">
          What is Lorem Ipsum
        </h1>
        <p className="text-roboto text-lg text-gray-700 leading-relaxed max-w-xl">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
        <Button
          text="See our research"
          className="mt-8"
          onClick={handleClick}
        />
      </div>
    </div>
  );
};

export default HeroSection;

// import heroImage from '../../assets/images/heroImage.jpg';
// import Button from '../../components/buttons/button'; // Make sure to use the correct import path for your Button component

// const HeroSection = () => {
//   return (
//     <div className="mt-10 p-4 md:p-8 lg:p-12 flex flex-col items-center md:flex-row  overflow-hidden">
//       <div className="md:w-1/2 text-start md:pr-8">
//         <h4 className="text-roboto text-base text-gray-600 mb-2">Welcome to my website.</h4>
//         <h1 className="text-Raleway text-3xl font-bold mb-4">What is Lorem Ipsum</h1>
//         <p className="text-roboto text-lg text-gray-700 leading-relaxed max-w-xl">
//           Lorem Ipsum is simply dummy text of the printing and typesetting
//           industry. Lorem Ipsum has been the industry standard dummy text ever
//           since the 1500s, when an unknown printer took a galley of type and
//           scrambled it to make a type specimen book. It has survived not only
//           five centuries, but also the leap into electronic typesetting,
//           remaining essentially unchanged.
//         </p>
//         <Button text="Read More" className="mt-8" />
//       </div>
//       <div className="md:w-1/2 mt-4 md:mt-0">
//         <img className="w-full h-auto rounded-lg shadow-md" src={heroImage} alt="an image of the research project" />
//       </div>
//     </div>
//   );
// };

// export default HeroSection;

// import heroImage from '../../assets/images/heroImage.jpg';
// import Button from '../../components/buttons/button';

// const HeroSection = () => {
//   return (
//     <div className="mt-10 p-4 md:p-8 lg:p-12 flex flex-col items-center md:flex-row bg-gray-100 rounded-lg shadow-md overflow-hidden">
//       <div className="md:w-1/2 text-start md:pr-8">
//         <h4 className="text-roboto text-base text-gray-600 mb-2">Welcome to my website.</h4>
//         <h1 className="text-Raleway text-3xl font-bold mb-4">What is Lorem Ipsum</h1>
//         <p className="text-roboto text-lg text-gray-700 leading-relaxed max-w-xl">
//           Lorem Ipsum is simply dummy text of the printing and typesetting
//           industry. Lorem Ipsum has been the industry standard dummy text ever
//           since the 1500s, when an unknown printer took a galley of type and
//           scrambled it to make a type specimen book. It has survived not only
//           five centuries but also the leap into electronic typesetting,
//           remaining essentially unchanged.
//         </p>
//         <Button text="Read More" className="mt-8" />
//       </div>
//       <div className=" items-center md:w-1/2 mt-4 md:mt-0">
//         {/* Set a fixed height and use object-cover to maintain aspect ratio */}
//         <img
//           className="w-[80%] md:w-full md:h-auto object-cover rounded-lg shadow-md"
//           src={heroImage}
//           alt="an image of the research project"
//         />
//       </div>
//     </div>
//   );
// };

// export default HeroSection;
