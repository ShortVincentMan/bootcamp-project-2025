export default function Resume() {
  return (
    <main>
      <h1 className="page-title">Resume</h1>

      <a href="../downloads/Le_Vincent_Resume.pdf" download>
        Download
      </a>

      <div className="resume">
        <section className="section">
          <h2 className="section-title">Education</h2>
          <div className="entry">
            <h3 className="entry-title">Bachelor of Science in Computer Engineering</h3>
            <div className="entry-info">
              California Polytechnic State University, San Luis Obispo | Expected Graduation May 2029
            </div>
          </div>
        </section>

        <section className="section">
          <h2 className="section-title">Experience</h2>

          <div className="entry">
            <h3 className="entry-title">LevelUp MSP (Managed Service Provider)</h3>
            <div className="entry-info">Information Technology Engineering Intern | June 2024 - August 2025</div>
            <ul className="entry-description entry-points">
              <li>Deployed network infrastructure (routers, switches, NAS) for SMB clients, improving workflow efficiency</li>
              <li>Maintained backup systems with Azure, ensuring data security and recovery for 10+ client businesses</li>
              <li>Troubleshot and resolved repair tickets and BSOD issues on Windows computers using root-cause analysis</li>
            </ul>
          </div>

          <div className="entry">
            <h3 className="entry-title">PilotCity</h3>
            <div className="entry-info">Program Development Intern | May 2024 - October 2024</div>
            <ul className="entry-description entry-points">
              <li>Developed and published a Python file cleaner on GitHub, optimizing PC storage efficiency by 30%</li>
              <li>Pitched project concepts to employers, securing a fellowship with Tssui Design and Research</li>
              <li>Modeled wave-resistant building structures with Tssui to test sustainable coastal architectural concepts</li>
            </ul>
          </div>

          <div className="entry">
            <h3 className="entry-title">City of Fremont (Aqua Adventure)</h3>
            <div className="entry-info">Swim Lesson Lead | May 2022 - August 2025</div>
            <ul className="entry-description entry-points">
              <li>Led 15+ instructors to deliver inclusive swim lessons for 200+ clients and students per summer season</li>
              <li>Designed lesson plans for students with diverse needs, including individuals with disabilities</li>
              <li>Improved client retention by tailoring personal communications and services to families and guests</li>
            </ul>
          </div>
        </section>

        <section className="section">
          <h2 className="section-title">Projects</h2>

          <div className="entry">
            <h3 className="entry-title">Mantis Blades</h3>
            <div className="entry-info">Arduino, Autodesk Fusion, Embedded Systems</div>
            <ul className="entry-description">
              <li>Embedded systems servo-actuated mechanical prosthetic that responds based on wrist movement</li>
              <li>Displayed at Fremont Engineering Expo (2025) and Bay Area Maker Faire (2025) under Berbawy Makers</li>
            </ul>
          </div>

          <div className="entry">
            <h3 className="entry-title">Augmented Reality Sand Table</h3>
            <div className="entry-info">Unity, Kinect, Linux, Motion Sensors</div>
            <ul className="entry-description">
              <li>Simulated sandbox designed to project real-time topography change using motion-sensing input devices</li>
            </ul>
          </div>

          <div className="entry">
            <h3 className="entry-title">CAD Organic Architecture “Trimtab”</h3>
            <div className="entry-info">Arduino, Autodesk Fusion, Embedded Systems</div>
            <ul className="entry-description">
              <li>Organic wave-resistant tower designed for coastal housing zones to promote ecological development</li>
            </ul>
          </div>

          <div className="entry">
            <h3 className="entry-title">File Cleaner Utility</h3>
            <div className="entry-info">Python, Git, HTML, SQL</div>
            <ul className="entry-description">
              <li>Maintenance-based application to optimize PC storage based on user preferences and run file repairs</li>
            </ul>
          </div>
        </section>

        <section className="section">
          <h2 className="section-title">Coursework</h2>
          <div className="entry">
            <ul className="course-list">
              <li>Introduction to Computing</li>
              <li>Intro to Computer Science</li>
              <li>Hack4Impact HTML, CSS, & Git Starter Pack</li>
            </ul>
          </div>
        </section>

        <section className="section">
          <h2 className="section-title">Skills</h2>
          <div className="entry">
            <ul className="skill-list">
              <li>Python</li><li>C++</li><li>Unity</li><li>Git</li><li>Node.js</li>
              <li>SQL</li><li>JavaScript</li><li>Linux</li><li>3D Printing</li>
              <li>Stable Diffusion</li><li>Autodesk Fusion</li><li>ITGlue</li>
            </ul>
          </div>
        </section>

        <section className="section">
          <h2 className="section-title">Activities</h2>
          <div className="entry">
            <h3 className="entry-title">Cal Poly</h3>
            <ul className="entry-info">
              <li>Hack4Impact</li>
              <li>Cal Poly Racing FSAE</li>
              <li>Lion Dancing Team</li>
              <li>Vietnamese Student Association</li>
              <li>Computer Engineering Society</li>
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
}
