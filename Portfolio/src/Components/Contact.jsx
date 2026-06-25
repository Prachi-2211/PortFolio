import React from "react";
import {useEffect} from "react"

export function Contact() {
    useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="contact">

      {/* HERO */}
      <div className="hero">

        <div className="badge">GET IN TOUCH</div>

        <h1 className="heroTitle">Let’s Work Together</h1>

        <p className="heroText">
          I’m currently open to internships, collaborations, and full-stack learning opportunities.
        </p>

      </div>

      {/* MAIN LAYOUT */}
      <div className="wrapper">

        {/* FORM */}
        <div className="form">

          <h2>Send a Message</h2>

          <div className="inputRow">
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
          </div>

          <input type="text" placeholder="Subject" />

          <textarea placeholder="Your Message"></textarea>

          <button>Send Message</button>

        </div>

        {/* INFO */}
        <div className="info">

          <div className="lineBlock">
            <h3>Direct Contact</h3>
            <p className="accent">yourname@email.com</p>
          </div>

          <div className="divider"></div>

          <div className="lineBlock">
            <h3>Current Status</h3>
            <p>Learning Full Stack Development</p>
            <p className="sub">Open to internships & projects</p>
          </div>

          <div className="divider"></div>

          <div className="lineBlock">
            <h3>Collaboration</h3>
            <p>Web development • UI projects • Backend practice</p>
          </div>

          <div className="divider"></div>

          <div className="note">
            <p>
              I prefer structured communication. Please include project details,
              timeline, and objective when reaching out.
            </p>
          </div>

       
          <div className="divider"></div>


        </div>

      </div>

      {/* STYLE */}
      <style>{`
        *{
          margin:0;
          padding:0;
          box-sizing:border-box;
          font-family:Inter, sans-serif;
        }

        :root{
          --blue:#2563eb;
          --blueDark:#1d4ed8;
          --light:#f8fafc;
          --border:#e5e7eb;
          --text:#0f172a;
          --muted:#555;
        }

        .contact{
          background:#ffffff;
          color:var(--text);
          padding:90px 20px;
        }

        /* HERO */
        .hero{
          text-align:center;
          max-width:720px;
          margin:0 auto 60px auto;
          padding:0 20px;
          display:flex;
          flex-direction:column;
          align-items:center;
        }

        .badge{
          font-size:.75rem;
          padding:6px 12px;
          border-radius:999px;
          background:var(--light);
          border:1px solid var(--border);
          color:var(--blue);
          margin-bottom:14px;
          letter-spacing:1px;
        }

        .heroTitle{
          font-size:2.6rem;
          font-weight:900;
          color:var(--text);
          margin:0;
          line-height:1.2;
        }

        .heroText{
          margin-top:12px;
          font-size:1.05rem;
          color:var(--muted);
          line-height:1.7;
          max-width:600px;
        }

        /* WRAPPER */
        .wrapper{
          max-width:1000px;
          margin:auto;
          display:grid;
          grid-template-columns:1.3fr 1fr;
          gap:60px;
        }

        /* FORM */
        .form h2{
          font-size:1.3rem;
          margin-bottom:20px;
          color:var(--text);
        }

        .inputRow{
          display:grid;
          grid-template-columns:1fr 1fr;
          gap:10px;
        }

        input, textarea{
          width:100%;
          padding:12px 14px;
          margin-bottom:12px;
          border:1px solid var(--border);
          border-radius:8px;
          font-size:.95rem;
          outline:none;
          transition:.2s;
        }

        input:focus, textarea:focus{
          border-color:var(--blue);
          box-shadow:0 0 0 2px rgba(37,99,235,0.1);
        }

        textarea{
          height:140px;
          resize:none;
        }

        button{
          width:100%;
          padding:12px;
          border:none;
          border-radius:8px;
          background:var(--blue);
          color:#fff;
          font-weight:600;
          cursor:pointer;
          transition:.2s;
        }

        button:hover{
          background:var(--blueDark);
          transform:translateY(-2px);
        }

        /* INFO */
        .info{
          display:flex;
          flex-direction:column;
        }

        .lineBlock{
          padding:6px 0;
        }

        .lineBlock h3{
          font-size:.95rem;
          color:var(--text);
          margin-bottom:4px;
        }

        .lineBlock p{
          font-size:.9rem;
          color:var(--muted);
          line-height:1.6;
        }

        .accent{
          color:var(--blue);
          font-weight:500;
        }

        .sub{
          font-size:.85rem;
          color:var(--muted);
        }

        .divider{
          height:1px;
          background:var(--border);
          margin:14px 0;
        }

        .note{
          margin-top:10px;
          padding-left:10px;
          border-left:3px solid var(--blue);
        }

        .note p{
          font-size:.9rem;
          color:var(--muted);
          line-height:1.6;
        }

        /* LINKEDIN BUTTON */
        .socialCard {
          padding: 10px 0;
        }

        .socialCard h3 {
          font-size: .95rem;
          margin-bottom: 10px;
          color: var(--text);
        }

        .socialBtn {
          display: inline-block;
          width: 100%;
          padding: 12px;
          border-radius: 8px;
          text-align: center;
          font-weight: 600;
          text-decoration: none;
          transition: 0.2s ease;
        }

        .linkedin {
          background: #0a66c2;
          color: white;
        }

        .linkedin:hover {
          background: #004182;
          transform: translateY(-2px);
        }

        /* RESPONSIVE */
        @media(max-width:900px){
          .wrapper{
            grid-template-columns:1fr;
            gap:40px;
          }

          .heroTitle{
            font-size:2.2rem;
          }

          .inputRow{
            grid-template-columns:1fr;
          }
        }
      `}</style>

    </section>
  );
}