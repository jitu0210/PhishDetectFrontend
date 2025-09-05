import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-50 flex flex-col">
      <Navbar />
      
      <div className="flex-grow flex items-center justify-center px-4 py-8 sm:py-4">
        <div className="max-w-6xl mx-auto w-full">
          {/* Header */}
          <header className="flex justify-between items-center mb-12 md:mb-16">
            <div className="flex items-center">
              {/* <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div> */}
              {/* <h1 className="text-2xl font-bold text-gray-900">PhishDetect</h1> */}
            </div>
            {/* <button className="text-blue-600 font-medium hover:text-blue-800 transition-colors">
              Sign In
            </button> */}
          </header>

          {/* Main Content */}
          <main className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">
            <div className="flex-1 text-center lg:text-left">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Protect Your Business from<br />
                <span className="text-blue-600">Phishing Attacks</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Advanced cybersecurity solution that identifies and prevents phishing attempts 
                with AI-powered detection and real-time protection for your organization.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
                <button
                  onClick={() => navigate("/mainpage")}
                  className="bg-blue-600 text-white py-3 px-8 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 shadow-md hover:shadow-lg"
                >
                  Get Started
                </button>
                <button className="border border-gray-300 text-gray-700 py-3 px-8 rounded-lg font-medium hover:bg-gray-50 transition duration-300">
                  Learn More
                </button>
              </div>
              
              <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-gray-500 text-sm">
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Real-time detection
                </div>
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  AI-powered
                </div>
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  99.9% Accurate
                </div>
              </div>
            </div>
            
            <div className="flex-1 w-full max-w-md lg:max-w-lg">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="bg-white rounded-xl p-5 shadow-md mb-4">
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-2 rounded-lg mr-4 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Suspicious Email Detected</h3>
                      <p className="text-sm text-gray-600 mt-1">PhishDetect blocked a potential threat</p>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-xl p-4 shadow-md text-center">
                    <div className="text-blue-600 font-bold text-xl">98%</div>
                    <div className="text-sm text-gray-600 mt-1">Detection Rate</div>
                  </div>
                  <div className="bg-white rounded-xl p-4 shadow-md text-center">
                    <div className="text-blue-600 font-bold text-xl">24/7</div>
                    <div className="text-sm text-gray-600 mt-1">Protection</div>
                  </div>
                </div>
              </div>
            </div>
          </main>
          
          {/* Trusted By Section */}
          <div className="mt-16 md:mt-20">
            <p className="text-gray-500 text-sm text-center mb-6">TRUSTED BY INDUSTRY LEADERS</p>
            <div className="flex flex-wrap justify-center gap-6 md:gap-8 opacity-70">
              {["Microsoft", "Google", "Amazon", "IBM", "Cisco", "Deloitte"].map((company, index) => (
                <div key={index} className="font-medium text-gray-700 text-sm md:text-base">
                  {company}
                </div>
              ))}
            </div>
          </div>

          {/* Stats Section */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm text-center">
              <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-2">10M+</div>
              <div className="text-xs md:text-sm text-gray-600">Links Analyzed</div>
            </div>
            <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm text-center">
              <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-2">99.9%</div>
              <div className="text-xs md:text-sm text-gray-600">Uptime</div>
            </div>
            <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm text-center">
              <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-xs md:text-sm text-gray-600">Monitoring</div>
            </div>
            <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm text-center">
              <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-xs md:text-sm text-gray-600">Integrations</div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Home;