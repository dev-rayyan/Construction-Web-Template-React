import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import TopBar from './components/Navbar/TopBar';
import { BrowserRouter as Router, Routes, Route}
	from 'react-router-dom';
import Home from './pages';
import AboutUs from './pages/about-us';
import OurServices from './pages/our-services';
import FeaturesPage from './pages/features-page';
import ContactPage from './pages/contact-page';
// import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
return (
	<Router>
	<TopBar />
	<Navbar />
	<Routes>
		<Route exact path='/' element={<Home />} />
		<Route path='/about-us' element={<AboutUs/>} />
		<Route path='/contact-page' element={<ContactPage/>} />
		<Route path='/our-services' element={<OurServices/>} />
		<Route path='/features-page' element={<FeaturesPage/>} />
	</Routes>
	<Footer/>
	</Router>
);
}

export default App;
