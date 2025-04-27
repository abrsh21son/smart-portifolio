"use client";
import Container from "@/components/Container";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { Briefcase, Calendar, Code2, GraduationCap, User } from "lucide-react";
import { tabContent } from "@/constantData/index";

import React from "react";
import { Badge } from "@/components/ui/badge";
const tabMenu = [
  {
    title: "Experiance",
    value: "experiance",
    icon: Briefcase,
  },
  {
    title: "Education",
    value: "education",
    icon: GraduationCap,
  },
  {
    title: "Skills",
    value: "skills",
    icon: Code2,
  },
  {
    title: "About me",
    value: "about",
    icon: User,
  },
];

export default function Resume() {
  return (
    <div className="py-5 md:py-10 mt-16">
      <Container>
        <Tabs
          defaultValue="experiance"
          className="w-full flex flex-col gap-10  md:flex-row md:gap:10 "
        >
          <TabsList className=" flex md:flex-col h-full bg-transparent md:w-64 gap-4">
            {tabMenu?.map((item) => (
              <TabsTrigger
                key={item?.value}
                value={item?.value}
                className="bg-white/10 text-white py-2.5 w-full data-[state=active]:bg-lightColor hover:bg-lightColor/30 text-xs sm:text-sm"
              >
                <div className="flex items-center gap-1.5 md-w-[50%] md:gap-3">
                  <item.icon className="h-4 w-4 md:h-5 md:w-5" />
                  {item?.title}
                </div>
              </TabsTrigger>
            ))}
          </TabsList>
          <div className=" flex-1 min-h-[400px] ">
            <TabsContent value="experiance">
              <motion.h2
                className="text-2xl font-bold mb-8 text-green-400 transition-opacity duration-500 ease-in-out"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                {tabContent?.experiance.title}
              </motion.h2>
              <div className="space-y-6">
                {tabContent?.experiance.items.map((item, index) => (
                  <motion.div
                    key={index}
                    className="bg-gray-800 p-6 rounded-lg shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-105"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <div className="flex justify-start gap-5 items-center mb-4">
                      <div>
                        <h3 className="text-lg font-semibold text-white">
                          {item?.role}
                        </h3>
                        <p className="text-sm text-gray-400">{item?.campny}</p>
                      </div>
                      <div className="flex flex-col gap-1 items-center text-gray-400">
                        <Calendar />
                        <span className="ml-2">{item?.period}</span>
                      </div>
                    </div>
                    <p className="text-white">{item.description}</p>
                    <div className="mt-4 flex flex-wrap space-x-2">
                      {item?.highlights.map((highlight, i) => (
                        <Badge key={i} className="bg-gray-500 text-white">
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="education">
              <motion.h2
                className="text-2xl font-bold mb-8 text-green-400 transition-opacity duration-500 ease-in-out"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                {tabContent?.education.title}
              </motion.h2>
              <div className="space-y-6">
                {tabContent?.education.items.map((item, index) => (
                  <motion.div
                    key={index}
                    className="bg-gray-800 p-6 rounded-lg shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-105"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <div className="flex justify-start gap-5 items-center mb-4">
                      <div>
                        <h3 className="text-lg font-semibold text-white">
                          {item?.degree}
                        </h3>
                        <p className="text-sm text-gray-400">{item?.institution}</p>
                      </div>
                      <div className="flex flex-col gap-1 items-center text-gray-400">
                        <Calendar />
                        <span className="ml-2">{item?.period}</span>
                      </div>
                    </div>
                    <p className="text-white">{item.description}</p>
                    <div className="mt-4 flex flex-wrap space-x-2">
                      {item?.achivements.map((highlight, i) => (
                        <Badge key={i} className="bg-gray-500 text-white">
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="skills">
              <motion.h2
                className="text-2xl font-bold mb-8 text-green-400 transition-opacity duration-500 ease-in-out"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                {tabContent?.skills.title}
              </motion.h2>
              <div className="space-y-6">
                {tabContent?.skills.items.map((item, index) => (
                  <motion.div
                    key={index}
                    className="bg-gray-800 p-6 rounded-lg shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-105"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <div className="flex justify-start gap-5 items-center mb-4">
                     
                        <h3 className="text-lg font-semibold text-white">
                          {item?.name}
                        </h3>
                    </div>
                    <p className="text-white">{item.description}</p>
                    <div className="mt-4 flex flex-wrap space-x-2">
                      {item?.catagories?.map((skill, i) => (
                        <Badge key={i} className="bg-gray-500 text-white">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="about" className="relative overflow-hidden">
  {/* Animated background elements */}
  <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
  <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>

  <motion.h2
    className="text-3xl font-bold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400"
    initial={{ opacity: 0, y: -10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
  >
    {tabContent?.about.title}
    <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 mt-2 rounded-full"></div>
  </motion.h2>

  <div className="grid gap-8 md:grid-cols-2">
    {/* Bio Section */}
    <motion.div
      className="bg-gray-800/70 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-emerald-400/30 transition-all duration-300 shadow-lg"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
        <h3 className="text-xl font-semibold text-white">Who I Am</h3>
      </div>
      <p className="text-gray-300 mb-4">{tabContent?.about.bio}</p>
      <p className="text-gray-300">{Object.keys(tabContent?.about)[2]}</p>
    </motion.div>

    {/* Interests Section */}
    <motion.div
      className="bg-gray-800/70 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-purple-400/30 transition-all duration-300 shadow-lg"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="w-3 h-3 rounded-full bg-purple-400"></div>
        <h3 className="text-xl font-semibold text-white">My Passions</h3>
      </div>
      <div className="flex flex-wrap gap-3">
        {tabContent?.about.interests.map((interest, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Badge className="bg-gradient-to-r from-purple-600/80 to-emerald-600/80 text-white hover:shadow-purple-500/20">
              {interest}
            </Badge>
          </motion.div>
        ))}
      </div>
    </motion.div>

    {/* Languages Section */}
    <motion.div
      className="bg-gray-800/70 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-cyan-400/30 transition-all duration-300 shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="w-3 h-3 rounded-full bg-cyan-400"></div>
        <h3 className="text-xl font-semibold text-white">Languages</h3>
      </div>
      <div className="space-y-2">
        {tabContent?.about.Languages.map((language, index) => (
          <div key={index} className="flex items-center">
            <div className="w-2 h-2 rounded-full bg-cyan-400 mr-3"></div>
            <span className="text-gray-300">{language}</span>
          </div>
        ))}
      </div>
    </motion.div>

    {/* Skills Section */}
    <motion.div
      className="bg-gray-800/70 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-amber-400/30 transition-all duration-300 shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <div className="flex items-center gap-3 mb-4">
        <h3 className="text-xl font-semibold text-white">Core Skills</h3>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div className="flex items-center">
          <div className="w-2 h-2 rounded-full bg-amber-400 mr-3"></div>
          <span className="text-gray-300">Next.js</span>
        </div>
        <div className="flex items-center">
          <div className="w-2 h-2 rounded-full bg-amber-400 mr-3"></div>
          <span className="text-gray-300">React</span>
        </div>
        <div className="flex items-center">
          <div className="w-2 h-2 rounded-full bg-amber-400 mr-3"></div>
          <span className="text-gray-300">Full-Stack</span>
        </div>
        <div className="flex items-center">
          <div className="w-2 h-2 rounded-full bg-amber-400 mr-3"></div>
          <span className="text-gray-300">Responsive UI</span>
        </div>
      </div>
    </motion.div>
  </div>
</TabsContent>
          </div>
        </Tabs>
      </Container>
    </div>
  );
}
