import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Work',
  description: 'A summary of my work and contributions.',
};

export default function Page() {
  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">work</h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          Hello, I&apos;m Fonti. I&apos;m a web developer based in Malang,
          Indonesia. I&apos;m currently working at{' '} <a href="https://clearview.team/" target="_blank" rel="noopener noreferrer">Clearview</a> as a Frontend Developer. I experienced in building web applications using Vue.js, Nuxt.js, React.js, Next.js, and Tailwind CSS over the past 6+ years. For the backend, I&apos;m familiar with Node.js, PHP (Laravel), MySQL, and PostgreSQL.
        </p>
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">Clearview</h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          full-stack developer, may 2018 - present
        </p>
        <p>
          Clearview is a software development company that focuses on building
          web and mobile applications. I&apos;m working on various projects
          using Vue.js, PHP, and MySQL. I&apos;m also responsible for
          maintaining and improving the existing projects.
        </p>

      </div>
    </section>
  );
}
