"use client"

import { motion } from "framer-motion"
import { Button } from "./ui/button"
import { ChevronRight, Battery, MapPin, Zap } from "lucide-react"

export default function Hero() {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div
            className="md:w-1/2 md:pr-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
              <span className="bg-gradient-to-r from-emerald-500 to-blue-500 bg-clip-text text-transparent">
                Smart EV Route
              </span>{" "}
              Navigation Reimagined
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              AI-powered route planning for electric vehicles with real-time charging station data, traffic conditions,
              and weather updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 text-white">
                Get Started <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="border-emerald-500 text-emerald-500 hover:bg-emerald-50">
                Learn More
              </Button>
            </div>
          </motion.div>

          <motion.div
            className="md:w-1/2 mt-12 md:mt-0"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center z-10">
                <Battery className="h-8 w-8 text-emerald-500" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center z-10">
                <MapPin className="h-8 w-8 text-blue-500" />
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
          </motion.div>
        </div>

        <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {[
            {
              icon: <Zap className="h-6 w-6 text-emerald-500" />,
              title: "Real-time Updates",
              description: "Get live data on charging station availability and traffic conditions.",
            },
            {
              icon: <MapPin className="h-6 w-6 text-blue-500" />,
              title: "Smart Routing",
              description: "AI-powered route optimization based on your vehicle's specifications.",
            },
            {
              icon: <Battery className="h-6 w-6 text-emerald-500" />,
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
                <h3 className="ml-2 text-lg font-semibold">{item.title}</h3>
              </div>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

