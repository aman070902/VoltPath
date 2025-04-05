"use client"

import { motion } from "framer-motion"
import { Zap, Github, Twitter, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Zap className="h-8 w-8 text-emerald-400" />
              <span className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
                VoltPath
              </span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Revolutionizing EV navigation with AI-powered route planning, real-time data, and personalized
              recommendations for a seamless driving experience.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
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
                <a href="#tech" className="text-gray-400 hover:text-emerald-400 transition-colors">
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

        <motion.div
          className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <p>© {new Date().getFullYear()} VoltPath. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  )
}

