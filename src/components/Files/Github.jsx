import React from "react"
import { Button } from "react-bootstrap";


const Github = () => {

return(
<div className="DiscordView">
    <div className="GithubView">

<img className="GitGraph" class="drop-shadow-xl ..." src="https://ghchart.rshah.org/brycengabaldon" alt="2016rshah's Github chart" />


    <p class="drop-shadow-xl ...">
        My name is Brycen Gabaldon and I am a Web Developer.
        Responsible for the design and development of an appointment
         booking website. Developing Contact forms, integrating APIs,
          headless CMS, S.P.A using React.js. Animations using Framer
           motion. Tailwind CSS library. PostgreSQL/Node.js. AWS 
           Lightsail. Also designing marketing content using 
           Illustrator/ ProCreate.
    </p>

    <Button href={"https://github.com/brycenGabaldon/brycengabaldon"} class="btn btn-dark btn-lg"  >Here is a link to my GitHub Repo!</Button>
</div></div>

)


}

export default Github;
