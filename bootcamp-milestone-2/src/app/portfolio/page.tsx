import Image from "next/image";
import Link from "next/link";

export default function Portfolio() {
  return (
    <main className="page-wrap">
      <h1 className="page-title">Portfolio</h1>

      <div className="projects">
        {/* Project 1 */}
        <article className="project">
          <div className="project-details">
            <Link href="/portfolio/mantisblades" className="project-img">
              <Image
                src="/images/mantisblades.jpeg"
                alt="Cyberpunk Mantis Blades"
                width={800}
                height={1000}
              />
            </Link>

            <h3 className="project-name">Mantis Blades</h3>
            <p className="project-date">Completion: May 1, 2025</p>
            <p className="project-description">
              3D Printed &amp; working recreation of Arasaka Mantis Blades from Cyberpunk 2077...
            </p>

            <Link href="/portfolio/mantisblades"><h4>Learn More!</h4></Link>
          </div>
        </article>

        {/* Project 2 */}
        <article className="project">
          <div className="project-details">
            <Link href="/portfolio/trimtab" className="project-img">
              <Image
                src="/images/trimtab.png"
                alt="TrimTab Building"
                width={800}
                height={600}
              />
            </Link>

            <h3 className="project-name">TrimTab</h3>
            <p className="project-date">Completion: October 2, 2024</p>
            <p className="project-description">
              A 3D color digital rendering of Dr. Eugene Tssui's proposed eco-friendly coastal housing...
            </p>

            <Link href="/portfolio/trimtab"><h4>Learn More!</h4></Link>
          </div>
        </article>
      </div>
    </main>
  );
}
