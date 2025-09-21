import  { useState } from "react";
import "./Contact.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";

const Contact = () => {
  const [status, setStatus] = useState({ type: "", message: "" }); // لتخزين رسالة النجاح أو الخطأ

const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);

    formData.append("access_key", "14187d03-4390-4b71-9fa7-20f20b07edd8");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success && res.message === "Email sent successfully!") {
        setStatus({ type: "success", message: "✅ Email sent successfully!" });
        event.currentTarget.reset();   // تصفير الحقول
        } else {
        setStatus({ type: "error", message: "❌ Something went wrong. Try again!" });
        }
        setTimeout(() => setStatus({ type: "", message: "" }), 4500);
  };
  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>
            I'm currently avaliable to take on new projects, so feel free to communication
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="" />{" "}
              <p>fawziaissa2002@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="" /> <p>+963-949-950-216</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="" /> <p>Syria, Aleppo</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          {/* {status && <p className="form-status">{status}</p>}  */}
          <label>Your Name</label>
          <input type="text" placeholder="Enter your name" name="name" required />
          <label>Your Email</label>
          <input type="email" placeholder="Enter your email" name="email" required />
          <label>Write your message here</label>
          <textarea name="message" rows={8} placeholder="Enter your message" required></textarea>
          {status.message && (
            <div
                className={`form-status ${status.type}`}
                role="alert"
                aria-live="polite"
            >
                <span className="form-status__msg">{status.message}</span>
                <button
                type="button"
                className="form-status__close"
                onClick={() => setStatus({ type: "", message: "" })}
                aria-label="Close"
                >
                ×
                </button>
                <span className="form-status__progress" />
            </div>
            )}
          <button type="submit" className="contact-submit">Submit Now</button>

        </form>
      </div>
    </div>
  );
};
export default Contact;