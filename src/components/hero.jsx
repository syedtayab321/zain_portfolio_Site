import { useEffect } from 'react'
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { FiDownload } from 'react-icons/fi'
import personalImage from './../assets/images/personal.jpeg';

const Hero = () => {
  useEffect(() => {
    const elements = document.querySelectorAll('.animate-fade-in')
    elements.forEach((el, index) => {
      el.style.animationDelay = `${index * 0.1}s`
    })
  }, [])

  return (
    <section id="home" className="pt-32 pb-20 px-4 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-800 dark:text-white">
              Hi, I'm <span className="text-blue-600 dark:text-blue-400">Zain Tahir</span>
            </h1>
            <h2 className="text-2xl md:text-3xl mb-6 text-gray-600 dark:text-gray-300">
              Software Developer & Digital Marketer
            </h2>
            <p className="text-lg mb-8 text-gray-600 dark:text-gray-400 max-w-lg">
              I build exceptional digital experiences and help businesses grow through innovative web solutions and strategic digital marketing.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#contact" 
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition shadow-lg hover:shadow-blue-500/30"
              >
                Hire Me
              </a>
              <a 
                href="/resume.pdf" 
                download 
                className="px-6 py-3 border border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-gray-800 rounded-lg font-medium transition flex items-center gap-2"
              >
                Download CV <FiDownload />
              </a>
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center animate-fade-in delay-100">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-blue-500 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl">
                {/* Replace with your actual image */}
                <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                  {/* <span className="text-gray-500">Your Photo</span> */}
                  <img src={personalImage} />
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                  <span className="text-sm font-medium">Available for work</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 animate-fade-in delay-200">
          <div className="flex justify-center space-x-6">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition text-2xl">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition text-2xl">
              <FaLinkedin />
            </a>
            <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition text-2xl">
              <FaTwitter />
            </a>
            <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition text-2xl">
              <FaInstagram />
            </a>
            <a href="mailto:youremail@example.com" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition text-2xl">
              <HiOutlineMail />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero