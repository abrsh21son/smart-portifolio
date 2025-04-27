"use client";

import { useState } from "react";
import { FiMail, FiPhone, FiMapPin, FiSend } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import Container from "@/components/Container";
import Title from "@/components/Title";
import { Sparkles } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [hoveredField, setHoveredField] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulating a successful submission
    setTimeout(() => {
      setSubmitMessage("Message sent successfully!");
      setFormData({ name: "", phone: "", email: "", message: "" });
      setIsSubmitting(false);
      setTimeout(() => setSubmitMessage(""), 5000);
    }, 1000); // Simulate a delay for demonstration purposes
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-darkColor/90 via-darkColor to-black/90 py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              x: [0, 100, 0],
              y: [0, 50, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 15 + Math.random() * 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute text-green-400/30"
            style={{
              fontSize: `${Math.random() * 20 + 10}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          >
            ✦
          </motion.div>
        ))}
      </div>

      <Container>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center mb-16"
        >
          <Title>
            <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-purple-500">
              Let&apos;s Work Together
            </span>
          </Title>
          <motion.p
            className="text-xl text-lightColor/80 max-w-3xl mx-auto mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            I&apos;m passionate about creating exceptional digital experiences.
            Whether you have a project in mind or just want to chat about
            possibilities, I&apos;d love to hear from you.
          </motion.p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 relative z-10">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:w-1/2"
          >
            <div className="relative overflow-hidden rounded-2xl p-8 border border-lightColor/20 bg-gradient-to-br from-lightColor/5 to-lightColor/10 backdrop-blur-lg shadow-xl">
              <AnimatePresence>
                {hoveredField && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.3 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 overflow-hidden"
                  >
                    {[...Array(8)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{
                          x: Math.random() * 100 - 50,
                          y: Math.random() * 100 - 50,
                          scale: 0,
                        }}
                        animate={{
                          x: Math.random() * 200 - 100,
                          y: Math.random() * 200 - 100,
                          scale: Math.random() * 0.5 + 0.5,
                          opacity: [0, 1, 0],
                        }}
                        transition={{
                          duration: Math.random() * 3 + 2,
                          repeat: Infinity,
                          repeatType: "reverse",
                        }}
                        className="absolute text-green-400"
                        style={{
                          fontSize: `${Math.random() * 10 + 5}px`,
                          left: `${Math.random() * 100}%`,
                          top: `${Math.random() * 100}%`,
                        }}
                      >
                        <Sparkles size={16} />
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-lightColor/70 mb-2"
                  >
                    Full Name
                  </label>
                  <motion.div
                    onHoverStart={() => setHoveredField("name")}
                    onHoverEnd={() => setHoveredField(null)}
                  >
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="enter name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-darkColor/50 border border-gray-600/20 rounded-lg text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400/50 focus:border-transparent"
                    />
                  </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-lightColor/70 mb-2"
                    >
                      Phone Number
                    </label>
                    <motion.div
                      onHoverStart={() => setHoveredField("phone")}
                      onHoverEnd={() => setHoveredField(null)}
                    >
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Enter phone number"
                        id="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-darkColor/50 border border-gray-600/20 rounded-lg text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400/50 focus:border-transparent"
                      />
                    </motion.div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-lightColor/70 mb-2"
                    >
                      Email Address
                    </label>
                    <motion.div
                      onHoverStart={() => setHoveredField("email")}
                      onHoverEnd={() => setHoveredField(null)}
                    >
                      <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="enter email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-darkColor/50 border border-gray-600/20 rounded-lg text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400/50 focus:border-transparent"
                      />
                    </motion.div>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-lightColor/70 mb-2"
                  >
                    Your Message
                  </label>
                  <motion.div
                    onHoverStart={() => setHoveredField("message")}
                    onHoverEnd={() => setHoveredField(null)}
                  >
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-darkColor/50 border border-gray-600/20 rounded-lg text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400/50 focus:border-transparent"
                      placeholder="Write your message here..."
                    />
                  </motion.div>
                </div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex justify-center items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold shadow-lg shadow-green-500/20 hover:shadow-green-500/30 transition-all duration-300"
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <FiSend className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </button>
                </motion.div>

                {submitMessage && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`text-center text-sm ${submitMessage.includes("success") ? "text-green-400" : "text-red-400"}`}
                  >
                    {submitMessage}
                  </motion.p>
                )}
              </form>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:w-1/2"
          >
            <div className="relative overflow-hidden rounded-2xl p-8 border border-lightColor/20 bg-gradient-to-br from-lightColor/5 to-lightColor/10 backdrop-blur-lg shadow-xl h-full">
              <AnimatePresence>
                {hoveredField === "contact" && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.3 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 overflow-hidden"
                  >
                    {[...Array(8)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{
                          x: Math.random() * 100 - 50,
                          y: Math.random() * 100 - 50,
                          scale: 0,
                        }}
                        animate={{
                          x: Math.random() * 200 - 100,
                          y: Math.random() * 200 - 100,
                          scale: Math.random() * 0.5 + 0.5,
                          opacity: [0, 1, 0],
                        }}
                        transition={{
                          duration: Math.random() * 3 + 2,
                          repeat: Infinity,
                          repeatType: "reverse",
                        }}
                        className="absolute text-purple-400"
                        style={{
                          fontSize: `${Math.random() * 10 + 5}px`,
                          left: `${Math.random() * 100}%`,
                          top: `${Math.random() * 100}%`,
                        }}
                      >
                        <Sparkles size={16} />
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>

              <div
                className="relative z-10 h-full flex flex-col"
                onMouseEnter={() => setHoveredField("contact")}
                onMouseLeave={() => setHoveredField(null)}
              >
                <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500 mb-8">
                  Contact Information
                </h2>

                <div className="space-y-8">
                  <motion.div
                    className="flex items-start group"
                    whileHover={{ x: 5 }}
                  >
                    <div className="flex-shrink-0 bg-gradient-to-br from-green-400 to-emerald-500 p-3 rounded-full shadow-lg shadow-green-400/20">
                      <FiMail className="h-6 w-6 text-white" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-sm font-medium text-lightColor/70">
                        Email
                      </h3>
                      <a
                        href="mailto:your.email@example.com"
                        className="text-lg text-lightColor hover:text-green-400 transition-colors"
                      >
                        abrshtoday@gmail.com
                      </a>
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex items-start group"
                    whileHover={{ x: 5 }}
                  >
                    <div className="flex-shrink-0 bg-gradient-to-br from-green-400 to-emerald-500 p-3 rounded-full shadow-lg shadow-green-400/20">
                      <FiPhone className="h-6 w-6 text-white" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-sm font-medium text-lightColor/70">
                        Phone
                      </h3>
                      <a
                        href="tel:+251985486416"
                        className="text-lg text-lightColor hover:text-green-400 transition-colors"
                      >
                        +251985486416
                      </a>
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex items-start group"
                    whileHover={{ x: 5 }}
                  >
                    <div className="flex-shrink-0 bg-gradient-to-br from-green-400 to-emerald-500 p-3 rounded-full shadow-lg shadow-green-400/20">
                      <FiMapPin className="h-6 w-6 text-white" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-sm font-medium text-lightColor/70">
                        Address
                      </h3>
                      <p className="text-lg text-lightColor">
                        Addis Ababa, Ethiopia
                        <br />
                        Lemikura
                      </p>
                    </div>
                  </motion.div>
                </div>

                <div className="mt-auto pt-8 border-t border-lightColor/20">
                  <h3 className="text-lg font-medium text-lightColor mb-4">
                    Availability
                  </h3>
                  <p className="text-lightColor/80">
                    I&apos;m available Monday through Friday from 9am to 5pm.
                    Feel free to reach out anytime, and I&apos;ll get back to
                    you within 24 hours.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </div>
  );
}