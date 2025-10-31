import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "TrimTab",
};

export default function TrimTabPage() {
  return (
    <main className="main">
      <div className="page-wrap">
        <h1 className="page-title">TrimTab</h1>

        {/* Top images */}
        <div className="project-img">
          <Image
            src="/images/trimtab.png"
            alt="Rendered TrimTab"
            width={1400}
            height={900}
            style={{ width: "100%", height: "auto" }}
            priority
          />
          <div style={{ height: 12 }} />
          <Image
            src="/images/trimtab3.png"
            alt="Multiview Trimtab"
            width={1400}
            height={900}
            style={{ width: "100%", height: "auto" }}
          />
        </div>

        <div className="Mantis-Blades">
          {/* Required Program */}
          <section className="Steps">
            <h2 className="step-entry">Required Program</h2>
            <ul>
              <p className="step-entry-info">
                <li>Rhino 3D</li>
              </p>
            </ul>
          </section>

          {/* Progress */}
          <section className="Steps">
            <h2 className="step-entry">Progress</h2>
            <div className="project-img"></div>
            <h3>
              <a href="/downloads/TrimTab.3dm">Download Here</a>
            </h3>
            <p className="step-entry-info">
              Project took over two months to model and develop, starting from interpreting Dr. Tssui&apos;s architecture
              blueprints, to consulting him for the project&apos;s specifics and quirks, to finding the best program to fit the
              project&apos;s requirements. I consulted with various architecture majors and 3D modeling experts to learn Rhino 3D
              from scratch, and self-taught myself how to model the building. The building is unconventional in the sense
              that there is no rigid architecture, it is completely smooth, curved, and organic. It comes with state of
              the art wind-turbines that generate power from wind in any direction. It is 7 stories tall, and designed for
              the Cancun coastal region of Mexico.
            </p>
          </section>

          {/* Pictures grid */}
          <section className="Steps">
            <h2 className="step-entry">Pictures</h2>
            <div className="pictures-grid">
              <Image src="/images/trimtabblueprints.png" alt="" width={900} height={900} style={{ width: "100%", height: "auto" }} />
              <Image src="/images/trimtabmulti.png" alt="" width={900} height={900} style={{ width: "100%", height: "auto" }} />
              <Image src="/images/trimtab8.png" alt="" width={900} height={900} style={{ width: "100%", height: "auto" }} />
              <Image src="/images/trimtab7.png" alt="" width={900} height={900} style={{ width: "100%", height: "auto" }} />
              <Image src="/images/trimtab9.png" alt="" width={900} height={900} style={{ width: "100%", height: "auto" }} />
              <Image src="/images/trimtab5.png" alt="" width={900} height={900} style={{ width: "100%", height: "auto" }} />
              <Image src="/images/trimtab6.png" alt="" width={900} height={900} style={{ width: "100%", height: "auto" }} />
              <Image src="/images/trimtab2.png" alt="" width={900} height={900} style={{ width: "100%", height: "auto" }} />
              <Image src="/images/trimtab4.png" alt="" width={900} height={900} style={{ width: "100%", height: "auto" }} />
            </div>
          </section>

          <section className="Steps">
            <h2>
              Did you like this project? <br /> Stay Tuned for More!
            </h2>
          </section>
        </div>
      </div>
    </main>
  );
}
