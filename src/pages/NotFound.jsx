import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-900 mb-2">Page Not Found</h2>
      <p className="text-gray-600 text-center mb-6 max-w-md">
        Oops! The page you're looking for doesn't exist or has been moved. 
        Please check the URL or return to the homepage.
      </p>
      <button
        onClick={() => navigate("/")}
        className="bg-blue-600 text-white py-2 px-6 rounded-lg font-medium hover:bg-blue-700 transition duration-300"
      >
        Return to Homepage
      </button>
    </div>
  );
};

export default NotFound;
