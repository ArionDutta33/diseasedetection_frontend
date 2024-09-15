import { useState } from 'react';

const Upload = () => {
    const [fileName, setFileName] = useState('');
    const [isFileSelected, setIsFileSelected] = useState(false);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setFileName(file.name);
            setIsFileSelected(true);
        } else {
            setFileName('');
            setIsFileSelected(false);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg">
                <form className="space-y-4" encType="multipart/form-data" method="POST" action="/upload">
                    <div
                        id="upload-container"
                        className={`flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 ${isFileSelected ? 'bg-green-50 border-green-500' : ''}`}
                    >
                        <label htmlFor="file-upload" className="flex flex-col items-center justify-center w-full h-full">
                            <svg className="w-12 h-12 mb-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                                />
                            </svg>
                            <p id="upload-text" className="text-sm text-gray-500">
                                <span className="font-semibold">Click to upload</span> or drag and drop
                            </p>
                            <p className="text-xs text-gray-500">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                            <input
                                id="file-upload"
                                type="file"
                                name="disease"
                                className="hidden"
                                onChange={handleFileChange}
                            />
                        </label>
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                        disabled={!isFileSelected}
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Upload;
