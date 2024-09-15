import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Home = () => {
    const [isMenuActive, setIsMenuActive] = useState(false);
    return (
        <div className="bg-gray-100">
            <div className="container mx-auto px-4">
                <div className="navbar flex items-center justify-between py-4 border-b border-gray-300">
                    <div className="logo font-bold text-xl">DiseaseDetect</div>
                    <div className="hidden lg:flex items-center space-x-6">
                        <a href="/" className="text-lg hover:text-blue-500">
                            Home
                        </a>
                        <a href="/about" className="text-lg hover:text-blue-500">
                            About
                        </a>
                        <a href="/services" className="text-lg hover:text-blue-500">
                            Services
                        </a>
                        <a href="/contact" className="text-lg hover:text-blue-500">
                            Contact
                        </a>
                    </div>
                    <div className="menu-icon text-2xl cursor-pointer text-blue-500 lg:hidden" onClick={() => setIsMenuActive(true)}>
                        <FaBars />
                    </div>
                </div>
                <div className={`side-menu fixed inset-y-0 right-0 p-4 lg:hidden w-[40%] bg-gray-800 text-white transform transition-transform duration-300 ${isMenuActive ? 'translate-x-0' : 'translate-x-full'}`}>
                    <button className="close-btn absolute top-4 right-4" onClick={() => setIsMenuActive(false)}> <FaTimes className="text-white text-2xl" />
                    </button>
                    <ul className="mt-8 flex flex-col space-y-4">
                        <li>
                            <a href="/" className="block py-2 text-lg hover:text-blue-400" onClick={() => setIsMenuActive(false)}>
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="/about" className="block py-2 text-lg hover:text-blue-400" onClick={() => setIsMenuActive(false)}>
                                About
                            </a>
                        </li>
                        <li>
                            <a href="/services" className="block py-2 text-lg hover:text-blue-400" onClick={() => setIsMenuActive(false)}>
                                Services
                            </a>
                        </li>
                        <li>
                            <a href="/contact" className="block py-2 text-lg hover:text-blue-400" onClick={() => setIsMenuActive(false)}>
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="pt-8 pb-16">
                    <div className="intro-text text-center px-4">
                        <div className="text-4xl lg:text-5xl font-bold mb-4">
                            <span className="text-blue-500 ">
                                DETECT
                            </span>
                            <br />
                            DISEASES
                        </div>
                        <button className="my-4 border px-6 py-2 bg-blue-500 text-white text-xl rounded-full">
                            <Link href="/info">
                                Get Started
                            </Link>
                        </button>
                        <div className="description p-6 bg-white rounded-lg shadow-lg mx-auto max-w-4xl">
                            <h2 className="text-2xl lg:text-3xl font-extrabold text-gray-900 mb-6 border-b-2 border-blue-500 pb-2"> Our Hackathon Project: Predicting Plant Diseases from Images </h2> <div className="space-y-6"> <div className="flex flex-col md:flex-row items-start"> <strong className="text-lg font-semibold text-gray-900 flex-shrink-0 md:w-1/4">Objective:</strong>
                                <p className="text-gray-700 md:ml-4 md:w-3/4"> Our project aims to develop a system that can accurately predict plant diseases from images. This tool will help farmers and agricultural experts quickly identify and address plant health issues, improving crop yields and reducing losses. </p> </div> <div className="flex flex-col md:flex-row items-start"> <strong className="text-lg font-semibold text-gray-900 flex-shrink-0 md:w-1/4">Approach:</strong> <p className="text-gray-700 md:ml-4 md:w-3/4"> We will use a combination of image processing and machine learning techniques to analyze plant images. By training our model with a diverse dataset of plant diseases, we aim to create a reliable system for disease detection and classification. </p> </div> <div className="flex flex-col md:flex-row items-start"> <strong className="text-lg font-semibold text-gray-900 flex-shrink-0 md:w-1/4">Technology Stack:</strong> <p className="text-gray-700 md:ml-4 md:w-3/4"> Our technology stack includes machine learning frameworks such as TensorFlow or PyTorch for model training, and image processing libraries for handling and analyzing plant images. The system will be integrated into a user-friendly web or mobile application. </p> </div> <div className="flex flex-col md:flex-row items-start"> <strong className="text-lg font-semibold text-gray-900 flex-shrink-0 md:w-1/4">Impact:</strong> <p className="text-gray-700 md:ml-4 md:w-3/4"> By providing an easy-to-use tool for disease prediction, our project will support farmers in early detection and management of plant diseases. This proactive approach will contribute to better crop health and sustainable agriculture practices. </p> </div> </div> </div> </div> </div> </div> </div>);
};
export default Home;