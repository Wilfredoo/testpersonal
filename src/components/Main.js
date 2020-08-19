import React, { useState, useEffect } from "react";
import "../App.css";
import icons from "../iconArray";
import titles from "../titleArray";
import subtitles from "../subtitleArray";

function Main() {
  const [randomIcon, setRandomIcon] = useState(null);
  const [randomTitle, setRandomTitle] = useState(null);
  const [randomSubtitle, setRandomSubtitle] = useState(null);

  useEffect(() => {
    randomizeIcon();
    randomizeTitle();
    randomizeSubtitle();
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

  async function randomizeSubtitle() {
    const subtitle = await subtitles[
      Math.floor(Math.random() * subtitles.length)
    ];
    setRandomSubtitle(subtitle);
  }

  return (
    <div className="mainContainer">
      <div>
        <div>
          <img className="avatar" src="/wilfredo.jpg" />
        </div>
        <h1>Wilfredo Casas</h1>
        {randomTitle !== "null" && (
          <p className="title">
            Entrepreneur {"&"} {randomTitle}
          </p>
        )}
        {randomTitle === "null" && (
          <p className="title">Entrepreneur and Software Developer</p>
        )}
        {randomSubtitle !== "null" && <p class="subtitle">{randomSubtitle}</p>}

        <div className="social">
          <a className="github" href="https://github.com/wilfredoo" target="_blank">
            <img className="githubIcon" src="/github.svg" />
          </a>
          <a
            className="youtube"
            href="https://www.youtube.com/watch?v=_IgSwvsMbII"
            target="_blank"
          >
            <img className="youtubeIcon" src="/youtube.svg" />
          </a>
          <a
            className="linkedin"
            href="https://www.linkedin.com/in/wilfredocasas/"
            target="_blank"
          >
            <img className="linkedinIcon" src="/linkedin.svg" />
          </a>

          <a
            className="email"
            href={
              "https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&source=mailto&to=me@wilfredocasas.com"
            }
            target="_blank"
          >
            <img className="emailIcon" src="/gmail.svg" />
          </a>
          <a
            className="whatsapp"
            href="https://api.whatsapp.com/send?phone=+491777898706"
            target="_blank"
          >
            <img className="whatsappIcon" src="/whatsapp.svg" />
          </a>
          <a
            className="facebook"
            href="/https://www.facebook.com/wilfredo.casas.752"
            target="_blank"
          >
            <img className="facebookIcon" src="/facebook.svg" />
          </a>
        </div>
        {randomIcon && (
          <a className="projects" href="/projects" target="_blank">
            <img className="projectsIcon" src={`/projects/${randomIcon}.svg`} />
          </a>
        )}
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
