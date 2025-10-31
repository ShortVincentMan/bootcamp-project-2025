export default function Contact() {
  return (
    <main>
      <h1 className="page-title">Contact</h1>
      <p>Need to reach out?</p>
      <p>Fill out the following information below!</p>
      <p>
        Or email me at{" "}
        <a href="mailto:vinvyle06@gmail.com">vinvyle06@gmail.com</a>
      </p>

      <form id="contact-form">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="Name" placeholder="Name" />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="Email" placeholder="Email" />

        <h3>Message</h3>
        <textarea name="Message" rows={6} />

        <input type="submit" />
      </form>
    </main>
  );
}
