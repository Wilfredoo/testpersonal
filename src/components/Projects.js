import React from "react";

function Projects() {
  return (
    <div className="projectsPage">
      <h1 className="pageTitle"> * * Projects * *</h1>
      {projects.map((data, index) => {
        return (
          <div key={index} className="oneProject">
            {Object.keys(data).map((key, i) => {
              return (
                <div className="field" key={i}>
                  {key !== "Name" && key !== "Date" && key !== "Link" && key !== "Link 1" && key !== "Link 2" && (
                    <>
                      <p className="key">{key}</p>
                      <p className="value">{data[key]}</p>
                    </>
                  )}
                  {key === "Date" && <p className="dateValue">{data[key]}</p>}
                  {key === "Name" && <p className="nameValue">{data[key]}</p>}
                  {(key === "Link" || key === "Link 1" || key === "Link 2") && (
                    <div className="link">
                      <p className="key">{key}</p>
                      <div className="projectLinkContainer">
                      <a
                        className="projectLink"
                        href={data[key]}
                        target="_blank"
                      >
                        <p className="value linkValue">{data[key]}</p>
                      </a>
                      </div>

                    </div>
                  )}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

export default Projects;

const projects = [
  {
    Name: "Short Films",
    Description: "Making simple short films for fun",
    Status: "Active",
    Link: "https://vimeo.com/user173281881",    
    Date: "2022",
  },
  {
    Name: "What2Gyft",
    Description: "A site to list your gift preferences and find the gifts your friends really want",
    Status: "Active",
    Team: "Jonathan Neidel and I",
    Date: "2022",
  },
  {
    Name: "Jobdirecto",
    Description: "A simple job board for Hispanic immigrants in NYC",
    Context:
      "Before Jobdirecto, Hispanic immigrants had no direct, clean and trustable way to find jobs. Thus, I created Jobdirecto.",
    Status: "Active",
    Contributors: "Jose Torrens",
    Link: "https://www.jobdirecto.com/",
    Date: "2019 - Now",
  },
  {
    Name: "Sports Jam Berlin",
    Description: "Creating new sports just for the sake of it",
    Status: "Inactive",
    Link: "https://www.meetup.com/sports-jam-berlin",
    Date: "2022",
  },
  {
    Name: "Bamberg: a Witch Hunt",
    Description: "A social deduction game for 5 to 10 players based on the european witch hunt trials of the 17th century",
    Status: "Inactive",
    Contributors: "Danilo Alvarez",
    Link: "https://www.instagram.com/play_bamberg",
    Date: "2021 - 2022"
  },
  {
    Name: "Oh No! - Products for forgetful people",
    Description: "A key tag and a plastic card where you can write you contact details so that you are more likely to get your keys back or wallet back if you lose them.",
    Status: "Inactive",
    Link: "https://www.etsy.com/listing/1136133015/card-for-wallet-for-forgetful-people-by",
    Date: "2020 - Now",
  },

  {
    Name: "Super Recogniser",
    Description: "A collection of games to train facial recognition skills",
    Context:
      "A small number of people in the world suffers from prosopagnosia, a condition in which they can't recognize faces. This app is for them.",
    Status: "Inactive",
    "Link": "https://superrecogniser.herokuapp.com/",
    Date: "2020",
  },
  {
    Name: "Capybara",
    Description:
      "An app where you can send a message that will arrive to someone at random",
    Context:
      "What would you write if you didn't know who the recipient would be? That was the premise for this app.",
    Status: "Inactive",
    Contributors: "Emmanuel Byiringiro",
    Date: "2020",
  },
  {
    Name: "Numbers Memory Game",
    Description: "A simple game to help you train memorizing numbers",
    Context:
      "I wanted a simple game that helped me memorize numbers after hearing them. I couldn't find any, so I created one ¯\_(ツ)_/¯",
    Link: "https://numberss.herokuapp.com/",
    Date: "2020",
  },
  {
    Name: "Whale",
    Description: "An app to exchange locations with friends and family",
    Context:
      "How do whales communicate? They use echo-location. With Whale, you could do the same (but using geo-locations duh).",
    Status: "Inactive",
    Link: "https://play.google.com/store/apps/details?id=com.wilfredo.geowhale",
    Date: "2019",
  },
  {
    Name: "Colibri",
    Description:
      "A unique and playful dating app where you could 'peck' only 3 people a day from random pool of people. Only video messages would be allowed. No swiping or texting by design.",
    Context:
      "We tried to re-invent dating apps by creating one like no other seen in the market before. Most people are unhappy with the current dating apps on the market, such as Tinder, Bumble or Parship. This app aimed to re-think the online dating experience.",
    Status: "Inactive (may retry in the future)",
    Team: "Jonathan Poischen and I",
    Date: "2019",
  },
  {
    Name: "Juanita Calendar",
    Description:
      "A simple calendar for swing dance events in Berlin",
    Context:
      "Most dance calendars look and work like crap. The idea was to create a nice looking, minimal calendar that any dance group (salsa, swing, tango, etc) in any city could use to promote their events.",
    Status: "Inactive",
    Date: "2019",
  },
  {
    Name: "Guantes la Pepa",
    Description: "First gloves for downhill-longboarding produced in Peru",
    Context:
      "The sport got trendy in 2011 in Peru and gloves on the market were too expensive for most people, so I created my own brand and sold them locally.",
    Status: "Inactive",
    Link: "https://www.facebook.com/photo.php?fbid=127097580734630&set=pb.100003031658712.-2207520000..&type=3&theater",
    Date: "2012",
  },
];
