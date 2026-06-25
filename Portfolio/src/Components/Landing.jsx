import React from "react";
import { useNavigate } from "react-router-dom";
import {useEffect} from "react"

export function Landing() {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="landing">

      {/* BACKGROUND GLOWS */}
      <div className="blob b1"></div>
      <div className="blob b2"></div>

      {/* CENTER STAGE */}
      <div className="stage">

        <p className="tag">PORTFOLIO</p>

        <h1>
          Hi, I’m <span>Prachi</span>
        </h1>

        {/* FLOATING ROLES (NOT STACKED) */}
        <div className="roles">
          <span>Full Stack Developer</span>
          <span className="dot">•</span>
          <span>UI Designer</span>
          <span className="dot">•</span>
          <span>Learner</span>
        </div>

        <button onClick={() => navigate("/home")}>
          Enter Portfolio →
        </button>

      </div>

      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: Inter, sans-serif;
        }

        .landing {
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          background: #070b14;
          color: white;
          position: relative;
          overflow: hidden;
        }

        /* GLOW ORBS */
        .blob {
          position: absolute;
          width: 420px;
          height: 420px;
          border-radius: 50%;
          filter: blur(130px);
          opacity: 0.55;
          animation: float 7s ease-in-out infinite;
        }

        .b1 {
          background: #2563eb;
          top: -120px;
          left: -120px;
        }

        .b2 {
          background: #8b5cf6;
          bottom: -140px;
          right: -120px;
          animation-delay: 2s;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-30px) scale(1.1); }
        }

        /* CENTER STAGE */
        .stage {
          text-align: center;
          z-index: 2;
          max-width: 800px;
        }

        .tag {
          font-size: 0.8rem;
          letter-spacing: 4px;
          color: #94a3b8;
          margin-bottom: 18px;
        }

        h1 {
          font-size: 4rem;
          font-weight: 900;
        }

        h1 span {
          background: linear-gradient(90deg, #60a5fa, #a78bfa, #22d3ee);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        /* HORIZONTAL ROLE SYSTEM */
        .roles {
          margin-top: 18px;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
          color: #cbd5e1;
          font-size: 1.1rem;
        }

        .roles span {
          padding: 6px 10px;
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 999px;
          background: rgba(255,255,255,0.03);
          backdrop-filter: blur(10px);
        }

        .dot {
          border: none !important;
          background: none !important;
          padding: 0 !important;
          opacity: 0.5;
        }

        button {
          margin-top: 30px;
          padding: 14px 26px;
          border: none;
          border-radius: 12px;
          background: linear-gradient(90deg, #2563eb, #7c3aed);
          color: white;
          font-weight: 600;
          cursor: pointer;
          transition: 0.3s;
          box-shadow: 0 10px 30px rgba(37,99,235,0.25);
        }

        button:hover {
          transform: translateY(-4px) scale(1.03);
        }

        /* RESPONSIVE */
        @media (max-width: 768px) {
          h1 {
            font-size: 2.6rem;
          }

          .roles {
            font-size: 0.95rem;
          }
        }
      `}</style>

    </div>
  );
}