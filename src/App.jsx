import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Code2, Mail, Download, ExternalLink, MapPin, ArrowUpRight, Menu, X, Terminal, Briefcase, GraduationCap, ArrowUp, Globe, Brain, Gamepad2 } from "lucide-react";
import profile from "./assets/profile.jpeg";
import "./App.css";

const github = "https://github.com/kalpana-57";
const linkedin = "https://www.linkedin.com/in/kalpana-kayala-2847673a9";
const email = "kalpanakayala75@gmail.com";
const nav = ["About", "Skills", "Projects", "Internships", "Education", "Contact"];

const roles = ["AI & Full Stack Developer", "React Developer", "Python & ML Developer", "Real-time Game Builder"];
const ids = ["about", "skills", "projects", "internships", "education", "contact"];
const stats = [["5", "Projects"], ["80%", "B.Tech (AI)"], ["2026", "Graduate"]];

const skills = [
  ["Java & Backend", ["Core Java", "OOP", "Data Structures", "JDBC", "Servlets"]],
  ["Python & Data", ["Python", "Pandas", "Data Preprocessing", "Feature Engineering"]],
  ["Machine Learning", ["TensorFlow", "Model Evaluation", "Explainable AI", "Image + Tabular Data"]],
  ["Web & Frontend", ["JavaScript", "React", "HTML", "CSS", "Firebase"]],
  ["Databases", ["SQL", "MySQL", "MongoDB"]],
  ["Tools & Cloud", ["Git", "GitHub", "Azure", "VS Code", "Postman"]],
];

const projects = [
  { title: "ShopSphere", type: "Web App", text: "Responsive e-commerce app with product search, category filters, cart, wishlist, and local storage.", tech: ["React", "JavaScript", "CSS", "Vite"], github: "https://github.com/kalpana-57/ShopSphere", live: "https://shopsphere-lilac.vercel.app" },
  { title: "FinTrack", type: "Web App", text: "Personal finance dashboard tracking income, expenses, transactions, and budgets with interactive charts.", tech: ["React", "Recharts", "Vite", "CSS"], github: "https://github.com/kalpana-57/FinTrack", live: "" },
  { title: "Quiz Battle Arena", type: "Multiplayer Game", text: "Real-time two-player quiz game: room codes, synchronized questions, countdown timer, live scoring, and rematch.", tech: ["JavaScript", "Firebase", "Vite", "CSS"], github: "https://github.com/kalpana-57/QuizBattleArena", live: "https://quiz-battle-arena-eta.vercel.app" },
  { title: "Multimodal Chest X-ray Analysis", type: "AI / ML", text: "Pipeline combining chest X-ray images with structured clinical data, producing explainable AI outputs.", tech: ["Python", "TensorFlow", "SQL"], github: "", live: "" },
  { title: "Lung Cancer Detection", type: "AI / ML", text: "Clinical-data model with SQL querying, Pandas cleaning, feature engineering, and documented accuracy metrics.", tech: ["Python", "Pandas", "SQL"], github: "", live: "" },
];

const focus = [
  [Globe, "Web Development", "Responsive React apps with clean UI, search, filters and charts."],
  [Gamepad2, "Real-time Games", "Multiplayer logic, synchronized state and live scoring with Firebase."],
  [Brain, "AI / Machine Learning", "Data preprocessing, model evaluation and explainable AI in Python."],
];
const filters = [["All", null], ["Web", "Web App"], ["Games", "Multiplayer Game"], ["AI / ML", "AI / ML"]];

const internships = [
  { icon: Briefcase, title: "Artificial Intelligence Intern", place: "Code Tech IT Solutions", when: "Jan 2025 – Mar 2025", text: "Data preprocessing, model development and evaluation; reviewed datasets for errors, inconsistencies and missing values." },
];

const education = [
  { icon: GraduationCap, title: "B.Tech, Artificial Intelligence (80%)", place: "Sreenivasa Institute of Technology and Management Studies", when: "2026", text: "Core coursework in AI and machine learning, plus hands-on projects in Python, TensorFlow and SQL." },
  { icon: GraduationCap, title: "Full Stack Java Development (Training)", place: "Certifications & Training", when: "2026 – Present", text: "Core Java, OOP, Data Structures, SQL, JDBC, Servlets, JavaScript, HTML and CSS, with database design and query practice." },
  { icon: GraduationCap, title: "Intermediate, MPC (74%)", place: "Gnanambica Junior College, Madanapalle", when: "2022", text: "" },
  { icon: GraduationCap, title: "SSC (98%)", place: "S P V B English Medium High School, Mulakalacheruvu", when: "2020", text: "" },
];

const rise = { hidden: { opacity: 0, y: 22 }, show: { opacity: 1, y: 0, transition: { duration: 0.55 } } };
const Reveal = ({ children, className, delay = 0 }) => (
  <motion.div className={className} variants={rise} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-40px" }} transition={{ delay }}>{children}</motion.div>
);
const Heading = ({ tag, title }) => (
  <Reveal className="heading"><span className="tag">{tag}</span><h2>{title}</h2></Reveal>
);

const Timeline = ({ items }) => (
  <div className="timeline">
    {items.map(({ icon: Icon, ...t }, i) => (
      <Reveal className="t-item" key={t.title} delay={i * 0.1}>
        <div className="t-icon"><Icon size={20} /></div>
        <div className="card">
          <div className="t-head"><h3>{t.title}</h3><span>{t.when}</span></div>
          <em>{t.place}</em>
          {t.text && <p>{t.text}</p>}
        </div>
      </Reveal>
    ))}
  </div>
);

export default function App() {
  const [open, setOpen] = useState(false);
  const [filter, setFilter] = useState("All");
  const [showTop, setShowTop] = useState(false);
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState("");
  const [typed, setTyped] = useState(roles[0]);
  const tw = useRef({ i: 0, j: roles[0].length, del: false, wait: 0 });
  useEffect(() => {
    const onProg = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(h > 0 ? Math.min(window.scrollY / h, 1) : 0);
    };
    window.addEventListener("scroll", onProg, { passive: true });
    return () => window.removeEventListener("scroll", onProg);
  }, []);
  useEffect(() => {
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    ids.forEach((id) => { const el = document.getElementById(id); if (el) io.observe(el); });
    return () => io.disconnect();
  }, []);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => {
      const st = tw.current;
      const word = roles[st.i];
      if (st.wait > 0) { st.wait -= 1; return; }
      if (!st.del) {
        st.j = Math.min(st.j + 1, word.length);
        if (st.j === word.length) { st.del = true; st.wait = 18; }
      } else {
        st.j -= 1;
        if (st.j <= 0) { st.del = false; st.i = (st.i + 1) % roles.length; st.j = 0; }
      }
      setTyped(roles[st.i].slice(0, st.j));
    }, 70);
    return () => clearInterval(t);
  }, []);
  const type = filters.find(([l]) => l === filter)[1];
  const shown = projects.filter((p) => !type || p.type === type);
  return (
    <div className="app">
      <div className="progress" style={{ transform: `scaleX(${progress})` }} />
      <div className="glow g1" /><div className="glow g2" />
      <header className="nav">
        <a href="#top" className="logo">&lt;Kalpana /&gt;</a>
        <button className="burger" onClick={() => setOpen(!open)} aria-label="Menu">{open ? <X size={22} /> : <Menu size={22} />}</button>
        <nav className={open ? "open" : ""}>
          {nav.map((n) => <a key={n} href={`#${n.toLowerCase()}`} className={active === n.toLowerCase() ? "act" : ""} onClick={() => setOpen(false)}>{n}</a>)}
          <a className="cta-sm" href="/Kalpana_Kayala_Resume.pdf" download>Resume</a>
        </nav>
      </header>

      <main>
        <section className="hero wrap" id="top">
          <motion.div className="hero-text" initial="hidden" animate="show" variants={rise}>
            <span className="status"><i /> Open to jobs &amp; internships</span>
            <h1>Hi, I'm <span className="grad">Kalpana Kayala</span></h1>
            <p className="sub"><span>{typed}</span><b className="caret" /></p>
            <p className="desc">I work in Java and Python, and build React web apps, real-time multiplayer games with Firebase, and machine-learning pipelines with TensorFlow.</p>
            <div className="actions">
              <a className="btn primary" href="#projects">View Projects <ArrowUpRight size={17} /></a>
              <a className="btn ghost" href="/Kalpana_Kayala_Resume.pdf" download><Download size={16} /> Resume</a>
            </div>
            <div className="socials">
              <a href={github} target="_blank" rel="noreferrer" aria-label="GitHub"><Code2 size={18} /></a>
              <a href={linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">in</a>
              <a href={`mailto:${email}`} aria-label="Email"><Mail size={18} /></a>
            </div>
          </motion.div>

          <motion.div className="hero-card" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.15 }}>
            <div className="win">
              <div className="win-bar"><i /><i /><i /><span><Terminal size={13} /> kalpana.js</span></div>
              <img src={profile} alt="Kalpana Kayala" className="avatar" />
              <pre>{`const kalpana = {
  role: "AI & Full Stack Developer",
  education: "B.Tech in AI (2026)",
  stack: ["Java", "Python", "TensorFlow",
          "React", "Firebase"],
  learning: "Full Stack Java",
  openToWork: true,
};`}<b className="caret" /></pre>
            </div>
            <div className="stats">{stats.map(([v, l]) => <div key={l}><strong>{v}</strong><span>{l}</span></div>)}</div>
          </motion.div>
        </section>

        <section className="wrap" id="about">
          <Heading tag="01 / About" title="Building from interface to model" />
          <Reveal className="about">
            <p>I'm a B.Tech graduate in Artificial Intelligence who enjoys turning ideas into working software: responsive web apps, real-time multiplayer systems, and data-driven ML projects.</p>
            <p>I care about clean code, careful testing, and checking results for accuracy, habits I built while preparing and validating datasets and debugging game logic.</p>
            <p className="loc"><MapPin size={15} /> Bengaluru, India</p>
          </Reveal>
          <div className="grid3 focus">
            {focus.map(([Icon, t, d], i) => (
              <Reveal className="card" key={t} delay={i * 0.08}>
                <div className="f-icon"><Icon size={22} /></div>
                <h3>{t}</h3><p>{d}</p>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="wrap" id="skills">
          <Heading tag="02 / Skills" title="Tech stack" />
          <div className="grid2">
            {skills.map(([t, items], i) => (
              <Reveal className="card" key={t} delay={i * 0.08}>
                <h3>{t}</h3>
                <div className="chips">{items.map((s) => <span key={s}>{s}</span>)}</div>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="wrap" id="projects">
          <Heading tag="03 / Projects" title="Selected work" />
          <div className="filters">
            {filters.map(([l]) => (
              <button key={l} className={l === filter ? "on" : ""} onClick={() => setFilter(l)}>{l}</button>
            ))}
          </div>
          <div className="grid2">
            {shown.map((p, i) => (
              <Reveal className="card project" key={p.title + filter} delay={(i % 2) * 0.08}>
                <div className="p-top"><span className="num">{String(i + 1).padStart(2, "0")}</span><span className="pill">{p.type}</span></div>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
                <div className="chips small">{p.tech.map((t) => <span key={t}>{t}</span>)}</div>
                {(p.github || p.live) && (
                  <div className="links">
                    {p.github && <a href={p.github} target="_blank" rel="noreferrer"><Code2 size={15} /> Code</a>}
                    {p.live && <a href={p.live} target="_blank" rel="noreferrer">Live demo <ExternalLink size={14} /></a>}
                  </div>
                )}
              </Reveal>
            ))}
          </div>
        </section>

        <section className="wrap" id="internships">
          <Heading tag="04 / Internships" title="Internships" />
          <Timeline items={internships} />
        </section>

        <section className="wrap" id="education">
          <Heading tag="05 / Education" title="Education & training" />
          <Timeline items={education} />
        </section>

        <section className="wrap" id="contact">
          <Reveal className="contact">
            <span className="tag">06 / Contact</span>
            <h2>Let's build something <span className="grad">together</span></h2>
            <p>Open to jobs, internships, and collaboration.</p>
            <a className="btn primary" href={`mailto:${email}`}><Mail size={17} /> {email}</a>
            <div className="c-links">
              <a href={github} target="_blank" rel="noreferrer">GitHub</a>
              <a href={linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
              <a href="/Kalpana_Kayala_Resume.pdf" download>Resume</a>
            </div>
          </Reveal>
        </section>
      </main>
      {showTop && <a href="#top" className="to-top" aria-label="Back to top"><ArrowUp size={20} /></a>}
      <footer>© {new Date().getFullYear()} Kalpana Kayala · Built with React</footer>
    </div>
  );
}
