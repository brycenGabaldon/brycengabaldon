import React from "react";

const Github = () => {
  return (
    <div className="DiscordView">
      <div className="GithubView">
        <img
          className="GitGraph"
          class="drop-shadow-xl ..."
          src="https://ghchart.rshah.org/brycengabaldon"
          alt="2016rshah's Github chart"
        />

        <p class="drop-shadow-xl ...">
          My name is Brycen Gabaldon and I am a Web Developer. Responsible for
          the design and development of an appointment booking website.
          Developing Contact forms, integrating APIs, headless CMS, S.P.A using
          React.js. Animations using Framer motion. Tailwind CSS library.
          PostgreSQL/Node.js. AWS Lightsail. Also designing marketing content
          using Illustrator/ ProCreate.
        </p>
<div className="gitListContainer">
        <ol style={{ listStyleType: "disc" }} className="gitList">
            Most Used:
<li>React.js</li>
<li>Scss</li>
<li>Html</li>
<li>Tailwind</li>
<li>Framer Motion</li>
<li>Firebase Hosting</li>
<li>Firebase Storage</li>
<li>Firebase Firestore</li>
<li>Firebase Authentication</li>
        </ol>
        <ol style={{ listStyleType: "disc" }} className="gitList">
            Familiar 6Months+
<li>Swift</li>
<li>Java</li>
<li>Python</li>
<li>AWS Lightsail</li>
<li>AWS Lambda</li>
<li>Typescript</li>
<li>Postgres</li>

        </ol>
</div>
        <div className="GitBtn fab fa-github drop-shadow-xl"></div>
        <a target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/brycenGabaldon/brycengabaldon"
          style={{
            backgroundColor: "black",
            height: "4rem",
            borderRadius: "2rem",
            color: "white",
            border: ".2rem solid white",
            fontWeight: "bold",
            textAlign: "center",
            lineHeight: "4rem"
          }}
          className="drop-shadow-xl ..."
        >
          
            Here is a link to my GitHub Repo!
     
        </a>
      </div>
    </div>
  );
};

export default Github;
