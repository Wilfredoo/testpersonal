import React, { useState, useEffect } from "react";
import "../App.css";
import icons from "../iconArray";
import titles from "../titleArray";

function Main() {
  const [randomIcon, setRandomIcon] = useState(null);
  const [randomTitle, setRandomTitle] = useState(null);
  const [randomBinary, setRandomBinary] = useState(null);


  useEffect(() => {
    randomizeIcon();
    randomizeTitle();
    randomizeBinary();

  }, []);

  async function randomizeIcon() {
    const cornerIcon = await icons[Math.floor(Math.random() * icons.length)];
    console.log("corner icon", cornerIcon);
    setRandomIcon(cornerIcon);
  }

  async function randomizeTitle() {
    const title = await titles[Math.floor(Math.random() * titles.length)];
    setRandomTitle(title);
  }


  async function randomizeBinary() {
    const binary = Math.floor(Math.random() * 2)
    setRandomBinary(binary);
  }

  return (
    <div className="mainContainer">
      <div className="subContainer">
        <div className="header">
          <div className="avatar-container">
            <img className="avatar" src={`/wilfredo${randomBinary}.png`} />
          </div>
          <div className="text-container">
            <h1 id="title">Wilfredo Casas</h1>

            {randomTitle !== "null" && (
              <p className="subtitle">
                Entrepreneur {"&"} {randomTitle}
              </p>
            )}
            {randomTitle === "null" && (
              <p className="subtitle">Entrepreneur and Software Developer</p>
            )}
          </div>
        </div>

        <div className="iconsContainer">
          <div className="github-container">
            <a className="github-link" href="https://github.com/wilfredoo" target="_blank">
              <img className="github-icon" src="/github.svg" />
            </a>
          </div>

          <div className="youtube-container">
            <a
              className="youtube-link"
              href="https://www.youtube.com/watch?v=kQQYVco9nS4&ab_channel=WilCas"
              target="_blank"
            >
              <img className="youtube-icon" src="/youtube.svg" />
            </a>
          </div>
          <div className="email-container">
            <a
              className="email-link"
              href={
                "mailto:inbox@wilfredocasas.com?subject=hey pal"
              }
              target="_blank"
            >
              <img className="email-icon" src="/email.svg" />
            </a>
          </div>
          <div className="telegram-container">
            <a
              className="telegram-link"
              href="https://t.me/wildfredo"
              target="_blank"
            >
              <img className="telegram-icon" src="/telegram.svg" />
            </a>
          </div>
        </div>
        {/* {randomIcon && (
          <a className="projects" href="/projects" target="_blank">
            <img className="projectsIcon" src={`/projects/${randomIcon}.svg`} />
          </a>
        )} */}
        <footer id="footer">
          <div>
            <p>
              <a
                id="footerLink"
                href="https://creativecommons.org/publicdomain/zero/1.0/legalcode"
                target="_blank"
              >
                <i className="creativeCommonsIcon fab fa-creative-commons-pd"></i>{" "}
                No rights reserved.
              </a>
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Main;
