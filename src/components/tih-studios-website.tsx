'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import Image from "next/image"
import { motion } from "framer-motion"

export function TihStudiosWebsite() {
  const [activeTab, setActiveTab] = useState("home")

  const teamMembers = [
    { name: "Alice Johnson", role: "Project Leader", bio: "5+ years of consulting experience", website: "https://alice-johnson.com" },
    { name: "Bob Smith", role: "Senior Advisor", bio: "Expert in market research and analysis", website: "https://bob-smith.com" },
    { name: "Carol Williams", role: "Consultant", bio: "Specializes in go-to-market strategies", website: "https://carol-williams.com" },
    { name: "David Brown", role: "Consultant", bio: "Data analysis and visualization expert", website: "https://david-brown.com" },
    { name: "Eva Garcia", role: "Senior Advisor", bio: "Former startup founder and mentor", website: "https://eva-garcia.com" },
    { name: "Frank Lee", role: "Consultant", bio: "Focuses on product development and UX", website: "https://frank-lee.com" },
  ]

  const strategyServices = [
    "Market Research", "Industry Overview", "Trends Analysis", "Competitive Analysis", 
    "Marketing & Sales", "Advertising Strategy", "Brand Positioning", "Sales Development", 
    "Product Development"
  ]

  const implementationServices = [
    "Operations", "Vendor Selection", "People Operations", "Supply Chain", 
    "Mergers & Acquisitions", "Due Diligence", "Contract Development", 
    "Financing & Closing", "Business Model", "Customer Segments", "Value Proposition", 
    "Distribution Channels"
  ]

  const randomWebsite = "https://example.com"

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-sans">
      {/* Navigation */}
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center bg-white px-4 py-2 rounded-md">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/TIH%20Logo%20transparent-2LJQH8rFgFKWviz8rOD7svmeGVPQ37.png"
              alt="TIH Studios Logo"
              width={40}
              height={40}
              className="mr-2"
            />
            <span className="text-xl font-bold font-display text-black">TIH Studios</span>
          </div>
          <div className="space-x-4">
            <Button variant="ghost" onClick={() => setActiveTab("home")}>Home</Button>
            <Button variant="ghost" onClick={() => setActiveTab("about")}>About</Button>
            <Button variant="ghost" onClick={() => setActiveTab("services")}>Services</Button>
            <motion.a
              href={randomWebsite}
              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-gray-200 text-black hover:bg-gray-300 h-10 px-4 py-2"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              Contact Us
            </motion.a>
          </div>
        </div>
      </nav>

      {/* Content */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsContent value="home">
          {/* Hero Section */}
          <motion.div 
            className="relative bg-gray-800 min-h-[70vh] flex flex-col justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div 
              className="absolute inset-0 bg-cover bg-center z-0" 
              style={{backgroundImage: "url('/placeholder.svg?height=1080&width=1920')"}}
            >
              <div className="absolute inset-0 bg-black opacity-50"></div>
            </div>
            <motion.div 
              className="relative z-10 text-center px-4"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl font-display mb-4">
                <span className="block xl:inline">Revolutionize Your</span>{' '}
                <span className="block xl:inline gradient-text">Business Strategy</span>
              </h1>
              <p className="mx-auto mt-3 max-w-md text-base sm:text-lg md:mt-5 md:max-w-3xl md:text-xl">
                TIH Studios: Empowering innovation through cutting-edge strategies and seamless implementation.
              </p>
              <div className="mt-8">
                <motion.a
                  href={randomWebsite}
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  Contact Us
                </motion.a>
              </div>
            </motion.div>
          </motion.div>

          {/* Key Statistics */}
          <section className="py-16 bg-gray-800">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-8">Key Statistics</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { stat: "20+", label: "Completed Projects" },
                  { stat: "12", label: "Active Consultants" },
                  { stat: "100%", label: "Satisfaction Rate" },
                  { stat: "4", label: "Executive Advisors @ Tier 1 VCs" },
                  { stat: "11", label: "Services Offered" },
                ].map((item, index) => (
                  <Card key={index} className="bg-gray-700">
                    <CardContent className="flex flex-col items-center justify-center h-full p-6">
                      <span className="text-4xl font-bold text-purple-400">{item.stat}</span>
                      <span className="text-gray-300 text-center mt-2">{item.label}</span>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Featured Past Projects */}
          <section className="py-16 bg-gray-900">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-8">Featured Past Projects</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  { name: "Sequoia Capital", description: "Venture capital strategy optimization" },
                  { name: "Citadel Securities", description: "Market making efficiency analysis" },
                  { name: "Uber Technologies", description: "Ride-sharing market expansion study" },
                  { name: "Salesforce", description: "CRM implementation strategy" },
                ].map((project, index) => (
                  <Card key={index} className="bg-gray-700">
                    <CardContent className="flex flex-col items-center justify-center h-full p-6">
                      <Image
                        src={`/placeholder.svg?height=120&width=240&text=${project.name}`}
                        alt={`${project.name} logo`}
                        width={240}
                        height={120}
                        className="mb-4"
                      />
                      <h3 className="text-xl font-semibold mb-2 text-white">{project.name}</h3>
                      <p className="text-gray-300 text-center">{project.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Testimonials */}
          <section className="py-16 bg-gray-800">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-8">Testimonials</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  { quote: "TIH Studios provided invaluable insights that transformed our go-to-market strategy.", author: "Jane Doe, CEO" },
                  { quote: "Working with TIH was a game-changer for our startup. Their expertise is unmatched.", author: "John Smith, Founder" },
                ].map((testimonial, index) => (
                  <Card key={index} className="bg-gray-700">
                    <CardContent className="p-6">
                      <p className="text-gray-300 italic mb-4">"{testimonial.quote}"</p>
                      <p className="text-right font-semibold text-white">- {testimonial.author}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        </TabsContent>

        <TabsContent value="about">
          <div className="container mx-auto px-4 py-16">
            <h1 className="text-4xl font-bold mb-8">About TIH Studios</h1>

            {/* Mission Statement */}
            <section className="mb-16">
              <h2 className="text-2xl font-semibold mb-4">Our Mission: What is TIH Studios?</h2>
              <p className="text-gray-300">
                Trust us to be a part of your mission. TIH Studios leverages UC Berkeley's wide range of research databases, 
                subject matter experts, data analysis, and the UC Berkeley name to conduct primary and secondary research.
              </p>
            </section>

            {/* Team Structure */}
            <section className="mb-16">
              <h2 className="text-2xl font-semibold mb-4">Team Structure</h2>
              <p className="text-gray-300">
                Every semester TIH Studios works on four different projects. Each project team consists of one project leader, 
                two to three senior advisors, and four to five consultants.
              </p>
            </section>

            {/* Team Members */}
            <section className="mb-16">
              <h2 className="text-2xl font-semibold mb-8">Our Team</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {teamMembers.map((member, index) => (
                  <Dialog key={index}>
                    <DialogTrigger asChild>
                      <Card className="bg-gray-700 cursor-pointer hover:bg-gray-600 transition-colors duration-200">
                        <CardContent className="p-6 flex flex-col items-center">
                          <Image
                            src={`/placeholder.svg?height=150&width=150&text=${member.name}`}
                            alt={member.name}
                            width={150}
                            height={150}
                            className="rounded-full mb-4"
                          />
                          <h3 className="text-xl font-semibold text-center text-white">{member.name}</h3>
                        </CardContent>
                      </Card>
                    </DialogTrigger>
                    <DialogContent className="bg-gray-800 text-gray-100">
                      <DialogHeader>
                        <DialogTitle className="text-white">{member.name}</DialogTitle>
                      </DialogHeader>
                      <div className="flex flex-col items-center">
                        <Image
                          src={`/placeholder.svg?height=200&width=200&text=${member.name}`}
                          alt={member.name}
                          width={200}
                          height={200}
                          className="rounded-full mb-4"
                        />
                        <p className="text-purple-400 mb-2">{member.role}</p>
                        <p className="text-gray-300 mb-4">{member.bio}</p>
                        <a href={member.website} target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:underline">
                          Visit Website
                        </a>
                      </div>
                    </DialogContent>
                  </Dialog>
                ))}
              </div>
            </section>

            {/* Past Clients */}
            <section>
              <h2 className="text-2xl font-semibold mb-8">Past Clients</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {["Sequoia Capital", "Citadel Securities", "Uber Technologies", "Salesforce"].map((client, index) => (
                  <div key={index} className="flex items-center justify-center">
                    <Image
                      src={`/placeholder.svg?height=100&width=200&text=${client}`}
                      alt={`${client} logo`}
                      width={200}
                      height={100}
                    />
                  </div>
                ))}
              </div>
            </section>
          </div>
        </TabsContent>

        <TabsContent value="services">
          <div className="container mx-auto px-4 py-16">
            <h1 className="text-4xl font-bold mb-8">Our Services</h1>

            {/* Introduction */}
            <section className="mb-16">
              <p className="text-gray-300">
                At TIH Studios, we take a comprehensive approach to each client project, leveraging our expertise 
                and UC Berkeley resources to deliver actionable insights and strategies.
              </p>
            </section>

            {/* Domains of Expertise */}
            <section className="mb-16">
              <h2 className="text-2xl font-semibold mb-8">Domains of Expertise</h2>
              
              {/* Strategy Services */}
              <h3 className="text-xl font-semibold mb-4 text-purple-400">Strategy</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
                {strategyServices.map((service, index) => (
                  <motion.div
                    key={index}
                    className="bg-gray-700 p-4 rounded-lg shadow-md cursor-pointer"
                    whileHover={{ scale: 1.05, backgroundColor: "#4B5563" }}
                    transition={{ duration: 0.2 }}
                  >
                    <h3 className="text-sm font-medium text-purple-400">{service}</h3>
                  </motion.div>
                ))}
              </div>

              {/* Implementation Services */}
              <h3 className="text-xl font-semibold mb-4 text-purple-400">Implementation</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {implementationServices.map((service, index) => (
                  <motion.div
                    key={index}
                    className="bg-gray-700 p-4 rounded-lg shadow-md cursor-pointer"
                    whileHover={{ scale: 1.05, backgroundColor: "#4B5563" }}
                    transition={{ duration: 0.2 }}
                  >
                    <h3 className="text-sm font-medium text-purple-400">{service}</h3>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Project Timeline */}
            <section className="mb-16">
              <h2 className="text-2xl font-semibold mb-8">Project Timeline</h2>
              <div className="relative">
                {[
                  { phase: "Phase 1", description: "Market research, Data collection, Creating an approach" },
                  { phase: "Phase 2", description: "Detailed analysis, Dashboards, Market sentiment" },
                  { phase: "Phase 3", description: "Presentation, Quantification, Finalization" },
                ].map((phase, index) => (
                  <div key={index} className="flex mb-8">
                    <div className="w-1/4 pr-4 text-right">
                      <h3 className="font-semibold text-purple-400">{phase.phase}</h3>
                    </div>
                    <div className="w-3/4 pl-4 border-l-2 border-purple-500">
                      <p className="text-gray-300">{phase.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Call-to-Action */}
            <section className="text-center">
              <h2 className="text-2xl font-semibold mb-4">Ready to get started?</h2>
              <motion.a
                href={randomWebsite}
                className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                Request a Consultation
              </motion.a>
            </section>
          </div>
        </TabsContent>
      </Tabs>

      {/* Footer */}
      <footer className="bg-gray-800 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-1/2 mb-6 md:mb-0">
              <h3 className="text-lg font-semibold mb-2">TIH Studios</h3>
              <p className="text-sm text-gray-400">Empowering startups with expert strategies and implementation.</p>
            </div>
            <div className="w-full md:w-1/2">
              <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
              <p className="text-sm text-gray-400">Email: marcuschua@berkeley.edu</p>
              <p className="text-sm text-gray-400">Phone: (123) 456-7890</p>
            </div>
          </div>
          <div className="mt-8 text-center text-sm text-gray-400">
            <p>&copy; {new Date().getFullYear()} TIH Studios. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=SF+Pro+Display:wght@400;600;700&family=SF+Pro+Text:wght@400;600&display=swap');

        :root {
          --font-sans: 'SF Pro Text', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
          --font-display: 'SF Pro Display', 'SF Pro Text', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
        }

        body {
          font-family: var(--font-sans);
          background-color: #111827;
          color: #F3F4F6;
        }

        .font-display {
          font-family: var(--font-display);
        }

        .gradient-text {
          background: linear-gradient(45deg, #9333EA, #C084FC, #9333EA);
          background-size: 200% 200%;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          animation: gradient 5s ease infinite;
        }

        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </div>
  )
}