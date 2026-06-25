import {useNavigate} from "react-router-dom"
import {useEffect} from "react"
export function Home() {
  const navigate=useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <section className="hero">

        <div className="container">

          {/* TAG */}
          <span className="tag">
            STUDENT DEVELOPER • FULL STACK • CLOUD & BIG DATA
          </span>

          {/* TITLE */}
          <h1>
            Crafting Clean &
            <br />
            Modern Web Apps
          </h1>

          {/* SUBTITLE */}
          <p className="subtitle">
            I build responsive, scalable, and user-friendly web applications using modern technologies
            like React, Node.js.
          </p>

          {/* DESCRIPTION */}
          <p className="desc">
            I am currently pursuing a Diploma in Cloud Computing and Big Data at Bhausaheb Vartak Polytechnic.
            Alongside, I am learning Full Stack Development from Elite Forums, focusing on real-world project building,
            APIs, and system understanding.
          </p>

          {/* FEATURE PILLS */}
          <div className="featureBar">
            <div>React</div>
            <div>Node.js</div>
            <div>Express</div>
            <div>Cloud Basics</div>
          </div>

          {/* INFO GRID */}
          <div className="grid">

            <div className="card">
              <h3> Education</h3>
              <p>Diploma in Cloud Computing & Big Data at Bhausaheb Vartak Polytechnic.</p>
            </div>

            <div className="card">
              <h3> Full Stack Training</h3>
              <p>Learning React, Node.js, Express from Elight Forum.</p>
            </div>

            <div className="card">
              <h3> Focus Area</h3>
              <p>Frontend UI, backend APIs, and full-stack application development.</p>
            </div>

            <div className="card">
              <h3> Career Goal</h3>
              <p>To become a professional Full Stack Developer building real-world scalable apps.</p>
            </div>

          </div>

          {/* BUTTONS */}
          <div className="buttons">
            <button onClick={() => navigate("/Projects")}>
              View Projects
            </button>

            <button className="outline" onClick={() => navigate("/Contact")}>
              Contact Me
            </button>
          </div>


        </div>

        {/* STATUS BAR */}
        <div className="status">
          <span className="dot"></span>
          Open to internships & learning opportunities
        </div>

      </section>

      {/* STYLE */}
      <style>{`
        /* RESET */
        *{
          margin:0;
          padding:0;
          box-sizing:border-box;
        }

        body{
          background:#f8fafc;
          color:#0f172a;
          font-family:Inter, sans-serif;
        }

        /* HERO */
        .hero{
          min-height:100vh;
          display:flex;
          justify-content:center;
          align-items:center;
          padding:100px 20px;
          position:relative;
          text-align:center;
          background:#f8fafc;
        }

        .container{
          max-width:950px;
          width:100%;
        }

        /* TAG */
        .tag{
          font-size:.8rem;
          letter-spacing:3px;
          color:#475569;
          margin-bottom:12px;
          display:inline-block;
        }

        /* TITLE */
        h1{
          font-size:clamp(3rem,6vw,5.8rem);
          font-weight:900;
          line-height:1.05;
          margin:15px 0;
          color:#0f172a;
        }

        /* SUBTEXT */
        .subtitle{
          color:#334155;
          font-size:1.1rem;
          max-width:750px;
          margin:0 auto 12px;
          line-height:1.7;
        }

        .desc{
          color:#475569;
          font-size:1rem;
          max-width:720px;
          margin:0 auto;
          line-height:1.8;
        }

        /* FEATURE BAR */
        .featureBar{
          display:flex;
          justify-content:center;
          flex-wrap:wrap;
          gap:10px;
          margin-top:30px;
        }

        .featureBar div{
          padding:8px 14px;
          border-radius:999px;
          background:#ffffff;
          border:1px solid #e2e8f0;
          font-size:.85rem;
          color:#334155;
          box-shadow:0 4px 10px rgba(15,23,42,0.05);
        }

        /* GRID */
        .grid{
          margin-top:40px;
          display:grid;
          grid-template-columns:repeat(2,1fr);
          gap:14px;
        }

        /* CARD */
        .card{
          background:#ffffff;
          border:1px solid #e2e8f0;
          border-radius:16px;
          padding:18px;
          text-align:left;
          transition:.3s ease;
          box-shadow:0 8px 20px rgba(15,23,42,0.05);
        }

        .card:hover{
          transform:translateY(-6px);
          border-color:#2563eb;
          box-shadow:0 12px 30px rgba(37,99,235,0.15);
        }

        h3{
          font-size:1rem;
          margin-bottom:6px;
          color:#0f172a;
        }

        .card p{
          font-size:.85rem;
          color:#475569;
          line-height:1.6;
        }

        /* BUTTONS */
        .buttons{
          display:flex;
          justify-content:center;
          gap:16px;
          margin-top:40px;
        }

        button{
          padding:14px 30px;
          border-radius:999px;
          border:none;
          cursor:pointer;
          font-weight:600;
          transition:.3s ease;
        }

        /* PRIMARY */
        button:first-child{
          background:#2563eb;
          color:white;
        }

        button:first-child:hover{
          transform:translateY(-4px);
          box-shadow:0 10px 25px rgba(37,99,235,0.25);
        }

        /* OUTLINE */
        .outline{
          background:transparent;
          border:1px solid #cbd5e1;
          color:#0f172a;
        }

        .outline:hover{
          background:#eef2ff;
        }

        /* STATUS */
        .status{
          position:absolute;
          bottom:25px;
          left:50%;
          transform:translateX(-50%);
          display:flex;
          align-items:center;
          gap:10px;
          padding:10px 16px;
          border-radius:999px;
          background:#ffffff;
          border:1px solid #e2e8f0;
          color:#475569;
          font-size:.9rem;
          box-shadow:0 5px 15px rgba(15,23,42,0.05);
        }

        .dot{
          width:8px;
          height:8px;
          border-radius:50%;
          background:#22c55e;
          box-shadow:0 0 10px #22c55e;
        }

        /* RESPONSIVE */
        @media(max-width:700px){
          .grid{
            grid-template-columns:1fr;
          }

          .buttons{
            flex-direction:column;
          }

          button{
            width:100%;
          }
        }
      `}</style>
    </>
  );
}                    