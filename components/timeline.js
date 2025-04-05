"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { CheckCircle2, Circle } from "lucide-react"

export default function Timeline() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const timelineItems = [
    {
      week: "Week 1: 4/2 ~ 4/9",
      title: "Setup & Integration",
      tasks: [
        "Setup and integrate necessary APIs",
        "Setup PostgreSQL database",
        "Create React frontend with basic route navigation functionality",
      ],
      status: "completed",
    },
    {
      week: "Week 2: 4/10 ~ 4/14",
      title: "Core Development",
      tasks: [
        "Develop route optimization algorithm and predictive models",
        "Process and display real-time data with Kafka",
        "Implement dynamic EV route planning features (weather, traffic)",
      ],
      status: "in-progress",
    },
    {
      week: "Week 3: 4/15 ~ 4/21",
      title: "Deployment & Refinement",
      tasks: ["Deploy Kubernetes pods", "Implement Grafana with real-time visualization", "Test and refine"],
      status: "upcoming",
    },
    {
      week: "Future",
      title: "Stretch Goals",
      tasks: [
        "More personalized route planning (user preferences, vehicle characteristics)",
        "Predicting charger availability and usage",
        "Enhanced user interface and experience",
      ],
      status: "upcoming",
    },
  ]

  return (
    <section id="timeline" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            Project Timeline
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Our development roadmap to bring VoltPath to life
          </motion.p>
        </div>

        <div ref={ref} className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 transform md:translate-x-[-0.5px]"></div>

          {/* Timeline items */}
          <div className="space-y-12">
            {timelineItems.map((item, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div
                  className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
                >
                  {/* Timeline marker */}
                  <div className="absolute left-0 md:left-1/2 transform md:translate-x-[-50%] flex items-center justify-center">
                    {item.status === "completed" ? (
                      <CheckCircle2 className="h-8 w-8 text-emerald-500 bg-white rounded-full" />
                    ) : item.status === "in-progress" ? (
                      <Circle className="h-8 w-8 text-blue-500 bg-white rounded-full" />
                    ) : (
                      <Circle className="h-8 w-8 text-gray-300 bg-white rounded-full" />
                    )}
                  </div>

                  {/* Content */}
                  <div className={`md:w-1/2 pl-12 md:pl-0 ${index % 2 === 0 ? "md:pr-16" : "md:pl-16"}`}>
                    <div
                      className={`bg-white p-6 rounded-xl shadow-sm border ${
                        item.status === "completed"
                          ? "border-emerald-100"
                          : item.status === "in-progress"
                            ? "border-blue-100"
                            : "border-gray-100"
                      }`}
                    >
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-2 ${
                          item.status === "completed"
                            ? "bg-emerald-100 text-emerald-800"
                            : item.status === "in-progress"
                              ? "bg-blue-100 text-blue-800"
                              : "bg-gray-100 text-gray-800"
                        }`}
                      >
                        {item.week}
                      </span>
                      <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                      <ul className="space-y-2">
                        {item.tasks.map((task, taskIndex) => (
                          <li key={taskIndex} className="flex items-start">
                            <span className="inline-block w-1.5 h-1.5 rounded-full bg-gray-400 mt-2 mr-2"></span>
                            <span className="text-gray-600">{task}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

