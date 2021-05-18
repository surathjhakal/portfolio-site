import React, { useEffect, useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
// import photo from "./header-background.jpg";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { fab } from "@fortawesome/free-brand-svg-icons";
const Header = () => {
  // for auto typing
  const [text, setText] = useState("");
  const [fullText, setFullText] = useState("I'm Surath Kumar Jhakal.");
  const [index, setIndex] = useState(0);

  const [isNavCollapsed, setIsNavCollapsed] = useState(false);
  const [show, handleshow] = useState(false);
  const [navshow, setnavshow] = useState(false);
  const [uniqueId, setUniqueId] = useState("id_home");
  // const [mobileUniqueId, mbileSetUniqueId] = useState("id_home");

  useEffect(() => {
    if (window.innerWidth > 900) {
      window.addEventListener("scroll", () => {
        if (window.scrollY > 0 && window.scrollY < 938) {
          setUniqueId("id_home");
        } else if (window.scrollY > 938 && window.scrollY < 1648) {
          setUniqueId("id_about");
        } else if (window.scrollY > 1648 && window.scrollY < 2368) {
          setUniqueId("id_education");
        } else if (window.scrollY > 2368 && window.scrollY < 3640) {
          setUniqueId("id_skills");
        } else if (window.scrollY > 3640) {
          setUniqueId("id_projects");
        }
      });
    } else {
      window.addEventListener("scroll", () => {
        if (window.scrollY > 0 && window.scrollY < 600) {
          setUniqueId("id_home");
        } else if (window.scrollY > 600 && window.scrollY < 1530) {
          setUniqueId("id_about");
        } else if (window.scrollY > 1530 && window.scrollY < 2500) {
          setUniqueId("id_education");
        } else if (window.scrollY > 2500 && window.scrollY < 3800) {
          setUniqueId("id_skills");
        } else if (window.scrollY > 3800) {
          setUniqueId("id_projects");
        }
      });
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY < 940 && window.scrollY > 40) {
        setnavshow(true);
      } else {
        setnavshow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll", () => {
        if (window.scrollY > 940 && window.scrollY < 40) {
          setnavshow(false);
        } else setnavshow(true);
      });
    };
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 900) {
        handleshow(true);
      } else {
        handleshow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll", () => {
        if (window.scrollY < 900) {
          handleshow(false);
        } else handleshow(true);
      });
    };
  }, []);

  const scrollFunction = (id) => {
    if (window.innerWidth > 900) {
      if (id === "home") {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      } else if (id === "about") {
        window.scrollTo({
          top: 940,
          behavior: "smooth",
        });
      } else if (id === "education") {
        window.scrollTo({
          top: 1650,
          behavior: "smooth",
        });
      } else if (id === "skills") {
        window.scrollTo({
          top: 2370,
          behavior: "smooth",
        });
      } else if (id === "projects") {
        window.scrollTo({
          top: 3650,
          behavior: "smooth",
        });
      }
    } else {
      if (id === "home") {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      } else if (id === "about") {
        window.scrollTo({
          top: 670,
          behavior: "smooth",
        });
      } else if (id === "education") {
        window.scrollTo({
          top: 1540,
          behavior: "smooth",
        });
      } else if (id === "skills") {
        window.scrollTo({
          top: 2515,
          behavior: "smooth",
        });
      } else if (id === "projects") {
        window.scrollTo({
          top: 3880,
          behavior: "smooth",
        });
      }
    }
  };

  const goToBottom = () => {
    window.scrollTo({
      top: 948,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    if (index < fullText.length) {
      setTimeout(() => {
        setText(text + fullText[index]);
        setIndex(index + 1);
      }, 100);
    }
  }, [index]);

  return (
    <section id="header" className="d-flex align-items-center">
      <div className="container-fluid ">
        <div className="row">
          <nav
            className={`navbar navbar-expand-lg ${show && "addColor"} ${
              navshow && "hide"
            }`}
          >
            <button
              className="custom-toggler navbar-toggler ml-auto"
              type="button"
              data-toggle="collapse"
              data-target="#navbarsExample09"
              aria-controls="navbarsExample09"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={() => setIsNavCollapsed(!isNavCollapsed)}
            >
              <span className="line"></span>
              <span className="line"></span>
              <span className="line"></span>
            </button>

            <div
              className={`${!isNavCollapsed ? "collapse" : ""} navbar-collapse 
              ${show && "addColor"}`}
              id="navbarsExample09"
            >
              <Link
                onClick={() => scrollFunction("home")}
                to="/"
                className="nav-link"
                id={`${uniqueId === "id_home" && "id_home"}`}
              >
                Home
              </Link>
              <Link
                onClick={() => scrollFunction("about")}
                to="/about"
                className="nav-link"
                id={`${uniqueId === "id_about" && "id_about"}`}
              >
                About
              </Link>
              <Link
                onClick={() => scrollFunction("education")}
                to="/education"
                className="nav-link"
                id={`${uniqueId === "id_education" && "id_education"}`}
              >
                Education
              </Link>
              <Link
                onClick={() => scrollFunction("skills")}
                to="/skills"
                className="nav-link"
                id={`${uniqueId === "id_skills" && "id_skills"}`}
              >
                Skills
              </Link>
              <Link
                onClick={() => scrollFunction("projects")}
                to="/projects"
                className="nav-link"
                id={`${uniqueId === "id_projects" && "id_projects"}`}
              >
                Projects
              </Link>
            </div>
          </nav>
          <div className="info">
            <h1>{text}</h1>
            <h3>
              My next goal is to become<span> Full Stack Developer🔥🔥</span>. I
              love programming and enjoy doing it. I'm really dedicated &
              passionate towards my work ...
            </h3>
            <div className="social">
              <a href="https://www.hackerrank.com/jhakal_surath">
                <i className="fab fa-hackerrank"></i>
              </a>
              {/* <FontAwesomeIcon icon={["fab", "github"]} /> */}
              <a href="https://in.linkedin.com/in/surath-kumar-jhakal-6b200917b?challengeId=AQEgbDVV6R_4VwAAAXarCrTZcNg7ffbE7MmsyeOl5kSq3RVysGOkWQoS4POYzE1CxB4m1plHQ-fU-P_1fYnFZKt8z-RqNuOqag&submissionId=53791110-64fb-5416-b5b1-87b312fddb06">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="https://www.instagram.com/surath.jhakal/">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://github.com/surathjhakal">
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="button">
        <button onClick={goToBottom}>
          <i className="fas fa-angle-down"></i>
        </button>
      </div>
    </section>
  );
};

export default Header;
