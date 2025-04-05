import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link href="#" className="flex items-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-emerald-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                </svg>
                <span className="text-xl font-bold bg-gradient-to-r from-emerald-500 to-blue-500 bg-clip-text text-transparent">
                  VoltPath
                </span>
              </Link>
            </div>
            
            <nav className="hidden md:block">
              <ul className="flex space-x-8">
                {['Home', 'Features', 'Technology', 'Timeline', 'Team'].map((link) => (
                  <li key={link}>
                    <Link 
                      href={`#${link.toLowerCase()}`}
                      className="text-gray-700 hover:text-emerald-500 transition-colors relative group"
                    >
                      {link}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-500 transition-all group-hover:w-full"></span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            
            <div className="hidden md:block">
              <button className="px-4 py-2 rounded-md bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 text-white transition-colors">
                Get Started
              </button>
            </div>
            
            <div className="md:hidden">
              <button className="text-gray-700 hover:text-emerald-500 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
                </span>{' '}
                <span className="text-gray-800">Navigation Reimagined</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                AI-powered route planning for electric vehicles with real-time charging station data, 
                traffic conditions, and weather updates.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-4 py-2 rounded-md bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 text-white transition-colors">
                  Get Started
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 inline" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
                <div className="absolute -top-6 -left-6 w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-emerald-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 2v11m0 0a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-6a2 2 0 0 0-2 2v4zm0 7v3m10-10v10"></path>
                  </svg>
                </div>
                <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                  <div className="p-1">
                    <img 
                      src="/placeholder.svg?height=400&width=600" 
                      alt="EV Route Navigation" 
                      className="w-full h-auto rounded-xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-emerald-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                  </svg>
                ),
                title: "Real-time Updates",
                description: "Get live data on charging station availability and traffic conditions."
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                ),
                title: "Smart Routing",
                description: "AI-powered route optimization based on your vehicle's specifications."
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-emerald-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 2v11m0 0a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-6a2 2 0 0 0-2 2v4zm0 7v3m10-10v10"></path>
                  </svg>
                ),
                title: "Battery Management",
                description: "Optimize your journey with intelligent battery usage predictions."
              }
            ].map((item, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center mb-4">
                  {item.icon}
                  <h3 className="ml-2 text-lg font-semibold">{item.title}</h3>
                </div>
                <p className="text-gray-600">{item.description}</p>
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
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              VoltPath combines cutting-edge technology with practical features to revolutionize EV navigation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-emerald-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="3" y1="9" x2="21" y2="9"></line>
                    <line x1="9" y1="21" x2="9" y2="9"></line>
                  </svg>
                ),
                title: "Dynamic Route Planning",
                description: "Personalized route planning that adapts to real-time conditions including traffic, weather, and charging station availability."
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                  </svg>
                ),
                title: "Charging Station Data",
                description: "Access to real-time data from multiple charging networks including PlugShare, Open Charge Map, and OpenEVSE."
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-emerald-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path>
                  </svg>
                ),
                title: "Weather Integration",
                description: "Incorporates weather data to optimize routes based on conditions that affect EV performance and efficiency."
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all hover:translate-y-[-5px]"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                </svg>
                <span className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
                  VoltPath
                </span>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                Revolutionizing EV navigation with AI-powered route planning, real-time data, 
                and personalized recommendations for a seamless driving experience.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">Home</a>
                </li>
                <li>
                  <a href="#features" className="text-gray-400 hover:text-emerald-400 transition-colors">Features</a>
                </li>
                <li>
                  <a href="#technology" className="text-gray-400 hover:text-emerald-400 transition-colors">Technology</a>
                </li>
                <li>
                  <a href="#timeline" className="text-gray-400 hover:text-emerald-400 transition-colors">Timeline</a>
                </li>
                <li>
                  <a href="#team" className="text-gray-400 hover:text-emerald-400 transition-colors">Team</a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li className="text-gray-400">
                  <span className="block">Email:</span>
                  <a href="mailto:info@voltpath.com" className="hover:text-emerald-400 transition-colors">info@voltpath.com</a>
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
