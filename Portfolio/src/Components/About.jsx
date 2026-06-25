import React from "react";
import {useEffect} from "react"
export function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="about">

      {/* HERO */}
      <div className="hero">
        <h1>About Me</h1>
        <p>
          Student Developer focused on Full Stack Development, Cloud Computing,
          and building real-world applications with clean structure and consistency.
        </p>
      </div>

      {/* STORY SECTION */}
      <div className="story">

        <h2>My Journey</h2>

        <p>
          I started exploring technology with curiosity about how websites and applications work.
          Over time, this curiosity turned into structured learning where I began understanding
          how frontend, backend, and databases connect in real systems.
        </p>

        <p>
          My focus is not just on learning tools but on understanding concepts deeply and applying them
          through consistent practice. I prefer building small projects and improving them step by step.
        </p>

        <p className="quote">
          “Consistency, clarity, and practice matter more than rushing through technologies.”
        </p>

        <h2>Working Approach</h2>

        <p>
          I follow a structured approach: understand concepts → build small projects → improve continuously.
          I focus on clean code, logical thinking, and real implementation instead of memorization.
        </p>

      </div>

      {/* MODERN INFO SECTION (REPLACED CARD SYSTEM) */}
      <div className="infoSection">

        <div className="block">
          <h3>Education</h3>
          <p>
            Diploma in Cloud Computing & Big Data at Bhausaheb Vartak Polytechnic,
            focusing on computing fundamentals and data systems.
          </p>
        </div>

        <div className="block">
          <h3>Current Learning</h3>
          <p>
            Full Stack Development training at Elight Forum with focus on React,
            Node.js, Express, MongoDB, and real-world project building.
          </p>
        </div>

        <div className="block">
          <h3>Development Stack</h3>

          <div className="chips">
            <span>React</span>
            <span>Node.js</span>
            <span>Express</span>
            <span>JavaScript</span>
            <span>REST APIs</span>
          </div>
        </div>

        <div className="block highlight">
          <h3>Career Direction</h3>
          <p>
            Focused on becoming a Full Stack Developer capable of building scalable,
            production-ready web applications with clean UI and strong backend logic.
          </p>
        </div>

      </div>

      {/* TIMELINE */}
      <div className="timeline">

        <h2>Learning Journey</h2>

        <div className="steps">

          <div className="step">
            <span>01</span>
            <p>Started with HTML, CSS, and basic web development concepts</p>
          </div>

          <div className="step">
            <span>02</span>
            <p>Learned JavaScript and frontend frameworks like React</p>
          </div>

          <div className="step">
            <span>03</span>
            <p>Currently building full stack applications using MERN stack</p>
          </div>

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

        .about{
          background:#f8fafc;
          color:#0f172a;
          padding:90px 20px;
        }

        /* HERO */
        .hero{
          text-align:center;
          max-width:800px;
          margin:auto;
        }

        .hero h1{
          font-size:3.5rem;
          font-weight:900;
          color:#000;
        }

        .hero p{
          margin-top:12px;
          color:#111;
          font-size:1.1rem;
          line-height:1.7;
        }

        /* STORY */
        .story{
          max-width:800px;
          margin:60px auto;
        }

        .story h2{
          font-size:1.4rem;
          margin:30px 0 10px;
          color:#000;
        }

        .story p{
          color:#111;
          line-height:1.9;
          margin-bottom:16px;
          font-size:1rem;
        }

        .quote{
          margin:25px 0;
          padding:18px;
          border-left:4px solid #2563eb;
          background:#ffffff;
          font-style:italic;
          color:#000;
          box-shadow:0 8px 18px rgba(0,0,0,0.05);
          border-radius:10px;
        }

        /* MODERN INFO SECTION */
        .infoSection{
          max-width:1000px;
          margin:70px auto;
          display:grid;
          grid-template-columns:1fr 1fr;
          gap:18px;
        }

        .block{
          background:#ffffff;
          border:1px solid #e5e7eb;
          border-radius:16px;
          padding:22px;
          box-shadow:0 10px 25px rgba(0,0,0,0.04);
          transition:.3s;
        }

        .block:hover{
          transform:translateY(-5px);
          border-color:#2563eb;
        }

        .block h3{
          font-size:1rem;
          margin-bottom:10px;
          color:#000;
        }

        .block p{
          color:#111;
          line-height:1.7;
        }

        .highlight{
          border-left:4px solid #2563eb;
        }

        .chips{
          display:flex;
          flex-wrap:wrap;
          gap:8px;
          margin-top:10px;
        }

        .chips span{
          font-size:.75rem;
          padding:6px 10px;
          border-radius:999px;
          background:#f1f5f9;
          border:1px solid #e2e8f0;
          color:#111;
        }

        /* TIMELINE */
        .timeline{
          max-width:900px;
          margin:80px auto 0;
          text-align:center;
        }

        .timeline h2{
          margin-bottom:30px;
          color:#000;
        }

        .steps{
          display:flex;
          gap:20px;
          flex-wrap:wrap;
        }

        .step{
          flex:1;
          min-width:250px;
          background:#ffffff;
          border:1px solid #e2e8f0;
          padding:20px;
          border-radius:14px;
          text-align:left;
          box-shadow:0 10px 20px rgba(0,0,0,0.05);
        }

        .step span{
          font-size:1.3rem;
          font-weight:900;
          color:#2563eb;
        }

        .step p{
          margin-top:10px;
          color:#111;
          line-height:1.6;
        }

        /* RESPONSIVE */
        @media(max-width:768px){
          .hero h1{
            font-size:2.5rem;
          }

          .infoSection{
            grid-template-columns:1fr;
          }

          .steps{
            flex-direction:column;
          }
        }
      `}</style>

    </section>
  );
}