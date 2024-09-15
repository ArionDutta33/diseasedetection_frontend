// import { useState } from 'react';
// import axios from 'axios';

// function App() {
//   const [file, setFile] = useState(null);
//   const [prediction, setPrediction] = useState("");

//   const handleFileChange = (e) => {
//     setFile(e.target.files[0]);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append('file', file);

//     try {
//       const response = await axios.post('http://localhost:8000/predict', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });
//       setPrediction(response.data.prediction);
//     } catch (error) {
//       console.error("Error uploading file:", error);
//     }
//   };

//   return (
//     <div>
//       <h1>Plant Disease Detection</h1>
//       <form onSubmit={handleSubmit}>
//         <input type="file" onChange={handleFileChange} />
//         <button type="submit">Upload Image</button>
//       </form>
//       {prediction && <h2>Prediction: {prediction}</h2>}
//     </div>
//   );
// }

// export default App;

import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Examples from "./pages/Examples"
import Upload from './pages/Upload';
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/info" element={<Examples />} />
      <Route path="/upload" element={<Upload />} />
    </Routes>
  );
}

export default App;

