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

const initialDogs = [
  {
    id: 1,
    name: "Blacky",
    breed: "Aspin",
    color: "Black",
    date: "2026-09-20",
    location: "Cebu City",
    type: "Lost",
    image: blacky,
    relationship: "Owner",
    description: "Black dog with a small white mark on the chest.",
    contact: "09123456789",
  },
  {
    id: 2,
    name: "Snoopy",
    breed: "Beagle",
    color: "Brown and White",
    date: "2026-09-22",
    location: "Mandaue City",
    type: "Found",
    image: snoopy,
    relationship: "Finder",
    description: "Friendly Beagle found wandering near the neighborhood.",
    contact: "snoopyfinder@email.com",
  },
  {
    id: 3,
    name: "Colby",
    breed: "Golden Retriever",
    color: "Golden",
    date: "2026-09-18",
    location: "Lapu-Lapu City",
    type: "Lost",
    image: colby,
    relationship: "Owner",
    description: "Golden Retriever wearing a blue collar.",
    contact: "09234567890",
  },
  {
    id: 4,
    name: "Luna",
    breed: "Shih Tzu",
    color: "White and Brown",
    date: "2026-09-24",
    location: "Cebu City",
    type: "Found",
    image: luna,
    relationship: "Finder",
    description: "Small Shih Tzu found near a residential area.",
    contact: "luna.finder@email.com",
  },
  {
    id: 5,
    name: "Peppa",
    breed: "Poodle",
    color: "White",
    date: "2026-09-15",
    location: "Talisay City",
    type: "Lost",
    image: peppa,
    relationship: "Owner",
    description: "White Poodle with a pink collar.",
    contact: "09345678901",
  },
  {
    id: 6,
    name: "Sky",
    breed: "Husky",
    color: "Gray and White",
    date: "2026-09-25",
    location: "Cebu City",
    type: "Found",
    image: sky,
    relationship: "Finder",
    description: "Gray and white Husky found near a park.",
    contact: "skyfinder@email.com",
  },
  {
    id: 7,
    name: "Rocky",
    breed: "German Shepherd",
    color: "Black and Brown",
    date: "2026-09-12",
    location: "Minglanilla",
    type: "Lost",
    image: rocky,
    relationship: "Owner",
    description: "Large German Shepherd with a black and brown coat.",
    contact: "09456789012",
  },
  {
    id: 8,
    name: "Marshall",
    breed: "Dalmatian",
    color: "White and Black",
    date: "2026-09-21",
    location: "Cebu City",
    type: "Found",
    image: marshall,
    relationship: "Finder",
    description: "Dalmatian found walking along the road.",
    contact: "marshall@email.com",
  },
  {
    id: 9,
    name: "Rubble",
    breed: "Bulldog",
    color: "Brown",
    date: "2026-09-10",
    location: "Mandaue City",
    type: "Lost",
    image: rubble,
    relationship: "Owner",
    description: "Brown Bulldog wearing a red collar.",
    contact: "09567890123",
  },
  {
    id: 10,
    name: "Zuma",
    breed: "Labrador",
    color: "Black",
    date: "2026-09-26",
    location: "Lapu-Lapu City",
    type: "Found",
    image: zuma,
    relationship: "Finder",
    description: "Black Labrador found near the beach area.",
    contact: "zuma.finder@email.com",
  },
  {
    id: 11,
    name: "Starla",
    breed: "Aspin",
    color: "White and Brown",
    date: "2026-09-08",
    location: "Talisay City",
    type: "Lost",
    image: starla,
    relationship: "Owner",
    description: "Small Aspin with brown spots on the ears.",
    contact: "09678901234",
  },
  {
    id: 12,
    name: "Choco",
    breed: "Chihuahua",
    color: "Brown",
    date: "2026-09-19",
    location: "Cebu City",
    type: "Found",
    image: choco,
    relationship: "Finder",
    description: "Small brown Chihuahua found near a store.",
    contact: "choco.finder@email.com",
  },
  {
    id: 13,
    name: "Mucho",
    breed: "Aspin",
    color: "White",
    date: "2026-09-14",
    location: "Mandaue City",
    type: "Lost",
    image: mucho,
    relationship: "Owner",
    description: "White Aspin with a light brown patch.",
    contact: "09789012345",
  },
  {
    id: 14,
    name: "Chao Chao",
    breed: "Chow Chow",
    color: "Brown",
    date: "2026-09-23",
    location: "Cebu City",
    type: "Found",
    image: chaochao,
    relationship: "Finder",
    description: "Fluffy Chow Chow found near the city center.",
    contact: "chaochao@email.com",
  },
  {
    id: 15,
    name: "Max",
    breed: "Golden Retriever",
    color: "Golden",
    date: "2026-09-11",
    location: "Minglanilla",
    type: "Lost",
    image: max,
    relationship: "Owner",
    description: "Friendly Golden Retriever with a red collar.",
    contact: "09890123456",
  },
  {
    id: 16,
    name: "Shadow",
    breed: "Aspin",
    color: "Black and White",
    date: "2026-09-27",
    location: "Cebu City",
    type: "Found",
    image: shadow,
    relationship: "Finder",
    description: "Black and white Aspin found near the roadside.",
    contact: "shadow.finder@email.com",
  },
];

function goTo(page) {
  window.location.hash = page;
  window.scrollTo({ top: 0, behavior: "smooth" });
}

const primaryButton =
  "cursor-pointer rounded-lg border border-transparent bg-[#ff7900] px-[21px] py-3 font-bold text-[#111111] transition duration-300 hover:-translate-y-0.5 hover:bg-[#ff922f] hover:shadow-[0_8px_20px_rgba(255,121,0,0.25)]";

const eyebrowClass =
  "mb-[14px] text-[0.8rem] font-extrabold tracking-[3px] text-[#ff7900]";

const pageTitleClass =
  "mb-4 text-[clamp(2.5rem,5vw,4rem)] font-bold leading-[1.05] text-white";

const sectionTitleClass =
  "mb-5 text-[2.7rem] font-bold leading-[1.15] text-white max-[600px]:text-[2.1rem]";

const tagClass = (type) =>
  `inline-block rounded-[30px] px-3 py-[5px] text-[0.72rem] font-extrabold tracking-[0.5px] text-[#111111] ${
    type === "Lost" ? "bg-[#ff7900]" : "bg-white"
  }`;

function PageHero({ eyebrow, title, subtitle }) {
  return (
    <section className="px-5 pb-[50px] pt-[75px] text-center">
      <p className={eyebrowClass}>{eyebrow}</p>
      <h1 className={pageTitleClass}>{title}</h1>
      <p className="mx-auto max-w-[680px] text-[#999999]">{subtitle}</p>
    </section>
  );
}

function Header({ currentPage }) {
  const navItems = [
    ["home", "Home"],
    ["about", "About Us"],
    ["feed", "Dog Feed"],
    ["report", "Report a Dog"],
    ["my-reports", "My Reports"],
    ["contact", "Contact Us"],
  ];

  return (
    <header className="sticky top-0 z-[100] border-b border-[#262626] bg-[#0b0b0b]">
      <div className="mx-auto flex min-h-[90px] w-[92%] max-w-[1200px] items-center justify-between gap-[30px] max-[1100px]:gap-[15px] max-[900px]:flex-col max-[900px]:py-[15px]">
        <button
          className="flex h-[82px] w-[82px] cursor-pointer items-center justify-center rounded-full border-0 bg-transparent p-0 max-[600px]:h-[76px] max-[600px]:w-[76px]"
          onClick={() => goTo("home")}
        >
          <img
            src={logo}
            alt="PawFind Logo"
            className="block h-[72px] w-[72px] rounded-full border-2 border-[#ff7900] bg-[#0b0b0b] object-cover p-[3px] transition duration-300 hover:scale-105 hover:shadow-[0_0_18px_rgba(255,121,0,0.35)] max-[600px]:h-[68px] max-[600px]:w-[68px]"
          />
        </button>

        <nav className="flex flex-wrap items-center justify-end gap-[5px] max-[900px]:justify-center max-[600px]:gap-[2px]">
          {navItems.map(([page, label]) => (
            <button
              key={page}
              className={`cursor-pointer rounded-lg border-0 px-[15px] py-[10px] transition duration-300 hover:bg-[#171717] hover:text-[#ff7900] max-[600px]:px-2 max-[600px]:py-[7px] max-[600px]:text-[0.82rem] ${
                currentPage === page
                  ? "bg-[#1b1b1b] text-[#ff7900]"
                  : "bg-transparent text-[#bdbdbd]"
              }`}
              onClick={() => goTo(page)}
            >
              {label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}

function Home({ dogs }) {
  const lostCount = dogs.filter((dog) => dog.type === "Lost").length;
  const foundCount = dogs.filter((dog) => dog.type === "Found").length;

  return (
    <>
      <section
        className="relative min-h-[620px] bg-cover bg-center max-[600px]:min-h-[530px]"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="flex min-h-[620px] items-center bg-[linear-gradient(90deg,rgba(0,0,0,0.9)_0%,rgba(0,0,0,0.72)_45%,rgba(0,0,0,0.3)_100%)] max-[600px]:min-h-[530px]">
          <div className="mx-auto w-[92%] max-w-[1200px]">
            <div className="max-w-[850px]">
              <p className={eyebrowClass}>WELCOME TO PAWFIND</p>

              <h1 className="mb-[25px] text-[clamp(3rem,6vw,5.5rem)] font-bold leading-[0.98] text-white max-[600px]:text-[2.8rem]">
                Helping Lost Dogs Find Their Way Home
              </h1>

              <p className="mb-8 max-w-[700px] text-[1.15rem] text-[#d0d0d0]">
                PawFind connects pet owners, finders, and animal lovers to help
                lost dogs return safely to their families.
              </p>

              <div className="flex flex-wrap gap-[14px] max-[600px]:flex-col">
                <button
                  className={`${primaryButton} max-[600px]:w-full`}
                  onClick={() => goTo("feed")}
                >
                  View Dog Feed
                </button>

                <button
                  className="cursor-pointer rounded-lg border border-white bg-transparent px-[21px] py-3 font-bold text-white transition duration-300 hover:bg-white hover:text-[#111111] max-[600px]:w-full"
                  onClick={() => goTo("report")}
                >
                  Report a Dog
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-[5] mx-auto -mt-[55px] mb-[90px] grid w-[90%] max-w-[1050px] grid-cols-3 overflow-hidden rounded-2xl border border-[#2a2a2a] bg-[#151515] shadow-[0_20px_50px_rgba(0,0,0,0.5)] max-[600px]:grid-cols-1">
        {[
          [dogs.length, "Total Reports"],
          [lostCount, "Lost Dogs"],
          [foundCount, "Found Dogs"],
        ].map(([number, label], index) => (
          <div
            key={label}
            className={`border-r border-[#292929] px-5 py-8 text-center max-[600px]:border-b max-[600px]:border-r-0 ${
              index === 2 ? "border-r-0 max-[600px]:border-b-0" : ""
            }`}
          >
            <h2 className="mb-2 text-[2.5rem] font-bold leading-none text-[#ff7900]">
              {number}
            </h2>
            <p className="text-[#aaaaaa]">{label}</p>
          </div>
        ))}
      </section>

      <section className="mx-auto mb-[110px] grid w-[92%] max-w-[1100px] grid-cols-2 items-center gap-[65px] max-[900px]:grid-cols-1">
        <div>
          <p className={eyebrowClass}>ABOUT PAWFIND</p>

          <h2 className={sectionTitleClass}>
            A Safe Place for Lost and Found Dogs
          </h2>

          <p className="mb-7 text-[#a9a9a9]">
            PawFind provides a simple platform where people can report lost or
            found dogs and connect with the person who posted the report.
          </p>

          <button
            className="cursor-pointer rounded-lg border border-[#ff7900] bg-transparent px-[21px] py-3 font-bold text-[#ff7900] transition duration-300 hover:bg-[#ff7900] hover:text-[#111111]"
            onClick={() => goTo("about")}
          >
            Learn More
          </button>
        </div>

        <img
          src={aboutImage}
          alt="Dogs"
          className="h-[420px] w-full rounded-[18px] border border-[#2c2c2c] object-cover brightness-[0.82]"
        />
      </section>

      <section className="mx-auto mb-[110px] w-[92%] max-w-[1100px] text-center">
        <p className={eyebrowClass}>WHAT YOU CAN DO</p>

        <h2 className="text-[2.7rem] font-bold leading-[1.15] text-white max-[600px]:text-[2.1rem]">
          Help Make a Difference
        </h2>

        <div className="mt-10 grid grid-cols-3 gap-[22px] max-[900px]:grid-cols-1">
          {[
            [
              "🐕",
              "Report a Dog",
              "Post information about a lost or found dog to help reunite them with their family.",
            ],
            [
              "🔎",
              "Search Reports",
              "Browse the dog feed and search through reports for a specific dog.",
            ],
            [
              "💬",
              "Contact Posters",
              "Contact the person who posted a report if you have useful information about the dog.",
            ],
          ].map(([icon, title, text]) => (
            <div
              key={title}
              className="rounded-2xl border border-[#292929] bg-[#151515] px-7 py-[38px] transition duration-300 hover:-translate-y-1.5 hover:border-[#ff7900] hover:shadow-[0_15px_35px_rgba(0,0,0,0.35)]"
            >
              <div className="mx-auto mb-5 flex h-[65px] w-[65px] items-center justify-center rounded-full border border-[#ff7900] bg-[#24170d] text-[1.9rem]">
                {icon}
              </div>

              <h3 className="mb-2 font-bold text-white">{title}</h3>

              <p className="text-[#999999]">{text}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

function About() {
  return (
    <main className="mx-auto w-[92%] max-w-[1200px] pb-[100px]">
      <PageHero
        eyebrow="ABOUT US"
        title="About PawFind"
        subtitle="A simple platform created to help lost and found dogs reconnect with their families."
      />

      <section className="grid grid-cols-2 items-center gap-[65px] max-[900px]:grid-cols-1">
        <img
          src={aboutImage}
          alt="Dogs together"
          className="h-[470px] w-full rounded-[18px] border border-[#2a2a2a] object-cover brightness-[0.82]"
        />

        <div>
          <p className={eyebrowClass}>OUR PURPOSE</p>

          <h2 className={sectionTitleClass}>
            Every Dog Deserves to Find Its Way Home
          </h2>

          <p className="mb-[18px] text-[#a5a5a5]">
            PawFind was created to make reporting and searching for lost and
            found dogs easier.
          </p>

          <p className="mb-[18px] text-[#a5a5a5]">
            Users can post reports, browse available reports, manage their own
            reports, and contact the person who posted a report.
          </p>

          <p className="mb-[18px] text-[#a5a5a5]">
            PawFind is designed to make the process simple, organized, and
            accessible to people who want to help dogs in their community.
          </p>
        </div>
      </section>
    </main>
  );
}

function DogCard({ dog, onView }) {
  return (
    <article className="overflow-hidden rounded-[15px] border border-[#292929] bg-[#151515] transition duration-300 hover:-translate-y-[5px] hover:border-[#ff7900] hover:shadow-[0_15px_35px_rgba(0,0,0,0.4)]">
      <div className="relative h-[240px] bg-[#101010]">
        <img
          src={dog.image}
          alt={dog.name}
          className="h-full w-full object-cover"
        />

        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,transparent_55%,rgba(0,0,0,0.55))]" />

        <span className={`absolute left-[13px] top-[13px] z-[2] ${tagClass(dog.type)}`}>
          {dog.type}
        </span>
      </div>

      <div className="p-[21px]">
        <h3 className="mb-0.5 text-[1.35rem] font-bold text-white">
          {dog.name}
        </h3>

        <p className="mb-[15px] text-[0.92rem] text-[#ff7900]">{dog.breed}</p>

        <div className="mb-[18px] text-[0.87rem] text-[#929292]">
          <p className="mb-1">📍 {dog.location}</p>
          <p className="mb-1">📅 {dog.date}</p>
          <p>🎨 {dog.color}</p>
        </div>

        <button
          className="w-full cursor-pointer rounded-lg border border-[#3a3a3a] bg-[#222222] px-[21px] py-3 font-bold text-[#ff7900] transition duration-300 hover:border-[#ff7900] hover:bg-[#ff7900] hover:text-[#111111]"
          onClick={() => onView(dog)}
        >
          View Details
        </button>
      </div>
    </article>
  );
}

function DogModal({ dog, onClose }) {
  if (!dog) return null;

  const contact = dog.contact || "";

  const handleContact = () => {
    if (!contact) {
      alert("No contact information was provided.");
      return;
    }

    if (/^https?:\/\//i.test(contact)) {
      window.open(contact, "_blank", "noopener,noreferrer");
      return;
    }

    if (/^[+\d][\d\s\-()]+$/.test(contact)) {
      window.location.href = `tel:${contact.replace(/[^\d+]/g, "")}`;
      return;
    }

    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact)) {
      window.location.href = `mailto:${contact}`;
      return;
    }

    navigator.clipboard
      ?.writeText(contact)
      .then(() => {
        alert("The contact information has been copied.");
      })
      .catch(() => {
        alert(`Contact information: ${contact}`);
      });
  };

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center bg-[rgba(0,0,0,0.82)] p-5"
      onClick={onClose}
    >
      <div
        className="relative max-h-[92vh] w-full max-w-[850px] overflow-y-auto rounded-[18px] border border-[#333333] bg-[#151515] shadow-[0_25px_70px_rgba(0,0,0,0.7)]"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          className="absolute right-4 top-[14px] z-[3] flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-[#555555] bg-[rgba(0,0,0,0.75)] text-[1.6rem] text-white transition duration-300 hover:border-[#ff7900] hover:bg-[#ff7900] hover:text-[#111111]"
          onClick={onClose}
        >
          ×
        </button>

        <img
          src={dog.image}
          alt={dog.name}
          className="h-[370px] w-full object-cover max-[600px]:h-[260px]"
        />

        <div className="p-[30px] max-[600px]:p-[22px]">
          <span className={tagClass(dog.type)}>{dog.type}</span>

          <h2 className="mt-3 text-[2.4rem] font-bold text-white max-[600px]:text-[2rem]">
            {dog.name}
          </h2>

          <p className="mb-[26px] text-[#ff7900]">{dog.breed}</p>

          <div className="mb-[25px] grid grid-cols-2 gap-[14px] max-[600px]:grid-cols-1">
            {[
              ["Color", dog.color],
              ["Date", dog.date],
              ["Location", dog.location],
              ["Posted By", dog.relationship],
            ].map(([label, value]) => (
              <div
                key={label}
                className="rounded-[9px] border border-[#2d2d2d] bg-[#202020] p-[15px]"
              >
                <strong className="mb-1 block text-[0.75rem] uppercase tracking-[1px] text-[#777777]">
                  {label}
                </strong>
                <span className="block text-[#eeeeee]">{value}</span>
              </div>
            ))}
          </div>

          <div className="mb-[25px] rounded-[10px] border border-[#282828] bg-[#101010] p-5">
            <strong className="mb-2 block text-[#ff7900]">Description</strong>
            <p className="text-[#aaaaaa]">{dog.description}</p>
          </div>

          <div className="rounded-xl border border-[#6d3a0b] bg-[#20160e] p-[25px]">
            <h3 className="mb-2 font-bold text-white">
              Contact Person Who Posted
            </h3>

            <p className="mb-[15px] text-[#a9a9a9]">
              If you know this dog, contact the person who posted this report
              directly using the information below.
            </p>

            <div className="mb-[15px] flex items-center gap-2.5 rounded-lg border border-[#333333] bg-[#111111] p-[15px] text-white">
              <span>📞</span>
              <strong>{contact || "No contact information provided"}</strong>
            </div>

            {contact && (
              <button
                className={`${primaryButton} w-full`}
                onClick={handleContact}
              >
                Contact Person
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function DogFeed({ dogs }) {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [selectedDog, setSelectedDog] = useState(null);

  const filteredDogs = useMemo(() => {
    return dogs.filter((dog) => {
      const matchesFilter = filter === "All" || dog.type === filter;
      const searchText = search.toLowerCase();

      const matchesSearch =
        dog.name.toLowerCase().includes(searchText) ||
        dog.breed.toLowerCase().includes(searchText) ||
        dog.location.toLowerCase().includes(searchText) ||
        dog.color.toLowerCase().includes(searchText);

      return matchesFilter && matchesSearch;
    });
  }, [dogs, search, filter]);

  return (
    <main className="mx-auto w-[92%] max-w-[1200px] pb-[100px]">
      <PageHero
        eyebrow="DOG FEED"
        title="Lost & Found Dogs"
        subtitle="Browse reports and help dogs find their families."
      />

      <section className="mb-8 flex items-center justify-between gap-[18px] rounded-[14px] border border-[#292929] bg-[#141414] p-5 max-[900px]:flex-col max-[900px]:items-stretch">
        <input
          type="text"
          placeholder="Search by name, breed, location..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          className="min-w-[200px] flex-1 rounded-lg border border-[#343434] bg-[#0d0d0d] px-4 py-[14px] text-white outline-none placeholder:text-[#777777] focus:border-[#ff7900]"
        />

        <div className="flex gap-2 max-[900px]:justify-center">
          {["All", "Lost", "Found"].map((option) => (
            <button
              key={option}
              className={`cursor-pointer rounded-lg border px-[21px] py-3 font-bold transition duration-300 ${
                filter === option
                  ? "border-[#ff7900] bg-[#ff7900] text-[#111111]"
                  : "border-[#333333] bg-[#222222] text-[#aaaaaa] hover:border-[#ff7900] hover:text-white"
              }`}
              onClick={() => setFilter(option)}
            >
              {option}
            </button>
          ))}
        </div>
      </section>

      <section className="grid grid-cols-4 gap-[22px] max-[1100px]:grid-cols-3 max-[900px]:grid-cols-2 max-[600px]:grid-cols-1">
        {filteredDogs.length > 0 ? (
          filteredDogs.map((dog) => (
            <DogCard key={dog.id} dog={dog} onView={setSelectedDog} />
          ))
        ) : (
          <div className="col-span-full rounded-2xl border border-[#292929] bg-[#151515] px-5 py-[70px] text-center">
            <h2 className="mb-2 text-xl font-bold text-white">
              No reports found
            </h2>
            <p className="text-[#888888]">Try another search or filter.</p>
          </div>
        )}
      </section>

      <DogModal dog={selectedDog} onClose={() => setSelectedDog(null)} />
    </main>
  );
}

function ReportDog({ onSubmit, editingDog, onCancel }) {
  const [form, setForm] = useState({
    name: editingDog?.name || "",
    breed: editingDog?.breed || "",
    color: editingDog?.color || "",
    date: editingDog?.date || "",
    location: editingDog?.location || "",
    type: editingDog?.type || "Lost",
    description: editingDog?.description || "",
    contact: editingDog?.contact || "",
    relationship: editingDog?.relationship || "Owner",
    image: editingDog?.image || "",
  });

  const [preview, setPreview] = useState(editingDog?.image || "");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleImage = (event) => {
    const file = event.target.files?.[0];

    if (!file) return;

    const imageUrl = URL.createObjectURL(file);

    setPreview(imageUrl);

    setForm((previous) => ({
      ...previous,
      image: imageUrl,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      !form.name ||
      !form.breed ||
      !form.color ||
      !form.date ||
      !form.location ||
      !form.description ||
      !form.contact
    ) {
      alert("Please complete all required fields.");
      return;
    }

    const report = {
      ...form,
      id: editingDog?.id || `reported-${Date.now()}`,
      image:
        form.image ||
        "https://images.unsplash.com/photo-1552053831-71594a27632d?w=800",
    };

    onSubmit(report);
  };

  const inputClass =
    "w-full rounded-lg border border-[#343434] bg-[#0e0e0e] px-[14px] py-[13px] text-white outline-none placeholder:text-[#666666] focus:border-[#ff7900]";

  const sectionClass = "mb-[30px] border-b border-[#292929] pb-[30px]";

  const sectionTitle = "mb-5 text-[1.3rem] font-bold text-white";

  const labelClass = "text-[0.88rem] font-bold text-[#dddddd]";

  return (
    <main className="mx-auto w-[92%] max-w-[1200px] pb-[100px]">
      <PageHero
        eyebrow={editingDog ? "EDIT REPORT" : "REPORT A DOG"}
        title={editingDog ? "Update Dog Report" : "Create a Dog Report"}
        subtitle="Provide accurate information so people can easily identify the dog."
      />

      <form
        className="mx-auto max-w-[950px] rounded-2xl border border-[#292929] bg-[#151515] p-[38px] shadow-[0_15px_40px_rgba(0,0,0,0.35)] max-[600px]:p-[22px]"
        onSubmit={handleSubmit}
      >
        <div className={sectionClass}>
          <h2 className={sectionTitle}>Report Type</h2>

          <div className="flex gap-[25px]">
            {["Lost", "Found"].map((type) => (
              <label
                key={type}
                className="flex items-center gap-2 text-[#cccccc]"
              >
                <input
                  type="radio"
                  name="type"
                  value={type}
                  checked={form.type === type}
                  onChange={handleChange}
                  className="accent-[#ff7900]"
                />
                {type} Dog
              </label>
            ))}
          </div>
        </div>

        <div className={sectionClass}>
          <h2 className={sectionTitle}>Dog Information</h2>

          <div className="grid grid-cols-2 gap-5 max-[600px]:grid-cols-1">
            {[
              ["name", "Dog Name *", "Enter dog's name"],
              ["breed", "Breed *", "e.g. Aspin, Shih Tzu"],
              ["color", "Color *", "Enter dog's color"],
            ].map(([name, label, placeholder]) => (
              <div key={name} className="flex flex-col gap-[7px]">
                <label className={labelClass}>{label}</label>
                <input
                  name={name}
                  value={form[name]}
                  onChange={handleChange}
                  placeholder={placeholder}
                  className={inputClass}
                />
              </div>
            ))}

            <div className="flex flex-col gap-[7px]">
              <label className={labelClass}>Date *</label>

              <input
                type="date"
                name="date"
                value={form.date}
                onChange={handleChange}
                className={inputClass}
              />
            </div>

            <div className="col-span-full flex flex-col gap-[7px]">
              <label className={labelClass}>
                Last Seen / Found Location *
              </label>

              <input
                name="location"
                value={form.location}
                onChange={handleChange}
                placeholder="Enter location"
                className={inputClass}
              />
            </div>

            <div className="col-span-full flex flex-col gap-[7px]">
              <label className={labelClass}>Description *</label>

              <textarea
                name="description"
                value={form.description}
                onChange={handleChange}
                rows="5"
                placeholder="Describe the dog, collar, markings, and other identifying details"
                className={`${inputClass} resize-y`}
              />
            </div>
          </div>
        </div>

        <div className={sectionClass}>
          <h2 className={sectionTitle}>Photo</h2>

          <div className="flex flex-col gap-5">
            <input
              type="file"
              accept="image/*"
              onChange={handleImage}
              className="text-[#aaaaaa]"
            />

            {preview && (
              <img
                src={preview}
                alt="Dog preview"
                className="h-[200px] w-[250px] rounded-[10px] border border-[#333333] object-cover"
              />
            )}
          </div>
        </div>

        <div className={sectionClass}>
          <h2 className={sectionTitle}>Contact Information</h2>

          <div className="grid grid-cols-2 gap-5 max-[600px]:grid-cols-1">
            <div className="flex flex-col gap-[7px]">
              <label className={labelClass}>Your Relationship *</label>

              <select
                name="relationship"
                value={form.relationship}
                onChange={handleChange}
                className={inputClass}
              >
                <option value="Owner">Owner</option>
                <option value="Finder">Finder</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="flex flex-col gap-[7px]">
              <label className={labelClass}>Phone / Email / Link *</label>

              <input
                name="contact"
                value={form.contact}
                onChange={handleChange}
                placeholder="Phone number or email"
                className={inputClass}
              />
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-2.5">
          {editingDog && (
            <button
              type="button"
              className="cursor-pointer rounded-lg border border-[#333333] bg-[#252525] px-[21px] py-3 font-bold text-[#cccccc] transition duration-300 hover:bg-[#333333] hover:text-white"
              onClick={onCancel}
            >
              Cancel
            </button>
          )}

          <button type="submit" className={primaryButton}>
            {editingDog ? "Update Report" : "Submit Report"}
          </button>
        </div>
      </form>
    </main>
  );
}

function MyReports({ dogs, onEdit, onDelete }) {
  const myReports = dogs.filter((dog) => String(dog.id).startsWith("reported-"));

  return (
    <main className="mx-auto w-[92%] max-w-[1200px] pb-[100px]">
      <PageHero
        eyebrow="MY REPORTS"
        title="Manage My Reports"
        subtitle="Create, view, update, or delete the reports you submitted."
      />

      {myReports.length === 0 ? (
        <div className="rounded-2xl border border-[#292929] bg-[#151515] px-5 py-[70px] text-center">
          <h2 className="mb-2 text-xl font-bold text-white">No Reports Yet</h2>

          <p className="mb-[25px] text-[#888888]">
            You have not created any dog reports.
          </p>

          <button className={primaryButton} onClick={() => goTo("report")}>
            Report a Dog
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-[25px] max-[900px]:grid-cols-2 max-[600px]:grid-cols-1">
          {myReports.map((dog) => (
            <article
              className="overflow-hidden rounded-[15px] border border-[#292929] bg-[#151515] transition duration-300 hover:-translate-y-1 hover:border-[#ff7900]"
              key={dog.id}
            >
              <img
                src={dog.image}
                alt={dog.name}
                className="h-[230px] w-full object-cover"
              />

              <div className="p-5">
                <span className={tagClass(dog.type)}>{dog.type}</span>

                <h2 className="mt-2.5 text-xl font-bold text-white">
                  {dog.name}
                </h2>

                <p className="mt-1 text-[#8f8f8f]">{dog.breed}</p>
                <p className="mt-1 text-[#8f8f8f]">📍 {dog.location}</p>
                <p className="mt-1 text-[#8f8f8f]">📅 {dog.date}</p>

                <div className="mt-5 flex gap-2.5">
                  <button
                    className="flex-1 cursor-pointer rounded-lg border border-[#3a3a3a] bg-[#222222] px-[21px] py-3 font-bold text-[#ff7900] transition duration-300 hover:bg-[#ff7900] hover:text-[#111111]"
                    onClick={() => onEdit(dog)}
                  >
                    Edit
                  </button>

                  <button
                    className="flex-1 cursor-pointer rounded-lg border border-[#4a2424] bg-[#241414] px-[21px] py-3 font-bold text-[#ff6969] transition duration-300 hover:bg-[#ff6969] hover:text-[#111111]"
                    onClick={() => onDelete(dog.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </main>
  );
}

function Contact() {
  const fieldClass =
    "rounded-lg border border-[#343434] bg-[#0e0e0e] px-[13px] py-[13px] text-white outline-none placeholder:text-[#666666] focus:border-[#ff7900]";

  return (
    <main className="mx-auto w-[92%] max-w-[1200px] pb-[100px]">
      <PageHero
        eyebrow="CONTACT US"
        title="Contact the PawFind Team"
        subtitle="For website concerns, technical problems, suggestions, or questions, contact the PawFind team."
      />

      <section className="grid grid-cols-[0.9fr_1.1fr] items-start gap-10 max-[900px]:grid-cols-1">
        <div className="flex flex-col gap-[15px]">
          {[
            ["📧", "Email", "pawfind.team@email.com"],
            ["📱", "Phone", "09123456789"],
            ["📍", "Location", "Cebu, Philippines"],
          ].map(([icon, title, text]) => (
            <div
              key={title}
              className="flex items-center gap-[18px] rounded-xl border border-[#292929] bg-[#151515] p-[25px] transition duration-300 hover:border-[#ff7900]"
            >
              <div className="flex h-[50px] w-[50px] items-center justify-center rounded-[10px] border border-[#6d3a0b] bg-[#24170d] text-[1.5rem]">
                {icon}
              </div>

              <div>
                <h3 className="mb-[3px] font-bold text-white">{title}</h3>
                <p className="text-[#888888]">{text}</p>
              </div>
            </div>
          ))}
        </div>

        <form
          className="flex flex-col gap-[15px] rounded-[14px] border border-[#292929] bg-[#151515] p-[30px]"
          onSubmit={(event) => {
            event.preventDefault();
            alert("Thank you! Your message has been received.");
            event.target.reset();
          }}
        >
          <input
            type="text"
            placeholder="Your Name"
            required
            className={fieldClass}
          />

          <input
            type="email"
            placeholder="Your Email"
            required
            className={fieldClass}
          />

          <textarea
            rows="6"
            placeholder="Your Message"
            required
            className={`${fieldClass} resize-y`}
          />

          <button className={primaryButton} type="submit">
            Send Message
          </button>
        </form>
      </section>
    </main>
  );
}

function Footer() {
  const linkClass =
    "mb-2 block cursor-pointer border-0 bg-transparent p-0 text-[#888888] transition duration-300 hover:text-[#ff7900]";

  return (
    <footer className="border-t border-[#252525] bg-[#050505] pt-[55px] text-white">
      <div className="mx-auto grid w-[92%] max-w-[1100px] grid-cols-[2fr_1fr_1fr] gap-10 pb-[45px] max-[600px]:grid-cols-1">
        <div>
          <img
            src={logo}
            alt="PawFind"
            className="mb-3 h-[68px] w-[68px] rounded-full border-2 border-[#ff7900] bg-[#0b0b0b] object-cover p-[3px]"
          />

          <p className="text-[#777777]">
            Helping lost dogs find their way home.
          </p>
        </div>

        <div>
          <h3 className="mb-[15px] font-bold text-white">Quick Links</h3>

          {[
            ["home", "Home"],
            ["feed", "Dog Feed"],
            ["report", "Report a Dog"],
          ].map(([page, label]) => (
            <button
              key={page}
              className={linkClass}
              onClick={() => goTo(page)}
            >
              {label}
            </button>
          ))}
        </div>

        <div>
          <h3 className="mb-[15px] font-bold text-white">Support</h3>

          {[
            ["about", "About Us"],
            ["contact", "Contact Us"],
          ].map(([page, label]) => (
            <button
              key={page}
              className={linkClass}
              onClick={() => goTo(page)}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <div className="border-t border-[#222222] px-5 py-5 text-center">
        <p className="text-[0.85rem] text-[#666666]">
          © 2026 PawFind. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default function App() {
  const getPageFromHash = () => {
    const hash = window.location.hash.replace("#", "");
    return hash || "home";
  };

  const [page, setPage] = useState(getPageFromHash);
  const [dogs, setDogs] = useState(initialDogs);
  const [editingDog, setEditingDog] = useState(null);

  useEffect(() => {
    const handleHashChange = () => {
      setPage(getPageFromHash());
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const handleSubmitReport = (report) => {
    setDogs((previous) => {
      const exists = previous.some((dog) => dog.id === report.id);

      if (exists) {
        return previous.map((dog) => (dog.id === report.id ? report : dog));
      }

      return [report, ...previous];
    });

    setEditingDog(null);
    goTo("my-reports");
  };

  const handleEdit = (dog) => {
    setEditingDog(dog);
    goTo("edit-report");
  };

  const handleDelete = (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this report?"
    );

    if (!confirmed) return;

    setDogs((previous) => previous.filter((dog) => dog.id !== id));
  };

  const renderPage = () => {
    switch (page) {
      case "about":
        return <About />;

      case "feed":
        return <DogFeed dogs={dogs} />;

      case "report":
        return <ReportDog onSubmit={handleSubmitReport} editingDog={null} />;

      case "my-reports":
        return (
          <MyReports
            dogs={dogs}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        );

      case "edit-report":
        return editingDog ? (
          <ReportDog
            onSubmit={handleSubmitReport}
            editingDog={editingDog}
            onCancel={() => {
              setEditingDog(null);
              goTo("my-reports");
            }}
          />
        ) : (
          <MyReports
            dogs={dogs}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        );

      case "contact":
        return <Contact />;

      case "home":
      default:
        return <Home dogs={dogs} />;
    }
  };

  return (
    <>
      <Header currentPage={page} />
      {renderPage()}
      <Footer />
    </>
  );
}
