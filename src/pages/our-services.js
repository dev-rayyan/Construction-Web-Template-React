import React from 'react';
import PageHeader from '../components/PageHeader';
import Services from '../components/PageSections/services.js';
import Appointment_2 from '../components/PageSections/appointment-2.js';

const OurServices = () => {
return (
	  <>
      <PageHeader name="Our Services" link="our-services" />

      {/* services section start */}
        <Services />
      {/* services section end */}


      {/* appointment section start */}
        <Appointment_2 />
      {/* appointment section end */}
    </>
);
};

export default OurServices;
