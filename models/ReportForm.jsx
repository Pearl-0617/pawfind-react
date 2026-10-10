
import { useState } from "react";

const initialForm = {
  name: "",
  breed: "",
  color: "",
  date: "",
  location: "",
  type: "Lost",
  description: "",
  contact: "",
};

export default function ReportForm({ onSubmit }) {
  const [form, setForm] = useState(initialForm);
  const [message, setMessage] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    const report = {
      ...form,
      name: form.name.trim(),
      breed: form.breed.trim(),
      color: form.color.trim(),
      location: form.location.trim(),
      description: form.description.trim(),
      contact: form.contact.trim(),
      id: Date.now(),
      image: "",
      relationship: form.type === "Lost" ? "Owner" : "Finder",
    };

    if (
      !report.name ||
      !report.breed ||
      !report.color ||
      !report.date ||
      !report.location ||
      !report.description ||
      !report.contact
    ) {
      setMessage("Please complete all fields.");
      return;
    }

    onSubmit(report);
    setForm(initialForm);
    setMessage("Report submitted successfully.");
  }

  const fieldClass =
    "w-full rounded-lg border border-[#343434] bg-[#0e0e0e] p-3 text-white";

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto flex max-w-2xl flex-col gap-4 rounded-xl border border-[#292929] bg-[#151515] p-6"
    >
      <h2 className="text-2xl font-bold text-white">
        Report a Lost or Found Dog
      </h2>

      <input
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Dog's name"
        className={fieldClass}
        required
      />

      <input
        name="breed"
        value={form.breed}
        onChange={handleChange}
        placeholder="Breed"
        className={fieldClass}
        required
      />

      <input
        name="color"
        value={form.color}
        onChange={handleChange}
        placeholder="Dog's color"
        className={fieldClass}
        required
      />

      <input
        type="date"
        name="date"
        value={form.date}
        onChange={handleChange}
        max={new Date().toLocaleDateString("en-CA")}
        className={fieldClass}
        required
      />

      <input
        name="location"
        value={form.location}
        onChange={handleChange}
        placeholder="Location where the dog was lost or found"
        className={fieldClass}
        required
      />

      <select
        name="type"
        value={form.type}
        onChange={handleChange}
        className={fieldClass}
      >
        <option value="Lost">Lost Dog</option>
        <option value="Found">Found Dog</option>
      </select>

      <textarea
        name="description"
        value={form.description}
        onChange={handleChange}
        placeholder="Describe the dog and any identifying features"
        rows={4}
        className={fieldClass}
        required
      />

      <input
        name="contact"
        value={form.contact}
        onChange={handleChange}
        placeholder="Phone number or email"
        className={fieldClass}
        required
      />

      <button
        type="submit"
        className="rounded-lg bg-[#ff7900] px-5 py-3 font-bold text-black"
      >
        Submit Report
      </button>

      {message && (
        <p role="status" className="text-sm text-[#ff922f]">
          {message}
        </p>
      )}
    </form>
  );
}
