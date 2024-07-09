import React, { useState, useEffect, useRef } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import { links, about } from "./config/data";
import Skills from "./components/Skills";
import ProjectSection from "./components/ProjectsSection/ProjectSection";
// import "./App.css";
import MobileWarning from "./components/MobileWarning";
import Aboutme from "./components/AboutMe/Aboutme";

export default function App() {
  const parallax = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const [showWarning, setShowWarning] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      console.log(window.innerWidth);
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (isMobile) {
      console.log("inside if");
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMobile]);

  const gradient = [
    "#4484ce",
    "#1ad7c0",
    "#ff9b11",
    "#9b59b6",
    "#ff7f7f",
    "#ecf0f1",
  ];

  return (
    <div
      className={`w-full h-[100vh] App ${isMobile ? "no-scroll" : ""}`}
      style={{
        background: `linear-gradient(136deg,${gradient})`,
        backgroundSize: "1200% 1200%",
      }}
    >
      {isMobile && showWarning && (
        <MobileWarning onClose={() => setShowWarning(false)} />
      )}
      <Navbar parallaxRef={parallax} />
      <Parallax ref={parallax} pages={4} enabled={!isMobile}>
        <ParallaxLayer
          offset={1}
          speed={1}
          style={{ backgroundColor: "#f19f4d" }}
        />
        <ParallaxLayer
          offset={2}
          speed={1}
          style={{ backgroundColor: "#d9d9d9" }}
        />
        <ParallaxLayer
          offset={3}
          speed={1}
          style={{ backgroundColor: "#0b3c5d" }}
        />

        <ParallaxLayer
          className="text-white w-"
          offset={0}
          speed={0}
          factor={3}
          style={{
            backgroundImage: "url(./images/stars.svg)",
            backgroundSize: "cover",
          }}
        />

        <ParallaxLayer
          offset={1.3}
          speed={-0.3}
          style={{ pointerEvents: "none" }}
        >
          <img
            src="./images/react.webp"
            style={{ width: "15%", marginLeft: "70%" }}
            alt="im"
          />
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.2 }}>
          <img
            src="./images/css.png"
            style={{ display: "block", width: "20%", marginLeft: "55%" }}
            alt="im"
          />
          <img
            src="./images/git.png"
            style={{ display: "block", width: "10%", marginLeft: "15%" }}
            alt="im"
          />
        </ParallaxLayer>

        <ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>
          <img
            src="./images/cpp.svg"
            style={{ display: "block", width: "15%", marginLeft: "70%" }}
            alt="im"
          />
          {/* <img src='./images/cloud.svg' style={{ display: 'block', width: '20%', marginLeft: '40%' }} alt='im'/> */}
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.2 }}>
          <img
            src="./images/python.png"
            style={{ display: "block", width: "10%", marginLeft: "10%" }}
            alt="im"
          />
          <img
            src="./images/html.png"
            style={{ display: "block", width: "20%", marginLeft: "75%" }}
            alt="im"
          />
        </ParallaxLayer>

        <ParallaxLayer offset={1.6} speed={-0.1} style={{ opacity: 0.4 }}>
          <img
            src="./images/js.png"
            style={{ display: "block", width: "20%", marginLeft: "60%" }}
            alt="im"
          />
          <img
            src="./images/tailwind.png"
            style={{ display: "block", width: "25%", marginLeft: "30%" }}
            alt="im"
          />
          <img
            src="./images/mongo.webp"
            style={{ display: "block", width: "10%", marginLeft: "80%" }}
            alt="im"
          />
        </ParallaxLayer>

        <ParallaxLayer offset={2.6} speed={0.4} style={{ opacity: 0 }}>
          <img
            src="./images/react.webp"
            style={{ display: "block", width: "20%", marginLeft: "5%" }}
            alt="im"
          />
          <img
            src="./images/figma.png"
            style={{ display: "block", width: "12%", marginLeft: "75%" }}
            alt="im"
          />
        </ParallaxLayer>

        {/* 3 */}

        <ParallaxLayer offset={3} speed={0.8} style={{ opacity: 0.3 }}>
          <img
            src="./images/css.png"
            style={{ display: "block", width: "20%", marginLeft: "55%" }}
            alt="im"
          />
          <img
            src="./images/git.png"
            style={{ display: "block", width: "10%", marginLeft: "15%" }}
            alt="im"
          />
        </ParallaxLayer>

        <ParallaxLayer offset={3.75} speed={0.5} style={{ opacity: 0.1 }}>
          <img
            src="./images/cpp.svg"
            style={{ display: "block", width: "15%", marginLeft: "70%" }}
            alt="im"
          />
          {/* <img src='./images/cloud.svg' style={{ display: 'block', width: '20%', marginLeft: '40%' }} alt='im'/> */}
        </ParallaxLayer>

        <ParallaxLayer offset={3} speed={0.2} style={{ opacity: 0.2 }}>
          <img
            src="./images/python.png"
            style={{ display: "block", width: "10%", marginLeft: "10%" }}
            alt="im"
          />
          <img
            src="./images/html.png"
            style={{ display: "block", width: "20%", marginLeft: "75%" }}
            alt="im"
          />
        </ParallaxLayer>

        <ParallaxLayer offset={3.6} speed={-0.1} style={{ opacity: 0.4 }}>
          <img
            src="./images/js.png"
            style={{ display: "block", width: "20%", marginLeft: "60%" }}
            alt="im"
          />
          <img
            src="./images/tailwind.png"
            style={{ display: "block", width: "25%", marginLeft: "30%" }}
            alt="im"
          />
          <img
            src="./images/mongo.webp"
            style={{ display: "block", width: "10%", marginLeft: "80%" }}
            alt="im"
          />
        </ParallaxLayer>

        {/*  */}

        <ParallaxLayer
          offset={2.5}
          speed={-0.4}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            pointerEvents: "none",
          }}
        >
          {/* <img src="./images/earth.svg" style={{ width: "60%" }} alt="im" /> */}
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={-0.3}
          style={{
            backgroundSize: "80%",
            backgroundPosition: "center",
            // backgroundImage: "url(./images/clients.svg)",
          }}
        />

        {/* offset 3 ke liye samaan*/}
        {/* <ParallaxLayer
          offset={3}
          speed={-0.3}
          style={{
            backgroundSize: '80%',
            backgroundPosition: 'center',
            backgroundImage: url('clients', true),
          }}
        /> */}
        {/* end */}

        <ParallaxLayer
          offset={0}
          speed={0.1}
          // onClick={() => parallax.current.scrollTo(1)}
          style={{
            display: "flex",
            marginTop: "15rem",
            justifyContent: "center",
          }}
        >
          {/* <img src={url('server')} style={{ width: '20%' }} /> */}
          <HeroSection links={links} />
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          speed={0.1}
          // onClick={() => parallax.current.scrollTo(2)}
          style={{
            display: "flex",
            marginTop: "4rem",
            justifyContent: "center",
          }}
        >
          {/* <img src="./images/bash.svg" style={{ width: "40%" }} alt="im" /> */}
          <Skills />
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={-0}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          // onClick={() => parallax.current.scrollTo(3)}
        >
          {/* <img
            src="./images/clients-main.svg"
            style={{ width: "40%" }}
            alt="im"
          /> */}

          {/* <Carousel /> */}
          {/* <Projects projects={projectdata} /> */}
          <ProjectSection />
        </ParallaxLayer>

        <ParallaxLayer
          offset={3}
          speed={0.1}
          // onClick={() => parallax.current.scrollTo(0)}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* <img src="./images/bash.svg" style={{ width: "40%" }} alt="im" /> */}
          <Aboutme
            heading={about.heading}
            message={about.message}
            link={about.imageLink}
            imgSize={about.imageSize}
            resume={about.resume}
          />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}
