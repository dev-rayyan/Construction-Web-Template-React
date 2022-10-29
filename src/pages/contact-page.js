import React from 'react';
import PageHeader from '../components/PageHeader';
import Contact from '../components/PageSections/contact.js';

const ContactPage = () => {
return (
	  <>
      <PageHeader name="Contact Us" link="contact-page" />
      <Contact />
      
    </>
);
};

export default ContactPage;
