import Image from 'next/image';
import Link from 'next/link';

// --- Reusable Component for Section Titles ---
const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-3xl font-bold text-slate-800 mb-12 text-center">
    {children}
  </h2>
);

// --- Hero Section Component ---
const HeroSection = () => (
  <section id="hero" className="flex flex-col md:flex-row items-center justify-between min-h-screen">
    <div className="md:w-2/3 text-center md:text-left">
      <h1 className="text-5xl md:text-7xl font-bold text-slate-900">
        Hi, I&apos;m Arun
      </h1>
      <h2 className="mt-3 text-2xl md:text-3xl font-semibold text-slate-600">
        Full-Stack Developer
      </h2>
      <p className="mt-6 max-w-xl text-lg text-slate-500">
        Passionate about building modern web solutions and enhancing user experiences, from the database to the UI.
      </p>
    </div>
    <div className="mt-8 md:mt-0 md:w-1/3 flex justify-center">
      <Image
        src="/profile.jpg"
        alt="Arun Singh"
        width={200}
        height={200}
        className="rounded-full border-4 border-slate-200 shadow-lg"
      />
    </div>
  </section>
);

// --- About Me Section Component ---
const AboutSection = () => (
  <section id="about" className="py-16 md:py-24">
    <SectionTitle>About Me</SectionTitle>
    <div className="text-lg text-slate-600 space-y-4 max-w-3xl mx-auto text-center md:text-left">
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
    <section id="skills" className="py-16 md:py-24">
      <SectionTitle>My Tech Stack</SectionTitle>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
        {skills.map(skill => (
          <div key={skill} className="bg-slate-100 p-4 rounded-lg">
            <p className="font-semibold text-slate-700">{skill}</p>
          </div>
        ))}

      </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-12">
      <a href="https://drive.google.com/file/d/1xrCExwYHzwg03YQikLyziZJMIyO6mtZa/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="bg-slate-800 text-white font-semibold px-6 py-3 rounded-lg hover:bg-slate-700 transition-colors">View Resume</a>
      
    </div>

    </section>
  );
};

// --- Projects Section Component ---
const ProjectsSection = () => (
  <section id="projects" className="py-16 md:py-24">
    <SectionTitle>Check Out My Latest Work</SectionTitle>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Project Card 1: GhostDrop */}
      <div className="bg-slate-50 rounded-lg shadow-lg overflow-hidden">
        <Image src="/ghostdrop.jpg" alt="GhostDrop Project Screenshot" width={800} height={600} className="w-full object-cover" />
        <div className="p-6">
          <h3 className="text-2xl font-bold text-slate-900">GhostDrop</h3>
          <p className="mt-2 text-slate-600">A full-stack anonymous messaging application where users receive feedback through unique, shareable links.</p>
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="bg-slate-200 text-slate-700 text-sm font-semibold px-3 py-1 rounded-full">Next.js</span>
            <span className="bg-slate-200 text-slate-700 text-sm font-semibold px-3 py-1 rounded-full">MongoDB</span>
            <span className="bg-slate-200 text-slate-700 text-sm font-semibold px-3 py-1 rounded-full">Brevo</span>
          </div>
          <div className="mt-6 flex items-center space-x-4">
            <a href="https://ghostdrop-alpha.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-semibold hover:underline">Live Demo</a>
            <a href="https://github.com/Arun-s21/ghostdrop" target="_blank" rel="noopener noreferrer" className="text-slate-500 font-semibold hover:underline">GitHub Repo</a>
          </div>
        </div>
      </div>
      {/* Project Card 2: SwiftLink */}
      <div className="bg-slate-50 rounded-lg shadow-lg overflow-hidden">
        <Image src="/swiftlink.jpg" alt="SwiftLink Project Screenshot" width={800} height={600} className="w-full object-cover" />
        <div className="p-6">
          <h3 className="text-2xl font-bold text-slate-900">SwiftLink</h3>
          <p className="mt-2 text-slate-600">A high-performance URL shortener with user accounts and click analytics, built with a relational database.</p>
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="bg-slate-200 text-slate-700 text-sm font-semibold px-3 py-1 rounded-full">Next.js</span>
            <span className="bg-slate-200 text-slate-700 text-sm font-semibold px-3 py-1 rounded-full">PostgreSQL</span>
            <span className="bg-slate-200 text-slate-700 text-sm font-semibold px-3 py-1 rounded-full">Prisma</span>
          </div>
          <div className="mt-6 flex items-center space-x-4">
            <a href="https://swiftlink-delta.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-semibold hover:underline">Live Demo</a>
            <a href="https://github.com/Arun-s21/swiftlink" target="_blank" rel="noopener noreferrer" className="text-slate-500 font-semibold hover:underline">GitHub Repo</a>
          </div>
        </div>
      </div>
      {/* Project Card 3: RePoll */}
      <div className="bg-slate-50 rounded-lg shadow-lg overflow-hidden">
        <Image src="/repoll.jpg" alt="RePoll Project Screenshot" width={800} height={600} className="w-full object-cover" />
        <div className="p-6">
          <h3 className="text-2xl font-bold text-slate-900">RePoll</h3>
          <p className="mt-2 text-slate-600">A real-time anonymous polling tool for live engagement, featuring dynamic results updated via polling.</p>
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="bg-slate-200 text-slate-700 text-sm font-semibold px-3 py-1 rounded-full">Next.js</span>
            <span className="bg-slate-200 text-slate-700 text-sm font-semibold px-3 py-1 rounded-full">MongoDB</span>
            <span className="bg-slate-200 text-slate-700 text-sm font-semibold px-3 py-1 rounded-full">Recharts</span>
          </div>
          <div className="mt-6 flex items-center space-x-4">
            <a href="https://repoll-mu.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-semibold hover:underline">Live Demo</a>
            <a href="https://github.com/Arun-s21/repoll" target="_blank" rel="noopener noreferrer" className="text-slate-500 font-semibold hover:underline">GitHub Repo</a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// --- Contact Section Component ---
const ContactSection = () => (
  <section id="contact" className="py-16 md:py-24 text-center">
    <SectionTitle>Get In Touch</SectionTitle>
    <p className="text-lg text-slate-600 mb-8 max-w-xl mx-auto">I&apos;m currently looking for new opportunities and my inbox is always open. Whether you have a question or just want to say hi, I&apos;ll get back to you!</p>
    <div className="flex flex-col md:flex-row items-center justify-center gap-4">
      <a href="mailto:arunsingh09827@gmail.com" className="bg-slate-800 text-white font-semibold px-6 py-3 rounded-lg hover:bg-gray-600 transition-colors">Mail me</a>
    </div>
  </section>
);

// --- The Main Page Component ---
export default function HomePage() {
  return (
    <div className="container mx-auto max-w-4xl p-4 md:p-8">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
}