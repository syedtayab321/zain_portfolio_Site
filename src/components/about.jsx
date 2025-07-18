import { FaBriefcase, FaGraduationCap, FaAward } from 'react-icons/fa'

const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-white dark:bg-gray-900">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            I'm a passionate full-stack developer and digital marketing expert with 5+ years of experience creating impactful digital solutions.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white">Who I Am</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              I'm a creative problem solver who specializes in building modern web applications and implementing effective digital marketing strategies. My approach combines technical expertise with marketing insights to deliver solutions that not only work well but also drive business growth.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              When I'm not coding or optimizing campaigns, you can find me exploring new technologies, contributing to open-source projects, or sharing my knowledge through blog posts and tutorials.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div>
                <p className="text-gray-600 dark:text-gray-400"><span className="font-medium text-gray-800 dark:text-white">Name:</span> Your Name</p>
                <p className="text-gray-600 dark:text-gray-400"><span className="font-medium text-gray-800 dark:text-white">Email:</span> youremail@example.com</p>
              </div>
              <div>
                <p className="text-gray-600 dark:text-gray-400"><span className="font-medium text-gray-800 dark:text-white">From:</span> Your City, Country</p>
                <p className="text-gray-600 dark:text-gray-400"><span className="font-medium text-gray-800 dark:text-white">Freelance:</span> Available</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <a 
                href="#contact" 
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition"
              >
                Contact Me
              </a>
              <a 
                href="#projects" 
                className="px-6 py-3 border border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-gray-800 rounded-lg font-medium transition"
              >
                View Projects
              </a>
            </div>
          </div>

          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white">My Experience</h3>
            
            <div className="space-y-8">
              <div className="flex">
                <div className="mr-6">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400">
                    <FaBriefcase className="text-xl" />
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-medium text-gray-800 dark:text-white mb-1">Senior Full Stack Developer</h4>
                  <p className="text-blue-600 dark:text-blue-400 mb-2">Tech Company Inc. • 2020 - Present</p>
                  <p className="text-gray-600 dark:text-gray-400">
                    Lead development team, architect web applications, implement digital marketing strategies, and optimize client acquisition funnels.
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="mr-6">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400">
                    <FaBriefcase className="text-xl" />
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-medium text-gray-800 dark:text-white mb-1">Digital Marketing Specialist</h4>
                  <p className="text-blue-600 dark:text-blue-400 mb-2">Marketing Agency • 2018 - 2020</p>
                  <p className="text-gray-600 dark:text-gray-400">
                    Managed PPC campaigns, SEO strategies, and social media marketing for multiple clients across various industries.
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="mr-6">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400">
                    <FaGraduationCap className="text-xl" />
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-medium text-gray-800 dark:text-white mb-1">Computer Science Degree</h4>
                  <p className="text-blue-600 dark:text-blue-400 mb-2">University Name • 2014 - 2018</p>
                  <p className="text-gray-600 dark:text-gray-400">
                    Specialized in software engineering and digital media, with coursework in marketing and business management.
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="mr-6">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400">
                    <FaAward className="text-xl" />
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-medium text-gray-800 dark:text-white mb-1">Certifications</h4>
                  <p className="text-blue-600 dark:text-blue-400 mb-2">Google Ads, Meta Blueprint, AWS</p>
                  <p className="text-gray-600 dark:text-gray-400">
                    Certified in multiple platforms including Google Ads, Meta Ads, and cloud technologies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About