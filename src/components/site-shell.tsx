import Link from "next/link";
import { contactLinks, profile } from "@/content/portfolio";
import { Navigation } from "./navigation";

export function Header() {
  return <header className="site-header container"><Link href="/" className="wordmark" aria-label={`${profile.name} — home`}><span className="brand-mark" aria-hidden="true">*</span>{profile.name}<span className="brand-dot">.</span></Link><Navigation /></header>;
}

export function Footer() {
  return <footer className="site-footer container"><div><Link href="/" className="footer-name">{profile.name}<span className="brand-dot">.</span></Link><p>Thoughtfully built. Always evolving.</p></div><div className="footer-right">{contactLinks.length > 0 && <nav aria-label="Contact links" className="contact-links">{contactLinks.map(link => <a key={link.label} href={link.href}>{link.label} <span aria-hidden="true">↗</span></a>)}</nav>}<p>© {new Date().getFullYear()} {profile.name}</p></div></footer>;
}

export function ContactSection() {
  return <section className="contact-section" aria-labelledby="contact-title"><div><p className="eyebrow">Get in touch</p><h2 id="contact-title">Let’s start a conversation<span className="brand-dot">.</span></h2></div>{contactLinks.length ? <div className="contact-links">{contactLinks.map(link => <a className="text-link" key={link.label} href={link.href}>{link.label} <span aria-hidden="true">↗</span></a>)}</div> : <p className="muted">Contact details coming soon.</p>}</section>;
}
