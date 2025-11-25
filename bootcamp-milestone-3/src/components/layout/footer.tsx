// src/components/Footer.tsx

import Link from "next/link";
import styles from "./footer.module.css";

export default function Footer() {
  const year = new Date().getFullYear();
  
  const links = [
    { href: "/", label: "Home" },
    { href: "/blog", label: "Blog" },
    { href: "/portfolio", label: "Projects" },
    { href: "/resume", label: "Resume" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.inner}>
        <div className={styles.brand}>© {year} ShortVincentMan Personal Website | All rights reserved</div>
        <nav aria-label="Footer" className={styles.nav}>
          {links.map((l) => (
            <Link key={l.href} href={l.href} className={styles.navLink}>
              {l.label}
            </Link>
          ))}
        </nav>
            <div className={styles.socials}>
                <a
                href="https://github.com/ShortVincentMan"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="GitHub"
                className={styles.socialLink}>
                    <svg viewBox="0 0 24 24" className={styles.icon} aria-hidden>
                        <path fill="currentColor" d="M12 2C6.48 2 2 6.58 2 12.26c0 4.52 2.87 8.35 6.85 9.7.5.1.69-.22.69-.49 0-.24-.01-.87-.01-1.7-2.79.62-3.38-1.37-3.38-1.37-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.04 1.53 1.04.89 1.56 2.33 1.11 2.9.85.09-.66.35-1.11.63-1.37-2.23-.26-4.57-1.14-4.57-5.08 0-1.12.39-2.03 1.03-2.74-.1-.26-.45-1.3.1-2.7 0 0 .84-.27 2.75 1.04A9.2 9.2 0 0 1 12 7.52c.85 0 1.7.12 2.5.36 1.9-1.31 2.74-1.04 2.74-1.04.56 1.4.21 2.44.11 2.7.64.71 1.03 1.62 1.03 2.74 0 3.95-2.34 4.82-4.58 5.07.36.32.68.95.68 1.92 0 1.38-.01 2.49-.01 2.83 0 .27.18.6.69.49 3.98-1.35 6.85-5.18 6.85-9.7C22 6.58 17.52 2 12 2Z"/>
                    </svg>
                </a>
                <a
                    href="https://www.linkedin.com/in/vincentrle"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="LinkedIn"
                    className={styles.socialLink}>
                    <svg viewBox="0 0 24 24" className={styles.icon} aria-hidden>
                        <path fill="currentColor" d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4v16h-4V8zm7 0h3.8v2.2h.05c.53-1 1.83-2.2 3.77-2.2 4.03 0 4.78 2.65 4.78 6.1V24h-4v-7.3c0-1.74-.03-3.98-2.43-3.98-2.44 0-2.82 1.9-2.82 3.86V24h-4V8z"/>
                    </svg>
                </a>
            </div>
      </div>
    </footer>
  );
}
