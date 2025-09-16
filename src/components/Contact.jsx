import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState({
    type: '', // 'success' or 'error'
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus({ type: '', message: '' });

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        type: 'error',
        message: 'Please fill in all required fields.'
      });
      setIsSubmitting(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setFormStatus({
        type: 'error',
        message: 'Please enter a valid email address.'
      });
      setIsSubmitting(false);
      return;
    }

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject || 'New Contact Form Message',
          message: formData.message
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      // Send auto-reply
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_AUTO_REPLY_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      
      setFormStatus({
        type: 'success',
        message: 'Thank you! Your message has been sent successfully. I\'ll get back to you soon.'
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Email Error:', error);
      setFormStatus({
        type: 'error',
        message: 'Sorry, there was an error sending your message. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'mdarham1749@gmail.com',
      href: 'mailto:mdarham1749@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 8274890517',
      href: 'tel:+918274890517'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Kolkata, West Bengal',
      href: '#'
    }
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/coderarham', label: 'GitHub', color: 'hover:text-gray-900 dark:hover:text-white' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/md-arham-47aa6b241/', label: 'LinkedIn', color: 'hover:text-blue-600' },
    { icon: Twitter, href: '#', label: 'Twitter', color: 'hover:text-blue-400' },
    { icon: Mail, href: 'mailto:mdarham1749@gmail.com', label: 'Email', color: 'hover:text-red-500' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Get In <span className="gradient-text">Touch</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Have a project in mind or just want to chat? I'd love to hear from you. 
              Let's create something amazing together!
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="glass-effect p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-8">
                  I'm always open to discussing data science projects, web development opportunities, 
                  or collaborating on machine learning solutions. Let's connect and build something amazing!
                </p>

                <div className="space-y-6">
                  {contactInfo.map((info) => (
                    <motion.a
                      key={info.label}
                      href={info.href}
                      whileHover={{ scale: 1.02 }}
                      className="flex items-center p-4 bg-white dark:bg-gray-800 rounded-lg hover:shadow-md transition-all duration-300 group"
                    >
                      <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mr-4 group-hover:bg-blue-200 dark:group-hover:bg-blue-900/50 transition-colors duration-300">
                        <info.icon className="text-blue-600 dark:text-blue-400" size={24} />
                      </div>
                      <div>
                        <p className="font-medium">{info.label}</p>
                        <p className="text-gray-600 dark:text-gray-400">{info.value}</p>
                      </div>
                    </motion.a>
                  ))}
                </div>

                {/* Social Links */}
                <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
                  <h4 className="font-semibold mb-4">Follow Me</h4>
                  <div className="flex space-x-4">
                    {socialLinks.map((social) => (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        target={social.href.startsWith('http') ? '_blank' : '_self'}
                        rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        className={`p-3 bg-gray-100 dark:bg-gray-800 rounded-lg text-gray-600 dark:text-gray-300 transition-colors duration-300 ${social.color}`}
                        aria-label={social.label}
                      >
                        <social.icon size={20} />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <div className="glass-effect p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-6">Send Message</h3>
                
                {/* Form Status */}
                {formStatus.message && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`mb-6 p-4 rounded-lg flex items-center gap-3 ${
                      formStatus.type === 'success'
                        ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400'
                        : 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400'
                    }`}
                  >
                    {formStatus.type === 'success' ? (
                      <CheckCircle size={20} />
                    ) : (
                      <AlertCircle size={20} />
                    )}
                    <p>{formStatus.message}</p>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300"
                        placeholder="Your Name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300"
                      placeholder="Project Discussion"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300 resize-none"
                      placeholder="Tell me about your project or just say hello!"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                    className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2 ${
                      isSubmitting
                        ? 'bg-gray-400 cursor-not-allowed'
                        : 'btn-primary'
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;