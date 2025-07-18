import { FaReact, FaNodeJs, FaFigma, FaGoogle, FaFacebook } from 'react-icons/fa'
import { SiNextdotjs, SiTailwindcss, SiAdobephotoshop, SiAdobeillustrator, SiTypescript, SiJavascript, SiMongodb, SiExpress, SiWordpress } from 'react-icons/si'
import { TbBrandReactNative } from 'react-icons/tb'

const Skills = () => {
  const technicalSkills = [
    { name: 'React', icon: <FaReact className="text-4xl text-blue-500" />, level: '95%' },
    { name: 'Next.js', icon: <SiNextdotjs className="text-4xl text-gray-800 dark:text-white" />, level: '90%' },
    { name: 'React Native', icon: <TbBrandReactNative className="text-4xl text-blue-400" />, level: '85%' },
    { name: 'Node.js', icon: <FaNodeJs className="text-4xl text-green-600" />, level: '90%' },
    { name: 'TypeScript', icon: <SiTypescript className="text-4xl text-blue-600" />, level: '85%' },
    { name: 'JavaScript', icon: <SiJavascript className="text-4xl text-yellow-400" />, level: '95%' },
    { name: 'MongoDB', icon: <SiMongodb className="text-4xl text-green-500" />, level: '80%' },
    { name: 'Express', icon: <SiExpress className="text-4xl text-gray-800 dark:text-white" />, level: '85%' },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-4xl text-cyan-400" />, level: '95%' },
    { name: 'WordPress', icon: <SiWordpress className="text-4xl text-blue-700" />, level: '75%' },
  ]

  const designSkills = [
    { name: 'UI/UX Design', icon: <FaFigma className="text-4xl text-purple-500" />, level: '90%' },
    { name: 'Photoshop', icon: <SiAdobephotoshop className="text-4xl text-blue-700" />, level: '85%' },
    { name: 'Illustrator', icon: <SiAdobeillustrator className="text-4xl text-orange-500" />, level: '80%' },
    { name: 'Graphic Design', icon: <FaFigma className="text-4xl text-pink-500" />, level: '90%' },
    { name: 'Card Design', icon: <SiAdobeillustrator className="text-4xl text-yellow-600" />, level: '85%' },
  ]

  const marketingSkills = [
    { name: 'SEO', icon: <FaGoogle className="text-4xl text-blue-500" />, level: '95%' },
    { name: 'Google Ads', icon: <FaGoogle className="text-4xl text-green-500" />, level: '90%' },
    { name: 'Meta Ads', icon: <FaFacebook className="text-4xl text-blue-600" />, level: '92%' },
    { name: 'Social Media Marketing', icon: <FaFacebook className="text-4xl text-blue-400" />, level: '90%' },
    { name: 'Content Writing', icon: <FaGoogle className="text-4xl text-red-500" />, level: '85%' },
  ]

  return (
    <section id="skills" className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white">My Skills</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            I've honed a diverse set of skills across development, design, and digital marketing to deliver comprehensive digital solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Technical Skills */}
          <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold mb-6 text-gray-800 dark:text-white text-center">Technical Skills</h3>
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex items-center mb-2">
                    {skill.icon}
                    <span className="ml-3 font-medium text-gray-800 dark:text-white">{skill.name}</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <div 
                      className="bg-blue-600 h-2.5 rounded-full" 
                      style={{ width: skill.level }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Design Skills */}
          <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold mb-6 text-gray-800 dark:text-white text-center">Design Skills</h3>
            <div className="space-y-6">
              {designSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex items-center mb-2">
                    {skill.icon}
                    <span className="ml-3 font-medium text-gray-800 dark:text-white">{skill.name}</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <div 
                      className="bg-blue-600 h-2.5 rounded-full" 
                      style={{ width: skill.level }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Marketing Skills */}
          <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold mb-6 text-gray-800 dark:text-white text-center">Marketing Skills</h3>
            <div className="space-y-6">
              {marketingSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex items-center mb-2">
                    {skill.icon}
                    <span className="ml-3 font-medium text-gray-800 dark:text-white">{skill.name}</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <div 
                      className="bg-blue-600 h-2.5 rounded-full" 
                      style={{ width: skill.level }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg">
          <h3 className="text-xl font-semibold mb-6 text-gray-800 dark:text-white text-center">Work Process</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center p-4">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 dark:text-blue-400 text-2xl font-bold">1</span>
              </div>
              <h4 className="font-medium text-gray-800 dark:text-white mb-2">Discovery</h4>
              <p className="text-gray-600 dark:text-gray-400">Understanding your requirements and goals</p>
            </div>
            <div className="text-center p-4">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 dark:text-blue-400 text-2xl font-bold">2</span>
              </div>
              <h4 className="font-medium text-gray-800 dark:text-white mb-2">Planning</h4>
              <p className="text-gray-600 dark:text-gray-400">Creating a strategic roadmap</p>
            </div>
            <div className="text-center p-4">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 dark:text-blue-400 text-2xl font-bold">3</span>
              </div>
              <h4 className="font-medium text-gray-800 dark:text-white mb-2">Execution</h4>
              <p className="text-gray-600 dark:text-gray-400">Developing and implementing solutions</p>
            </div>
            <div className="text-center p-4">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 dark:text-blue-400 text-2xl font-bold">4</span>
              </div>
              <h4 className="font-medium text-gray-800 dark:text-white mb-2">Delivery</h4>
              <p className="text-gray-600 dark:text-gray-400">Launching and ongoing optimization</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills