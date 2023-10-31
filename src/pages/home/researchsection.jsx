import researchImage from "../../assets/images/research.jpg";

// const ResearchSection = () => {
//   return (
//     <div className="mt-20 p-4 md:p-8 lg:p-12 flex flex-col md:flex-row gap-8">
//       {/* text */}
//       <div className="md:w-1/2 text-start md:pr-8">
//         <h1 className="text-Raleway text-3xl font-bold mb-4">Know About us</h1>
//         <p className="text-roboto text-lg text-gray-700 leading-relaxed max-w-xl mb-8">
//           Lorem Ipsum is simply dummy text of the printing and typesetting
//           industry. Lorem Ipsum has been the industry standard dummy text ever
//           since the 1500s, when an unknown printer took a galley of type and
//           scrambled it to make a type specimen book. It has survived not only
//           five centuries, but also the leap into electronic typesetting,
//           remaining essentially unchanged.
//         </p>
//         <button className="border-2 px-4 py-2 rounded-md bg-[#003d66] text-white/90 ">
//           See your research
//         </button>
//       </div>
//       {/* image */}
//       <div className="md:w-1/2 mt-4 md:mt-0">
//         <img
//           className="w-full h-auto rounded-lg"
//           src={researchImage}
//           alt="an image of the research project"
//         />
//       </div>
//     </div>
//   );
// };

// design 2

// export default ResearchSection;

import { BsGlobeAmericas } from "react-icons/bs";
const ResearchSection = () => {
  return (
    <div className="mt-20 p-4 md:p-8 lg:p-12 flex flex-col md:flex-row gap-8">
      {/* text */}
      <div className="md:w-1/2 text-start md:pr-8">
        {/* first research */}
        <div className="flex flex-col items-center gap-4 md:mb-4 bg-gray-100 px-4 py-10">
          <div className="text-[#005c99] border-double border-4 border-[#005c99] rounded-full p-2 md:text-2xl lg:text-3xl">
            <BsGlobeAmericas />
          </div>
          <p className="text-[#333333]text-roboto max-w-[80%] text-center">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry standard dummy text ever
            since the 1500s.
          </p>
        </div>
        {/* second and third research */}
        <div className="flex gap-4">
          {/* second research */}
          <div className="flex flex-col items-center gap-4 md:mb-4 bg-gray-100 px-4 py-10">
            <div className="text-[#005c99] border-double border-4 border-[#005c99] rounded-full p-2 md:text-2xl lg:text-3xl">
              <BsGlobeAmericas />
            </div>
            <p className="text-[#333333]text-roboto max-w-[80%] text-center">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry standard dummy text
              ever since the 1500s.
            </p>
          </div>
          <div className="flex flex-col items-center gap-4 md:mb-4 bg-gray-100 px-4 py-10">
            <div className="text-[#005c99] border-double border-4 border-[#005c99] rounded-full p-2 md:text-2xl lg:text-3xl">
              <BsGlobeAmericas />
            </div>
            <p className="text-[#333333]text-roboto max-w-[80%] text-center">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry standard dummy text
              ever since the 1500s.
            </p>
          </div>
        </div>
        <button className="border-2 px-4 py-2 rounded-md bg-[#003d66] text-white/90">
          view more
        </button>
      </div>
      {/* image */}
      <div className="md:w-1/2 mt-4 md:mt-0">
        <img
          className="w-full h-auto rounded-lg"
          src={researchImage}
          alt="an image of the research project"
        />
      </div>
    </div>
  );
};

export default ResearchSection;
