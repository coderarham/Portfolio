import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Palette, Zap, Users, Award, Coffee, Database, Globe, Server, GitBranch, Smartphone, Monitor, Layers, Terminal } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const skills = [
    { name: 'JavaScript', level: 90, color: 'bg-yellow-500' },
    { name: 'React.js', level: 88, color: 'bg-blue-500' },
    { name: 'Python', level: 85, color: 'bg-green-500' },
    { name: 'Java', level: 82, color: 'bg-red-500' },
    { name: 'SQL/MySQL', level: 87, color: 'bg-purple-500' },
    { name: 'Express.js', level: 80, color: 'bg-green-600' }
  ];

  // Tech Stack Logo Components
  const TechLogos = {
    JavaScript: () => (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#F7DF1E"/>
        <path d="M7.5 12.5v3c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5v-3m3 0v2c0 1.1.9 2 2 2s2-.9 2-2v-1" stroke="#000" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    Python: () => (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M12 2C8.5 2 7 3.5 7 6v2h5v1H6c-1.5 0-3 1-3 3v4c0 1.5 1.5 3 3 3h2v-2c0-1.5 1.5-3 3-3h6c1.5 0 3-1.5 3-3V6c0-2.5-1.5-4-5-4h-3z" fill="#3776AB"/>
        <circle cx="9" cy="5" r="1" fill="white"/>
      </svg>
    ),
    Java: () => (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M8.5 18c0 1.5 2.5 2 4.5 2s4.5-.5 4.5-2c0-.8-1-1.5-2.5-1.8" stroke="#ED8B00" strokeWidth="2" strokeLinecap="round"/>
        <path d="M7 15c0 1.5 3 2.5 5 2.5s5-1 5-2.5" stroke="#ED8B00" strokeWidth="2" strokeLinecap="round"/>
        <path d="M12 4c-2 0-4 2-4 4v4c0 2 2 4 4 4s4-2 4-4V8c0-2-2-4-4-4z" fill="#ED8B00"/>
      </svg>
    ),
    C: () => (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="8" fill="#A8B9CC" stroke="#00599C" strokeWidth="2"/>
        <path d="M8 12c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4" stroke="#00599C" strokeWidth="2" fill="none"/>
      </svg>
    ),
    HTML: () => (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M3 2l1.5 18L12 22l7.5-2L21 2H3z" fill="#E34F26"/>
        <path d="M12 4v16l5.5-1.5L18.5 4H12z" fill="#FF5722"/>
        <path d="M6 8h12l-.5 6-5.5 1.5L6.5 14L6 8z" fill="white"/>
      </svg>
    ),
    CSS: () => (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M3 2l1.5 18L12 22l7.5-2L21 2H3z" fill="#1572B6"/>
        <path d="M12 4v16l5.5-1.5L18.5 4H12z" fill="#33A9DC"/>
        <path d="M6 8h12l-.5 6-5.5 1.5L6.5 14L6 8z" fill="white"/>
      </svg>
    ),
    React: () => (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="2" fill="#61DAFB"/>
        <ellipse cx="12" cy="12" rx="8" ry="3" stroke="#61DAFB" strokeWidth="1.5" fill="none"/>
        <ellipse cx="12" cy="12" rx="8" ry="3" stroke="#61DAFB" strokeWidth="1.5" fill="none" transform="rotate(60 12 12)"/>
        <ellipse cx="12" cy="12" rx="8" ry="3" stroke="#61DAFB" strokeWidth="1.5" fill="none" transform="rotate(-60 12 12)"/>
      </svg>
    ),
    Tailwind: () => (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35C13.45 10.9 14.93 12 18 12c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.31-.74-1.91-1.35C16.55 7.1 15.07 6 12 6z" fill="#06B6D4"/>
        <path d="M6 12c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35C7.45 16.9 8.93 18 12 18c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.31-.74-1.91-1.35C10.55 13.1 9.07 12 6 12z" fill="#06B6D4"/>
      </svg>
    ),
    Redux: () => (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="2" fill="#764ABC"/>
        <path d="M12 1C5.9 1 1 5.9 1 12s4.9 11 11 11 11-4.9 11-11S18.1 1 12 1zm0 18c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7z" fill="#764ABC"/>
      </svg>
    ),
    Node: () => (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L2 7v10l10 5 10-5V7l-10-5z" fill="#339933"/>
        <path d="M12 2v20" stroke="#66BB6A" strokeWidth="1"/>
      </svg>
    ),
    Express: () => (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M2 12h20M2 8l8 4-8 4M22 8l-8 4 8 4" stroke="#000" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    MySQL: () => (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M16.5 12c0 2.5-2 4.5-4.5 4.5S7.5 14.5 7.5 12s2-4.5 4.5-4.5 4.5 2 4.5 4.5z" fill="#4479A1"/>
        <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z" stroke="#4479A1" strokeWidth="2" fill="none"/>
      </svg>
    ),
    Git: () => (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M21.5 11.5L12.5 2.5c-.6-.6-1.4-.6-2 0L2.5 11.5c-.6.6-.6 1.4 0 2l8 8c.6.6 1.4.6 2 0l9-9c.6-.6.6-1.4 0-2z" fill="#F05032"/>
        <circle cx="12" cy="12" r="3" fill="white"/>
      </svg>
    ),
    GitHub: () => (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M12 2C6.5 2 2 6.5 2 12c0 4.4 2.9 8.2 6.9 9.5.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.4-3.4-1.4-.5-1.2-1.2-1.5-1.2-1.5-.9-.6.1-.6.1-.6 1 .1 1.6 1.1 1.6 1.1.9 1.5 2.3 1.1 2.9.8.1-.6.4-1.1.7-1.3-2.2-.3-4.5-1.1-4.5-4.9 0-1.1.4-2 1-2.7-.1-.2-.4-1.2.1-2.5 0 0 .8-.3 2.7 1 .8-.2 1.6-.3 2.4-.3s1.6.1 2.4.3c1.9-1.3 2.7-1 2.7-1 .5 1.3.2 2.3.1 2.5.6.7 1 1.6 1 2.7 0 3.8-2.3 4.6-4.5 4.9.4.3.7.9.7 1.8v2.7c0 .3.2.6.7.5C19.1 20.2 22 16.4 22 12c0-5.5-4.5-10-10-10z" fill="currentColor"/>
      </svg>
    )
  };

  const techStack = [
    { 
      category: 'Languages', 
      icon: Code,
      color: 'text-blue-500',
      techs: [
        { name: 'JavaScript', logo: TechLogos.JavaScript, color: 'bg-yellow-50 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400 border-yellow-200 dark:border-yellow-800' },
        { name: 'Python', logo: TechLogos.Python, color: 'bg-blue-50 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400 border-blue-200 dark:border-blue-800' },
        { name: 'Java', logo: TechLogos.Java, color: 'bg-orange-50 text-orange-800 dark:bg-orange-900/20 dark:text-orange-400 border-orange-200 dark:border-orange-800' },
        { name: 'C', logo: TechLogos.C, color: 'bg-gray-50 text-gray-800 dark:bg-gray-800/20 dark:text-gray-400 border-gray-200 dark:border-gray-700' },
        { name: 'HTML', logo: TechLogos.HTML, color: 'bg-red-50 text-red-800 dark:bg-red-900/20 dark:text-red-400 border-red-200 dark:border-red-800' },
        { name: 'CSS', logo: TechLogos.CSS, color: 'bg-blue-50 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400 border-blue-200 dark:border-blue-800' },
        { name: 'SQL', logo: Database, color: 'bg-indigo-50 text-indigo-800 dark:bg-indigo-900/20 dark:text-indigo-400 border-indigo-200 dark:border-indigo-800' }
      ]
    },
    { 
      category: 'Frontend', 
      icon: Monitor,
      color: 'text-purple-500',
      techs: [
        { name: 'React.js', logo: TechLogos.React, color: 'bg-cyan-50 text-cyan-800 dark:bg-cyan-900/20 dark:text-cyan-400 border-cyan-200 dark:border-cyan-800' },
        { name: 'Tailwind CSS', logo: TechLogos.Tailwind, color: 'bg-teal-50 text-teal-800 dark:bg-teal-900/20 dark:text-teal-400 border-teal-200 dark:border-teal-800' },
        { name: 'Redux Toolkit', logo: TechLogos.Redux, color: 'bg-purple-50 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400 border-purple-200 dark:border-purple-800' },
        { name: 'HTML', logo: TechLogos.HTML, color: 'bg-red-50 text-red-800 dark:bg-red-900/20 dark:text-red-400 border-red-200 dark:border-red-800' },
        { name: 'CSS', logo: TechLogos.CSS, color: 'bg-blue-50 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400 border-blue-200 dark:border-blue-800' }
      ]
    },
    { 
      category: 'Backend', 
      icon: Server,
      color: 'text-green-500',
      techs: [
        { name: 'Express.js', logo: TechLogos.Express, color: 'bg-gray-50 text-gray-800 dark:bg-gray-800/20 dark:text-gray-300 border-gray-200 dark:border-gray-700' },
        { name: 'Node.js', logo: TechLogos.Node, color: 'bg-green-50 text-green-800 dark:bg-green-900/20 dark:text-green-400 border-green-200 dark:border-green-800' },
        { name: 'MySQL', logo: TechLogos.MySQL, color: 'bg-blue-50 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400 border-blue-200 dark:border-blue-800' }
      ]
    },
    { 
      category: 'Tools & Others', 
      icon: Terminal,
      color: 'text-orange-500',
      techs: [
        { name: 'Git', logo: TechLogos.Git, color: 'bg-red-50 text-red-800 dark:bg-red-900/20 dark:text-red-400 border-red-200 dark:border-red-800' },
        { name: 'GitHub', logo: TechLogos.GitHub, color: 'bg-gray-50 text-gray-800 dark:bg-gray-800/20 dark:text-gray-300 border-gray-200 dark:border-gray-700' }
      ]
    }
  ];

  const stats = [
    { icon: Code, label: 'Projects Completed', value: '25+' },
    { icon: Users, label: 'Datasets Analyzed', value: '100+' },
    { icon: Award, label: 'ML Models Built', value: '15+' },
    { icon: Coffee, label: 'Cups of Coffee', value: '500+' }
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
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800/50">
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
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Data Science student and Full-Stack developer passionate about leveraging data and technology to create impactful solutions
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* About Content */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="glass-effect p-8 rounded-2xl">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mr-4">
                    <Palette className="text-white" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold">My Story</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                  I'm a Data Science student and passionate full-stack developer who bridges the gap between 
                  data insights and web applications. My journey combines statistical analysis, machine learning, 
                  and modern web development to create intelligent, data-driven solutions.
                </p>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  I specialize in Python for data analysis, React for frontend development, and Node.js for backend services. 
                  When I'm not analyzing datasets or building applications, you'll find me exploring new ML algorithms, 
                  contributing to open-source projects, or working on data visualization dashboards.
                </p>
              </div>

              <div className="glass-effect p-8 rounded-2xl">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mr-4">
                    <Zap className="text-white" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold">What I Do</h3>
                </div>
                <ul className="space-y-3 text-gray-600 dark:text-gray-400">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    Full-Stack Web Development
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                    Data Science & Analytics
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    Database Design & Management
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                    API Development & Integration
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Skills & Tech Stack */}
            <motion.div variants={itemVariants} className="space-y-6">
              {/* Technical Skills */}
              <div className="glass-effect p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-6">Technical Skills</h3>
                <div className="space-y-4">
                  {skills.map((skill, index) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-gray-600 dark:text-gray-400">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                          className={`h-2 rounded-full ${skill.color}`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div className="glass-effect p-8 rounded-2xl">
                <motion.h3 
                  className="text-2xl font-bold mb-6 flex items-center gap-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.6 }}
                >
                  <Layers className="text-blue-500" size={28} />
                  Tech Stack
                </motion.h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {techStack.map((stack, index) => (
                    <motion.div
                      key={stack.category}
                      initial={{ opacity: 0, y: 30, scale: 0.9 }}
                      animate={inView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.9 }}
                      transition={{ duration: 0.6, delay: index * 0.15 }}
                      whileHover={{ scale: 1.02 }}
                      className="bg-white/50 dark:bg-gray-800/50 p-4 rounded-xl border border-gray-200/50 dark:border-gray-700/50 hover:shadow-lg transition-all duration-300"
                    >
                      <motion.h4 
                        className={`font-semibold text-lg mb-4 flex items-center gap-2 ${stack.color}`}
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <motion.div
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.5 }}
                        >
                          <stack.icon size={20} />
                        </motion.div>
                        {stack.category}
                      </motion.h4>
                      <div className="flex flex-wrap gap-3">
                        {stack.techs.map((tech, techIndex) => (
                          <motion.div
                            key={tech.name}
                            initial={{ opacity: 0, scale: 0, rotateY: -180 }}
                            animate={inView ? { opacity: 1, scale: 1, rotateY: 0 } : { opacity: 0, scale: 0, rotateY: -180 }}
                            transition={{ 
                              duration: 0.6, 
                              delay: (index * 0.2) + (techIndex * 0.1),
                              type: "spring",
                              stiffness: 150
                            }}
                            whileHover={{ 
                              scale: 1.15, 
                              y: -5,
                              rotateY: 10,
                              boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
                              transition: { duration: 0.2 }
                            }}
                            whileTap={{ scale: 0.9 }}
                            className={`px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-300 flex items-center gap-3 cursor-pointer border-2 backdrop-blur-sm ${tech.color} hover:shadow-lg group`}
                          >
                            <motion.div
                              whileHover={{ 
                                rotate: [0, -10, 10, -10, 0],
                                scale: 1.2
                              }}
                              transition={{ duration: 0.5 }}
                              className="flex-shrink-0"
                            >
                              {tech.logo ? <tech.logo /> : <tech.icon size={20} />}
                            </motion.div>
                            <span className="group-hover:font-bold transition-all duration-200">{tech.name}</span>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div variants={itemVariants}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 50, rotateY: -90 }}
                  animate={inView ? { opacity: 1, y: 0, rotateY: 0 } : { opacity: 0, y: 50, rotateY: -90 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: index * 0.2,
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -10,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
                  }}
                  className="glass-effect p-6 rounded-2xl text-center group cursor-pointer"
                >
                  <motion.div 
                    className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4"
                    whileHover={{ 
                      rotate: [0, -10, 10, -10, 0],
                      scale: 1.1
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <stat.icon className="text-white group-hover:animate-pulse" size={24} />
                  </motion.div>
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={inView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: (index * 0.2) + 0.3,
                      type: "spring",
                      stiffness: 200
                    }}
                    className="text-2xl font-bold gradient-text mb-2"
                  >
                    {stat.value}
                  </motion.div>
                  <motion.p 
                    className="text-gray-600 dark:text-gray-400 text-sm"
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: (index * 0.2) + 0.5 }}
                  >
                    {stat.label}
                  </motion.p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;