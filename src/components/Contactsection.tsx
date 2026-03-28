"use client";

import emailjs from "@emailjs/browser";
import React, { useState } from "react";

const IconPin = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{ width: 20, height: 20 }}>
    <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);
const IconPhone = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{ width: 20, height: 20 }}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.38 2 2 0 0 1 3.6 1.21h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.85a16 16 0 0 0 6.29 6.29l.95-.95a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);
const IconMail = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{ width: 20, height: 20 }}>
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);
const IconSend = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" style={{ width: 16, height: 16 }}>
    <line x1="22" y1="2" x2="11" y2="13" />
    <polygon points="22 2 15 22 11 13 2 9 22 2" />
  </svg>
);
const IconCheck = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" style={{ width: 28, height: 28 }}>
    <polyline points="20 6 9 17 4 12" />
  </svg>
);
const IconFb = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 15, height: 15 }}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);
const IconTw = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 15, height: 15 }}>
    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
  </svg>
);
const IconLi = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 15, height: 15 }}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);
const IconIg = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" style={{ width: 15, height: 15 }}>
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

function ContactSection() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, boolean>>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const validate = () => {
    const e: typeof errors = {};
    if (!form.name.trim()) e.name = true;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = true;
    if (!form.subject.trim()) e.subject = true;
    if (!form.message.trim()) e.message = true;
    setErrors(e);
    return !Object.keys(e).length;
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
    if (errors[name as keyof FormState]) setErrors((p) => ({ ...p, [name]: false }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("loading");
    setErrors({});

    // LOG pour vérifier les variables d'environnement
    console.log("Variables d'environnement :", {
      service: import.meta.env.VITE_EMAILJS_SERVICE_ID,
      template: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      key: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
    });

    try {
      const result = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      if (result.status === 200) {
        setStatus("success");
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        throw new Error("Échec de l'envoi");
      }
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus("error");
    }
  };
  const ic = (f: keyof FormState) => `csp-input${errors[f] ? " csp-err" : ""}`;

  const socials = [
    { icon: <IconFb />, href: "#", label: "Facebook" },
    { icon: <IconTw />, href: "#", label: "Twitter" },
    { icon: <IconLi />, href: "#", label: "LinkedIn" },
    { icon: <IconIg />, href: "#", label: "Instagram" },
  ];

  const contacts = [
    {
      icon: <IconPin />,
      label: "Adresse",
      body: (
        <span>
          À Kara, à l'étage de Détente, en face du Frigo Gloria,
          <br />
          à proximité de l'ancien marché.
        </span>
      ),
    },
    {
      icon: <IconPhone />,
      label: "Téléphone",
      body: (
        <>
          <a href="tel:+22890808608" className="csp-lk">
            (+228) 90 80 86 08
          </a>
          <br />
          <a href="tel:+22826608316" className="csp-lk">
            (+228) 26 60 83 16
          </a>
        </>
      ),
    },
    {
      icon: <IconMail />,
      label: "Email",
      body: (
        <a href="mailto:2spcabinet@gmail.com" className="csp-lk">
          2spcabinet@gmail.com
        </a>
      ),
    },
  ];

  return (
    <>
      <style>{css}</style>
      <section id="contact" className="csp-wrap">
        {/* HEADER */}
        <div className="csp-head">
          <div className="csp-head-line">
            <span className="csp-line-rule" />
            <span className="csp-line-text">2SP Consulting</span>
            <span className="csp-line-rule" />
          </div>
          <div className="csp-big-title">
            <span className="csp-word-outline">Contactez</span>
            <span className="csp-word-solid"> — nous</span>
          </div>
        </div>

        {/* Grille */}
        <div className="csp-grid">
          {/* GAUCHE */}
          <div className="csp-left">
            <div className="csp-left-topbar" />
            <span className="csp-badge">Informations</span>
            <p className="csp-left-sub">Venez nous voir ou contactez-nous en ligne.</p>
            <ul className="csp-contacts">
              {contacts.map((c, i) => (
                <li key={i} className="csp-crow">
                  <div className="csp-iw">{c.icon}</div>
                  <div>
                    <p className="csp-clabel">{c.label}</p>
                    <div className="csp-cval">{c.body}</div>
                  </div>
                </li>
              ))}
            </ul>
            <hr className="csp-hr" />
            <p className="csp-slabel">Suivez-nous</p>
            <div className="csp-socials">
              {socials.map(({ icon, href, label }) => (
                <a key={label} href={href} aria-label={label} className="csp-sbtn">
                  {icon}
                </a>
              ))}
            </div>
            <div className="csp-blob" />
          </div>

          {/* DROITE */}
          <div className="csp-right">
            {status === "success" ? (
              <div className="csp-ok">
                <div className="csp-ok-ring">
                  <IconCheck />
                </div>
                <h3 className="csp-ok-title">Message envoyé !</h3>
                <p className="csp-ok-text">
                  Merci pour votre message. Notre équipe vous répondra dans les plus brefs délais.
                </p>
                <button
                  className="csp-ok-back"
                  onClick={() => {
                    setStatus("idle");
                    setForm({ name: "", email: "", subject: "", message: "" });
                  }}
                >
                  ← Envoyer un autre message
                </button>
              </div>
            ) : (
              <>
                <div className="csp-fhead">
                  <h3 className="csp-ftitle">Envoyez-nous un message</h3>
                  <p className="csp-fsub">Nous vous répondrons sous 24h.</p>
                </div>
                <form onSubmit={onSubmit} noValidate className="csp-form">
                  <div className="csp-row2">
                    <div className="csp-field">
                      <label className="csp-label">Nom complet</label>
                      <input
                        name="name"
                        type="text"
                        placeholder="Alex Malix"
                        value={form.name}
                        onChange={onChange}
                        className={ic("name")}
                      />
                    </div>
                    <div className="csp-field">
                      <label className="csp-label">Adresse email</label>
                      <input
                        name="email"
                        type="email"
                        placeholder="alex@exemple.com"
                        value={form.email}
                        onChange={onChange}
                        className={ic("email")}
                      />
                    </div>
                  </div>
                  <div className="csp-field">
                    <label className="csp-label">Sujet</label>
                    <input
                      name="subject"
                      type="text"
                      placeholder="En quoi pouvons-nous vous aider ?"
                      value={form.subject}
                      onChange={onChange}
                      className={ic("subject")}
                    />
                  </div>
                  <div className="csp-field">
                    <label className="csp-label">Message</label>
                    <textarea
                      name="message"
                      rows={5}
                      placeholder="Décrivez votre projet ou votre demande..."
                      value={form.message}
                      onChange={onChange}
                      className={`${ic("message")} csp-ta`}
                    />
                  </div>
                  <button type="submit" disabled={status === "loading"} className="csp-submit">
                    {status === "loading" ? (
                      <>
                        <span className="csp-spin" />
                        Envoi en cours…
                      </>
                    ) : (
                      <>
                        <IconSend />
                        Envoyer le message
                      </>
                    )}
                  </button>
                </form>
                {status === "error" && (
                  <p className="csp-error-msg">
                    Une erreur est survenue. Veuillez réessayer plus tard.
                  </p>
                )}
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

const css = `
@import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;600;700;800;900&display=swap');

.csp-wrap {
  background: #f0f4fc;
  padding: 96px 24px 80px;
  font-family: 'Sora', sans-serif;
  position: relative;
  overflow: hidden;
}

/* HEADER */
.csp-head {
  text-align: center;
  max-width: 860px;
  margin: 0 auto 72px;
}

.csp-head-line {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  margin-bottom: 28px;
}
.csp-line-rule {
  flex: 1;
  max-width: 80px;
  height: 1px;
  background: #c5d0e8;
}
.csp-line-text {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 4px;
  text-transform: uppercase;
  color: #0a2463;
  opacity: 0.45;
  white-space: nowrap;
}

.csp-big-title {
  display: flex;
  align-items: baseline;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0 16px;
  line-height: 1;
  margin-bottom: 32px;
}
.csp-word-outline {
  font-size: clamp(3rem, 8vw, 5.5rem);
  font-weight: 900;
  letter-spacing: -0.04em;
  color: transparent;
  -webkit-text-stroke: 2.5px #0a2463;
  text-stroke: 2.5px #0a2463;
  line-height: 1.05;
}
.csp-word-solid {
  font-size: clamp(3rem, 8vw, 5.5rem);
  font-weight: 900;
  letter-spacing: -0.04em;
  color: #0a2463;
  line-height: 1.05;
}

.csp-sub-block {
  display: inline-flex;
  align-items: flex-start;
  gap: 14px;
  background: #fff;
  border-radius: 14px;
  padding: 16px 24px;
  box-shadow: 0 2px 20px rgba(10,36,99,0.07);
  border: 1px solid #e4eaf5;
  text-align: left;
  max-width: 520px;
}
.csp-sub-accent {
  flex-shrink: 0;
  width: 4px;
  height: auto;
  align-self: stretch;
  background: #f5c400;
  border-radius: 4px;
  min-height: 40px;
}
.csp-sub-text {
  font-size: 14.5px;
  font-weight: 300;
  color: #6a7fa8;
  line-height: 1.75;
  margin: 0;
}

/* GRILLE */
.csp-grid {
  display: grid;
  grid-template-columns: 2fr 3fr;
  gap: 24px;
  max-width: 1080px;
  margin: 0 auto;
  align-items: start;
}
@media (max-width: 820px) {
  .csp-grid {
    grid-template-columns: 1fr;
  }
}

/* GAUCHE */
.csp-left {
  background: #0a2463;
  border-radius: 24px;
  padding: 0 32px 36px;
  position: relative;
  overflow: hidden;
}
.csp-left-topbar {
  height: 4px;
  background: #f5c400;
  border-radius: 24px 24px 0 0;
  margin: 0 -32px 32px;
}
.csp-blob {
  position: absolute;
  bottom: -56px;
  right: -56px;
  width: 180px;
  height: 180px;
  border-radius: 50%;
  background: rgba(245,196,0,0.09);
  pointer-events: none;
}
.csp-badge {
  display: inline-block;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  background: #f5c400;
  color: #0a2463;
  padding: 5px 14px;
  border-radius: 20px;
  margin-bottom: 12px;
}
.csp-left-sub {
  color: rgba(255,255,255,0.38);
  font-size: 12.5px;
  font-weight: 300;
  margin: 0 0 28px;
  line-height: 1.65;
}
.csp-contacts {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.csp-crow {
  display: flex;
  gap: 14px;
  align-items: flex-start;
}
.csp-iw {
  flex-shrink: 0;
  width: 42px;
  height: 42px;
  border-radius: 12px;
  background: rgba(245,196,0,0.1);
  border: 1px solid rgba(245,196,0,0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #f5c400;
  transition: background 0.2s, color 0.2s;
}
.csp-crow:hover .csp-iw {
  background: #f5c400;
  color: #0a2463;
}
.csp-clabel {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: rgba(255,255,255,0.28);
  margin: 0 0 3px;
}
.csp-cval {
  font-size: 13px;
  color: rgba(255,255,255,0.72);
  line-height: 1.7;
}
.csp-lk {
  color: rgba(255,255,255,0.72);
  text-decoration: none;
  transition: color 0.15s;
}
.csp-lk:hover {
  color: #f5c400;
}
.csp-hr {
  height: 1px;
  background: rgba(255,255,255,0.08);
  border: none;
  margin: 26px 0;
}
.csp-slabel {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: rgba(255,255,255,0.25);
  margin-bottom: 12px;
}
.csp-socials {
  display: flex;
  gap: 10px;
}
.csp-sbtn {
  width: 38px;
  height: 38px;
  border-radius: 10px;
  border: 1px solid rgba(255,255,255,0.11);
  color: rgba(255,255,255,0.38);
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  transition: all 0.2s;
}
.csp-sbtn:hover {
  background: #f5c400;
  border-color: #f5c400;
  color: #0a2463;
  transform: translateY(-2px);
}

/* DROITE */
.csp-right {
  background: #fff;
  border-radius: 24px;
  padding: 44px;
  box-shadow: 0 8px 48px rgba(10,36,99,0.08);
}
@media (max-width: 540px) {
  .csp-right {
    padding: 28px 20px;
  }
  .csp-left {
    padding: 0 20px 28px;
  }
  .csp-left-topbar {
    margin: 0 -20px 24px;
  }
}
.csp-fhead {
  margin-bottom: 28px;
}
.csp-ftitle {
  font-size: 1.3rem;
  font-weight: 800;
  color: #0a2463;
  margin: 0 0 4px;
  letter-spacing: -0.02em;
}
.csp-fsub {
  color: #9aaac8;
  font-size: 13px;
  font-weight: 300;
  margin: 0;
}

.csp-form {
  display: flex;
  flex-direction: column;
  gap: 18px;
}
.csp-row2 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}
@media (max-width: 540px) {
  .csp-row2 {
    grid-template-columns: 1fr;
  }
}
.csp-field {
  display: flex;
  flex-direction: column;
  gap: 7px;
}
.csp-label {
  font-size: 10.5px;
  font-weight: 700;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: #9aaac8;
}
.csp-input {
  background: #f7f9fd;
  border: 1.5px solid #e2e9f5;
  border-radius: 12px;
  padding: 13px 16px;
  font-family: 'Sora', sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: #0a2463;
  outline: none;
  width: 100%;
  box-sizing: border-box;
  transition: border-color 0.18s, box-shadow 0.18s, background 0.18s;
}
.csp-input::placeholder {
  color: #c0cfe6;
}
.csp-input:focus {
  border-color: #0a2463;
  background: #fff;
  box-shadow: 0 0 0 3px rgba(10,36,99,0.07);
}
.csp-err {
  border-color: #e05252 !important;
  background: #fff8f8 !important;
}
.csp-ta {
  resize: vertical;
  min-height: 130px;
  line-height: 1.65;
}

.csp-submit {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 15px;
  width: 100%;
  background: #0a2463;
  color: #fff;
  font-family: 'Sora', sans-serif;
  font-size: 14px;
  font-weight: 700;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  box-shadow: 0 6px 20px rgba(10,36,99,0.2);
  transition: background 0.2s, transform 0.15s, box-shadow 0.2s;
}
.csp-submit:hover:not(:disabled) {
  background: #0c2d7a;
  transform: translateY(-2px);
  box-shadow: 0 12px 32px rgba(10,36,99,0.3);
}
.csp-submit:active:not(:disabled) {
  transform: translateY(0);
}
.csp-submit:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
.csp-spin {
  width: 16px;
  height: 16px;
  border: 2.5px solid rgba(255,255,255,0.3);
  border-top-color: #fff;
  border-radius: 50%;
  animation: sp 0.65s linear infinite;
}
@keyframes sp {
  to {
    transform: rotate(360deg);
  }
}

/* SUCCÈS */
.csp-ok {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 60px 16px;
  gap: 14px;
}
.csp-ok-ring {
  width: 68px;
  height: 68px;
  border-radius: 50%;
  background: #edf3ff;
  border: 2px solid #c8d9ff;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #0a2463;
}
.csp-ok-title {
  font-size: 1.4rem;
  font-weight: 800;
  color: #0a2463;
  margin: 0;
}
.csp-ok-text {
  color: #8a9bbf;
  font-size: 13.5px;
  font-weight: 300;
  max-width: 300px;
  line-height: 1.7;
  margin: 0;
}
.csp-ok-back {
  font-family: 'Sora', sans-serif;
  font-size: 13px;
  font-weight: 600;
  color: #0a2463;
  background: transparent;
  border: 1.5px solid #c8d9ff;
  border-radius: 30px;
  padding: 10px 22px;
  cursor: pointer;
  margin-top: 6px;
  transition: all 0.2s;
}
.csp-ok-back:hover {
  background: #edf3ff;
  border-color: #0a2463;
}

/* MESSAGE D'ERREUR */
.csp-error-msg {
  margin-top: 16px;
  color: #e05252;
  font-size: 13px;
  text-align: center;
  background: #fff0f0;
  padding: 8px;
  border-radius: 12px;
}
`;

export default ContactSection;