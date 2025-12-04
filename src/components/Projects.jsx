import LaunchIcon from "@mui/icons-material/Launch";

export default function Projects() {
  return (
    <section id="Projects" className="px-6  sm:px-12 lg:px-40 pt-30 pb-15">
      {/* Heading */}
      <div className="flex items-center mb-12">
        <span className="text-[#64ffda] mr-2 text-xl sm:text-2xl font-light">
          03.
        </span>
        <span className="text-2xl sm:text-3xl font-medium">
          Showcase of My Work
        </span>
        <div className="flex-1 border-t border-[#ccd6f697] ml-4"></div>
      </div>

      {/* First Project */}
      <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
        {/* Images */}
        <div className="relative w-full md:w-1/2 flex justify-center">
          <div className="relative w-full max-w-md">
            <img
              src={`${import.meta.env.BASE_URL}farhomesHome.png`}
              alt="project-image"
              className="rounded-xl w-full transition-opacity duration-300 hover:opacity-100"
            />
            <img
              src={`${import.meta.env.BASE_URL}farhomes.png`}
              alt="project-image"
              className="rounded-xl w-full absolute top-0 left-0 transition-opacity duration-300 hover:opacity-0"
            />
          </div>
        </div>

        {/* Text */}
        <div className="w-full md:w-1/2">
          <h1 className="text-[#64ffda] text-lg sm:text-xl font-mono font-thin mb-2">
            Project
          </h1>
          <h2 className="font-medium text-2xl sm:text-3xl tracking-wide mb-4">
            Home Listing Platform
          </h2>
          <p className="p-4 rounded-md bg-[#112240] text-[#ccd6f699] text-base sm:text-lg leading-relaxed mb-4">
            Developed a home rental web application where users can register and
            add new property listings. Built with{" "}
            <span className="text-[#64ffda]">
              Node.js, Express, EJS, MongoDB
            </span>{" "}
            and <span className="text-[#64ffda]">Bootstrap</span> for responsive
            UI and seamless user experience.
          </p>
          <div className="flex items-center space-x-6">
            <a
              href="https://github.com/YogeshNaru/project-homigo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="devicon-github-original text-3xl sm:text-4xl"></i>
            </a>
            <a
              href="https://project-homigo.onrender.com/listings"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LaunchIcon sx={{ fontSize: 36 }} />
            </a>
          </div>
        </div>
      </div>

      {/* second Project */}
      <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
        {/* Text first on desktop */}
        <div className="w-full md:w-1/2 order-2 md:order-1">
          <h1 className="text-[#64ffda] text-lg sm:text-xl font-mono font-thin mb-2">
            Project
          </h1>
          <h2 className="font-medium text-2xl sm:text-3xl tracking-wide mb-4">
            Allora Chat App
          </h2>
          <p className="p-4 rounded-md bg-[#112240] text-[#ccd6f699] text-base sm:text-lg leading-relaxed mb-4">
            A full-stack real-time personal chat web-app built with{" "}
            <span className="text-[#64ffda]">
              {" "}
              React, TailwindCSS, Node.js, Express, MongoDB, Socket.io{" "}
            </span>{" "}
            and <span className="text-[#64ffda]">JWT authentication. </span>
            Users can signup, login and chat with all other registered users in
            real-time. Fully responsive for desktop + mobile.
          </p>
          <div className="flex items-center space-x-6">
            <a
              href="https://github.com/YogeshNaru/Allora-chat-Fullstack"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="devicon-github-original text-3xl sm:text-4xl"></i>
            </a>
            <a
              href="https://allora-chat.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LaunchIcon sx={{ fontSize: 36 }} />
            </a>
          </div>
        </div>

        {/* Images */}
        <div className="relative w-full md:w-1/2  order-1 md:order-2 flex justify-center">
          <div className="relative w-full max-w-md">
            <img
              src={`${import.meta.env.BASE_URL}allorahome.png`}
              alt="project-image"
              className="rounded-xl w-full md:h-[300px]   transition-opacity duration-300 hover:opacity-100"
            />
            <img
              src={`${import.meta.env.BASE_URL}alloradesktop.png`}
              alt="project-image"
              className="rounded-xl w-full md:h-[300px]  absolute top-0 left-0 transition-opacity duration-300 hover:opacity-0"
            />
          </div>
        </div>
      </div>

      {/* third Project */}
      <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
        {/* Images */}
        <div className="relative w-full md:w-1/2 flex justify-center">
          <div className="relative w-full max-w-md">
            <img
              src={`${import.meta.env.BASE_URL}zenthodark.png`}
              alt="project-image"
              className="rounded-xl w-full transition-opacity duration-300 hover:opacity-100"
            />
            <img
              src={`${import.meta.env.BASE_URL}zentholight.png`}
              alt="project-image"
              className="rounded-xl w-full absolute top-0 left-0 transition-opacity duration-300 hover:opacity-0"
            />
          </div>
        </div>

        {/* Text */}
        <div className="w-full md:w-1/2">
          <h1 className="text-[#64ffda] text-lg sm:text-xl font-mono font-thin mb-2">
            Project
          </h1>
          <h2 className="font-medium text-2xl sm:text-3xl tracking-wide mb-4">
            Zentho - AI Content Generation Platform
          </h2>
          <p className="p-4 rounded-md bg-[#112240] text-[#ccd6f699] text-base sm:text-lg leading-relaxed mb-4">
            Full-stack AI chat app using{" "}
            <span className="text-[#64ffda]">Gemini API</span> for text and
            image generation with{" "}
            <span className="text-[#64ffda]">JWT auth, chat history</span>, and{" "}
            <span className="text-[#64ffda]">guest mode</span>. Built with{" "}
            <span className="text-[#64ffda]">
              React, vanilla CSS, Node.js, Express, and MongoDB Atlas,
            </span>{" "}
            featuring light/dark themes.
          </p>
          <div className="flex items-center space-x-6">
            <a
              href="https://github.com/YogeshNaru/ZenthoAI-bot"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="devicon-github-original text-3xl sm:text-4xl"></i>
            </a>
            <a
              href="https://zentho-ai-bot.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LaunchIcon sx={{ fontSize: 36 }} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
