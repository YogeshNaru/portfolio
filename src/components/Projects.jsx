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
              src="/farhomesHome.png"
              alt="project-image"
              className="rounded-xl w-full transition-opacity duration-300 hover:opacity-100"
            />
            <img
              src="/farhomes.png"
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

      {/* Second Project */}
      <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
        {/* Text first on desktop */}
        <div className="w-full md:w-1/2 order-2 md:order-1">
          <h1 className="text-[#64ffda] text-lg sm:text-xl font-mono font-thin mb-2">
            Project
          </h1>
          <h2 className="font-medium text-2xl sm:text-3xl tracking-wide mb-4">
            React Weather App
          </h2>
          <p className="p-4 rounded-md bg-[#112240] text-[#ccd6f699] text-base sm:text-lg leading-relaxed mb-4">
            A lightweight weather web app where users can search for any city
            worldwide and get instant forecasts. Powered by{" "}
            <span className="text-[#64ffda]">React</span> and the{" "}
            <span className="text-[#64ffda]">OpenWeather API</span>.
          </p>
          <div className="flex items-center space-x-6">
            <a
              href="https://github.com/YogeshNaru/weatherApp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="devicon-github-original text-3xl sm:text-4xl"></i>
            </a>
            <a
              href="https://yogeshnaru.github.io/weatherApp/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LaunchIcon sx={{ fontSize: 36 }} />
            </a>
          </div>
        </div>

        {/* Images */}
        <div className="relative w-full md:w-1/2 order-1 md:order-2 flex justify-center">
          <div className="relative w-full max-w-md">
            <img
              src="/weathercold.png"
              alt="project-image"
              className="rounded-xl w-full transition-opacity duration-300 hover:opacity-100"
            />
            <img
              src="/weatherhot.png"
              alt="project-image"
              className="rounded-xl w-full absolute top-0 left-0 transition-opacity duration-300 hover:opacity-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
