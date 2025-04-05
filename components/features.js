"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Zap, Map, Cloud, BarChart, RefreshCw, UserCheck } from "lucide-react"

export default function Features() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const features = [
    {
      icon: <Map className="h-10 w-10 text-emerald-500" />,
      title: "Dynamic Route Planning",
      description:
        "Personalized route planning that adapts to real-time conditions including traffic, weather, and charging station availability.",
    },
    {
      icon: <Zap className="h-10 w-10 text-blue-500" />,
      title: "Charging Station Data",
      description:
        "Access to real-time data from multiple charging networks including PlugShare, Open Charge Map, and OpenEVSE.",
    },
    {
      icon: <Cloud className="h-10 w-10 text-emerald-500" />,
      title: "Weather Integration",
      description:
        "Incorporates weather data to optimize routes based on conditions that affect EV performance and efficiency.",
    },
    {
      icon: <BarChart className="h-10 w-10 text-blue-500" />,
      title: "Real-time Analytics",
      description:
        "Visualize your journey data with Grafana dashboards showing charging station availability and usage patterns.",
    },
    {
      icon: <RefreshCw className="h-10 w-10 text-emerald-500" />,
      title: "Continuous Updates",
      description: "Kafka-powered real-time messaging ensures you always have the latest information for your journey.",
    },
    {
      icon: <UserCheck className="h-10 w-10 text-blue-500" />,
      title: "User Preferences",
      description:
        "Customize your experience based on your vehicle characteristics, driving style, and personal preferences.",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="features" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            Key Features
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            VoltPath combines cutting-edge technology with practical features to revolutionize EV navigation
          </motion.p>
        </div>

        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all hover:translate-y-[-5px]"
              variants={itemVariants}
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

