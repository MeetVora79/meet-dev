import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import Reveal from "../common/Reveal";

function Contact() {
  const form = useRef();

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    setLoading(true);

    emailjs
      .sendForm(
        "service_zd5u688",
        "template_77afcgb",
        form.current,
        "5prOHSH6oIGvdH5mt",
      )
      .then(
        () => {
          setLoading(false);
          setSuccess("Message sent successfully!");

          form.current.reset();

          setTimeout(() => {
            setSuccess("");
          }, 4000);
        },
        () => {
          setLoading(false);
          setSuccess("Something went wrong!");
        },
      );
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden px-6 md:py-24 py-16"
    >
      {/* Glow */}
      <div className="absolute left-0 top-0 h-[300px] w-[300px] bg-cyan-500/10 blur-3xl" />

      <div className="container-width relative z-10">
        {/* Heading */}
        <Reveal>
          <div className="mb-16 text-center">
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-violet-400">
              Contact
            </p>

            <h2 className="text-4xl font-bold theme-heading md:text-6xl">
              Let's Build
              <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                {" "}
                Something Amazing
              </span>
            </h2>
          </div>
        </Reveal>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* LEFT */}
          <Reveal>
            <div>
              <h3 className="text-3xl font-bold theme-heading">
                Let’s connect and create something impactful.
              </h3>

              <p className="mt-6 text-lg leading-relaxed theme-subtext">
                I’m always open to discussing new projects, freelance
                opportunities, internships, or collaborations related to web
                development.
              </p>

              {/* Contact Cards */}
              <div className="mt-10 space-y-5">
                <a
                  href="mailto:meetvora877@gmail.com"
                  className="block rounded-3xl border theme-border theme-glass py-4 px-6 md:p-6 transition hover:scale-[1.02] hover:border-violet-500/30"
                >
                  <p className="text-sm theme-subtext">Email</p>

                  <h4 className="mt-1 md:mt-2 break-all text-xl font-semibold theme-heading">
                    meetvora877@gmail.com
                  </h4>
                </a>

                <a
                  href="https://wa.me/918780289328?text=Hi%20Meet,%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20connect%20with%20you."
                  target="_blank"
                  rel="noreferrer"
                  className="block rounded-3xl border border-green-500/20 bg-green-500/10 py-4 px-6 md:p-6 backdrop-blur-xl transition hover:scale-[1.02]"
                >
                  <p className="text-sm text-green-300">WhatsApp</p>

                  <h4 className="mt-1 md:mt-2 text-xl font-semibold theme-heading">
                    Chat on WhatsApp
                  </h4>
                </a>
              </div>
            </div>
          </Reveal>

          {/* RIGHT FORM */}
          <Reveal>
            <motion.form
              ref={form}
              onSubmit={sendEmail}
              whileHover={{ y: -4 }}
              className="rounded-[32px] border theme-border theme-glass p-6 md:p-8"
            >
              <div className="space-y-6">
                <input
                  type="text"
                  name="user_name"
                  placeholder="Your Name"
                  required
                  className="w-full rounded-2xl border theme-border theme-input px-5 py-4 theme-heading outline-none transition focus:border-violet-500"
                />

                <input
                  type="email"
                  name="user_email"
                  placeholder="Your Email"
                  required
                  className="w-full rounded-2xl border theme-border theme-input px-5 py-4 theme-heading outline-none transition focus:border-violet-500"
                />

                <textarea
                  name="message"
                  rows="5"
                  placeholder="Your Message"
                  required
                  className="w-full rounded-2xl border theme-border theme-input px-5 py-4 theme-heading outline-none transition focus:border-violet-500"
                />

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-2xl theme-primary-btn px-6 py-4 font-semibold theme-heading transition hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {loading ? "Sending..." : "Send Message →"}
                </button>

                {success && (
                  <p className="text-center text-sm text-cyan-400">{success}</p>
                )}
              </div>
            </motion.form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default Contact;
