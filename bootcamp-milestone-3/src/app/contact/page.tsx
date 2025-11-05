import styles from "./contact.module.css";

export default function Contact() {
  return (
    <main className="main">
      <div className="page-wrap">
        <h1 className="page-title">Contact</h1>
        <div className={styles.wrap}>
          <p>Need to reach out?</p>
          <p>Fill out the form below, or email <a href="mailto:vinvyle06@gmail.com">vinvyle06@gmail.com</a></p>

          <form id="contact-form" className={styles.form}>
            <label htmlFor="name" className={styles.label}>Name</label>
            <input id="name" name="Name" placeholder="Name" className={styles.input} />

            <label htmlFor="email" className={styles.label}>Email</label>
            <input id="email" type="email" name="Email" placeholder="Email" className={styles.input} />

            <label htmlFor="message" className={styles.label}>Message</label>
            <textarea id="message" name="Message" rows={6} className={styles.textarea} />

            <button type="submit" className={styles.submit}>Submit</button>
          </form>
        </div>
      </div>
    </main>
  );
}
