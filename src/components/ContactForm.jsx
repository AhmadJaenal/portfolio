import { useState } from "react";
import Button from "./ui/Button.jsx";

// Create a free access key at https://web3forms.com and paste it below.
const ACCESS_KEY = "YOUR_ACCESS_KEY_HERE";

const inputClass =
  "w-full rounded-md border-2 border-slate-300 bg-white px-4 py-3 text-slate-800 outline-none transition focus:border-accent focus:ring-4 focus:ring-accent/10 dark:border-[#262626] dark:bg-[#121212] dark:text-slate-100";

export default function ContactForm() {
  const [status, setStatus] = useState({ state: "idle", message: "" });

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    setStatus({ state: "loading", message: "Sending..." });

    if (!ACCESS_KEY || ACCESS_KEY === "YOUR_ACCESS_KEY_HERE") {
      setStatus({
        state: "success",
        message:
          "Thanks! (Demo mode — add a Web3Forms access key to deliver messages.)",
      });
      form.reset();
      return;
    }

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ access_key: ACCESS_KEY, ...data }),
      });
      const json = await res.json();
      if (res.ok) {
        setStatus({ state: "success", message: json.message });
        form.reset();
      } else {
        setStatus({ state: "error", message: json.message || "Failed to send." });
      }
    } catch {
      setStatus({ state: "error", message: "Something went wrong!" });
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <input
        type="checkbox"
        name="botcheck"
        className="hidden"
        style={{ display: "none" }}
        tabIndex={-1}
        autoComplete="off"
      />
      <div>
        <label htmlFor="name" className="sr-only">
          Full Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          placeholder="Full Name"
          className={inputClass}
        />
      </div>
      <div>
        <label htmlFor="email" className="sr-only">
          Email Address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="Email Address"
          className={inputClass}
        />
      </div>
      <div>
        <label htmlFor="message" className="sr-only">
          Your Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          placeholder="Your Message"
          className={`${inputClass} h-36 resize-none`}
        />
      </div>
      <Button type="submit" size="lg" block disabled={status.state === "loading"}>
        {status.state === "loading" ? "Sending..." : "Send Message"}
      </Button>
      {status.message && (
        <p
          className={`text-center text-sm ${
            status.state === "error"
              ? "text-red-500"
              : status.state === "success"
                ? "text-green-500"
                : "text-slate-500"
          }`}>
          {status.message}
        </p>
      )}
    </form>
  );
}
