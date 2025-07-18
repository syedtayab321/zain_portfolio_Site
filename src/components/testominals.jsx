import { FaQuoteLeft } from 'react-icons/fa'

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'CEO, Tech Startup',
      content: 'Working with you was an absolute pleasure. The web application you developed exceeded our expectations and has been instrumental in scaling our business. Your attention to detail and technical expertise are unmatched.',
      rating: 5,
      image: '/client1.jpg'
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Marketing Director',
      content: 'Your digital marketing strategies transformed our online presence. In just 3 months, our customer acquisition cost dropped by 35% while our conversion rates improved significantly. Highly recommended!',
      rating: 5,
      image: '/client2.jpg'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Founder, E-commerce Store',
      content: 'The mobile app you built for our store has dramatically improved customer engagement. The user experience is seamless, and we\'ve seen a 40% increase in repeat purchases since launch.',
      rating: 4,
      image: '/client3.jpg'
    },
    {
      id: 4,
      name: 'David Wilson',
      role: 'Creative Agency Owner',
      content: 'Your branding work for our agency was exceptional. You perfectly captured our vision and created a cohesive identity that has helped us stand out in a competitive market.',
      rating: 5,
      image: '/client4.jpg'
    }
  ]

  return (
    <section className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white">Client Testimonials</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Don't just take my word for it - here's what my clients say about working with me.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-300 dark:bg-gray-700 mr-4">
                  {/* Client image placeholder */}
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-gray-500 dark:text-gray-400">Client</span>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-white">{testimonial.name}</h4>
                  <p className="text-gray-600 dark:text-gray-400">{testimonial.role}</p>
                  <div className="flex mt-1">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-4 h-4 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300 dark:text-gray-600'}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <div className="relative">
                <FaQuoteLeft className="text-blue-200 dark:text-blue-900/50 text-3xl absolute -top-2 -left-1" />
                <p className="text-gray-600 dark:text-gray-400 relative pl-8">{testimonial.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials