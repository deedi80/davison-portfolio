import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Send,
  MessageCircle,
} from "lucide-react";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "codojnr@yahoo.com",
      link: "mailto:codojnr@yahoo.com",
      color: "from-emerald-400 to-teal-500",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      value: "+1 289-385-0770",
      link: "tel:+12893850770",
      color: "from-blue-400 to-cyan-500",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      value: "Canada",
      link: "#",
      color: "from-purple-400 to-indigo-500",
    },
  ];

  const socialLinks = [
    {
      icon: <Github className="w-6 h-6" />,
      name: "GitHub",
      url: "#",
      color: "hover:text-gray-300",
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      name: "LinkedIn",
      url: "#",
      color: "hover:text-blue-400",
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      name: "WhatsApp",
      url: "#",
      color: "hover:text-green-400",
    },
  ];

  return (
    <section className="py-24 bg-gray-100 dark:bg-gray-900/70 text-gray-900 dark:text-white relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-400/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-400/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Let's Work Together
            </h2>
            <p className="text-gray-500 dark:text-gray-400 text-lg max-w-2xl mx-auto mb-8">
              Ready to bring your ideas to life? Let's discuss how we can
              collaborate on your next project.
            </p>
            <div className="w-16 h-1 bg-gradient-to-r from-emerald-400 to-teal-500 mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className="space-y-12">
              <div>
                <h3 className="text-2xl font-bold mb-8">Get in Touch</h3>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <a
                      key={index}
                      href={info.link}
                      className="flex items-center space-x-4 p-4 bg-gray-200 dark:bg-gray-800/40 backdrop-blur-sm border border-gray-300 dark:border-gray-700 rounded-2xl hover:border-emerald-400/50 hover:bg-gray-300/60 dark:hover:bg-gray-800/60 transition-all duration-300 group"
                    >
                      <div
                        className={`p-3 rounded-xl bg-gradient-to-r ${info.color} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
                      >
                        {info.icon}
                      </div>
                      <div>
                        <div className="text-gray-500 dark:text-gray-400 text-sm">
                          {info.title}
                        </div>
                        <div className="text-gray-900 dark:text-white font-medium">
                          {info.value}
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-lg font-semibold mb-6">Follow Me</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      className={`p-4 bg-gray-200 dark:bg-gray-800/40 backdrop-blur-sm border border-gray-300 dark:border-gray-700 rounded-xl ${social.color} transition-all duration-300 hover:border-emerald-400/50 hover:bg-gray-300/60 dark:hover:bg-gray-800/60 hover:scale-110 group`}
                      title={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>

              {/* Availability Status */}
              <div className="bg-gray-200 dark:bg-gray-800/40 backdrop-blur-sm border border-gray-300 dark:border-gray-700 rounded-2xl p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
                  <span className="text-blue-600 dark:text-blue-400 font-medium">
                    Available for Remote Work
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  Open to new freelance projects and collaborations. Reach out to explore how I can work together to achieve your goals.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-200 dark:bg-gray-800/40 backdrop-blur-sm border border-gray-300 dark:border-gray-700 rounded-3xl p-8">
              <h3 className="text-2xl font-bold mb-8">Send a Message</h3>

              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      className="w-full px-4 py-3 bg-gray-100 dark:bg-gray-900/50 border border-gray-300 dark:border-gray-600 rounded-xl text-gray-900 dark:text-white placeholder-gray-400 focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/20 transition-all duration-300"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      className="w-full px-4 py-3 bg-gray-100 dark:bg-gray-900/50 border border-gray-300 dark:border-gray-600 rounded-xl text-gray-900 dark:text-white placeholder-gray-400 focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/20 transition-all duration-300"
                      placeholder="email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    className="w-full px-4 py-3 bg-gray-100 dark:bg-gray-900/50 border border-gray-300 dark:border-gray-600 rounded-xl text-gray-900 dark:text-white placeholder-gray-400 focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/20 transition-all duration-300"
                    placeholder="Project Discussion"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={6}
                    className="w-full px-4 py-3 bg-gray-100 dark:bg-gray-900/50 border border-gray-300 dark:border-gray-600 rounded-xl text-gray-900 dark:text-white placeholder-gray-400 focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/20 transition-all duration-300 resize-none"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>

                <button className="w-full flex items-center justify-center space-x-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-medium rounded-xl hover:from-blue-600 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/25 group">
                  <Send
                    size={20}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                  <span>Send Message</span>
                </button>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-20 pt-16 border-t border-gray-300 dark:border-gray-700">
            <h3 className="text-2xl font-bold mb-4">
              Interested in Working Together?
            </h3>
            <p className="text-gray-500 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
              Let's turn your vision into reality. I specialize in crafting impactful digital solutions that captivate audiences and deliver measurable results.
            </p>
             <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-medium rounded-xl hover:from-blue-600 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/25">
                Schedule a Call
              </button>
              <button className="px-8 py-4 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-medium rounded-xl hover:border-emerald-400 hover:text-white hover:shadow-lg hover:shadow-emerald-400/10 transition-all duration-300">
                View Portfolio
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;