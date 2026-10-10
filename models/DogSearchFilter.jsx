
import { useMemo, useState } from "react";

export default function DogSearchFilter({ dogs, onFilterChange }) {
  const [search, setSearch] = useState("");
  const [type, setType] = useState("All");
  const [location, setLocation] = useState("All");

  const locations = useMemo(
    () => [...new Set(dogs.map((dog) => dog.location).filter(Boolean))],
    [dogs]
  );

  const filteredDogs = useMemo(() => {
    return dogs.filter((dog) => {
      const query = search.trim().toLowerCase();

      const matchesSearch =
        dog.name.toLowerCase().includes(query) ||
        dog.breed.toLowerCase().includes(query);

      const matchesType = type === "All" || dog.type === type;
      const matchesLocation =
        location === "All" || dog.location === location;

      return matchesSearch && matchesType && matchesLocation;
    });
  }, [dogs, search, type, location]);

  function applyFilters() {
    onFilterChange(filteredDogs);
  }

  return (
    <section className="mb-8 rounded-xl border border-[#292929] bg-[#151515] p-5">
      <h2 className="mb-4 text-xl font-bold text-white">
        Search Dog Reports
      </h2>

      <div className="grid gap-4 md:grid-cols-3">
        <input
          type="text"
          placeholder="Search by name or breed"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          className="rounded-lg border border-[#343434] bg-[#0e0e0e] p-3 text-white"
        />

        <select
          value={type}
          onChange={(event) => setType(event.target.value)}
          className="rounded-lg border border-[#343434] bg-[#0e0e0e] p-3 text-white"
        >
          <option value="All">All Reports</option>
          <option value="Lost">Lost Dogs</option>
          <option value="Found">Found Dogs</option>
        </select>

        <select
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          className="rounded-lg border border-[#343434] bg-[#0e0e0e] p-3 text-white"
        >
          <option value="All">All Locations</option>
          {locations.map((place) => (
            <option key={place} value={place}>
              {place}
            </option>
          ))}
        </select>
      </div>

      <button
        type="button"
        onClick={applyFilters}
        className="mt-4 rounded-lg bg-[#ff7900] px-5 py-3 font-bold text-black"
      >
        Apply Filters
      </button>

      <p className="mt-3 text-sm text-[#999999]">
        Matching reports: {filteredDogs.length}
      </p>
    </section>
  );
}
