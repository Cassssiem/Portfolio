import { projects } from "./projects";
import Image from "next/image";
import { existsSync } from "node:fs";
import path from "node:path";

function Wordmark({ footer = false }) {
  return (
    <a
      className="wordmark"
      href="#top"
      aria-label={footer ? "Back to the top" : "Abduraghmaan Cassiem — go to top"}
    >
      AC<span>.</span>
    </a>
  );
}

function ProjectCard({ project }) {
  const hasProjectImage = project.image && existsSync(path.join(process.cwd(), "public", project.image.slice(1)));

  return (
    <article className="project-card">
      <a
        className={`project-visual ${project.theme}${hasProjectImage ? " has-image" : ""}`}
        href={project.link}
        target="_blank"
        rel="noreferrer"
        aria-label={`View ${project.title} on GitHub (opens in a new tab)`}
      >
        {hasProjectImage ? (
          <Image className="project-image" src={project.image} alt={`${project.title} interface`} fill sizes="(max-width: 680px) 100vw, (max-width: 1050px) 50vw, 33vw" />
        ) : (
          <>
            <span className="visual-number">{project.number} / PROJECT</span>
            <span className="visual-symbol" aria-hidden="true">{project.symbol}</span>
          </>
        )}
        <span className="visual-open" aria-hidden="true">↗</span>
      </a>
      <div className="project-meta">
        <span>{project.category}</span>
        <span>{project.stack}</span>
      </div>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
    </article>
  );
}

export default function Home() {
  const formId = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID;
  const hasProfilePhoto = existsSync(path.join(process.cwd(), "public", "abduraghmaan-cassiem.jpg"));

  return (
    <>
      <header className="topbar">
        <Wordmark />
        <nav aria-label="Main navigation">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a className="nav-contact" href="#contact">
            Let’s talk <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow"><span className="status-dot" /> PORTFOLIO · 2026</p>
            <h1 id="hero-title">Ideas made<br /> <span className="serif">into things.</span></h1>
            <p className="intro">
              A home for the projects I’ve built, the things I’ve learned, and what I’m exploring next.
            </p>
            <a className="text-link" href="#work">Explore my work <span aria-hidden="true">↓</span></a>
          </div>
          <div className="hero-art" aria-hidden="true">
            <div className="art-orbit orbit-one" />
            <div className="art-orbit orbit-two" />
            <div className="art-core">✳</div>
            <span className="art-note note-top">CURIOUS BY NATURE</span>
            <span className="art-note note-bottom">ALWAYS IN PROGRESS&nbsp; ↗</span>
            <span className="art-index">01 / ∞</span>
          </div>
          <div className="hero-footer">
            <span>SCROLL TO DISCOVER</span>
            <span className="hero-line" />
            <span>01 — 03</span>
          </div>
        </section>

        <section className="work-section" id="work" aria-labelledby="work-title">
          <div className="section-heading">
            <div>
              <p className="eyebrow">SELECTED WORK</p>
              <h2 id="work-title">A few things<br /><span className="serif">I’ve made.</span></h2>
            </div>
            <p className="section-note">
              A selection of projects I’ve worked on. Open any project to explore its GitHub repository.
            </p>
          </div>
          <div className="project-grid">
            {projects.map((project) => <ProjectCard key={project.number} project={project} />)}
          </div>
        </section>

        <section className="about-section" id="about" aria-labelledby="about-title">
          <div className="about-side">
            <p className="eyebrow">A LITTLE ABOUT ME</p>
            {hasProfilePhoto ? (
              <Image
                className="about-photo"
                src="/abduraghmaan-cassiem.jpg"
                alt="Abduraghmaan Cassiem"
                width={460}
                height={460}
              />
            ) : (
              <div className="about-photo-placeholder" role="img" aria-label="Add the photo to public/abduraghmaan-cassiem.jpg">
                <span>PROFILE PHOTO</span>
              </div>
            )}
          </div>
          <div className="about-content">
            <h2 id="about-title">Hi, I’m <span className="serif">Abduraghmaan Cassiem.</span></h2>
            <p>
              Motivated aspiring software developer currently building practical development experience at redAcademy.
              I’ve worked on full-stack applications using C#, ASP.NET Core Web API, React and JavaScript, including
              RESTful APIs and responsive user interfaces. I bring a problem-solving mindset, clear communication, and
              a strong willingness to learn, collaborate, and develop my technical skills.
            </p>
          </div>
        </section>

        <section className="contact-section" id="contact" aria-labelledby="contact-title">
          <div className="contact-heading">
            <p className="eyebrow">GET IN TOUCH</p>
            <h2 id="contact-title">Let’s <span className="serif">talk.</span></h2>
            <p>Have a project or opportunity in mind? Send me a message.</p>
          </div>
          {formId ? (
            <form className="contact-form" action={`https://formspree.io/f/${formId}`} method="POST">
              <label htmlFor="contact-name">Your name</label>
              <input id="contact-name" name="name" type="text" autoComplete="name" required />
              <label htmlFor="contact-email">Your email</label>
              <input id="contact-email" name="email" type="email" autoComplete="email" required />
              <label htmlFor="contact-message">Message</label>
              <textarea id="contact-message" name="message" rows="5" required />
              <input className="contact-honeypot" type="text" name="_gotcha" tabIndex={-1} autoComplete="off" aria-hidden="true" />
              <button className="contact-submit" type="submit">Send message <span aria-hidden="true">↗</span></button>
            </form>
          ) : (
            <div className="contact-email-fallback">
              <p>The contact form is being set up. In the meantime, email me at:</p>
              <a href="https://mail.google.com/mail/?view=cm&amp;fs=1&amp;to=Cassssiem%40gmail.com" target="_blank" rel="noreferrer">
                Cassssiem@gmail.com <span aria-hidden="true">↗</span>
              </a>
            </div>
          )}
        </section>
      </main>

      <footer>
        <Wordmark footer />
        <span>MADE WITH CURIOSITY · {new Date().getFullYear()}</span>
        <a href="#top">BACK TO TOP ↑</a>
      </footer>
    </>
  );
}
