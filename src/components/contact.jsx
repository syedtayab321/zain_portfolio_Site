import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa'

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-white dark:bg-gray-900">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white">Get In Touch</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Feel free to reach out through any of these channels. I'd love to hear from you!
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="bg-blue-100 dark:bg-blue-900/50 p-3 rounded-lg mr-4 text-blue-600 dark:text-blue-400">
                <FaMapMarkerAlt className="text-xl" />
              </div>
              <div>
                <h4 className="text-lg font-medium text-gray-800 dark:text-white mb-1">Location</h4>
                <p className="text-gray-600 dark:text-gray-400">Rawalakot, Azad Kashmir, Pakistan</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-blue-100 dark:bg-blue-900/50 p-3 rounded-lg mr-4 text-blue-600 dark:text-blue-400">
                <FaPhone className="text-xl" />
              </div>
              <div>
                <h4 className="text-lg font-medium text-gray-800 dark:text-white mb-1">Phone / WhatsApp</h4>
                <p className="text-gray-600 dark:text-gray-400">+92 310 9076927</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-blue-100 dark:bg-blue-900/50 p-3 rounded-lg mr-4 text-blue-600 dark:text-blue-400">
                <FaEnvelope className="text-xl" />
              </div>
              <div>
                <h4 className="text-lg font-medium text-gray-800 dark:text-white mb-1">Email</h4>
                <p className="text-gray-600 dark:text-gray-400">sardarzaintahir@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-blue-100 dark:bg-blue-900/50 p-3 rounded-lg mr-4 text-blue-600 dark:text-blue-400">
                <FaClock className="text-xl" />
              </div>
              <div>
                <h4 className="text-lg font-medium text-gray-800 dark:text-white mb-1">Working Hours</h4>
                <p className="text-gray-600 dark:text-gray-400">Monday-Friday: 24/7 Avalaible<br />Weekends: By appointment</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact