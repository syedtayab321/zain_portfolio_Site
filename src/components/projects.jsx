import { useState } from 'react'
import { FiExternalLink,} from 'react-icons/fi'
import ecommerceImage from '../assets/projects/ecommerce.png'
import invoiceImage from '../assets/projects/invoice.png'
import smartBazarImage from '../assets/projects/smart-bazar.png'
import glamlustImage from '../assets/projects/makeup.png'
import hotelbookingImage from '../assets/projects/hotel-booking.png';
import CarWashImage from '../assets/projects/carwash.png';
import graphic1 from './../assets/projects/graphic1.jpeg';
import graphic2 from './../assets/projects/graphic2.jpeg';
import graphic3 from './../assets/projects/graphic3.jpeg';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('all')

  const projects = [
    {
      id: 1,
      title: 'Smart Bazar - Ecommerce Site',
      description: 'Complete Ecommerce solution with admin panel for transforming business into digital Market .',
      tags: ['React', 'Node.js', 'MongoDB',],
      category: 'web',
      image: smartBazarImage,
      links: {
        live: 'https://thesmartbazaar.com/',
      }
    },
    {
      id: 2,
      title: 'GlamLust - Makeup Selling Site',
      description: 'Website which is Developed to sell makeup products online.',
      tags: ['Wordpress',],
      category: 'web',
      image: glamlustImage,
      links: {
        live: 'https://glamlust.shop/',
      }
    },
    {
      id: 3,
      title: 'E-commerce Platform',
      description: 'Full-featured online store with payment integration, inventory management, and admin dashboard.',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      category: 'app',
      image: ecommerceImage,
      links: {
        live: 'https://ecommerce-admin-snowy-zeta.vercel.app/dashboard',
      }
    },
    {
      id: 4,
      title: 'Invoice Generator App',
      description: 'Business solution for creating, managing, and sending professional invoices to clients.',
      tags: ['Flutter', 'Firebase', 'PDF Generation'],
      category: 'app',
      image: invoiceImage,
      links: {
        demo: 'https://drive.google.com/file/d/xyz',
      }
    },
    {
      id: 5,
      title: 'Carh Wash Website',
      description: 'Complete website for a car wash company to manage all order and offer services through online portal',
      tags: ['Nextjs', 'Nodejs', 'PostgreSQL'],
      category: 'web',
      image: CarWashImage,
      links: {
        portfolio: 'https://fusion-x-carwash.vercel.app/'
      }
    },
    {
      id: 6,
      title: 'Hotel Booking Website',
      description: 'Modern Hotel Booking website for a makinh booking hotel easy for the customer and make business digital.',
      tags: ['Wordpress','elementor'],
      category: 'web',
      image: hotelbookingImage,
      links: {
        live: 'https://www.cultbooking.com/en/',
      }
    },
    {
      id: 7,
      title: 'Banner Design',
      description: 'Banner Design for Company Offering Courses.',
      tags: ['Photoshop','illustrator'],
      category: 'design',
      image: graphic1,
      links: {
        demo: 'https://www.cultbooking.com/en/',
      }
    },
     {
      id: 8,
      title: 'Banner Design',
      description: 'Banner Design for Company Offering Courses.',
      tags: ['Photoshop','illustrator'],
      category: 'design',
      image: graphic2,
      links: {
        demo: 'https://www.cultbooking.com/en/',
      }
    },
     {
      id: 9,
      title: 'Banner Design',
      description: 'Banner Design for Company Offering Courses.',
      tags: ['Photoshop','illustrator'],
      category: 'design',
      image: graphic3,
      links: {
        demo: 'https://www.cultbooking.com/en/',
      }
    },
  ]

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory)

  return (
    <section id="projects" className="py-20 px-4 bg-white dark:bg-gray-900">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white">My Projects</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Here are some of my selected works across web development, app development, and design.
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-md shadow-sm" role="group">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 text-sm font-medium rounded-l-lg ${activeCategory === 'all' ? 'bg-blue-600 text-white' : 'bg-white dark:bg-gray-800 text-gray-800 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700'}`}
            >
              All
            </button>
            <button
              onClick={() => setActiveCategory('web')}
              className={`px-4 py-2 text-sm font-medium ${activeCategory === 'web' ? 'bg-blue-600 text-white' : 'bg-white dark:bg-gray-800 text-gray-800 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700'}`}
            >
              Web Development
            </button>
            <button
              onClick={() => setActiveCategory('app')}
              className={`px-4 py-2 text-sm font-medium ${activeCategory === 'app' ? 'bg-blue-600 text-white' : 'bg-white dark:bg-gray-800 text-gray-800 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700'}`}
            >
              App Development
            </button>
            <button
              onClick={() => setActiveCategory('design')}
              className={`px-4 py-2 text-sm font-medium rounded-r-lg ${activeCategory === 'design' ? 'bg-blue-600 text-white' : 'bg-white dark:bg-gray-800 text-gray-800 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700'}`}
            >
              Design
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="px-3 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 text-xs rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center space-x-4">
                  {project.links.live && (
                    <a 
                      href={project.links.live} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      <FiExternalLink className="mr-1" /> Live Demo
                    </a>
                  )}
                  {project.links.portfolio && (
                    <a 
                      href={project.links.portfolio} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      <FiExternalLink className="mr-1" /> View
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
                href="https://wa.link/njy4s1" 
                target="_blank"
            className="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition"
          >
            Start Your Project
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects