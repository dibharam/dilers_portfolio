'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './sidebar-slim.module.css';

const NAV = [
  { href: '/', label: 'Home', icon: HomeIcon },
  { href: '/about', label: 'About', icon: UserIcon },
  { href: '/projects', label: 'Projects', icon: BriefcaseIcon },
  { href: '/blog', label: 'Blog', icon: FolderIcon },
  { href: '/contact', label: 'Contact', icon: MailIcon },
];

export default function SidebarSlim() {
  const pathname = usePathname();
  const isActive = (href) => pathname === href || pathname.startsWith(href + '/');

  return (
    <aside className={styles.rail} aria-label="Main sidebar">
      {/* Brand */}
      <Link href="/" className={styles.brand} aria-label="Home">
        <div className={styles.logo}>DB</div>
        <span className={styles.brandText}>di.bhar</span>
      </Link>

      {/* Nav */}
      <nav className={styles.nav}>
        {NAV.map(({ href, label, icon: Icon }) => (
          <Link
            key={href}
            href={href}
            className={`${styles.item} ${isActive(href) ? styles.active : ''}`}
            aria-label={label}
            title={label}
          >
            <Icon className={styles.icon} />
            <span className={styles.label}>{label}</span>
          </Link>
        ))}
      </nav>

      {/* Socials at bottom */}
      <div className={styles.socials}>
        <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className={styles.item} aria-label="LinkedIn" title="LinkedIn">
          <LinkedInIcon className={styles.icon} />
          <span className={styles.label}>LinkedIn</span>
        </a>
        <a href="https://github.com/" target="_blank" rel="noreferrer" className={styles.item} aria-label="GitHub" title="GitHub">
          <GitHubIcon className={styles.icon} />
          <span className={styles.label}>GitHub</span>
        </a>
        <a href="mailto:you@site.com" className={styles.item} aria-label="Email" title="Email">
          <MailIcon className={styles.icon} />
          <span className={styles.label}>Email</span>
        </a>
      </div>
    </aside>
  );
}

/* --- tiny inline SVG icons --- */
function HomeIcon({ className }) {
  return <svg viewBox="0 0 24 24" className={className}><path d="M3 10.5 12 3l9 7.5V21a1 1 0 0 1-1 1h-6v-6h-4v6H4a1 1 0 0 1-1-1v-10.5z"/></svg>;
}
function UserIcon({ className }) {
  return <svg viewBox="0 0 24 24" className={className}><path d="M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5Zm0 2c-5 0-9 3-9 6v2h18v-2c0-3-4-6-9-6z"/></svg>;
}
function BriefcaseIcon({ className }) {
  return <svg viewBox="0 0 24 24" className={className}><path d="M9 3h6a2 2 0 0 1 2 2v2h4a1 1 0 0 1 1 1v11a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a1 1 0 0 1 1-1h4V5a2 2 0 0 1 2-2Zm0 4h6V5H9Z"/><path d="M3 11h18v2H3z"/></svg>;
}
function FolderIcon({ className }) {
  return <svg viewBox="0 0 24 24" className={className}><path d="M3 6a2 2 0 0 1 2-2h5l2 2h7a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"/></svg>;
}
function MailIcon({ className }) {
  return <svg viewBox="0 0 24 24" className={className}><path d="M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2Zm2 0 8 6 8-6Zm16 12V8l-8 6L4 8v10Z"/></svg>;
}
function LinkedInIcon({ className }) {
  return <svg viewBox="0 0 24 24" className={className}><path d="M4.98 3.5A2.5 2.5 0 1 1 2.5 6 2.5 2.5 0 0 1 4.98 3.5ZM3 8h4v13H3Zm7 0h3.8v1.8h.06c.53-1 1.83-2.06 3.77-2.06 4.03 0 4.78 2.58 4.78 5.94V21h-4v-5.4c0-1.29-.02-2.95-1.8-2.95-1.8 0-2.07 1.4-2.07 2.85V21h-4Z"/></svg>;
}
function GitHubIcon({ className }) {
  return <svg viewBox="0 0 24 24" className={className}><path d="M12 .5a12 12 0 0 0-3.79 23.4c.6.1.82-.26.82-.58v-2.1c-3.34.73-4.04-1.61-4.04-1.61-.55-1.38-1.35-1.75-1.35-1.75-1.1-.76.09-.75.09-.75 1.22.09 1.86 1.25 1.86 1.25 1.08 1.85 2.83 1.32 3.52 1.01.11-.79.42-1.32.76-1.62-2.67-.3-5.48-1.34-5.48-5.98 0-1.32.47-2.39 1.24-3.23-.12-.3-.54-1.51.12-3.16 0 0 1.01-.32 3.3 1.23a11.4 11.4 0 0 1 6 0c2.28-1.55 3.29-1.23 3.29-1.23.66 1.65.24 2.86.12 3.16.78.84 1.24 1.91 1.24 3.23 0 4.65-2.81 5.68-5.49 5.98.43.37.81 1.1.81 2.23v3.3c0 .32.22.69.82.57A12 12 0 0 0 12 .5Z"/></svg>;
}
