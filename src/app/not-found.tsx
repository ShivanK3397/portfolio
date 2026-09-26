import Link from "next/link";

export default function NotFound() {
  return <section className="page-heading not-found"><p className="eyebrow">404 / A small detour</p><h1>Nothing <span className="serif-word">here yet.</span></h1><p className="page-intro">This page doesn’t exist. Let’s get you back to familiar ground.</p><Link href="/" className="button">Back home <span aria-hidden="true">→</span></Link></section>;
}
