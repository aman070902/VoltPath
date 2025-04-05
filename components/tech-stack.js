"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function TechStack() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const technologies = [
    { name: "React", category: "Frontend" },
    { name: "Python", category: "Backend" },
    { name: "FastAPI", category: "Backend" },
    { name: "PostgreSQL", category: "Database" },
    { name: "Kafka", category: "Data Streaming" },
    { name: "Docker", category: "Deployment" },
    { name: "Kubernetes", category: "Deployment" },
    { name: "Azure", category: "Cloud" },
    { name: "Helm", category: "Deployment" },
    { name: "Github Actions", category: "CI/CD" },
    { name: "Grafana", category: "Monitoring" },
    { name: "Machine Learning", category: "AI" },
  ]

  const categories = [
    { name: "Frontend", color: "bg-emerald-100 text-emerald-800" },
    { name: "Backend", color: "bg-blue-100 text-blue-800" },
    { name: "Database", color: "bg-purple-100 text-purple-800" },
    { name: "Data Streaming", color: "bg-yellow-100 text-yellow-800" },
    { name: "Deployment", color: "bg-red-100 text-red-800" },
    { name: "Cloud", color: "bg-sky-100 text-sky-800" },
    { name: "CI/CD", color: "bg-orange-100 text-orange-800" },
    { name: "Monitoring", color: "bg-teal-100 text-teal-800" },
    { name: "AI", color: "bg-indigo-100 text-indigo-800" },
  ]

  const getCategoryColor = (category) => {
    const found = categories.find((c) => c.name === category)
    return found ? found.color : "bg-gray-100 text-gray-800"
  }

  return (
    <section id="tech" className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            Our Technology Stack
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Powered by modern technologies to deliver a seamless and reliable experience
          </motion.p>
        </div>

        <motion.div
          ref={ref}
          className="flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              className={`px-4 py-2 rounded-full ${getCategoryColor(tech.category)} flex items-center gap-2 transition-transform hover:scale-105`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3, delay: 0.1 * index }}
            >
              <span className="font-medium">{tech.name}</span>
              <span className="text-xs opacity-70">{tech.category}</span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-2xl p-8 text-white"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">API Integrations</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-white rounded-full mr-2"></span>
                  Charging Stations: PlugShare, Open Charge Map
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-white rounded-full mr-2"></span>
                  Geolocation: Google Maps
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-white rounded-full mr-2"></span>
                  Traffic: Google Traffic, Mapbox, TomTom
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-white rounded-full mr-2"></span>
                  Weather: OpenWeather, Weatherstack
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Architecture Highlights</h3>
              <p className="mb-4">
                Our distributed architecture ensures high availability and scalability, with real-time data processing
                capabilities powered by Kafka and visualized through Grafana dashboards.
              </p>
              <p>
                The containerized deployment using Docker and Kubernetes allows for efficient resource utilization and
                seamless scaling to handle concurrent users.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

