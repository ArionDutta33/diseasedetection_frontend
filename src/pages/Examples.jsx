import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faUpload } from '@fortawesome/free-solid-svg-icons';

const Examples = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        { image: "https://www.familyhandyman.com/wp-content/uploads/2020/05/Black-Spot-Diplocarpon-rosae-GettyImages-1097545284.jpg?fit=335,335", title: "Black Spot" },
        { image: "https://www.familyhandyman.com/wp-content/uploads/2020/05/Tobacco-Mosaic-Virus-GettyImages-1200783801.jpg?fit=335,335", title: "Tobacco Mosaic Virus" },
        { image: "https://www.familyhandyman.com/wp-content/uploads/2020/05/Fusarium-Wilt-GettyImages-1221194369.jpg?fit=335,335", title: "Fusarium Wilt" },
        { image: "https://www.familyhandyman.com/wp-content/uploads/2020/05/Verticillium-fungi-GettyImages-1042492416-1.jpg?fit=335,335", title: "Verticillium Fungi" },
        { image: "https://www.familyhandyman.com/wp-content/uploads/2020/05/Sooty-Mold-GettyImages-1147925067.jpg?fit=335,335", title: "Sooty Mold" },
        { image: "https://www.familyhandyman.com/wp-content/uploads/2020/05/Snow-Mold-GettyImages-467729840.jpg?fit=335,335", title: "Snow Mold" },
        { image: "https://www.familyhandyman.com/wp-content/uploads/2020/05/Rust-GettyImages-694659917.jpg?fit=335,335", title: "Rust" },
        { image: "https://youhadmeatgardening.com/wp-content/uploads/2020/11/powdery-mildrew-plant-disease.webp", title: "Powdery Mildew" },
    ];

    const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
    const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

    return (
        <div className="bg-gray-100 min-h-screen flex flex-col">
            {/* Header */}
            <header className="bg-white shadow-md p-4">
                <div className="container mx-auto flex justify-between items-center">
                    <h1 className="text-2xl font-bold">
                        <span className="text-blue-600">Disease</span>
                        <span className="text-gray-900">Detect</span>
                    </h1>
                    <nav className="hidden md:flex space-x-4">
                        <a href="/" className="text-gray-600 hover:text-blue-600">Home</a>
                        <a href="/about" className="text-gray-600 hover:text-blue-600">About</a>
                        <a href="/services" className="text-gray-600 hover:text-blue-600">Services</a>
                        <a href="/contact" className="text-gray-600 hover:text-blue-600">Contact</a>
                    </nav>
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-grow container mx-auto px-4 py-8">
                <h2 className="text-3xl font-bold text-center mb-8">Plant Disease Examples</h2>

                {/* Slider */}
                <div className="relative max-w-2xl mx-auto mb-12">
                    <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg overflow-hidden">
                        <img
                            src={slides[currentSlide].image}
                            alt={slides[currentSlide].title}
                            className="object-cover w-full h-full"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
                            <h3 className="text-xl font-semibold">{slides[currentSlide].title}</h3>
                        </div>
                    </div>
                    <button
                        onClick={prevSlide}
                        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <FontAwesomeIcon icon={faChevronLeft} className="text-gray-600" />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <FontAwesomeIcon icon={faChevronRight} className="text-gray-600" />
                    </button>
                </div>

                {/* Upload Section */}
                <div className="text-center">
                    <h2 className="text-2xl font-bold mb-4">Analyze Your Plant</h2>
                    <p className="text-lg text-gray-700 mb-6">Upload a picture of your plant to get an instant disease diagnosis.</p>
                    <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                        <FontAwesomeIcon icon={faUpload} className="mr-2" />
                        Upload a Picture
                    </button>
                </div>
            </main>

            {/* Footer */}
            <footer className="bg-white mt-auto">
                <div className="container mx-auto py-4 px-4 text-center text-gray-500 text-sm">
                    &copy; 2024 DiseaseDetect. All rights reserved.
                </div>
            </footer>
        </div>
    );
};

export default Examples;