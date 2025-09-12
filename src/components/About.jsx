export default function About() {
  return (
    <section id="About" className="px-6 sm:px-12 lg:px-40 py-30">
      {/* Heading */}
      <div className="flex items-center mb-10">
        <span className="text-[#64ffda] mr-2 text-xl sm:text-2xl font-light">
          01.
        </span>
        <span className="text-2xl sm:text-3xl font-medium">About Me</span>
        <div className="flex-1 border-t border-[#ccd6f697] ml-4"></div>
      </div>

      {/* Content */}
      <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
        {/* Text */}
        <p className="text-[#ccd6f697] text-base sm:text-lg leading-relaxed font-sans font-light md:flex-1">
          Hello! My name is Yogesh, and I enjoy building products that live on
          the web. My journey into coding started in college, where I began
          experimenting with HTML, CSS, and JavaScript. Over time, this
          curiosity grew into a strong interest in solving problems through
          code. <br />
          <br />I recently completed my{" "}
          <span className="font-semibold">
            Bachelor of Computer Applications (BCA)
          </span>{" "}
          from Amity University, focusing on web development and{" "}
          <span className="text-[#64ffda]">
            data structures & algorithms (DSA) in Java
          </span>
          . Since then, I've worked on full-stack projects and honed my skills
          in building scalable applications with the{" "}
          <span className="text-[#64ffda]">MERN stack</span>. <br />
          <br />
          These days, I'm focusing on creating impactful projects, improving my
          backend expertise, and sharpening my problem-solving skills through
          DSA practice.
        </p>

        {/* Image */}
        <div className=" w-80  mx-auto ">
          <img
            src="/myphoto.jpg"
            alt="Yogesh"
            className=" w-full h-auto rounded-lg grayscale hover:grayscale-0 hover:scale-105 transform transition duration-300 ease-in-out brightness-125"
          />
        </div>
      </div>
    </section>
  );
}
