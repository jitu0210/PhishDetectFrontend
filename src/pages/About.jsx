import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-50 flex flex-col">
      <Navbar />
      
      <div className="flex-grow py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About <span className="text-blue-600">PhishDetect</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Leading the fight against phishing with advanced AI-powered cybersecurity solutions
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Mission</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  PhishDetect is a robust cybersecurity platform designed to protect individuals and 
                  organizations from phishing scams and malicious links. By leveraging cutting-edge
                  machine learning algorithms and real-time threat intelligence, PhishDetect analyzes 
                  URLs and provides accurate threat assessments, ensuring safer online interactions.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Whether you are an individual or a enterprise business, PhishDetect is here to
                  safeguard your digital activities. Together, we aim to create a safer internet 
                  ecosystem, one link at a time.
                </p>
              </div>

              {/* Features Grid */}
              <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Key Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-lg mr-4 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Real-time Detection</h3>
                      <p className="text-gray-600">Instant analysis of URLs with immediate threat assessment results</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-lg mr-4 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">AI-Powered Analysis</h3>
                      <p className="text-gray-600">Advanced machine learning algorithms trained on millions of phishing examples</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-lg mr-4 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Comprehensive Database</h3>
                      <p className="text-gray-600">Cross-referenced with global threat intelligence feeds and known phishing databases</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-lg mr-4 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Historical Analysis</h3>
                      <p className="text-gray-600">Maintains history of analyzed links for future reference and pattern detection</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Technology Stack */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Technology</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div className="bg-gray-50 p-4 rounded-lg text-center">
                    <div className="text-blue-600 font-bold mb-2">Machine Learning</div>
                    <div className="text-sm text-gray-600">Neural Networks</div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg text-center">
                    <div className="text-blue-600 font-bold mb-2">Real-time Analysis</div>
                    <div className="text-sm text-gray-600">API Integration</div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg text-center">
                    <div className="text-blue-600 font-bold mb-2">Threat Intelligence</div>
                    <div className="text-sm text-gray-600">Global Feeds</div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg text-center">
                    <div className="text-blue-600 font-bold mb-2">Security</div>
                    <div className="text-sm text-gray-600">End-to-End Encryption</div>
                  </div>
                </div>
                <p className="text-gray-700">
                  Our platform combines multiple layers of security technology to provide comprehensive 
                  protection against evolving phishing threats. We continuously update our systems to 
                  combat new attack vectors and techniques used by cybercriminals.
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Stats Card */}
              <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">Our Impact</h3>
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600">10M+</div>
                    <div className="text-gray-600">Links Analyzed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600">98%</div>
                    <div className="text-gray-600">Detection Accuracy</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600">24/7</div>
                    <div className="text-gray-600">Protection</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600">99.9%</div>
                    <div className="text-gray-600">Uptime</div>
                  </div>
                </div>
              </div>

              {/* Team Card */}
              <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">Our Team</h3>
                <p className="text-gray-700 mb-4">
                  PhishDetect is developed by a team of cybersecurity experts, data scientists, 
                  and software engineers dedicated to creating a safer digital world.
                </p>
                <div className="flex justify-center space-x-4">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <div className="text-sm font-medium text-gray-900">Security Experts</div>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <div className="text-sm font-medium text-gray-900">Data Scientists</div>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                    </div>
                    <div className="text-sm font-medium text-gray-900">Developers</div>
                  </div>
                </div>
              </div>

              {/* CTA Card */}
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl shadow-lg p-6 text-white">
                <h3 className="text-xl font-bold mb-4">Get Started Today</h3>
                <p className="mb-6">Protect yourself and your organization from phishing attacks</p>
                <button
                  onClick={() => navigate("/mainpage")}
                  className="w-full bg-white text-blue-600 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300"
                >
                  Start Detection
                </button>
              </div>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-12 bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-lg font-medium text-yellow-800">Important Notice</h3>
                <div className="mt-2 text-yellow-700">
                  <p>
                    PhishDetect is continuously being improved and may not provide 100% accurate results. 
                    Always verify critical security decisions using additional tools or trusted methods. 
                    This service should be used as part of a comprehensive cybersecurity strategy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default About;