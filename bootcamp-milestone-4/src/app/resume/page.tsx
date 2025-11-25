import styles from "./resume.module.css";
import React from "react";

export default function Resume() {
  return (
    <main className="main">
      <div className="page-wrap">
        <h1 className="page-title">Resume</h1>
        <div className={styles.resume}>
            <a href="../downloads/Resume_Vincent_Le.pdf" style={{ fontSize: "16px", textAlign: "center", gap: "24px" }}>Download Here</a>
            {/* Education */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Education</h2>
            <div className={styles.sectionBody}>
              <div className={styles.entry}>
                <h3 className={styles.entryTitle}>Bachelor of Science in Computer Engineering</h3>
                <div className={styles.entryInfo}>
                  California Polytechnic State University, San Luis Obispo | Expected Graduation May 2028
                </div>
                <div className={styles.entrypoints}>
                  Recipient of Robert T. Nahas Scholarship (2025) and PG&E Better Together STEM Scholarship (2025)
                </div>
                <div className={`${styles.entrypoints}`}>
                  Relevant Coursework: Data Structures and Algorithms, Object-Oriented Programming, Digital Logic Design
                </div>
              </div>
            </div>
          </section>

          {/* Experience */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Experience</h2>
            <div className={styles.sectionBody}>
            {/* section */}
            <div className={styles.entry}>
              <h3 className={styles.entryTitle}>Hack4Impact Cal Poly</h3>
              <div className={styles.entryInfo}>Software Developer | November 2025 - Present</div>
              <ul className={styles.points}>
                <li>Built full-stack web apps with Next.js, TypeScript, MongoDB, and React for Hack4Impact bootcamp tools</li>
                <li>Collaborated in agile teams to deliver scalable backends and responsive UIs for nonprofit organizations</li>
              </ul>
            </div>
            {/* section */}
            <div className={styles.entry}>
              <h3 className={styles.entryTitle}>Cal Poly Racing</h3>
              <div className={styles.entryInfo}>Formula SAE Firmware Developer | September 2025 - Present</div>
              <ul className={styles.points}>
                <li>Develop STM32 CANBoard firmware in FreeRTOS, designing task structures and message protocols in C</li>
                <li>Perform board-level assembly and electrical verification to ensure CAN network reliability and integrity</li>
                <li>Participated in design reviews and contributed to the overall vehicle architecture</li>
              </ul>
            </div>
            {/* section */}
            <div className={styles.entry}>
              <h3 className={styles.entryTitle}>Cold Stone Creamery</h3>
              <div className={styles.entryInfo}>Store Associate | February 2025 - September 2025 </div>
              <ul className={styles.points}>
                <li>Provided exceptional customer service in a fast-paced environment, ensuring a positive experience for all guests</li>
                <li>Processed cash, card, and mobile transactions via the POS system efficiently w/ minimal errors.</li>
                <li>Prepared custom orders with precision and adherence to Cold Stone's signature techniques.</li>
              </ul>
            </div>
            {/* section */}
            <div className={styles.entry}>
              <h3 className={styles.entryTitle}>LevelUp MSP (Managed Service Provider)</h3>
              <div className={styles.entryInfo}>Information Technology Engineering Intern | June 2024 - August 2025</div>
              <ul className={styles.points}>
                <li>Deployed network infrastructure (routers, switches, NAS) for SMB clients, improving workflow efficiency</li>
                <li>Maintained backup systems with Azure, ensuring data security and recovery for 10+ client businesses</li>
                <li>Troubleshot and resolved repair tickets and BSOD issues on Windows computers using root-cause analysis</li>
              </ul>
            </div>
            {/* section */}
            <div className={styles.entry}>
              <h3 className={styles.entryTitle}>PilotCity</h3>
              <div className={styles.entryInfo}>Program Development Intern | May 2024 - October 2024</div>
              <ul className={styles.points}>
                <li>Developed and published a Python file cleaner on GitHub, optimizing PC storage efficiency by 30%</li>
                <li>Pitched project concepts to employers, securing a fellowship with Tssui Design and Research</li>
                <li>Modeled wave-resistant building structures with Tssui to test sustainable coastal architectural concepts</li>
              </ul>
            </div>
            {/* section */}
            <div className={styles.entry}>
              <h3 className={styles.entryTitle}>City of Fremont (Aqua Adventure)</h3>
              <div className={styles.entryInfo}>Swim Lesson Lead | May 2022 - August 2025</div>
              <ul className={styles.points}>
                <li>Led 15+ instructors to deliver inclusive swim lessons for 200+ clients and students per summer season</li>
                <li>Designed lesson plans for students with diverse needs, including individuals with disabilities</li>
                <li>Improved client retention by tailoring personal communications and services to families and guests</li>
              </ul>
            </div>
            </div>
          </section>

          {/* Projects */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Projects</h2>
            <div className={styles.sectionBody}>
              <div className={styles.entry}>
                <h3 className={styles.entryTitle}>Mantis Blades</h3>
                <div className={styles.entryInfo}>Arduino, Autodesk Fusion, Embedded Systems</div>
                <ul className={styles.points}>
                  <li>Embedded systems servo-actuated mechanical prosthetic that responds based on wrist movement</li>
                  <li>Displayed at Fremont Engineering Expo (2025) and Bay Area Maker Faire (2025) under Berbawy Makers</li>
                </ul>
              </div>

              <div className={styles.entry}>
                <h3 className={styles.entryTitle}>Augmented Reality Sand Table</h3>
                <div className={styles.entryInfo}>Unity, Kinect, Linux, Motion Sensors</div>
                <ul className={styles.points}>
                  <li>Simulated sandbox designed to project real-time topography change using motion-sensing input devices</li>
                </ul>
              </div>

              <div className={styles.entry}>
                <h3 className={styles.entryTitle}>CAD Organic Architecture “Trimtab”</h3>
                <div className={styles.entryInfo}>Arduino, Autodesk Fusion, Embedded Systems</div>
                <ul className={styles.points}>
                  <li>Organic wave-resistant tower designed for coastal housing zones to promote ecological development</li>
                </ul>
              </div>

              <div className={styles.entry}>
                <h3 className={styles.entryTitle}>File Cleaner Utility</h3>
                <div className={styles.entryInfo}>Python, Git, HTML, SQL</div>
                <ul className={styles.points}>
                  <li>Maintenance-based application to optimize PC storage based on user preferences and run file repairs</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Coursework */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Coursework</h2>
            <div className={styles.sectionBody}>
              <div className={styles.entry}>
                <ul className={styles.courseList}>
                  <li>Introduction to Computing</li>
                  <li>Intro to Computer Science</li>
                  <li>Hack4Impact HTML, CSS, & Git Starter Pack</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Skills */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Skills</h2>
            <div className={styles.sectionBody}>
              <div className={styles.entry}>
                <ul className={styles.skillList}>
                  <li>Python</li><li>C++</li><li>Unity</li><li>Git</li><li>Node.js</li>
                  <li>SQL</li><li>JavaScript</li><li>Linux</li><li>3D Printing</li>
                  <li>Stable Diffusion</li><li>Autodesk Fusion</li><li>ITGlue</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Activities */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Activities</h2>
            <div className={styles.sectionBody}>
              <div className={styles.entry}>
                <h3 className={styles.entryTitle}>Cal Poly</h3>
                <ul className={styles.entryInfo}>
                  <li>Hack4Impact</li>
                  <li>Cal Poly Racing FSAE</li>
                  <li > <a href="https://photos.app.goo.gl/81fXMZpfokXdwvAFA">Lion Dancing Team</a></li>
                  <li>Vietnamese Student Association</li>
                  <li>Computer Engineering Society</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
