import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link href="#" className="flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-emerald-500"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                </svg>
                <span className="text-xl font-bold bg-gradient-to-r from-emerald-500 to-blue-500 bg-clip-text text-transparent">
                  VoltPath
                </span>
              </Link>
            </div>

            <nav className="hidden md:block">
              <ul className="flex space-x-8">
                <li>
                  <Link href="#" className="text-gray-700 hover:text-emerald-500 transition-colors relative group">
                    Home
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-500 transition-all group-hover:w-full"></span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="#features"
                    className="text-gray-700 hover:text-emerald-500 transition-colors relative group"
                  >
                    Features
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-500 transition-all group-hover:w-full"></span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="#technology"
                    className="text-gray-700 hover:text-emerald-500 transition-colors relative group"
                  >
                    Technology
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-500 transition-all group-hover:w-full"></span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="#timeline"
                    className="text-gray-700 hover:text-emerald-500 transition-colors relative group"
                  >
                    Timeline
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-500 transition-all group-hover:w-full"></span>
                  </Link>
                </li>
                <li>
                  <Link href="#team" className="text-gray-700 hover:text-emerald-500 transition-colors relative group">
                    Team
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-500 transition-all group-hover:w-full"></span>
                  </Link>
                </li>
              </ul>
            </nav>

            <div className="hidden md:block">
              <button className="px-4 py-2 rounded-md bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 text-white transition-colors">
                Get Started
              </button>
            </div>

            <div className="md:hidden">
              <button className="text-gray-700 hover:text-emerald-500 transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
                <span className="bg-gradient-to-r from-emerald-500 to-blue-500 bg-clip-text text-transparent">
                  Smart EV Route
                </span>{" "}
                <span className="text-gray-800">Navigation Reimagined</span>
              </h1>
              <p className="text-lg text-gray-700 mb-8">
                AI-powered route planning for electric vehicles with real-time charging station data, traffic
                conditions, and weather updates.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-4 py-2 rounded-md bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 text-white transition-colors">
                  Get Started
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-2 inline"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </button>
                <button className="px-4 py-2 rounded-md border border-emerald-500 text-emerald-500 hover:bg-emerald-50 transition-colors">
                  Learn More
                </button>
              </div>
            </div>

            <div className="md:w-1/2 mt-12 md:mt-0">
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center z-10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-emerald-500"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M7 2v11m0 0a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-6a2 2 0 0 0-2 2v4zm0 7v3m10-10v10"></path>
                  </svg>
                </div>
                <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center z-10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-blue-500"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                  <div className="p-1 h-[400px]">
                    {/* Google Maps iframe */}
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100939.98555098464!2d-122.50764017948551!3d37.75781499657369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1617990625429!5m2!1sen!2sus"
                      className="w-full h-full rounded-xl"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      title="EV Route Navigation Map"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-emerald-500"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                  </svg>
                ),
                title: "Real-time Updates",
                description: "Get live data on charging station availability and traffic conditions.",
              },
              {
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-blue-500"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                ),
                title: "Smart Routing",
                description: "AI-powered route optimization based on your vehicle's specifications.",
              },
              {
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-emerald-500"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M7 2v11m0 0a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-6a2 2 0 0 0-2 2v4zm0 7v3m10-10v10"></path>
                  </svg>
                ),
                title: "Battery Management",
                description: "Optimize your journey with intelligent battery usage predictions.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center mb-4">
                  {item.icon}
                  <h3 className="ml-2 text-lg font-semibold text-gray-900">{item.title}</h3>
                </div>
                <p className="text-gray-700">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Key Features</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              VoltPath combines cutting-edge technology with practical features to revolutionize EV navigation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 text-emerald-500"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="3" y1="9" x2="21" y2="9"></line>
                    <line x1="9" y1="21" x2="9" y2="9"></line>
                  </svg>
                ),
                title: "Dynamic Route Planning",
                description:
                  "Personalized route planning that adapts to real-time conditions including traffic, weather, and charging station availability.",
              },
              {
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 text-blue-500"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                  </svg>
                ),
                title: "Charging Station Data",
                description:
                  "Access to real-time data from multiple charging networks including PlugShare, Open Charge Map, and OpenEVSE.",
              },
              {
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 text-emerald-500"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path>
                  </svg>
                ),
                title: "Weather Integration",
                description:
                  "Incorporates weather data to optimize routes based on conditions that affect EV performance and efficiency.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all hover:translate-y-[-5px]"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-700">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section id="technology" className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Technology Stack</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Powered by modern technologies to deliver a seamless and reliable experience
            </p>
          </div>

          {/* Tech Stack Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Backend Category */}
            <div className="bg-white rounded-xl p-8 shadow-md border border-gray-100 hover:shadow-lg transition-all">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-blue-600"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold">Backend</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-blue-500"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 9H7.5a2.5 2.5 0 0 1 0-5H12m0 0h4.5a2.5 2.5 0 0 1 0 5H12m0 0v8"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Python</h4>
                    <p className="text-gray-700">Core backend language for data processing and API development</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-blue-500"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M21 12a9 9 0 0 1-9 9m9-9a9 9 0 0 0-9-9m9 9H3m9 9a9 9 0 0 1-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">FastAPI</h4>
                    <p className="text-gray-700">High-performance API framework with automatic OpenAPI docs</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-blue-500"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
                      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">PostgreSQL</h4>
                    <p className="text-gray-700">Robust relational database for storing route and user data</p>
                  </div>
                </div>
              </div>
            </div>

            {/* DevOps Category */}
            <div className="bg-white rounded-xl p-8 shadow-md border border-gray-100 hover:shadow-lg transition-all">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-emerald-600"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
                    <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
                    <line x1="6" y1="6" x2="6.01" y2="6"></line>
                    <line x1="6" y1="18" x2="6.01" y2="18"></line>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold">DevOps</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-emerald-50 rounded-lg flex items-center justify-center mr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-emerald-500"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M21 2H3v16h5v4l4-4h5l4-4V2zM10 8v3m4-3v3"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Docker</h4>
                    <p className="text-gray-700">Containerization for consistent development and deployment</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-emerald-50 rounded-lg flex items-center justify-center mr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-emerald-500"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 4.5a2.5 2.5 0 0 0-4.96-.46 2.5 2.5 0 0 0-1.98 3 2.5 2.5 0 0 0-1.32 4.24 3 3 0 0 0 .34 5.58 2.5 2.5 0 0 0 2.96 3.08A2.5 2.5 0 0 0 12 19.5a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 12 4.5"></path>
                      <path d="m15.7 10.4-5.38 5.38a1 1 0 0 1-1.41 0l-2.12-2.12"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Kubernetes</h4>
                    <p className="text-gray-700">Container orchestration for scaling and high availability</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-emerald-50 rounded-lg flex items-center justify-center mr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-emerald-500"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">GitHub Actions</h4>
                    <p className="text-gray-700">CI/CD pipeline for automated testing and deployment</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Cloud Category */}
            <div className="bg-white rounded-xl p-8 shadow-md border border-gray-100 hover:shadow-lg transition-all">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-purple-600"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold">Cloud Infrastructure</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-purple-50 rounded-lg flex items-center justify-center mr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-purple-500"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Azure</h4>
                    <p className="text-gray-700">Cloud platform for hosting and scaling our application</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-purple-50 rounded-lg flex items-center justify-center mr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-purple-500"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                      <polyline points="3.29 7 12 12 20.71 7"></polyline>
                      <line x1="12" y1="22" x2="12" y2="12"></line>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Helm</h4>
                    <p className="text-gray-700">Package manager for Kubernetes to manage application deployment</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-purple-50 rounded-lg flex items-center justify-center mr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-purple-500"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                      <line x1="8" y1="21" x2="16" y2="21"></line>
                      <line x1="12" y1="17" x2="12" y2="21"></line>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Azure Monitor</h4>
                    <p className="text-gray-700">Comprehensive monitoring and analytics for application performance</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tech Stack Visualization */}
          <div className="bg-gradient-to-r from-emerald-500 to-blue-500 rounded-2xl p-8 text-white mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">Architecture Highlights</h3>
                <p className="mb-4">
                  Our distributed architecture ensures high availability and scalability, with real-time data processing
                  capabilities powered by Kafka and visualized through Grafana dashboards.
                </p>
                <p>
                  The containerized deployment using Docker and Kubernetes on Azure allows for efficient resource
                  utilization and seamless scaling to handle concurrent users.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">CI/CD Pipeline</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="w-3 h-3 bg-white rounded-full mr-2"></span>
                    Automated testing with GitHub Actions
                  </li>
                  <li className="flex items-center">
                    <span className="w-3 h-3 bg-white rounded-full mr-2"></span>
                    Containerization with Docker
                  </li>
                  <li className="flex items-center">
                    <span className="w-3 h-3 bg-white rounded-full mr-2"></span>
                    Deployment to Kubernetes with Helm
                  </li>
                  <li className="flex items-center">
                    <span className="w-3 h-3 bg-white rounded-full mr-2"></span>
                    Infrastructure as Code with Azure Resource Manager
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Tech Stack Tags */}
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { name: "React", category: "Frontend" },
              { name: "Python", category: "Backend" },
              { name: "FastAPI", category: "Backend" },
              { name: "PostgreSQL", category: "Database" },
              { name: "Kafka", category: "Data Streaming" },
              { name: "Docker", category: "Deployment" },
              { name: "Kubernetes", category: "Deployment" },
              { name: "Azure", category: "Cloud" },
              { name: "Helm", category: "Deployment" },
              { name: "GitHub Actions", category: "CI/CD" },
              { name: "Grafana", category: "Monitoring" },
              { name: "Machine Learning", category: "AI" },
            ].map((tech, index) => {
              const categoryColors = {
                Frontend: "bg-emerald-100 text-emerald-800",
                Backend: "bg-blue-100 text-blue-800",
                Database: "bg-purple-100 text-purple-800",
                "Data Streaming": "bg-yellow-100 text-yellow-800",
                Deployment: "bg-red-100 text-red-800",
                Cloud: "bg-sky-100 text-sky-800",
                "CI/CD": "bg-orange-100 text-orange-800",
                Monitoring: "bg-teal-100 text-teal-800",
                AI: "bg-indigo-100 text-indigo-800",
              }

              return (
                <div
                  key={index}
                  className={`px-4 py-2 rounded-full ${categoryColors[tech.category]} flex items-center gap-2 transition-transform hover:scale-105`}
                >
                  <span className="font-medium">{tech.name}</span>
                  <span className="text-xs opacity-70">{tech.category}</span>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Timeline Section Placeholder */}
      <section id="timeline" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Project Timeline</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">Our development roadmap to bring VoltPath to life</p>
          </div>
          <div className="flex justify-center">
            <p className="text-gray-600 text-lg">Timeline content will be displayed here</p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">The talented individuals behind VoltPath</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Eddy - Frontend Developer */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100 hover:shadow-xl transition-all hover:translate-y-[-5px] duration-300">
              <div className="aspect-square overflow-hidden relative group">
                <img
                  src="https://octodex.github.com/images/original.png"
                  alt="Eddy - Frontend Developer"
                  className="w-full h-full object-contain bg-gray-50 p-4"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 w-full">
                    <div className="flex justify-center space-x-4">
                      <a href="#" className="text-white hover:text-emerald-400 transition-colors">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                            fill="currentColor"
                          />
                        </svg>
                      </a>
                      <a href="#" className="text-white hover:text-emerald-400 transition-colors">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                            fill="currentColor"
                          />
                        </svg>
                      </a>
                      <a href="#" className="text-white hover:text-emerald-400 transition-colors">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            stroke="currentColor"
                            fill="none"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-1">Eddy</h3>
                <p className="text-emerald-500 font-medium mb-4">Frontend Developer</p>
                <p className="text-gray-700 mb-5">
                  Specializes in React and modern frontend technologies with a passion for creating intuitive user
                  interfaces. Has experience with Next.js, Tailwind CSS, and various animation libraries.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {["React", "Next.js", "Tailwind CSS", "JavaScript", "Framer Motion"].map((skill, skillIndex) => (
                    <span key={skillIndex} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Aman - Backend Developer */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100 hover:shadow-xl transition-all hover:translate-y-[-5px] duration-300">
              <div className="aspect-square overflow-hidden relative group">
                <img
                  src="https://octodex.github.com/images/hubot.jpg"
                  alt="Aman - Backend Developer"
                  className="w-full h-full object-contain bg-gray-50 p-4"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 w-full">
                    <div className="flex justify-center space-x-4">
                      <a href="#" className="text-white hover:text-emerald-400 transition-colors">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                            fill="currentColor"
                          />
                        </svg>
                      </a>
                      <a href="#" className="text-white hover:text-emerald-400 transition-colors">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                            fill="currentColor"
                          />
                        </svg>
                      </a>
                      <a href="#" className="text-white hover:text-emerald-400 transition-colors">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            stroke="currentColor"
                            fill="none"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-1">Aman</h3>
                <p className="text-blue-500 font-medium mb-4">Backend Developer</p>
                <p className="text-gray-700 mb-5">
                  Python expert with extensive experience in FastAPI and data processing. Passionate about building
                  scalable backend systems and optimizing database performance.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {["Python", "FastAPI", "PostgreSQL", "Docker", "Kubernetes"].map((skill, skillIndex) => (
                    <span key={skillIndex} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Ashu - ML Engineer */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100 hover:shadow-xl transition-all hover:translate-y-[-5px] duration-300">
              <div className="aspect-square overflow-hidden relative group">
                <img
                  src="https://octodex.github.com/images/spidertocat.png"
                  alt="Ashu - ML Engineer"
                  className="w-full h-full object-contain bg-gray-50 p-4"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 w-full">
                    <div className="flex justify-center space-x-4">
                      <a href="#" className="text-white hover:text-emerald-400 transition-colors">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                            fill="currentColor"
                          />
                        </svg>
                      </a>
                      <a href="#" className="text-white hover:text-emerald-400 transition-colors">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                            fill="currentColor"
                          />
                        </svg>
                      </a>
                      <a href="#" className="text-white hover:text-emerald-400 transition-colors">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            stroke="currentColor"
                            fill="none"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-1">Ashu</h3>
                <p className="text-purple-500 font-medium mb-4">ML Engineer</p>
                <p className="text-gray-700 mb-5">
                  Focuses on machine learning models and route optimization algorithms. Experienced in developing
                  predictive models and implementing complex algorithms for real-world applications.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {["Machine Learning", "TensorFlow", "PyTorch", "Data Science", "Algorithm Design"].map(
                    (skill, skillIndex) => (
                      <span key={skillIndex} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                        {skill}
                      </span>
                    ),
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Team Values */}
          <div className="bg-gradient-to-r from-emerald-500 to-blue-500 rounded-2xl p-8 text-white mb-16">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4">Our Values</h3>
              <p className="max-w-3xl mx-auto">
                We're driven by a shared commitment to innovation, quality, and user-centered design
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Innovation</h3>
                <p>We constantly push the boundaries of what's possible in EV navigation.</p>
              </div>
              <div className="text-center">
                <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Collaboration</h3>
                <p>We believe in the power of teamwork and diverse perspectives.</p>
              </div>
              <div className="text-center">
                <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Quality</h3>
                <p>We're committed to delivering reliable, high-performance solutions.</p>
              </div>
            </div>
          </div>

          {/* Join Us CTA */}
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Want to Join Our Team?</h2>
            <p className="text-lg text-gray-700 mb-8">
              We're always looking for talented individuals who are passionate about sustainable transportation and
              cutting-edge technology.
            </p>
            <a
              href="mailto:careers@voltpath.com"
              className="inline-block px-6 py-3 rounded-md bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 text-white transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-emerald-400"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                </svg>
                <span className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
                  VoltPath
                </span>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                Revolutionizing EV navigation with AI-powered route planning, real-time data, and personalized
                recommendations for a seamless driving experience.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#features" className="text-gray-400 hover:text-emerald-400 transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#technology" className="text-gray-400 hover:text-emerald-400 transition-colors">
                    Technology
                  </a>
                </li>
                <li>
                  <a href="#timeline" className="text-gray-400 hover:text-emerald-400 transition-colors">
                    Timeline
                  </a>
                </li>
                <li>
                  <a href="#team" className="text-gray-400 hover:text-emerald-400 transition-colors">
                    Team
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li className="text-gray-400">
                  <span className="block">Email:</span>
                  <a href="mailto:info@voltpath.com" className="hover:text-emerald-400 transition-colors">
                    info@voltpath.com
                  </a>
                </li>
                <li className="text-gray-400">
                  <span className="block">Location:</span>
                  <span>San Francisco, CA</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500">
            <p>© {new Date().getFullYear()} VoltPath. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

