import Typing from "./components/typing";
import { LatestBlog } from "./components/latestblog";

export default function Page() {
  return (
    <section className="space-y-8">
      <Typing />
      <div className="prose prose-neutral dark:prose-invert lowercase">
      <p>
        Unveiling the life of a software developer based in Malang, Indonesia, currently contributing to the innovative world of{' '}
        <a
          href="https:/clearview.team/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Clearview
        </a>{' '}
        as a Frontend Engineer. Dedicated to building things that simplify lives.
      </p>
      <p>
        Embracing the roles of a cyclist, coffee enthusiast, traveler, photography lover, and web developer.
      </p>
      <p>
        This space serves as a canvas for personal and travel narratives, alongside insights into software development, technology, and more.
      </p>

      </div>
      <LatestBlog />
    </section>
  );
}
