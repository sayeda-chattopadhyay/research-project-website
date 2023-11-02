// // import { IoIosPeople } from "react-icons/io";
// // import { BsGlobeAmericas } from "react-icons/bs";
// // import { MdCastForEducation } from "react-icons/md";

// // const SellingPointSection = () => {
// //   return (
// //     <div className="mt-20 bg-gray-100 p-4 md:p-8 lg:p-12 rounded-lg shadow-md">
// //       <div className="flex flex-wrap items-center justify-between gap-8">
// //         {/* first point */}
// //         <div className="flex flex-col items-center gap-8 mb-4">
// //           <div className="text-[#005c99] border-double border-4 border-[#005c99] rounded-full p-2 md:text-3xl lg:text-4xl">
// //             <IoIosPeople />
// //           </div>
// //           <p className="text-[#003d66] md:text-lg font-bold text-Raleway max-w-[80%]">
// //             Encourage public involvement with us
// //           </p>
// //         </div>
// //         {/* second point */}
// //         <div className="flex flex-col items-center gap-8 mb-4">
// //           <div className="text-[#005c99] border-double border-4 border-[#005c99] rounded-full p-2 md:text-3xl lg:text-4xl">
// //             <BsGlobeAmericas />
// //           </div>
// //           <p className="text-[#003d66] md:text-lg font-bold text-Raleway max-w-[80%]">
// //             Supporting global efforts for a more sustainable future
// //           </p>
// //         </div>
// //         {/* third point */}
// //         <div className="flex flex-col items-center gap-8 mb-4">
// //           <div className="text-[#005c99] border-double border-4 border-[#005c99] rounded-full p-2 md:text-3xl lg:text-4xl">
// //             <MdCastForEducation />
// //           </div>
// //           <p className="text-[#003d66] md:text-lg font-bold text-Raleway max-w-[80%]">
// //             Promote Health Education and Awareness
// //           </p>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default SellingPointSection;

// import { IoIosPeople } from "react-icons/io";
// import { BsGlobeAmericas } from "react-icons/bs";
// import { MdCastForEducation } from "react-icons/md";

// const SellingPointSection = () => {
//   return (
//     <div className="mt-10 md:mt-12 lg:mt-24  p-4 md:p-8 lg:p-12 bg-gray-50 rounded-md">
//       <div className="flex flex-wrap items-center justify-center md:justify-between lg:justify-between gap-8">
//         {/* first point */}
//         <div className="flex flex-col items-center gap-4 md:mb-4 border-red-900">
//           <div className="text-[#005c99] border-double border-4 border-[#005c99] rounded-full p-2 md:text-4xl lg:text-5xl">
//             <IoIosPeople />
//           </div>
//           <p className="text-[#003d66] md:text-lg font-bold text-Raleway max-w-[80%] text-center">
//             Encourage public involvement with us
//           </p>
//         </div>
//         {/* second point */}
//         <div className="flex flex-col items-center gap-4 md:mb-4">
//           <div className="text-[#005c99] border-double border-4 border-[#005c99] rounded-full p-2 md:text-4xl lg:text-5xl">
//             <BsGlobeAmericas />
//           </div>
//           <p className="text-[#003d66] md:text-lg font-bold text-Raleway max-w-[80%] text-center">
//             Supporting global efforts for a more sustainable future
//           </p>
//         </div>
//         {/* third point */}
//         <div className="flex flex-col items-center gap-4">
//           <div className="text-[#005c99] border-double border-4 border-[#005c99] rounded-full p-2 md:text-4xl lg:text-5xl">
//             <MdCastForEducation />
//           </div>
//           <p className="text-[#003d66] md:text-lg font-bold text-Raleway max-w-[80%] text-center">
//             Promote Health Education and Awareness
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SellingPointSection;


import { IoIosPeople } from "react-icons/io";
import { BsGlobeAmericas } from "react-icons/bs";
import { MdCastForEducation } from "react-icons/md";

const SellingPointSection = () => {
  return (
    <div className="mt-10 md:mt-12 lg:mt-24 p-12 min-h-[300px]">
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-between lg:justify-between gap-8">
        {/* first point */}
        <div className="flex flex-col items-center gap-4 md:mb-4">
          <div className="text-[#005c99] border-double border-4 border-[#005c99] rounded-full p-2 text-3xl md:text-4xl lg:text-5xl">
            <IoIosPeople />
          </div>
          <p className="text-[#003d66] md:text-lg font-bold text-Raleway max-w-[80%] text-center">
            Encourage public involvement with us
          </p>
        </div>
        {/* second point */}
        <div className="flex flex-col items-center gap-4 md:mb-4">
          <div className="text-[#005c99] border-double border-4 border-[#005c99] rounded-full p-2 text-3xl md:text-4xl lg:text-5xl">
            <BsGlobeAmericas />
          </div>
          <p className="text-[#003d66] md:text-lg font-bold text-Raleway max-w-[80%] text-center">
            Supporting global efforts for a more sustainable future
          </p>
        </div>
        {/* third point */}
        <div className="flex flex-col items-center gap-4">
          <div className="text-[#005c99] border-double border-4 border-[#005c99] rounded-full p-2 text-3xl md:text-4xl lg:text-5xl">
            <MdCastForEducation />
          </div>
          <p className="text-[#003d66] md:text-lg font-bold text-Raleway max-w-[80%] text-center">
            Promote Health Education and Awareness
          </p>
        </div>
      </div>
    </div>
  );
};

export default SellingPointSection;
