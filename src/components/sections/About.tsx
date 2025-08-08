export const About = () => {
  const frontendSkills = [
    "React",
    "Vue",
    "Typescript",
    "TaillwindCSS",
    "Svelte",
  ];

  const backendSkills = ["Node.js", "Python", "AWS", "MongoDB", "GraphQL"];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
          About Me
        </h2>
        <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
          <p className="text-gray-300 mb-6">
            I am a Front-end Developer with a background in architecture and the
            music business. Being exposed to a wide range of situations and
            people where I was able to participate and lead various projects,
            has developed in me a great capacity to adapt and solve problems. As
            a lifelong learner I am strongly motivated to create and
            communicate.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Front-end</h3>
              <div className="flex flex-wrap gap-2">
                {frontendSkills.map((skill, key) => {
                  return (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                      hover:shadow-[0_2px_8px_rgba(59, 130, 2246, 0.2)] transition
                    "
                    >
                      {skill}
                    </span>
                  );
                })}
              </div>
            </div>

            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Back-end</h3>
              <div className="flex flex-wrap gap-2">
                {backendSkills.map((skill, key) => {
                  return (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                      hover:shadow-[0_2px_8px_rgba(59, 130, 2246, 0.2)] transition
                    "
                    >
                      {skill}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-4">💼 Work Experience</h3>
            <div className="space-y-4 text-gray-300">
              <div>
                <h4 className="font-semibold">
                  Software Engineer at ABC Corp [2020-Present]
                </h4>
                <p>
                  Developed and maintained microservices for cloud based
                  applications.
                </p>
              </div>

              <div>
                <h4 className="font-semibold">Intern at DEF Startups [2019]</h4>
                <p>
                  Assisted in Building front-end components and integration REST
                  APIs
                </p>
              </div>
            </div>
          </div>
          <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-4">🎓 Education</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>
                <strong>B.S. in Computer Sience</strong> - XYZ University
                [2016-2020]
              </li>
              <li>
                Relevant CourseWork: Data Structures, Web Development, Cloud
                Computing...
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
