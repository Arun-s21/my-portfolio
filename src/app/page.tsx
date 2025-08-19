import Image from 'next/image';
import Link from 'next/link';

// --- Reusable Component for Section Titles ---
const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-8 sm:mb-12 text-center">
    {children}
  </h2>
);

// --- Hero Section Component ---
const HeroSection = () => (
  <section
    id="hero"
    className="flex flex-col-reverse md:flex-row items-center justify-center min-h-[80vh] gap-8 px-4"
  >
    <div className="w-full md:w-2/3 text-center md:text-left">
      <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-slate-900">
        Hi, I&apos;m Arun
      </h1>
      <h2 className="mt-3 text-xl sm:text-2xl md:text-3xl font-semibold text-slate-600">
        Full-Stack Developer
      </h2>
      <p className="mt-6 max-w-xl mx-auto md:mx-0 text-base sm:text-lg text-slate-500">
        Passionate about building modern web solutions and enhancing user experiences, from the database to the UI.
      </p>
    </div>
    <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-52 md:h-52 flex-shrink-0">
      <Image
        src="/profile.jpg"
        alt="Arun Singh"
        width={208}
        height={208}
        className="rounded-full border-4 border-slate-200 shadow-lg object-cover"
      />
    </div>
  </section>
);

// --- About Me Section Component ---
const AboutSection = () => (
  <section id="about" className="py-12 sm:py-16 md:py-24 px-4">
    <SectionTitle>About Me</SectionTitle>
    <div className="text-base sm:text-lg text-slate-600 space-y-4 max-w-3xl mx-auto text-center md:text-left">
      <p>
        As a Computer Science student, I&apos;m passionate about the entire process of building a web application—from designing the database schema to crafting a smooth user interface. I enjoy diving into backend logic, figuring out data flows, and then bridging that gap to create an intuitive frontend experience.
      </p>
      <p>
        Through projects like GhostDrop, SwiftLink, and RePoll, I&apos;ve gained hands-on experience with modern technologies like Next.js, TypeScript, and both SQL (PostgreSQL) and NoSQL (MongoDB) databases. I&apos;m always excited to learn new things and solve the challenging problems that come with building software from the ground up.
      </p>
    </div>
  </section>
);

// --- Skills Section Component ---
const SkillsSection = () => {
  const skills = ['Next.js', 'React', 'TypeScript', 'Node.js', 'PostgreSQL', 'MongoDB', 'Prisma', 'Tailwind CSS'];
  return (
    <section id="skills" className="py-12 sm:py-16 md:py-24 px-4">
      <SectionTitle>My Tech Stack</SectionTitle>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
        {skills.map(skill => (
          <div key={skill} className="bg-slate-100 p-4 rounded-lg">
            <p className="font-semibold text-slate-700">{skill}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
        <a
          href="https://drive.google.com/file/d/1kXTmbmLZKtSQlInEJThyC3Jwj---EEzg/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-slate-800 text-white font-semibold px-6 py-3 rounded-lg hover:bg-slate-700 transition-colors"
        >
          View Resume
        </a>
      </div>
    </section>
  );
};

// --- Projects Section Component ---
const ProjectsSection = () => (
  <section id="projects" className="py-12 sm:py-16 md:py-24 px-4">
    <SectionTitle>Check Out My Latest Work</SectionTitle>
    <div className="grid gap-8 sm:grid-cols-2">
      {/* Project Card */}
      {[
        {
          title: 'OrbitalEye',
          desc: 'A real-time satellite collision alert system, triggering warnings when two satellites approach within a predefined threshold',
          img: '/orbitaleye.png',
          tech: ['React', 'Satellite.js', 'Three.js'],
          live: 'https://orbitaleye-alpha.vercel.app',
          repo: 'https://github.com/Arun-s21/orbitaleye',
        },

        {
          title: 'GhostDrop',
          desc: 'A full-stack anonymous messaging application where users receive feedback through unique, shareable links.',
          img: '/ghostdrop.jpg',
          tech: ['Next.js', 'MongoDB', 'Brevo'],
          live: 'https://ghostdrop-alpha.vercel.app/',
          repo: 'https://github.com/Arun-s21/ghostdrop',
        },
        {
          title: 'SwiftLink',
          desc: 'A high-performance URL shortener with user accounts and click analytics, built with a relational database.',
          img: '/swiftlink.jpg',
          tech: ['Next.js', 'PostgreSQL', 'Prisma'],
          live: 'https://swiftlink-delta.vercel.app/',
          repo: 'https://github.com/Arun-s21/swiftlink',
        },
        {
          title: 'RePoll',
          desc: 'A real-time anonymous polling tool for live engagement, featuring dynamic results updated via polling.',
          img: '/repoll.jpg',
          tech: ['Next.js', 'MongoDB', 'Recharts'],
          live: 'https://repoll.vercel.app/',
          repo: 'https://github.com/Arun-s21/repoll',
        },
      ].map((proj) => (
        <div key={proj.title} className="bg-slate-50 rounded-lg shadow-lg overflow-hidden flex flex-col">
          <Image src={proj.img} alt={`${proj.title} Screenshot`} width={800} height={600} className="w-full object-cover" />
          <div className="p-6 flex flex-col flex-grow">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900">{proj.title}</h3>
            <p className="mt-2 text-slate-600 text-sm sm:text-base">{proj.desc}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {proj.tech.map(t => (
                <span key={t} className="bg-slate-200 text-slate-700 text-sm font-semibold px-3 py-1 rounded-full">{t}</span>
              ))}
            </div>
            <div className="mt-6 flex items-center space-x-4">
              <a href={proj.live} target="_blank" rel="noopener noreferrer" className="text-blue-600 font-semibold hover:underline">Live Demo</a>
              <a href={proj.repo} target="_blank" rel="noopener noreferrer" className="text-slate-500 font-semibold hover:underline">GitHub Repo</a>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

// --- Contact Section Component ---
const ContactSection = () => (
  <section id="contact" className="py-12 sm:py-16 md:py-24 px-4 text-center">
    <SectionTitle>Get In Touch</SectionTitle>
    <p className="text-base sm:text-lg text-slate-600 mb-8 max-w-xl mx-auto">
      I&apos;m currently looking for new opportunities and my inbox is always open. Whether you have a question or just want to say hi, I&apos;ll get back to you!
    </p>
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pb-20">
  <a
    href="mailto:arunsingh09827@gmail.com"
    className="bg-slate-800 text-white font-semibold px-6 py-3 rounded-lg hover:bg-gray-600 transition-colors"
  >
    Mail me
  </a>
</div>

  </section>
);

// --- The Main Page Component ---
export default function HomePage() {
  return (
    <div className="mx-auto max-w-5xl">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
}
