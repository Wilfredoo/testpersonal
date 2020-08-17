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
    <div class="mainContainer">
      <div>
        <div>
          <img class="avatar" src="/wilfredo.jpg" />
        </div>
        <h1>Wilfredo Casas</h1>
        {randomTitle !== "null" && (
          <p class="title">
            Entrepreneur {"&"} {randomTitle}
          </p>
        )}
        {randomTitle === "null" && (
          <p class="title">Entrepreneur and Software Developer</p>
        )}
        {randomSubtitle !== "null" && <p class="subtitle">{randomSubtitle}</p>}

        <div class="social">
          <a class="github" href="https://github.com/wilfredoo" target="_blank">
            <img class="githubIcon" src="/github.svg" />
          </a>
          <a
            class="youtube"
            href="https://www.youtube.com/watch?v=_IgSwvsMbII"
            target="_blank"
          >
            <img class="youtubeIcon" src="/youtube.svg" />
          </a>
          <a
            class="linkedin"
            href="https://www.linkedin.com/in/wilfredocasas/"
            target="_blank"
          >
            <img class="linkedinIcon" src="/linkedin.svg" />
          </a>

          <a
            class="email"
            href={
              "https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&source=mailto&to=me@wilfredocasas.com"
            }
            target="_blank"
          >
            <img class="emailIcon" src="/gmail.svg" />
          </a>
          <a
            class="whatsapp"
            href="https://api.whatsapp.com/send?phone=+491777898706"
            target="_blank"
          >
            <img class="whatsappIcon" src="/whatsapp.svg" />
          </a>
          <a
            class="facebook"
            href="/https://www.facebook.com/wilfredo.casas.752"
            target="_blank"
          >
            <img class="facebookIcon" src="/facebook.svg" />
          </a>
        </div>
        {randomIcon && (
          <a class="projects" href="/projects" target="_blank">
            <img class="projectsIcon" src={`/projects/${randomIcon}.svg`} />
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
                <i class="creativeCommonsIcon fab fa-creative-commons-pd"></i>{" "}
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
