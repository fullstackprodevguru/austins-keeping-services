"use client";

import { FormEvent, useState } from "react";

const services = [
  ["01", "Web applications", "Intuitive, high-performing products that put your customers and teams first."],
  ["02", "Backend engineering", "Secure foundations, clean architecture, and systems built to scale."],
  ["03", "API & integrations", "Connect the tools your business depends on—without the manual work."],
  ["04", "Technology consulting", "Clear technical direction for teams ready to make better decisions, faster."],
];

const Arrow = () => <span className="arrow">↗</span>;

export default function Home() {
  const [sent, setSent] = useState(false);
  const submit = (e: FormEvent<HTMLFormElement>) => { e.preventDefault(); setSent(true); };
  return (
    <main>
      <section className="hero" id="top">
        <nav className="nav shell">
          <a className="brand" href="#top"><span>AK</span> AUSTINS<br />KEEPING SERVICES</a>
          <div className="navlinks"><a href="#services">What we do</a><a href="#approach">Our approach</a><a href="#contact">Contact</a></div>
          <a className="nav-cta" href="tel:+16029076686">Let&apos;s talk <Arrow /></a>
        </nav>
        <div className="hero-grid shell">
          <div className="hero-copy">
            <p className="eyebrow"><i /> SOFTWARE PARTNERS FOR AMBITIOUS BUSINESSES</p>
            <h1>Software that<br /><em>keeps pace</em> with<br />your business.</h1>
            <p className="lede">We design and build dependable digital systems for organizations ready to work smarter, move faster, and grow without friction.</p>
            <a className="button light" href="#contact">Start a conversation <Arrow /></a>
          </div>
          <div className="hero-art" aria-label="Abstract software visualization">
            <div className="orb orb-one" /><div className="orb orb-two" /><div className="line line-one" /><div className="line line-two" />
            <div className="code-card"><span className="dots">•••</span><span>systems.status</span><strong>online</strong></div>
            <div className="signal"><b>01</b><span>Reliable<br />by design</span></div>
          </div>
        </div>
        <div className="hero-footer shell"><span>SCROLL TO EXPLORE</span><span className="scroll-line" /><span>EL MIRAGE, ARIZONA</span></div>
      </section>

      <section className="intro shell" id="approach">
        <p className="eyebrow dark"><i /> BUILT FOR THE WAY YOU WORK</p>
        <div className="intro-grid"><h2>Good software doesn&apos;t just solve a problem.<br /><em>It changes what&apos;s possible.</em></h2><p>At Austin&apos;s Keeping, we combine thoughtful strategy with practical engineering. The result is technology that feels simple to use, strong under pressure, and ready for whatever comes next.</p></div>
        <div className="metrics"><div><b>Custom</b><span>built for your operation</span></div><div><b>Human</b><span>clear, collaborative process</span></div><div><b>End-to-end</b><span>from idea to ongoing support</span></div></div>
      </section>

      <section className="services" id="services"><div className="shell"><div className="section-head"><p className="eyebrow dark"><i /> HOW WE HELP</p><p>Focused expertise, connected thinking.</p></div><div className="service-list">{services.map(([n,t,d]) => <article className="service" key={n}><span className="number">{n}</span><h3>{t}</h3><p>{d}</p><Arrow /></article>)}</div></div></section>

      <section className="statement"><div className="shell statement-grid"><p className="eyebrow"><i /> A DIFFERENT KIND OF TECH PARTNER</p><h2>Complex behind<br />the scenes.<br /><em>Effortless</em> where<br />it matters.</h2><p className="statement-copy">From first sketch to long-term support, we make the process direct and transparent. No jargon. No hand-offs. Just a committed team bringing your best ideas to life.</p></div></section>

      <section className="contact shell" id="contact"><div className="contact-top"><p className="eyebrow dark"><i /> LET&apos;S BUILD SOMETHING USEFUL</p><h2>Have a challenge<br />worth <em>solving?</em></h2><p>Tell us what you&apos;re working toward. We&apos;ll bring the technical perspective.</p></div><form onSubmit={submit} className="contact-form">{sent ? <div className="thank-you"><b>Thanks — we&apos;ll be in touch.</b><span>Your message is on its way to our team.</span></div> : <><label>Your name<input required placeholder="Jane Smith" /></label><label>Email address<input required type="email" placeholder="jane@company.com" /></label><label className="wide">What can we help with?<textarea required placeholder="A quick note about your project..." /></label><button className="button dark" type="submit">Send inquiry <Arrow /></button></>}</form></section>

      <footer><div className="shell footer-grid"><a className="brand footer-brand" href="#top"><span>AK</span> AUSTIN&apos;S<br />KEEPING</a><div><p>12705 W Voltaire Ave<br />El Mirage, AZ 85335</p><a href="tel:+16029076686">+1 (602) 907-6686</a></div><div><a href="#services">Services</a><a href="#approach">Approach</a><a href="#contact">Contact</a></div></div><div className="shell copyright"><span>© 2026 Austin&apos;s Keeping Services LLC</span><span>Custom software. Kept simple.</span></div></footer>
    </main>
  );
}
