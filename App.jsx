import { useEffect, useMemo, useState } from "react";
import "./styles.css";

import logo from "./assets/logo1.png";
import background from "./assets/background.png";
import aboutImage from "./assets/aboutus.webp";

import blacky from "./assets/blacky.jpg";
import snoopy from "./assets/snoopy.png";
import colby from "./assets/colby.jpg";
import luna from "./assets/luna.jpg";
import peppa from "./assets/peppa.jpg";
import sky from "./assets/sky.jpg";
import rocky from "./assets/rocky.jpg";
import marshall from "./assets/marshall.jpg";
import rubble from "./assets/rubble.jpg";
import zuma from "./assets/zuma.jpg";
import starla from "./assets/starla.jpg";
import choco from "./assets/choco.jpg";
import mucho from "./assets/mucho.jpg";
import chaochao from "./assets/chaohao.jpg";
import max from "./assets/max.jpg";
import shadow from "./assets/shadow.jpg";

const dogs = [
  { id: "blacky", name: "Unknown", breed: "Chihuahua", color: "Black and Brown", date: "Unknown", location: "Malhiao, Badian Cebu", contact: "09505226479", relationship: "Rescuer", type: "Found", image: blacky },
  { id: "snoopy", name: "Unknown", breed: "Sheepadoodle", color: "White", date: "Unknown", location: "Minglanilla, Cuanos Cebu", contact: "09232584049", relationship: "Rescuer", type: "Found", image: snoopy },
  { id: "colby", name: "Colby", breed: "Siberian Husky", color: "Brown and White", date: "5 February 2025", location: "Moalboal, Basdaku Cebu", contact: "09505226634", relationship: "Owner", type: "Lost", image: colby },
  { id: "luna", name: "Luna", breed: "Husky", color: "Black and White", date: "18 February 2022", location: "Moalboal, Basdaku Cebu", contact: "09505226634", relationship: "Owner", type: "Lost", image: luna },
  { id: "peppa", name: "Peppa", breed: "Aspin", color: "Brown and White", date: "Unknown", location: "Bugas, Badian Cebu", contact: "09234567433", relationship: "Rescuer", type: "Found", image: peppa },
  { id: "sky", name: "Sky", breed: "Aspin", color: "White", date: "17 September 2024", location: "Malhiao, Badian Cebu", contact: "09505225678", relationship: "Owner", type: "Lost", image: sky },
  { id: "rocky", name: "Rocky", breed: "German Shepherd", color: "Black and Brown", date: "17 December 2024", location: "Lambug, Badian Cebu", contact: "09435245678", relationship: "Owner", type: "Lost", image: rocky },
  { id: "marshall", name: "Marshall", breed: "Dalmatian", color: "White and Black", date: "Unknown", location: "Matutinao, Badian Cebu", contact: "09234945978", relationship: "Rescuer", type: "Found", image: marshall },
  { id: "rubble", name: "Unknown", breed: "English Bulldog", color: "White, Brown and Black", date: "Unknown", location: "Tina-An, Naga Cebu", contact: "09234769078", relationship: "Rescuer", type: "Found", image: rubble },
  { id: "zuma", name: "Zuma", breed: "Golden Retriever", color: "Dark Golden", date: "9 July 2023", location: "Poblacion, Badian Cebu", contact: "09503179078", relationship: "Owner", type: "Lost", image: zuma },
  { id: "starla", name: "Unknown", breed: "Beagle", color: "Brown, White and Black", date: "Unknown", location: "Tayasan, Negros Oriental", contact: "09233108078", relationship: "Rescuer", type: "Found", image: starla },
  { id: "choco", name: "Unknown", breed: "Chihuahua", color: "White", date: "Unknown", location: "Malhiao, Badian Cebu", contact: "09232584049", relationship: "Rescuer", type: "Found", image: choco },
  { id: "mucho", name: "Mucho", breed: "Husky", color: "White", date: "29 March 2023", location: "Basak, Badian Cebu", contact: "09505226479", relationship: "Owner", type: "Lost", image: mucho },
  { id: "chaochao", name: "Unknown", breed: "Dachshund", color: "Brown", date: "Unknown", location: "Manduyong, Badian Cebu", contact: "09456708898", relationship: "Rescuer", type: "Found", image: chaochao },
  { id: "max", name: "Max", breed: "Chow Chow", color: "Brown", date: "16 October 2021", location: "Balabagon, Moalboal Cebu", contact: "09256456898", relationship: "Owner", type: "Lost", image: max },
  { id: "shadow", name: "Shadow", breed: "Aspin", color: "Black", date: "18 August 2020", location: "Bugas, Badian Cebu", contact: "0915234457698", relationship: "Owner", type: "Lost", image: shadow },
];

function goTo(page) {
  window.history.pushState({}, "", `#${page}`);
  window.dispatchEvent(new PopStateEvent("popstate"));
}

function Header({ page }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    ["home", "Home"],
    ["about", "About Us"],
    ["feed", "Dog Feed"],
    ["contact", "Contact"],
  ];

  return (
    <header className="header">
      <button className="brand" onClick={() => goTo("home")} aria-label="Go to home">
        <img src={logo} alt="PawFind logo" />
        <span>PawFind</span>
      </button>

      <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
        ☰
      </button>

      <nav className={`nav ${menuOpen ? "open" : ""}`}>
        {links.map(([key, label]) => (
          <button
            key={key}
            className={page === key ? "active" : ""}
            onClick={() => {
              goTo(key);
              setMenuOpen(false);
            }}
          >
            {label}
          </button>
        ))}
      </nav>
    </header>
  );
}

function Home() {
  return (
    <main>
      <section className="hero" style={{ backgroundImage: `linear-gradient(90deg, rgba(35,20,10,.88), rgba(35,20,10,.2)), url(${background})` }}>
        <div className="hero-content">
          <span className="eyebrow">LOST & FOUND PET COMMUNITY</span>
          <h1>Help every <span>paw</span> find its way home.</h1>
          <p>
            PawFind connects pet owners, rescuers, and caring people who want to
            help reunite lost dogs with their families.
          </p>
          <div className="hero-actions">
            <button className="primary-btn" onClick={() => goTo("feed")}>Find a Dog →</button>
            <button className="secondary-btn" onClick={() => goTo("contact")}>Report a Dog</button>
          </div>
        </div>
      </section>

      <section className="stats-section">
        <div className="stat"><strong>{dogs.length}</strong><span>Dog reports</span></div>
        <div className="stat"><strong>{dogs.filter(d => d.type === "Lost").length}</strong><span>Lost dogs</span></div>
        <div className="stat"><strong>{dogs.filter(d => d.type === "Found").length}</strong><span>Found dogs</span></div>
        <div className="stat"><strong>24/7</strong><span>Community help</span></div>
      </section>

      <section className="home-intro section-wrap">
        <div>
          <span className="eyebrow orange">WHY PAWFIND?</span>
          <h2>A simple place for a very important mission.</h2>
          <p>
            Losing a pet can be frightening. PawFind makes it easier to search
            reports, share information, and contact people who may be able to help.
          </p>
          <button className="text-btn" onClick={() => goTo("about")}>Learn more about PawFind →</button>
        </div>
        <div className="mini-card">
          <span className="paw-icon">🐾</span>
          <h3>Community-powered</h3>
          <p>Every report can become another chance for a pet to get home safely.</p>
        </div>
      </section>
    </main>
  );
}

function About() {
  const features = [
    ["📍", "F — Fetch Info", "Share the dog's name, breed, location, date, and contact details."],
    ["🔎", "I — Inquire", "Ask questions or send a message when you need help with a report."],
    ["📢", "N — Navigate", "Explore reports and look through the community's available information."],
    ["💖", "D — Discover", "Stay connected and help spread the word about lost and found pets."],
  ];

  return (
    <main className="section-wrap">
      <section className="about-hero">
        <img src={aboutImage} alt="A dog being cared for" />
        <div>
          <span className="eyebrow orange">ABOUT PAWFIND</span>
          <h1>Because every dog deserves to be found.</h1>
          <p>
            PawFind was created from a love for dogs and a simple idea: make it
            easier for people to help when a pet is lost or found.
          </p>
          <p>
            The platform brings searching, reporting, and community support
            together in one friendly place.
          </p>
        </div>
      </section>

      <section className="feature-section">
        <div className="section-heading">
          <span className="eyebrow orange">WHAT WE DO</span>
          <h2>F.I.N.D. your way to help.</h2>
        </div>
        <div className="feature-grid">
          {features.map(([icon, title, text]) => (
            <article className="feature-card" key={title}>
              <span className="feature-icon">{icon}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

function DogCard({ dog, onView }) {
  return (
    <article className="dog-card">
      <div className="dog-image-wrap">
        <img src={dog.image} alt={dog.name === "Unknown" ? `${dog.breed} dog` : dog.name} />
        <span className={`status-badge ${dog.type.toLowerCase()}`}>{dog.type}</span>
      </div>
      <div className="dog-info">
        <div className="dog-title">
          <div>
            <span className="small-label">{dog.relationship}</span>
            <h3>{dog.name}</h3>
          </div>
          <span className="paw-small">🐾</span>
        </div>
        <p className="breed">{dog.breed}</p>
        <div className="details">
          <span>📍 {dog.location}</span>
          <span>🎨 {dog.color}</span>
          <span>📅 {dog.date}</span>
        </div>
        <button className="outline-btn" onClick={() => onView(dog)}>View details</button>
      </div>
    </article>
  );
}

function DogFeed() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [selectedDog, setSelectedDog] = useState(null);

  const results = useMemo(() => {
    const term = search.trim().toLowerCase();
    return dogs.filter((dog) => {
      const matchesFilter = filter === "All" || dog.type === filter;
      const matchesSearch =
        !term ||
        [dog.name, dog.breed, dog.location, dog.color].some((value) =>
          value.toLowerCase().includes(term)
        );
      return matchesFilter && matchesSearch;
    });
  }, [search, filter]);

  return (
    <main className="section-wrap feed-page">
      <div className="page-heading">
        <div>
          <span className="eyebrow orange">DOG FEED</span>
          <h1>Search for a furry friend.</h1>
          <p>Search by dog name, breed, location, or color.</p>
        </div>
        <button className="primary-btn" onClick={() => goTo("contact")}>＋ Report a Dog</button>
      </div>

      <div className="search-box">
        <span>🔎</span>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search dog's name, breed, or location..."
          aria-label="Search dog reports"
        />
        {search && <button onClick={() => setSearch("")}>Clear</button>}
      </div>

      <div className="filter-row">
        {["All", "Lost", "Found"].map((item) => (
          <button key={item} className={filter === item ? "filter active" : "filter"} onClick={() => setFilter(item)}>
            {item} {item !== "All" && `(${dogs.filter(d => d.type === item).length})`}
          </button>
        ))}
        <span className="result-count">{results.length} result{results.length !== 1 ? "s" : ""}</span>
      </div>

      {results.length ? (
        <div className="dog-grid">
          {results.map((dog) => <DogCard key={dog.id} dog={dog} onView={setSelectedDog} />)}
        </div>
      ) : (
        <div className="empty-state">
          <span>🐕</span>
          <h2>No matching reports</h2>
          <p>Try another name, breed, or location.</p>
          <button className="primary-btn" onClick={() => { setSearch(""); setFilter("All"); }}>Show all dogs</button>
        </div>
      )}

      {selectedDog && (
        <div className="modal-backdrop" onClick={() => setSelectedDog(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setSelectedDog(null)} aria-label="Close">×</button>
            <img src={selectedDog.image} alt={selectedDog.name} />
            <div className="modal-content">
              <span className={`status-badge ${selectedDog.type.toLowerCase()}`}>{selectedDog.type}</span>
              <h2>{selectedDog.name}</h2>
              <p className="breed">{selectedDog.breed}</p>
              <div className="modal-details">
                <p><strong>Color:</strong> {selectedDog.color}</p>
                <p><strong>Date:</strong> {selectedDog.date}</p>
                <p><strong>Location:</strong> {selectedDog.location}</p>
                <p><strong>Contact:</strong> {selectedDog.contact}</p>
                <p><strong>Reported by:</strong> {selectedDog.relationship}</p>
              </div>
              <button className="primary-btn full" onClick={() => goTo("contact")}>I have information about this dog</button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function submit(e) {
    e.preventDefault();
    setSent(true);
    setForm({ name: "", email: "", message: "" });
  }

  function update(field, value) {
    setForm((current) => ({ ...current, [field]: value }));
    setSent(false);
  }

  return (
    <main className="section-wrap contact-page">
      <div className="page-heading">
        <div>
          <span className="eyebrow orange">CONTACT PAWFIND</span>
          <h1>Let's help a paw get home.</h1>
          <p>Send us a message or report a lost or found dog.</p>
        </div>
      </div>

      <div className="contact-layout">
        <aside className="contact-card">
          <span className="contact-paw">🐾</span>
          <h2>Need help?</h2>
          <p>Have information about one of the dogs in our feed? Let us know.</p>
          <div className="contact-detail"><strong>Email</strong><span>pearlrusiana@gmail.com</span></div>
          <div className="contact-detail"><strong>Facebook</strong><span>Merry Pearl Rusiana</span></div>
          <div className="contact-detail"><strong>Phone</strong><span>+63 950 522 6479</span></div>
          <div className="contact-detail"><strong>Community</strong><span>Cebu, Philippines</span></div>
        </aside>

        <form className="form-card" onSubmit={submit}>
          <h2>Send a message</h2>
          <p>Tell us what happened and we'll keep your information organized.</p>
          {sent && <div className="success-message">✓ Message submitted successfully!</div>}
          <label>Name<input required value={form.name} onChange={(e) => update("name", e.target.value)} placeholder="Your name" /></label>
          <label>Email<input required type="email" value={form.email} onChange={(e) => update("email", e.target.value)} placeholder="you@example.com" /></label>
          <label>Message<textarea required value={form.message} onChange={(e) => update("message", e.target.value)} placeholder="Tell us about the lost or found dog..." rows="6" /></label>
          <label>
  Dog Image
  <input
    type="file"
    accept="image/*"
  />
  <small>Upload a clear photo of the lost or found dog.</small>
</label>
          <button className="primary-btn full" type="submit">Send Message →</button>
        </form>
      </div>
    </main>
  );
}

function Footer() {
  return (
    <footer>
      <div>
        <strong>🐾 PawFind</strong>
        <p>Helping lost dogs find their way home.</p>
      </div>
      <p>© 2026 PawFind. Built with React & CSS.</p>
    </footer>
  );
}

export default function App() {
  const [page, setPage] = useState(window.location.hash.replace("#", "") || "home");

  useEffect(() => {
    const handleNavigation = () => setPage(window.location.hash.replace("#", "") || "home");
    window.addEventListener("popstate", handleNavigation);
    window.addEventListener("hashchange", handleNavigation);
    return () => {
      window.removeEventListener("popstate", handleNavigation);
      window.removeEventListener("hashchange", handleNavigation);
    };
  }, []);

  const validPage = ["home", "about", "feed", "contact"].includes(page) ? page : "home";

  return (
    <div className="app">
      <Header page={validPage} />
      {validPage === "home" && <Home />}
      {validPage === "about" && <About />}
      {validPage === "feed" && <DogFeed />}
      {validPage === "contact" && <Contact />}
      <Footer />
    </div>
  );
}
