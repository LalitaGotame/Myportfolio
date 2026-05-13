import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const ref = useRef(null);
  const formRef = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  const [status, setStatus] = useState(""); // "sending" | "success" | "error"

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs.sendForm(
      "service_jlys6yl",    
      "template_aotl8ba",   
      formRef.current,
      "fYJEXajtObdK23gel"     
    )
    .then(() => {
      setStatus("success");
      formRef.current.reset();
    })
   .catch((error) => {
    console.log("Error status:", error.status);  // ✅ added
    console.log("Error text:", error.text);      // ✅ added
    setStatus("error");
    });
  };

  return (
    <section className="contact" id="contact" ref={ref}>
      <motion.p
        className="contact-label"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        Let's work together
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        Say Hello
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Have a project in mind or just want to connect? <br />
        I'd love to hear from you.
      </motion.p>

      <motion.form
        ref={formRef}
        onSubmit={handleSubmit}
        className="contact-form"
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <div className="form-row">
          <input type="text" name="from_name" placeholder="First name" required />
          <input type="text" name="last_name" placeholder="Last name" />
        </div>
        <input type="email" name="from_email" placeholder="Email address" required />
        <textarea rows={5} name="message" placeholder="Your message" required />

        <button type="submit" className="submit-btn" disabled={status === "sending"}>
          {status === "sending" ? "Sending..." : "Send message →"}
        </button>

        {/* Status messages */}
        {status === "success" && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{ color: "#c9a96e", fontSize: "12px", marginTop: "8px" }}
          >
            ✓ Message sent! I'll get back to you soon.
          </motion.p>
        )}
        {status === "error" && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{ color: "#ff6b6b", fontSize: "12px", marginTop: "8px" }}
          >
            ✗ Something went wrong. Please try again.
          </motion.p>
        )}
      </motion.form>
    </section>
  );
}