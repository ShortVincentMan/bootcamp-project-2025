import React from "react";
import styles from "./navbar.module.css";
import Link from "next/link";

export default function Navbar() {
  return (
    // replace the content inside <header> with your own styles/classes as needed
    <header className={styles.navbar}>
      <h1 className={styles.logo}>
        <Link href="/">Vincent Le's Personal Website</Link>
      </h1>

      <nav aria-label="Primary">
        <ul className={styles.navList}>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/blog">Blog</Link></li>

          <li className={styles.dropdown}>
            <Link
              href="/portfolio"
              className={styles.dropdownToggle}
              aria-haspopup="true"
              aria-expanded="false"
            >
              Portfolio
            </Link>
            <ul className={styles.dropdownContent} role="menu">
              <li role="none">
                <Link role="menuitem" href="./portfolio/mantisblades">
                  Mantis Blades
                </Link>
              </li>
              <li role="none">
                <Link role="menuitem" href="./portfolio/trimtab">
                  TrimTab
                </Link>
              </li>
            </ul>
          </li>
          <li><Link href="/resume">Resume</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}
