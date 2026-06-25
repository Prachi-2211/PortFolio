import React from "react";
import { useEffect } from "react";

export function Projects() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="projects">

      {/* ================= HERO ================= */}
      <div className="hero">

        <div className="badge">
          FULL STACK DEVELOPMENT • LEARNING PHASE
        </div>

        <h1>Selected Projects</h1>

        <p>
          A collection of real projects I’ve built while learning full-stack development,
          focusing on clean UI design, real-world logic, and structured development thinking.
        </p>

        <div className="heroMeta">

          <div className="metaBox">
            <h3>5</h3>
            <span>Major Projects</span>
          </div>

          <div className="metaBox">
            <h3>React</h3>
            <span>Frontend Focus</span>
          </div>

          <div className="metaBox">
            <h3>Figma</h3>
            <span>UI Design</span>
          </div>

        </div>

      </div>

      {/* ================= PROJECT 1 ================= */}
      <div className="project">

        <div className="preview">
          <div className="browser">
            <div className="topbar">
              <span></span><span></span><span></span>
            </div>
            <div className="screen smartbin">
              <img src="/SmartBin.PNG" alt="SmartBin AI" />
            </div>
          </div>
        </div>

        <div className="content">
          <h2>SmartBin AI</h2>
          <p className="role">AI Concept • Sustainability Project</p>
          <p>
            SmartBin AI is an intelligent waste management concept designed to help
            users identify and segregate waste using smart AI-based guidance.
          </p>

          <div className="highlight">
            <span>AI Concept</span>
            <span>Problem Solving</span>
            <span>Innovation</span>
          </div>

          <button>View Project</button>
        </div>

      </div>

      <div className="divider"></div>

      {/* ================= PROJECT 2 ================= */}
      <div className="project reverse">

        <div className="preview">
          <div className="browser">
            <div className="topbar">
              <span></span><span></span><span></span>
            </div>
            <div className="screen technova">
              <img src="/TechNova.png" alt="TechNova" />
            </div>
          </div>
        </div>

        <div className="content">
          <h2>TechNova E-Commerce</h2>
          <p className="role">Frontend Project • UI Design</p>
          <p>
            TechNova is a modern e-commerce frontend project built with clean UI
            and responsive shopping experience simulation.
          </p>

          <div className="highlight">
            <span>E-Commerce</span>
            <span>React</span>
            <span>UI/UX</span>
            <span>Frontend</span>
            <span>Backend</span>
          </div>

          <button>View Project</button>
        </div>

      </div>

      <div className="divider"></div>

      {/* ================= PROJECT 3 ================= */}
      <div className="project">

        <div className="preview">
          <div className="browser">
            <div className="topbar">
              <span></span><span></span><span></span>
            </div>
            <div className="screen quizofy">
              <img src="/Quizofy.PNG" alt="Quizofy" />
            </div>
          </div>
        </div>

        <div className="content">
          <h2>Quizofy</h2>
          <p className="role">Quiz App • UI/UX Concept</p>
          <p>
            Quizofy is a gamified quiz platform designed for interactive learning
            with instant feedback and smooth UI.
          </p>

          <div className="highlight">
            <span>UI/UX Design</span>
            <span>Gamification</span>
            <span>Learning App</span>
          </div>

          <button>View Project</button>
        </div>

      </div>

      <div className="divider"></div>

      {/* ================= PROJECT 4 ================= */}
      <div className="project reverse">

        <div className="preview">
          <div className="browser">
            <div className="topbar">
              <span></span><span></span><span></span>
            </div>
            <div className="screen carRacing">
              <img src="/CarRacing.PNG" alt="Car Racing UI" />
            </div>
          </div>
        </div>

        <div className="content">
          <h2>Car Racing Interface</h2>
          <p className="role">Figma UI Design • Gaming Concept</p>
          <p>
            A futuristic car racing interface designed in Figma focusing on speed,
            dashboard UI, and immersive gaming experience.
          </p>

          <div className="highlight">
            <span>Figma</span>
            <span>Game UI</span>
            <span>Dashboard</span>
            <span>Creative Design</span>
          </div>

          <button>View Design</button>
        </div>

      </div>

      <div className="divider"></div>

      {/* ================= PROJECT 5 (MUSOFY) ================= */}
      <div className="project">

        <div className="preview">
          <div className="browser">
            <div className="topbar">
              <span></span><span></span><span></span>
            </div>

            <div className="screen musofy">
              <img src="/Musofy.png" alt="Musofy Music App" />
            </div>
          </div>
        </div>

        <div className="content">
          <h2>Musofy </h2>
          <p className="role">Music Web App • HTML/CSS Project</p>

          <p>
            Musofy is a simple music streaming web application inspired by Spotify.
            It allows users to play songs, pause music, and enjoy a clean modern UI.
            Built using HTML, CSS, and JavaScript to understand audio handling and UI design.
          </p>

          <div className="highlight">
            <span>HTML</span>
            <span>CSS</span>
            <span>UI Design</span>
          </div>

          <button>View Project</button>
        </div>

      </div>

      {/* ================= STYLE ================= */}
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: Inter, sans-serif;
          color: #000;
        }

        .projects,
        .projects * {
          color: #000 !important;
        }

        .projects {
          background: #ffffff;
          padding: 90px 20px;
        }

        .hero {
          text-align: center;
          max-width: 800px;
          margin: auto;
          padding-bottom: 50px;
        }

        .badge {
          display: inline-block;
          font-size: .75rem;
          padding: 6px 12px;
          border-radius: 999px;
          background: #f8fafc;
          border: 1px solid #e5e7eb;
          margin-bottom: 15px;
        }

        .hero h1 {
          font-size: 3rem;
          font-weight: 900;
        }

        .hero p {
          line-height: 1.7;
          margin-top: 10px;
        }

        .heroMeta {
          margin-top: 25px;
          display: flex;
          justify-content: center;
          gap: 15px;
          flex-wrap: wrap;
        }

        .metaBox {
          padding: 12px 18px;
          border: 1px solid #e5e7eb;
          border-radius: 14px;
          box-shadow: 0 8px 20px rgba(0,0,0,0.04);
          background: #fff;
        }

        .project {
          max-width: 1100px;
          margin: 90px auto;
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 50px;
          align-items: center;
        }

        .project.reverse {
          grid-template-columns: 1fr 1.2fr;
        }

        .browser {
          border: 1px solid #e5e7eb;
          border-radius: 16px;
          overflow: hidden;
        }

        .topbar {
          height: 38px;
          background: #f1f5f9;
          display: flex;
          align-items: center;
          padding: 0 10px;
          gap: 6px;
        }

        .topbar span {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #000;
        }

        .screen {
          height: 320px;
        }

        .screen img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .smartbin { background: #e0f2fe; }
        .technova { background: #fef3c7; }
        .quizofy { background: #ecfdf5; }
        .carRacing { background: #ecfdf5; }
        .musofy { background: #f3e8ff; }

        .content h2 {
          font-size: 1.9rem;
          font-weight: 800;
        }

        .role {
          font-size: .85rem;
          margin-bottom: 10px;
        }

        .content p {
          line-height: 1.7;
          margin-bottom: 18px;
        }

        .highlight {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 18px;
        }

        .highlight span {
          font-size: .75rem;
          padding: 6px 10px;
          border-radius: 999px;
          border: 1px solid #e5e7eb;
          background: #f8fafc;
        }

        button {
          padding: 11px 16px;
          border-radius: 10px;
          border: none;
          background: #2563eb;
          color: #fff !important;
          font-weight: 600;
          cursor: pointer;
        }

        button:hover {
          background: #1d4ed8;
        }

        .divider {
          max-width: 900px;
          margin: 80px auto;
          height: 1px;
          background: #e5e7eb;
        }

        @media (max-width: 900px) {
          .project,
          .project.reverse {
            grid-template-columns: 1fr;
          }

          .hero h1 {
            font-size: 2.3rem;
          }

          .screen {
            height: 240px;
          }
        }
      `}</style>

    </section>
  );
}