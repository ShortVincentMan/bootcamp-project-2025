// Instructed to wipe this page cleannnn
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className="main">
      <div className="page-wrap">
        <h1 className="page-title">Home</h1>


        <div className={styles.about}>
          <div className={styles.aboutImage}>
            <img src="/images/me.png" alt="Photo of Vincent Le" />
          </div>

          <div className={styles.aboutCard}>
            <div className={styles.aboutImage}><strong>About Me</strong></div>

            <div className={styles.aboutText}>
              <p>
                Hi! I'm <strong>Vincent Le</strong> and I'm a{" "}
                <strong>Computer Engineering</strong> student at{" "}
                <em>Cal Poly San Luis Obispo</em>. I have a passion for building
                innovative, hands-on projects that bridges hardware and software.
                I also love playing video games <em>(Fallout, Terraria, Dark Souls,
                and Cyberpunk)</em>, working out, wrestling, and listening alt rock.
              </p>

              <p>
                My work ranges from designing <em>prosthetic robotics</em> and{" "}
                <em>augmented reality systems</em> to developing{" "}
                <em>automation tools</em> that solve real-world problems. I also
                have work experience in Information Technology systems and have
                experience working in IT departments and leading teams of people in
                a project-based work environment. I love combining creativity,
                engineering, and sustainability to make ideas come alive, whether
                through 3D printing, coding, or collaborative design.
              </p>

              <div className={styles.gallery}>
                <Image 
                src={"/images/me-1.jpg"} 
                alt={"Photo of Vincent Le at the beach"}
                width={800} 
                height={1000} 
                />
                <Image 
                src={"/images/me-2.JPG"}  
                alt={"Hiking all the way up to the peak of Yosemite"} 
                width={800} 
                height={1000} 
                />
                <Image 
                src={"/images/step5.png"}  
                alt={"Wielding Giant Greatsword + Mantis Blades!!!"} 
                width={800} 
                height={1000} 
                />
                <Image 
                src={"/images/me-4.jpeg"} 
                alt={"Victorious after a wrestling match, win by pin"} 
                width={800} 
                height={1000} 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
