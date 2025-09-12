export default function Skills() {
  return (
    <section id="Skills" className="px-6 sm:px-12 lg:px-40 py-30">
      {/* Heading */}
      <div className="flex items-center mb-10">
        <span className="text-[#64ffda] mr-2 text-xl sm:text-2xl font-light">
          02.
        </span>
        <span className="text-2xl sm:text-3xl font-medium">Tech Stack</span>
        <div className="flex-1 border-t border-[#ccd6f697] ml-4"></div>
      </div>

      {/* Cards */}
      <div className="flex justify-center flex-col md:justify-center flex-row flex-wrap gap-6">
        {/* Frontend */}
        <div className="bg-gray-800 p-6 rounded-xl shadow-md flex-1 min-w-[220px] max-w-[300px] hover:-translate-y-2 transform transition duration-300 ease-in-out">
          <h4 className="text-xl sm:text-2xl font-bold mb-4">
            Frontend Development
          </h4>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Bootstrap</li>
            <li>Tailwind CSS</li>
            <li>React</li>
          </ul>
        </div>

        {/* Backend & Databases */}
        <div className="bg-gray-800 p-6 rounded-xl shadow-md flex-1 min-w-[220px] max-w-[300px] hover:-translate-y-2 transform transition duration-300 ease-in-out">
          <h4 className="text-xl sm:text-2xl font-bold mb-4">
            Backend & Databases
          </h4>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>Node.js</li>
            <li>Express.js</li>
            <li>SQL / MySQL</li>
            <li>MongoDB</li>
            <li>Mongoose</li>
          </ul>
        </div>

        {/* Tools & Problem Solving */}
        <div className="bg-gray-800 p-6 rounded-xl shadow-md flex-1 min-w-[220px] max-w-[300px] hover:-translate-y-2 transform transition duration-300 ease-in-out">
          <h4 className="text-xl sm:text-2xl font-bold mb-4">
            Tools & Problem Solving
          </h4>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>Git</li>
            <li>GitHub</li>
            <li>Java</li>
            <li>Data Structures & Algorithms</li>
          </ul>
        </div>
      </div>

      {/* LeetCode Counter */}
      <p className="mt-10 text-center text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#ccd6f699]">
        <span className="text-[#64ffda]">300+</span> LeetCode Problems Solved
      </p>
    </section>
  );
}
