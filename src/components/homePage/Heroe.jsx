import Image from "next/image";
import React from "react";

const Heroe = () => {
  return (
    <section className="text-center bg-gradient-to-b from-gray-900 to-gray-800 py-6">
      <div className=" w-72 h-72 shadow-[0 1px 8px rgba(0,0,0,0.2)] rounded-full overflow-hidden bg-gray-700 m-auto">
        <Image
          src="/images/site/IMG_2466.jpg"
          alt="my image"
          width={300}
          height={300}
        />
      </div>
      <h1 className=" text-gray-300 text-4xl m-4 font-bold">Hi, I'm Max</h1>
      <div className="flex justify-center items-center">
        <p className=" text-lg text-gray-200 w-[90%] max-w-2xl">
          I blog about web development - especially frontend frameworks like
          Next or React.
        </p>
      </div>
    </section>
  );
};

export default Heroe;
