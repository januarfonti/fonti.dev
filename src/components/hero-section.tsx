import Link from "next/link"

export default function HeroSection() {
  return (
    <section className="prose prose-neutral dark:prose-invert">
      <p className="text-base leading-7">
        Hey there! I'm a Software Engineer from Malang, Indonesia, with over a
        decade of experience crafting digital solutions. Currently, I'm part of
        the team at{" "}
        <Link
          href="https://clearview.team/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Clearview
        </Link>
        , where I get to build things that make a real difference in people's
        lives.
      </p>
      <p className="text-base leading-7">
        For the past 7+ years, I've been working remotely with clients from
        around the globe, bringing diverse perspectives to every project I
        touch. When I'm not coding, you'll find me cycling through the streets
        of Malang, exploring new coffee shops, or capturing moments through my
        camera lens.
      </p>
      <p className="text-base leading-7">
        This corner of the internet is where I share my journey – from tech
        insights and remote work experiences to travel stories and the
        occasional coffee recommendation. Feel free to stick around and explore!
      </p>
    </section>
  );
}
