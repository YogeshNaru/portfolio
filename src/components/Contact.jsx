export default function Contact() {
  return (
    <section id="Contact" className="px-6   sm:px-12 lg:px-40 pt-20 pb-10">
      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-[#64ffda] text-md sm:text-lg font-mono font-light tracking-wider mb-4">
          04. Where to Find Me
        </h1>
        <h2 className="font-bold text-3xl sm:text-5xl mb-3">
          Want to Collaborate?
        </h2>
        <h3 className="text-md sm:text-lg font-thin font-mono text-[#ccd6f699]">
          Connect with me on these platforms.
        </h3>
      </div>

      {/* Icons */}
      <div className="flex flex-wrap justify-center gap-8 sm:gap-12 mb-12">
        <a
          href="https://leetcode.com/u/YogeshNaru/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="devicon-leetcode-plain text-4xl sm:text-6xl"></i>
        </a>
        <a
          href="https://github.com/YogeshNaru"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="devicon-github-original text-4xl sm:text-6xl"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/yogeshnaru/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="devicon-linkedin-plain text-4xl sm:text-6xl"></i>
        </a>
      </div>

      {/* Button */}
      <div className="flex justify-center mb-12">
        <a href="mailto:yogeshnaru803@gmail.com">
          <button className="text-sm sm:text-base bg-transparent border border-[#64ffda] text-[#64ffda] font-light tracking-wider px-6 sm:px-8 py-3 sm:py-4 rounded hover:bg-[#64ffda] hover:text-[#0a192f] hover:scale-105 transform transition duration-300 ease-in-out">
            Say Hello
          </button>
        </a>
      </div>

      {/* Footer */}
      <footer>
        <p className="text-center text-[#ccd6f699] text-xs sm:text-sm font-thin font-mono pt-10">
          &copy; 2025 Yogesh Naru. Built with React
        </p>
      </footer>
    </section>
  );
}
