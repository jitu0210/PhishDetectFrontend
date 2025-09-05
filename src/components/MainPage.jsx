import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const MainPage = () => {
  const [link, setLink] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [currentFeature, setCurrentFeature] = useState(0);
  const navigate = useNavigate();

  // Features data for the sliding animation
  const features = [
    {
      title: "Real-time Detection",
      description: "Instant analysis of URLs using advanced algorithms",
      icon: "⏱️"
    },
    {
      title: "AI-Powered Analysis",
      description: "Machine learning models trained on millions of phishing examples",
      icon: "🤖"
    },
    {
      title: "Comprehensive Database",
      description: "Cross-referenced with known phishing databases worldwide",
      icon: "🗃️"
    },
    {
      title: "Advanced Encryption",
      description: "All scans are encrypted end-to-end for your privacy",
      icon: "🔒"
    }
  ];

  // Stats data
  const stats = [
    { value: "98%", label: "Detection Accuracy" },
    { value: "10M+", label: "Links Analyzed" },
    { value: "24/7", label: "Protection" },
    { value: "99.9%", label: "Uptime" }
  ];

  // Safety tips data
  const safetyTips = [
    "Check URLs before clicking, especially in unsolicited emails",
    "Look for HTTPS and valid certificates on websites",
    "Be cautious of urgent or threatening language in messages",
    "Keep your software and antivirus programs updated",
    "Use multi-factor authentication whenever possible",
    "Never enter credentials on sites without checking them first"
  ];

  // Rotate features every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [features.length]);

  const handleLink = async (e) => {
    e.preventDefault();
    if (!link) return;
    
    setIsLoading(true);
    try {
      const response = await axios.post(
        "https://phishdetectbackend-1.onrender.com/api/v1/link/check-link",
        { url: link }
      );
      setIsLoading(false);
      navigate("/linkresult", { state: { result: response.data, url: link } });
    } catch (error) {
      console.error("Error:", error.response?.data || error.message);
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Advanced Cybersecurity Protection
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Protect yourself from phishing attacks with our AI-powered detection system. 
              Validate URLs instantly and browse with confidence.
            </p>
          </div>
          
          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 text-center transition-all hover:shadow-md">
                <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-2">{stat.value}</div>
                <div className="text-sm md:text-base text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
          
          {/* Animated Feature Showcase */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl shadow-lg p-6 mb-16 text-white overflow-hidden">
            <div className="flex flex-col md:flex-row items-center">
              <div className="flex-1 p-6">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Why Choose PhishDetect?</h2>
                
                <div className="h-32 overflow-hidden relative">
                  {features.map((feature, index) => (
                    <div 
                      key={index}
                      className={`absolute top-0 left-0 w-full transition-opacity duration-500 ${index === currentFeature ? 'opacity-100' : 'opacity-0'}`}
                    >
                      <div className="flex items-center mb-3">
                        <span className="text-3xl mr-3">{feature.icon}</span>
                        <h3 className="text-xl font-semibold">{feature.title}</h3>
                      </div>
                      <p className="text-blue-100">{feature.description}</p>
                    </div>
                  ))}
                </div>
                
                <div className="flex space-x-2 mt-6">
                  {features.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentFeature(index)}
                      className={`h-2 w-2 rounded-full ${index === currentFeature ? 'bg-white' : 'bg-blue-400'}`}
                      aria-label={`View feature ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
              
              <div className="flex-1">
                <div className="bg-white rounded-xl shadow-lg p-6 mx-auto max-w-md">
                  <h3 className="text-xl font-semibold text-gray-900 text-center mb-2">Check URL Safety</h3>
                  <p className="text-gray-600 text-center mb-6 text-sm">
                    Paste a suspicious link below to analyze it for phishing attempts
                  </p>
                  
                  <form onSubmit={handleLink} className="space-y-4">
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                        </svg>
                      </div>
                      <input
                        value={link}
                        onChange={(e) => setLink(e.target.value)}
                        type="url"
                        placeholder="Paste your link here..."
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                        required
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isLoading}
                      className={`w-full py-3 px-4 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center ${isLoading ? 'opacity-75 cursor-not-allowed' : ''}`}
                    >
                      {isLoading ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Analyzing...
                        </>
                      ) : (
                        "Check Link Security"
                      )}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          
          {/* Features Grid */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Advanced Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
                <div className="text-blue-600 text-4xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Deep URL Analysis</h3>
                <p className="text-gray-600">Examines multiple aspects of URLs including domain age, redirects, and hidden elements.</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
                <div className="text-blue-600 text-4xl mb-4">📊</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Detailed Reports</h3>
                <p className="text-gray-600">Get comprehensive breakdowns of potential threats with actionable insights.</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
                <div className="text-blue-600 text-4xl mb-4">🌐</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Global Threat Intel</h3>
                <p className="text-gray-600">Leverages worldwide phishing databases and real-time threat intelligence.</p>
              </div>
            </div>
          </div>
          
          {/* Safety Tips Section */}
          <div className="bg-gray-50 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">Essential Safety Tips</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {safetyTips.map((tip, index) => (
                <div key={index} className="flex items-start bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-700">{tip}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default MainPage;