import React from 'react';
import PageHeader from '../components/PageHeader';
import Features from '../components/PageSections/features.js';
import Testimonial from '../components/PageSections/testimonial.js';

const FeaturesPage = () => {
return (
	  <>
      <PageHeader name="Features" link="features-page" />

      {/* features section start */}
        <Features />
      {/* features section end */}


      {/* testimonial section start */}
        <Testimonial />
      {/* testimonial section end */}
    </>
);
};

export default FeaturesPage;
