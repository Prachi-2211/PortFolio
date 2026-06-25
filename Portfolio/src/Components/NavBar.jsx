import React, { useState } from "react";
import { Link } from "react-router-dom";

export function NavBar() {

  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="nav">

        {/* LOGO */}
        <div className="logo">
          Prachi Dasila<span></span>
        </div>

        {/* LINKS */}
        <div className={`links ${open ? "active" : ""}`}>

          <Link to="/" onClick={() => setOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setOpen(false)}>About</Link>
          <Link to="/skills" onClick={() => setOpen(false)}>Skills</Link>
          <Link to="/projects" onClick={() => setOpen(false)}>Projects</Link>
          <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>

        </div>

        {/* HAMBURGER */}
        <div className="menu" onClick={() => setOpen(!open)}>
          <span></span>
          <span></span>
          <span></span>
        </div>

      </nav>

      {/* STYLE */}
      <style>{`
        *{
          margin:0;
          padding:0;
          box-sizing:border-box;
        }

        body{
          font-family:Inter, sans-serif;
          background:#f8fafc;
        }

        .nav{
          position:sticky;
          top:0;
          display:flex;
          justify-content:space-between;
          align-items:center;
          padding:16px 40px;
          background:#ffffff;
          border-bottom:1px solid #e2e8f0;
          box-shadow:0 6px 20px rgba(15,23,42,0.05);
          z-index:1000;
        }

        .logo{
          font-size:1.3rem;
          font-weight:800;
          color:#0f172a;
        }

        .logo span{
          color:#2563eb;
        }

        .links{
          display:flex;
          gap:28px;
        }

        .links a{
          text-decoration:none;
          color:#475569;
          font-weight:500;
          position:relative;
        }

        .links a:hover{
          color:#2563eb;
        }

        .links a::after{
          content:"";
          position:absolute;
          left:0;
          bottom:-6px;
          width:0%;
          height:2px;
          background:#2563eb;
          transition:.3s;
        }

        .links a:hover::after{
          width:100%;
        }

        .menu{
          display:none;
          flex-direction:column;
          gap:5px;
          cursor:pointer;
        }

        .menu span{
          width:25px;
          height:2px;
          background:#0f172a;
        }

        @media(max-width:768px){
          .menu{
            display:flex;
          }

          .links{
            position:absolute;
            top:70px;
            right:0;
            width:100%;
            flex-direction:column;
            background:#ffffff;
            padding:20px;
            border-top:1px solid #e2e8f0;
            display:none;
          }

          .links.active{
            display:flex;
          }

          .links a{
            padding:10px 0;
          }
        }
      `}</style>
    </>
  );
}