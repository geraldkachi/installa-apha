// import React, { useState } from "react";
// import Image from "next/image";
// import { urlFor } from "@/sanity/utils";
// import { ArrowRight } from "iconsax-react";

// const Info = ({ homepage }) => {
//   const [onHover, setOnHover] = useState(false)
//   const [imgIndex, setImgIndex] = useState(0);
//   const handleHover = (index: number) => {
//     setOnHover(true);
//     setImgIndex(index);
//   };
//   return (
//     <section className="md:py-24 py-20 md:px-20 px-5 md:bg-white bg-[#f1f7f6]">
//       <div className="text-center md:max-w-2xl mx-auto space-y-4">
//         <h3 className="md:text-[44px] text-4xl font-zilla md:leading-[52px]">
//           Instollar is{" "}
//           <span className="font-bold text-primary-200">
//             Africa’s most trusted
//           </span>{" "}
//           solar energy workforce provider{" "}
//         </h3>
//         <p className="md:text-base text-sm">
//           We enable seamless matching with highly qualified, vetted solar
//           workforce closest to your project location, and help manage the entire
//           project from start to finish.
//         </p>
//       </div>
//       <div className="mt-16">
//         <div className="grid md:grid-cols-4 gap-8">
//           {homepage?.homeInfo.map((info, i: number) => (
//             <div
//             onMouseEnter={() => handleHover(i)}
//             onMouseLeave={() => setOnHover(false)}
//               className="md:px-6 px-8 md:pt-6 pt-8 md:pb-10 pb-8 md:bg-[#f1f7f6] bg-white hover:bg-[#005244] rounded-xl shadow relative transition-all duration-300 ease-in-out group"
//               key={info._key}
//             >
//               {/* if the hover item in the array is true hiden the image */}
//              {(imgIndex == i && onHover)   && <div className={`${imgIndex && "hidden"} mb-6 group-hover:opacity-0 transition-opacity duration-300`}>
//               <Image
//                 src={urlFor(info.icon).url()}
//                 alt="info icon"
//                 width={54}
//                 height={54}
//                 className="mb-6"
//                 />
//                 </div>}
//               <h4 className="font-bold leading-[30px] pb-4 text-lg group-hover:text-white transition-colors duration-300">
//                 {info.heading}
//               </h4>
//               <p className="leading-[24px] group-hover:text-white transition-colors duration-300">{info.text}</p>
            
//             {/* if the hover  the bottom show show and then this should only be for destop*/}
//              {(imgIndex == i && onHover)  && <button className={`${imgIndex ? 'bg-secondary text-[#005244]': ""} md:hidden w-full text-white text-center mt-6 bg-primary-200 rounded-full py-4 flex items-center justify-center space-x-2`}>
//                 <span>Get Started</span>
//                 <ArrowRight size="20" color={`${imgIndex ? '#005244' : '#FFFFFF`'} `} />
//               </button>}
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Info;


import React, { useState } from "react";
import Image from "next/image";
import { urlFor } from "@/sanity/utils";
import { ArrowRight } from "iconsax-react";

const Info = ({ homepage }) => {
  const [onHover, setOnHover] = useState(false);
  const [imgIndex, setImgIndex] = useState<number | null>(null);

  const handleHover = (index: number) => {
    setOnHover(true);
    setImgIndex(index);
  };

  return (
    <section className="md:py-24 py-20 md:px-20 px-5 md:bg-white bg-[#f1f7f6]">
      <div className="text-center md:max-w-2xl mx-auto space-y-4">
        <h3 className="md:text-[44px] text-4xl font-zilla md:leading-[52px]">
          Instollar is{" "}
          <span className="font-bold text-primary-200">
            Africa’s most trusted
          </span>{" "}
          solar energy workforce provider{" "}
        </h3>
        <p className="md:text-base text-sm">
          We enable seamless matching with highly qualified, vetted solar
          workforce closest to your project location, and help manage the entire
          project from start to finish.
        </p>
      </div>
      <div className="mt-16">
        <div className="grid md:grid-cols-4 gap-8">
          {homepage?.homeInfo.map((info, i: number) => (
            <div
              onMouseEnter={() => handleHover(i)}
              onMouseLeave={() => {
                setOnHover(false)
                setImgIndex(null)
              }}
              className="md:px-6 px-8 md:pt-6 pt-8 md:pb-10 pb-8 md:bg-[#f1f7f6] bg-white hover:bg-[#005244] rounded-xl shadow relative transition-all duration-300 ease-in-out group"
              key={info._key}
            >
              {/* Hide Image Icon on Hover */}
              {(imgIndex !== i ) && <div className={`mb-6 transition-opacity duration-300 ${imgIndex == i && onHover ? 'opacity-0---' : 'opacity-100--'}`}>
                <Image
                  src={urlFor(info.icon).url()}
                  alt="info icon"
                  width={54}
                  height={54}
                />
              </div>}

              {/* Heading */}
              <h4 className="font-bold leading-[30px] pb-4 text-lg group-hover:text-white transition-colors duration-300">
                {info.heading}
              </h4>

              {/* Text */}
              <p className="leading-[24px] group-hover:text-white transition-colors duration-300">
                {info.text}
              </p>

              {/* "Get Started" Button (Visible on Hover for Desktop) */}
              {imgIndex === i && onHover && (
                <button className={`${imgIndex === i && onHover && 'bg-secondary !text-primary-200' } hidden md:flex w-max md:w-full text-white text-center mt-6 bg-primary-200 rounded-full py-4 md:py-2 items-center justify-center space-x-2`}>
                  <span>Get Started</span>
                  <ArrowRight size="20" color={`${imgIndex === i && onHover ? '#005244' :"#FFFFFF"}`} />
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Info;
