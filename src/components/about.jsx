import { FaBriefcase, FaGraduationCap, FaAward } from 'react-icons/fa'

const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-white dark:bg-gray-900">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            I'm a passionate Software developer and digital marketing expert with 3+ years of experience creating impactful digital solutions.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white">Who I Am</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            I'm a creative problem solver who specializes in building modern web and mobile applications and implementing effective digital marketing strategies. My approach combines technical expertise with marketing insights to deliver solutions that not only work well but also drive business growth.
          </p>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            When I'm not coding or optimizing campaigns, you can find me exploring new technologies, contributing to open-source projects, or sharing my knowledge through blog posts and tutorials.
          </p>
          
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div>
              <p className="text-gray-600 dark:text-gray-400"><span className="font-medium text-gray-800 dark:text-white">Name:</span> Zain Tahir</p>
              <p className="text-gray-600 dark:text-gray-400"><span className="font-medium text-gray-800 dark:text-white">Email:</span> sardarzaintahir@gmail..com</p>
            </div>
            <div>
              <p className="text-gray-600 dark:text-gray-400"><span className="font-medium text-gray-800 dark:text-white">From:</span> Rawalakot Azad Kashmir </p>
              <p className="text-gray-600 dark:text-gray-400"><span className="font-medium text-gray-800 dark:text-white">Freelance:</span> Available</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <a 
              href="https://wa.link/njy4s1" 
              target="_blank"
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
      </div>
    </section>
  )
}

export default About;