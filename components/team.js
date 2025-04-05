"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Github, Linkedin, Mail } from "lucide-react"

export default function Team() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const team = [
    {
      name: "Eddy",
      role: "Frontend Developer",
      // Using Octocat Mona as the main image
      image: "https://octodex.github.com/images/original.png",
      bio: "Specializes in React and modern frontend technologies.",
    },
    {
      name: "Aman",
      role: "Backend Developer",
      // Using Octocat Hubot as the main image
      image: "https://octodex.github.com/images/hubot.jpg",
      bio: "Python expert with experience in FastAPI and data processing.",
    },
    {
      name: "Ashu",
      role: "ML Engineer",
      // Using Octocat Spidertocat as the main image
      image: "https://octodex.github.com/images/spidertocat.png",
      bio: "Focuses on machine learning models and route optimization algorithms.",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="team" className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            Meet Our Team
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            The talented individuals behind VoltPath
          </motion.p>
        </div>

        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {team.map((member, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-all hover:translate-y-[-5px]"
              variants={itemVariants}
            >
              <div className="aspect-square overflow-hidden relative">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={`${member.name} - ${member.role}`}
                  className="w-full h-full object-contain bg-gray-50 p-4"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-emerald-500 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 mb-4">{member.bio}</p>
                <div className="flex space-x-3">
                  <a href="#" className="text-gray-400 hover:text-gray-700 transition-colors">
                    <Github className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-emerald-500 transition-colors">
                    <Mail className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

