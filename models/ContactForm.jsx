
import { useState } from "react";

const initialMessage = {
  name: "",
  email: "",
  message: "",
};

export default function ContactForm({ onSend }) {
  const [form, setForm] = useState(initialMessage);
  const [status, setStatus] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    const contactMessage = {
      name: form.name.trim(),
      email: form.email.trim(),
      message: form.message.trim(),
      createdAt: new Date().toISOString(),
    };

    if (
      !contactMessage.name ||
      !contactMessage.email ||
      !contactMessage.message
    ) {
      setStatus("Please complete all fields.");
      return;
    }

    if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactMessage.email)
    ) {
      setStatus("Please enter a valid email address.");
      return;
    }

    if (onSend) {
      onSend(contactMessage);
    }

    setForm(initialMessage);
    setStatus("Your message has been submitted.");
  }

  const fieldClass =
    "w-full rounded-lg border border-[#343434] bg-[#0e0e0e] p-3 text-white";

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 rounded-xl border border-[#292929] bg-[#151515] p-6"
    >
      <h2 className="text-2xl font-bold text-white">
        Contact the PawFind Team
      </h2>

      <input
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Your name"
        className={fieldClass}
        required
      />

      <input
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Your email"
        className={fieldClass}
        required
      />

      <textarea
        name="message"
        value={form.message}
        onChange={handleChange}
        placeholder="Your message"
        rows={5}
        className={fieldClass}
        required
      />

      <button
        type="submit"
        className="rounded-lg bg-[#ff7900] px-5 py-3 font-bold text-black"
      >
        Send Message
      </button>

      {status && (
        <p role="status" className="text-sm text-[#ff922f]">
          {status}
        </p>
      )}
    </form>
  );
}
