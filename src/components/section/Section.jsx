import React from "react";

const Section = (props) => {
  return (
    <section className="flex justify-center items-center">
      <div className="w-full max-w-screen-lg">{props.children}</div>
    </section>
  );
};

export default Section;
