import { useState } from 'react'
import { FiExternalLink, FiGithub } from 'react-icons/fi'

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('all')

  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      description: 'A full-featured online store with payment integration, inventory management, and admin dashboard.',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      category: 'web',
      image: '/project1.jpg',
      links: {
        live: 'https://example.com',
        code: 'https://github.com/yourusername/ecommerce'
      }
    },
    {
      id: 2,
      title: 'Mobile Fitness App',
      description: 'Cross-platform fitness tracking application with workout plans and progress analytics.',
      tags: ['React Native', 'Firebase', 'Redux'],
      category: 'app',
      image: '/project2.jpg',
      links: {
        live: 'https://example.com',
        code: 'https://github.com/yourusername/fitness-app'
      }
    },
    {
      id: 3,
      title: 'SEO Campaign - Local Business',
      description: 'Increased organic traffic by 300% for a local service business through comprehensive SEO strategy.',
      tags: ['SEO', 'Content Marketing', 'Local SEO'],
      category: 'marketing',
      image: '/project3.jpg',
      links: {
        caseStudy: 'https://example.com/case-study'
      }
    },
    {
      id: 4,
      title: 'Social Media Ad Campaign',
      description: 'Managed Meta and Google ads that reduced customer acquisition cost by 40% for an e-commerce client.',
      tags: ['Meta Ads', 'Google Ads', 'Conversion Tracking'],
      category: 'marketing',
      image: '/project4.jpg',
      links: {
        caseStudy: 'https://example.com/case-study'
      }
    },
    {
      id: 5,
      title: 'Corporate Branding Package',
      description: 'Complete branding solution including logo, business cards, and brand guidelines for a startup.',
      tags: ['Logo Design', 'Brand Identity', 'Print Design'],
      category: 'design',
      image: '/project5.jpg',
      links: {
        portfolio: 'https://example.com/portfolio'
      }
    },
    {
      id: 6,
      title: 'Portfolio Website',
      description: 'Modern portfolio website for a creative professional with CMS integration.',
      tags: ['Next.js', 'Tailwind CSS', 'Headless CMS'],
      category: 'web',
      image: '/project6.jpg',
      links: {
        live: 'https://example.com',
        code: 'https://github.com/yourusername/portfolio'
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
            Here are some of my selected works across web development, app development, and digital marketing.
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
              className={`px-4 py-2 text-sm font-medium ${activeCategory === 'design' ? 'bg-blue-600 text-white' : 'bg-white dark:bg-gray-800 text-gray-800 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700'}`}
            >
              Design
            </button>
            <button
              onClick={() => setActiveCategory('marketing')}
              className={`px-4 py-2 text-sm font-medium rounded-r-lg ${activeCategory === 'marketing' ? 'bg-blue-600 text-white' : 'bg-white dark:bg-gray-800 text-gray-800 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700'}`}
            >
              Marketing
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 bg-gray-300 dark:bg-gray-700 flex items-center justify-center">
                {/* Project image placeholder */}
                <span className="text-gray-500 dark:text-gray-400">Project Image</span>
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
                  {project.links.code && (
                    <a 
                      href={project.links.code} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      <FiGithub className="mr-1" /> Code
                    </a>
                  )}
                  {project.links.caseStudy && (
                    <a 
                      href={project.links.caseStudy} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      <FiExternalLink className="mr-1" /> Case Study
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
            href="#contact" 
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