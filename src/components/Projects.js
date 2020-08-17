import React from "react";

function Projects() {
  return (
    <div className="projectsPage">
      <h1 className="pageTitle">Projects</h1>
      {projects.map((data, index) => {
        return (
          <div key={index} className="oneProject">
            {Object.keys(data).map((key, i) => {
              return (
                <div className="field" key={i}>
                  {key !== "Name" && key !== "Date" && key !== "Links" && (
                    <>
                      <p className="key">{key}</p>
                      <p className="value">{data[key]}</p>
                    </>
                  )}
                  {key === "Date" && <p className="dateValue">{data[key]}</p>}
                  {key === "Name" && <p className="nameValue">{data[key]}</p>}
                  {key === "Links" && (
                    <div>
                      <p className="key">{key}</p>
                      <a
                        className="projectLink"
                        href={data[key]}
                        target="_blank"
                      >
                        <p className="value linkValue">{data[key]}</p>
                      </a>
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
    Name: "Jobdirecto",
    Description: "A simple job board for Hispanic immigrants in NYC",
    Context:
      "Before Jobdirecto, Hispanic immigrants had no direct, clean and trustable way to find jobs. Thus, I created Jobdirecto.",
    Status: "Active",
    Team: "Jose Torrens and me",
    Links: "https://www.jobdirecto.com/",
    Date: "2019 - Now",
  },
  {
    Name: "Super Recognizer",
    Description: "An app to train facial recognition skills",
    Context:
      "A small number of people in the world suffers from prosopagnosia, a condition in which they can't recognize faces. This app is for them.",
    Status: "In Progress",
    Team: "Just me",
    Links: "https://bit.ly/3iNvxlH",
    Date: "Now",
  },
  {
    Name: "Capybara",
    Description:
      "An app where you can send a message that will arrive to someone at random",
    Context:
      "What would you write if you didn't know who the recipient would be? That was the premise for this app.",
    Status: "Inactive",
    Team: "Emmanuel Byiringiro and me",
    Links: "https://bit.ly/31OWMp2",
    Date: "2020",
  },
  {
    Name: "Whale",
    Description: "An app to exchange locations with friends and family",
    Context:
      "How do whales communicate? They use echo-location, of course. With Whale you could do the same (but using locations).",
    Status: "Inactive",
    Team: "Just me",

    Links: "https://bit.ly/2Y0ueHR",
    Date: "2019",
  },
  {
    Name: "Colibri",
    Description:
      "A dating app where you could only choose (peck) 3 people a day and if they chose you back, you would match (bond). Conversations were limited to one quick live video call.",
    Context:
      "Unlimited options and text messages only resulted in poor quality interactions in apps like Tinder or Bumble. This app aimed to tackle both of these problems.",
    Status: "Inactive (may retry in the future)",
    Team: "Jonathan Poischen and me",
    Links: "https://bit.ly/3gZyRd1",
    Date: "2019",
  },
  {
    Name: "Guantes la Pepa",
    Description: "First gloves for downhill-longboarding produced in Peru",
    Context:
      "The sport got trendy in 2011 in Peru and gloves on the market were too expensive for most people, so I created my own brand and sold them to riders in Lima and other cities.",
    Status: "Inactive",
    Team: "Just me",
    Links: "https://bit.ly/31SnxJ7",
    Date: "2012",
  },
];
