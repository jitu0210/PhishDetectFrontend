import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-white via-blue-50 to-indigo-100">
      <Navbar />

      {/* Enhanced Hero Section */}
      <section className="flex-grow flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-8 border border-blue-200 shadow-sm">
            <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></span>
            AI-Powered Phishing Protection
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Secure Your Digital 
            <span className="block">
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Experience
              </span>
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto mb-8 leading-relaxed">
            Advanced AI technology to detect and prevent phishing attacks in real-time. 
            Protect your data before it's too late.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto mb-12">
            {[
              { value: "99.8%", label: "Accuracy Rate" },
              { value: "50K+", label: "Links Analyzed" },
              { value: "24/7", label: "Real-time Monitoring" },
              { value: "1s", label: "Detection Speed" }
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="relative inline-block">
                  <div className="text-2xl sm:text-3xl font-bold text-blue-600 group-hover:scale-110 transition-transform duration-300">
                    {stat.value}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-5 blur-md transition-opacity duration-300 rounded-lg"></div>
                </div>
                <div className="text-sm text-gray-600 mt-2">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button
              onClick={() => navigate("/mainpage")}
              className="group relative bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 px-8 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center gap-2 min-w-[200px] justify-center overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              Start Protecting Now
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
            
            <button className="group relative border-2 border-gray-300 text-gray-700 py-4 px-8 rounded-xl font-medium hover:border-blue-500 hover:text-blue-600 transition-all duration-300 flex items-center gap-2 min-w-[200px] justify-center overflow-hidden">
              <div className="absolute inset-0 bg-blue-500/5 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              <svg className="w-5 h-5 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="relative z-10">Watch Demo</span>
            </button>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 opacity-70">
            <div className="text-sm text-gray-500 font-medium">Trusted by security teams at</div>
            <div className="flex flex-wrap justify-center items-center gap-6">
              {['TechCorp', 'SecureNet', 'DataGuard', 'CyberShield'].map((company, index) => (
                <div key={index} className="text-gray-700 font-semibold text-lg hover:text-blue-600 transition-colors duration-300 cursor-default">
                  {company}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Features Section */}
      <section className="py-16 lg:py-24 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Why Choose <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">PhishDetect</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced protection powered by machine learning and real-time threat intelligence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: '🚀',
                title: 'Real-time Detection',
                description: 'Instant analysis of URLs with AI-powered algorithms that learn and adapt to new threats.',
                gradient: 'from-blue-500 to-cyan-500'
              },
              {
                icon: '🛡️',
                title: 'Advanced Protection',
                description: 'Multi-layered security approach combining pattern recognition and behavioral analysis.',
                gradient: 'from-green-500 to-emerald-500'
              },
              {
                icon: '📊',
                title: 'Detailed Analytics',
                description: 'Comprehensive reports and insights into detected threats and security trends.',
                gradient: 'from-purple-500 to-pink-500'
              },
              {
                icon: '🔍',
                title: 'Deep Scan Technology',
                description: 'In-depth analysis of website structure, content, and behavioral patterns.',
                gradient: 'from-orange-500 to-red-500'
              },
              {
                icon: '🌐',
                title: 'Browser Integration',
                description: 'Seamless protection with browser extensions for all major platforms.',
                gradient: 'from-indigo-500 to-blue-500'
              },
              {
                icon: '⚡',
                title: 'Lightning Fast',
                description: 'Sub-second analysis without compromising your browsing experience.',
                gradient: 'from-yellow-500 to-amber-500'
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="group relative bg-white p-8 rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-transparent transform hover:-translate-y-3 overflow-hidden"
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                {/* Animated Border */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}>
                  <div className="absolute inset-[2px] rounded-2xl bg-white"></div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <div className={`text-4xl mb-6 transform group-hover:scale-110 transition-transform duration-300 inline-block p-3 rounded-2xl bg-gradient-to-br ${feature.gradient} bg-opacity-10`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-indigo-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {feature.description}
                  </p>
                  
                  {/* Learn More Link */}
                  <div className="mt-6 flex items-center text-sm font-medium text-gray-500 group-hover:text-blue-600 transition-colors duration-300 cursor-pointer">
                    Learn more
                    <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Coming Soon Banner */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700"></div>
        
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-72 h-72 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-300 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Text Content */}
            <div className="text-center lg:text-left lg:flex-1">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6 border border-white/30">
                <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                Coming Soon
              </div>
              
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                Next Generation 
                <span className="block bg-gradient-to-r from-cyan-300 to-blue-200 bg-clip-text text-transparent">
                  Protection
                </span>
              </h3>
              
              <p className="text-xl text-blue-100 max-w-2xl mb-8 leading-relaxed">
                Advanced AI features, real-time monitoring, and enhanced threat intelligence 
                powered by cutting-edge machine learning algorithms.
              </p>

              {/* Feature List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {[
                  "Enhanced AI Detection",
                  "Real-time Dashboard",
                  "Browser Extensions",
                  "API Integration"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3 text-blue-100">
                    <div className="w-2 h-2 bg-cyan-300 rounded-full"></div>
                    <span className="font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Cards */}
            <div className="lg:flex-1 max-w-md w-full">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-2xl">
                <h4 className="text-2xl font-bold text-white mb-4">Be the First to Know</h4>
                <p className="text-blue-100 mb-6">
                  Join our waitlist and get early access to the next generation of phishing protection.
                </p>
                
                <div className="space-y-4">
                  <button
                    onClick={() => navigate("/mainpage")}
                    className="w-full bg-white text-blue-600 py-4 px-6 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-2 group"
                  >
                    <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    Try Current Version
                  </button>
                  
                  <button className="w-full border-2 border-white text-white py-4 px-6 rounded-xl font-medium hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2 group backdrop-blur-sm">
                    <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Join Waitlist
                  </button>
                </div>

                {/* Countdown or Progress */}
                <div className="mt-6 pt-6 border-t border-white/20">
                  <div className="flex justify-between text-sm text-blue-200 mb-2">
                    <span>Early Access Spots</span>
                    <span>247/500</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div className="bg-gradient-to-r from-cyan-400 to-blue-400 h-2 rounded-full w-1/2"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;