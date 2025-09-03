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
          Hello, I&apos;m Fonti. I&apos;m a web developer based in Malang,
          Indonesia. I&apos;m currently working at{" "}
          <a
            href="https://clearview.team/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Clearview
          </a>{" "}
          as a Software Engineer. I experienced in building web applications
          using Vue.js, Nuxt.js, React.js, Next.js, and Tailwind CSS over the
          past 6+ years. For the backend, I&apos;m familiar with Node.js, PHP
          (Laravel), MySQL, and PostgreSQL.
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
          members spread across the globe. I&apos;m working on various projects
          and clients to help them build their web applications. I&apos;m
          responsible for developing and maintaining the frontend mostly using
          Vue.js, Nuxt.js, React.js, Next.js, and Tailwind CSS. I also work on
          the backend using Node.js, PHP (CakePHP / Laravel), MySQL, and
          PostgreSQL.
        </p>
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">
          <Link
            href="https://dnetprovider.id/"
            target="_blank"
            rel="noopener noreferrer"
          >
            PT. Dutakom Wibawa Putra (D~NET)
          </Link>
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          Ruby on Rails Developer, Dec 2016 - May 2018
        </p>
        <p>
          D~NET is a leading Internet Service Provider in Surabaya, Indonesia. I
          was responsible for developing and maintaining the backend using Ruby
          on Rails. I also worked on the frontend using HTML, CSS, and
          JavaScript. I also was responsible as a team leader for the
          Procurement & Budgeting System project.
        </p>
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">
          CV. Bonanza Raya Indonesia
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          PHP Developer, Feb 2016 - Nov 2016
        </p>
        <p>
          Bonanza Raya Indonesia is a company that provides IT solutions for
          various industries. I was responsible for developing and maintaining
          the backend using PHP (CodeIgniter / Laravel) and MySQL. I also worked
          on the frontend using HTML, CSS, and JavaScript.
        </p>
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">
          Freelancer
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          Web Developer, Aug 2014 - Jan 2016
        </p>
        <p>
          I started my career as a freelancer. I worked on various projects from
          building websites to web applications. I was responsible for
          developing and maintaining the frontend using HTML, CSS, and
          JavaScript. I also worked on the backend using PHP (CodeIgniter) and
          MySQL.
        </p>
      </div>
    </section>
  );
}
