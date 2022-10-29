import React from 'react';
import Slider from '../components/PageSections/slider.js';
import About from '../components/PageSections/about.js';
import Facts from '../components/PageSections/facts.js';
import Features from '../components/PageSections/features.js';
import Services from '../components/PageSections/services.js';
import Appointment from '../components/PageSections/appointment.js';
import Team from '../components/PageSections/team.js';
import Testimonial from '../components/PageSections/testimonial.js';
const Home = () => {
return (
	<>
      {/* slider start*/}
        <Slider />
      {/* slider end*/}


      {/* about section start*/}
        <About />
      {/* about section end*/}


      {/* facts section start*/}
        <Facts />
      {/* facts section end */}


      {/* features section start */}
       <Features />
      {/* features section end */}


      {/* services section start */}
        <Services />
      {/* services section end */}

 
      {/* appointment section start */}
        <Appointment />
      {/* appointment section end */}


      {/* team section start */}
        <Team />
      {/* team section end */}


      {/* testimonial section start */}
        <Testimonial />
      {/* testimonial section end */}
          </>
);
};

export default Home;
