import type { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = {
  title: "Work",
  description: "A summary of my work and contributions.",
};

export default function Page() {
  return (
    <section className="pt-[50px]">
      <h1 className="font-medium text-2xl mb-8 tracking-tighter underlined-text">
        Work
      </h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          Hello, I&apos;m Fonti. I&apos;m a Software Engineer based in Malang,
          Indonesia. I&apos;m currently working at{" "}
          <a
            href="https://clearview.team/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Clearview
          </a>{" "}
          with over 10 years of experience building scalable, high-performance web applications. 
          I specialize in JavaScript, TypeScript, Vue.js, Nuxt.js, React, Next.js, and cloud infrastructure management. 
          I have proven expertise in AI-assisted development workflows using Claude Code and Cursor. 
          I have 7+ years of experience as a remote worker collaborating across distributed teams in the US and Europe.
        </p>
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">
          <Link
            href="https://clearview.team/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Clearview
          </Link>
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          Software Engineer, May 2018 - present
        </p>
        <p>
          Clearview is a remote-first, distributed software company with team
          members spread across the globe. I&apos;ve successfully migrated legacy CakePHP applications 
          to modern Nuxt.js stack, significantly improving performance and maintainability. 
          I&apos;ve developed and delivered 6+ production-grade web applications for high-profile clients 
          including ASIFA-Hollywood, Flight-1, and Crowdfox. I&apos;ve built award submission and membership 
          management systems serving thousands of active users annually with zero downtime.
        </p>
        <p>
          I&apos;ve architected scalable front-end solutions using modern tech stack (Nuxt 3, Vue.js, TypeScript, TailwindCSS, Pinia) 
          ensuring clean, maintainable codebases. I&apos;ve implemented AWS infrastructure best practices for hosting and CI/CD pipelines, 
          optimizing deployment performance and reliability. I&apos;ve also configured Cloudflare infrastructure (CDN, DNS, firewall rules) 
          and managed VPS environments to ensure global availability and security.
        </p>
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">
          <Link
            href="https://dnetprovider.id/"
            target="_blank"
            rel="noopener noreferrer"
          >
            PT. Dutakom Wibawa Putra (DNET)
          </Link>
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          Ruby on Rails Developer / Team Leader, December 2016 - May 2018
        </p>
        <p>
          DNET is a leading Internet Service Provider in Indonesia. I led the development team in building 
          enterprise-level procurement and budgeting management system. I managed the full project lifecycle 
          including sprint planning, task allocation, and delivery execution. I implemented agile methodologies 
          resulting in on-time project delivery and improved team productivity. I architected database schema 
          and API endpoints for complex business logic requirements, and mentored junior developers on best 
          practices in Ruby on Rails development and code quality standards.
        </p>
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">
          CV. Bonanza Raya Indonesia (Boraindo)
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          PHP Developer, August 2015 - February 2016
        </p>
        <p>
          Bonanza Raya Indonesia is a company that provides IT solutions for
          various industries. I developed multiple information management systems for government websites
          and built custom CMS solutions enabling non-technical staff to manage website content efficiently.
          I implemented secure authentication and authorization systems following best practices and
          collaborated with the design team to create responsive, mobile-friendly interfaces.
          I delivered projects within tight deadlines while maintaining high code quality standards.
        </p>
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">
          Guest Lectures & Publications
        </h2>
        <ul>
          <li>
            Invited as <strong>Guest Lecturer</strong> for Program Studi D3 Teknologi Informasi at Fakultas Vokasi, 
            Universitas Brawijaya (Sept–Oct 2023), delivering practical web development workshops for 100+ students 
            and sharing insights on remote front-end collaboration. 
            Details: <a href="https://vokasi.ub.ac.id/gambarkan-kompleksitas-kerja-sebagai-frontend-developer-program-studi-d3-teknologi-informasi-menggelar-praktisi-mengajar-dari-alumni-vokasi/" target="_blank" rel="noopener noreferrer">
              Universitas Brawijaya
            </a>
          </li>
          <li>
            Invited again as <strong>Guest Lecturer</strong> at Fakultas Vokasi Universitas Brawijaya, 
            sharing modern front-end practices and career insights. 
            Event highlights posted on <a href="https://www.instagram.com/p/CzfsOt0JG-1/?igsh=MWdwaTdvbDRoZXo0cw==" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
          </li>
        </ul>
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">
          Key Projects
        </h2>
        <ul>
          <li>
            <strong>Annie Awards Submission System</strong> | Clearview<br />
            Built end-to-end award submission platform using Nuxt 3, TypeScript, TailwindCSS, and Pinia<br />
            Handled complex form validations and file uploads for thousands of submissions<br />
            Link: <a href="https://my.asifa-hollywood.org/" target="_blank" rel="noopener noreferrer">my.asifa-hollywood.org</a>
          </li>
          <li>
            <strong>ASIFA-Hollywood Membership System</strong> | Clearview<br />
            Developed comprehensive membership management platform serving thousands of active members<br />
            Integrated payment processing and automated email notification systems<br />
            Link: <a href="https://members.asifa-hollywood.org/" target="_blank" rel="noopener noreferrer">members.asifa-hollywood.org</a>
          </li>
          <li>
            <strong>ASIFA-Hollywood Company Profile</strong> | Clearview<br />
            Recreated company profile landing page from legacy WordPress to Nuxt.js with modern design<br />
            Improved site performance and UX for thousands of daily visitors<br />
            Link: <a href="https://www.asifa-hollywood.org/" target="_blank" rel="noopener noreferrer">www.asifa-hollywood.org</a>
          </li>
          <li>
            <strong>CCTV Kota Malang</strong> | Personal Project<br />
            Rebranded and developed civic engagement monitoring platform using Next.js, React, TypeScript, TailwindCSS, and Zustand<br />
            Link: <a href="https://cctvkotamalang.com" target="_blank" rel="noopener noreferrer">cctvkotamalang.com</a>
          </li>
          <li>
            <strong>Flight-1 Sport</strong> | Clearview<br />
            Built comprehensive skydiving and canopy piloting training platform using Nuxt 2, Vuex, and TailwindCSS<br />
            Developed course management system with online training, webinars, and personalized coaching features<br />
            Link: <a href="https://flight-1.com" target="_blank" rel="noopener noreferrer">flight-1.com</a>
          </li>
          <li>
            <strong>Rootspace</strong> | Clearview<br />
            Developed collaborative workspace application using Vue, TypeScript, and TailwindCSS<br />
            Implemented real-time collaboration features for distributed team management<br />
            Link: <a href="https://github.com/clearview/rootspace" target="_blank" rel="noopener noreferrer">github.com/clearview/rootspace</a>
          </li>
        </ul>
      </div>
    </section>
  );
}
