export default function Hero() {
  return (
    <section
      id="Hero"
      className="  px-6 sm:px-12  mb-30 lg:px-40 pb-10   mb-30"
    >
      <div>
        <h3 className="mt-20 text-[#64ffda] text-base sm:text-lg tracking-wide font-mono font-thin text-center lg:text-left pt-15">
          Hi, my name is
        </h3>
      </div>

      <div>
        <h2 className="mt-6 text-4xl sm:text-5xl lg:text-6xl tracking-wide font-[800] text-center lg:text-left">
          Yogesh Naru.
        </h2>
      </div>

      <div>
        <h3 className="mt-6 text-3xl sm:text-4xl lg:text-6xl tracking-wide font-[800] text-[#ccd6f699] text-center lg:text-left">
          I learn and build things for the web.
        </h3>
      </div>

      <div>
        <p className="mt-6 text-[#ccd6f697] tracking-wider text-center lg:text-left text-sm sm:text-base ">
          I'm a software engineer specializing in MERN stack development{" "}
          <br className="hidden sm:block" />
          and DSA problem-solving. I create projects that showcase my skills{" "}
          <br className="hidden sm:block" />
          and prepare me for my first software engineering role.
        </p>
      </div>

      <div className="mt-8 flex justify-center lg:justify-start pt-5 ">
        <a
          href="https://github.com/YogeshNaru?tab=repositories"
          target="_blank"
        >
          <button className="font-mono border border-[#64ffda] text-[#64ffda] px-6 py-3 rounded font-thin text-sm hover:bg-[#64ffda] hover:text-[#0a192f] hover:scale-105 transform transition duration-300 ease-in-out lg: px-7 py-5  ">
            Check out my projects!
          </button>
        </a>
      </div>
    </section>
  );
}
