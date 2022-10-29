import React from "react";
import PageHeader from '../components/PageHeader';
import About from '../components/PageSections/about.js';
import Team from '../components/PageSections/team.js';
const AboutUs = () => {
  return (
    <>
      <PageHeader name="About Us" link="about-us" />


      {/* about section start */}
        <About />
      {/* about section end */}


      {/* team section start */}
        <Team />
      {/* team section end */}
    </>
  );
};
  
export default AboutUs;