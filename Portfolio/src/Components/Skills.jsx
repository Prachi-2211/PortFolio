import React from "react";
import {useEffect} from "react"

export function Skills() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="skills">

      {/* HERO */}
      <div className="hero">
        <h1>Skills & Technologies</h1>
        <p>
          A structured overview of my frontend, backend, programming, and design skills.
        </p>
      </div>

      {/* CONTENT */}
      <div className="content">

        {/* LEFT SIDE */}
        <div className="left">

          <div className="section">
            <h3>Frontend Development</h3>

            <div className="item"><span>HTML</span><div className="bar w100"></div></div>
            <div className="item"><span>CSS</span><div className="bar w100"></div></div>
            <div className="item"><span>JavaScript</span><div className="bar w100"></div></div>
            <div className="item"><span>React</span><div className="bar w95"></div></div>
          </div>

          <div className="section">
            <h3>Backend Development</h3>

            <div className="item"><span>Node.js</span><div className="bar w65"></div></div>
            <div className="item"><span>Express</span><div className="bar w60"></div></div>
            <div className="item"><span>REST API</span><div className="bar w55"></div></div>
            <div className="item"><span>Supabase</span><div className="bar w60"></div></div>
          </div>

          <div className="section">
            <h3>Programming Languages</h3>

            <div className="item"><span>C</span><div className="bar w90"></div></div>
            <div className="item"><span>C++</span><div className="bar w85"></div></div>
            <div className="item"><span>Python</span><div className="bar w80"></div></div>
          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="right">

          <div className="panel">
            <h3>Core Focus</h3>
            <p>
              Building full-stack applications by connecting clean frontend UI with scalable backend logic.
            </p>
          </div>

          <div className="panel">
            <h3>Tech Stack</h3>
            <div className="chips">
              <span>React</span>
              <span>Node.js</span>
              <span>Express</span>
              <span>Supabase</span>
              <span>JavaScript</span>
              <span>HTML</span>
              <span>CSS</span>
              <span>Git</span>
            </div>
          </div>

          <div className="panel">
            <h3>Design Skills</h3>
            <div className="chips">
              <span>UI/UX Design</span>
              <span>Wireframing</span>
              <span>Clean UI Thinking</span>
            </div>
          </div>

          <div className="panel">
            <h3>Current Focus</h3>
            <p>
              Improving backend logic, APIs, and building real-world full-stack projects.
            </p>
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

        .skills{
          background:#ffffff;
          color:#0f172a;
          padding:90px 20px 140px 20px;
          min-height:100vh;
        }

        /* HERO */
        .hero{
          text-align:center;
          max-width:750px;
          margin:auto;
        }

        .hero h1{
          font-size:3.2rem;
          font-weight:900;
          color:#000;
        }

        .hero p{
          margin-top:12px;
          color:#333;
          font-size:1.05rem;
          line-height:1.7;
        }

        /* CONTENT */
        .content{
          max-width:1050px;
          margin:70px auto 0 auto;
          display:grid;
          grid-template-columns:2fr 1fr;
          gap:40px;
        }

        /* LEFT */
        .section{
          margin-bottom:40px;
        }

        .section h3{
          font-size:1.2rem;
          margin-bottom:18px;
          color:#000;
          border-left:3px solid #2563eb;
          padding-left:10px;
        }

        .item{
          display:flex;
          justify-content:space-between;
          align-items:center;
          margin-bottom:14px;
        }

        .item span{
          font-size:.95rem;
          color:#111;
          width:140px;
        }

        .bar{
          flex:1;
          height:6px;
          background:#e5e7eb;
          border-radius:999px;
          margin-left:15px;
          position:relative;
          overflow:hidden;
        }

        .bar::after{
          content:"";
          position:absolute;
          left:0;
          top:0;
          height:100%;
          width:100%;
          background:linear-gradient(90deg,#2563eb,#60a5fa);
          border-radius:999px;
        }

        .w100::after{width:100%;}
        .w95::after{width:95%;}
        .w90::after{width:90%;}
        .w85::after{width:85%;}
        .w80::after{width:80%;}
        .w65::after{width:65%;}
        .w60::after{width:60%;}
        .w55::after{width:55%;}

        /* RIGHT */
        .panel{
          margin-bottom:18px;
          padding:18px;
        }

        .panel h3{
          color:#000;
          margin-bottom:10px;
          font-size:1.05rem;
        }

        .panel p{
          color:#333;
          line-height:1.7;
        }

        /* CHIPS */
        .chips{
          display:flex;
          flex-wrap:wrap;
          gap:8px;
        }

        .chips span{
          font-size:.75rem;
          padding:6px 10px;
          border-radius:999px;
          background:#f1f5f9;
          color:#111;
        }

        /* RESPONSIVE */
        @media(max-width:768px){
          .content{
            grid-template-columns:1fr;
          }

          .hero h1{
            font-size:2.5rem;
          }

          .item{
            flex-direction:column;
            align-items:flex-start;
          }

          .bar{
            width:100%;
            margin-left:0;
            margin-top:6px;
          }
        }
      `}</style>

    </section>
  );
}