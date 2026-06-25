import React from "react";

export function Footer() {
  return (
    <footer className="footer">

      <div className="container">

        <h2>Prachi Dasila</h2>

        <p>
          Full Stack Developer (Learning Phase) focused on building clean and
          responsive web applications using modern technologies.
        </p>

        <div className="info">
          <span> India</span>
          <span>Open to internships</span>
          <span> React • Node • Supabase</span>
        </div>

      </div>

      <div className="bottom">
        <p>© {new Date().getFullYear()} Prachi Dasila. All rights reserved.</p>
      </div>

      <style>{`
        *{
          margin:0;
          padding:0;
          box-sizing:border-box;
          font-family:Inter, sans-serif;
        }

        .footer{
          background:#ffffff;
          border-top:1px solid #e5e7eb;
          padding:50px 20px 25px;
          color:#0f172a;
          text-align:center;
        }

        .container{
          max-width:800px;
          margin:auto;
        }

        .container h2{
          font-size:1.6rem;
          font-weight:900;
          color:#000;
          margin-bottom:10px;
        }

        .container p{
          color:#333;
          line-height:1.7;
          font-size:.95rem;
          margin-bottom:18px;
        }

        .info{
          display:flex;
          justify-content:center;
          gap:18px;
          flex-wrap:wrap;
          font-size:.9rem;
          color:#444;
        }

        .info span{
          background:#f1f5f9;
          padding:6px 12px;
          border-radius:999px;
          border:1px solid #e5e7eb;
        }

        .bottom{
          margin-top:25px;
          padding-top:15px;
          border-top:1px solid #e5e7eb;
          font-size:.85rem;
          color:#666;
        }

        /* RESPONSIVE */
        @media(max-width:600px){
          .info{
            flex-direction:column;
            align-items:center;
            gap:8px;
          }
        }
      `}</style>

    </footer>
  );
}