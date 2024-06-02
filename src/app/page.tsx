import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  return (
    <main>
      <section className="home section" id="home">
        <div className="container">
          <div className="intro">
            <Image
              width={200}
              height={40}
              loading="lazy"
              src="/aditya.png"
              alt="Aditya Sahrawat Profile"
            />
            <p>Full Stack Developer</p>
            <div className="social-links">
              <Link href="https://x.com/amaditya1618" target="_blank">
                <i className="fa fa-twitter" />
              </Link>
              <Link href="https://facebook.com/sahrawataditya" target="_blank">
                <i className="fa fa-facebook" />
              </Link>
              <Link href="https://github.com/sahrawataditya" target="_blank">
                <i className="fa fa-github" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/adityasahrawat"
                target="_blank"
              >
                <i className="fa fa-linkedin" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
