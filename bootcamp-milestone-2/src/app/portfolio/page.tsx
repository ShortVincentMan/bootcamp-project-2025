import styles from "./portfolio.module.css";

export default function Portfolio() {
  return (
    <main className="main">
      <div className="page-wrap">
        <h1 className="page-title">Projects</h1>

        <div className={styles.grid}>
          <article className={styles.card}>
            <div className={styles.media}>
              <img src="/images/mantisblades.jpeg" alt="Mantis Blades" />
            </div>
            <div className={styles.body}>
              <div className={styles.name}>Mantis Blades</div>
              <div className={styles.date}>Arduino, Fusion, Embedded</div>
              <p className={styles.desc}>Servo-actuated prosthetic responding to wrist movement…</p>
            </div>
          </article>
          <article className={styles.card}>
            <div className={styles.media}>
              <img src="/images/trimtab.png" alt="TrimTab" />
            </div>
            <div className={styles.body}>
              <div className={styles.name}>TrimTab</div>
              <div className={styles.date}>Rhino3D, Revit</div>
              <p className={styles.desc}>A 3D color digital rendering of Dr. Eugene Tssui's proposed eco-friendly coastal housing...</p>
            </div>
          </article>
        </div>
      </div>
    </main>
  );
}
