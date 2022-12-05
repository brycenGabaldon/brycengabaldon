import React from "react";

export default function Resume() {
  return (
    <div className="modalPadding">
      <h2 class=" ResumeHeading">
        <div className="BrycenHeading ">
          BRYCEN D. GABALDON
          <br />
          <div
            style={{
              fontSize: "5vmin",
              backround:
                "linearGradient(rgb(149, 156, 156),rgb(195, 207, 207))",
              lineHeight: "8vmin",
              color: "rgb(10, 25, 150)",
            }}
          >
            Full Stack Web Developer
          </div>
        </div>
        <div className="ContactHeading ">
          Portfolio: BrycenGabaldon.com
          <br />
          BrycenGabaldon@gmail.com <br />
          Cell: (602) 816-1523
          <br />
          Chandler, Arizona
        </div>
      </h2>

      <br />

      <h2 className="Mission">
        <div>
          <div className="Mission2">
            <span style={{ fontSize: "4vmin" }}> My Goal: </span> <br />I strive
            to be Innovative, Efficient, and Effective. My goal is to add
            maximum value to customers and employers. I aim to create value that
            can not be found anywhere else. I am fast-learning and hard-working.
            I take innitiative to go above and beyond in my work. I can take
            direction or take the lead. I will exceed your expectations
          </div>
        </div>
      </h2>

      <div>
        <div className="floatLeft">
          <h2 className="Odd">
            <div>
              <div className="MainText" >
                <p>
                  <span>Web Developer</span>
                  <br />
                  Lotus Co. 6/2017- 11/2022
                  <br />
                  <br />
                  <ol className="oltags" >
                    <li>Implementing REST APIs</li>
                    <li>Develope Single-page applications</li>
                    <li>Responsive UI/UX Designs</li>
                    <li>Utilizing cloud database storage</li>
                    <li>Integrating Authentication</li>
                    <li>UI animations and responses </li>
                    <li>Form design and development</li>
                  </ol>
                  <ol className="oltags2">
                    {" "}
                    <li>React</li>
                    <li>HTML5</li>
                    <li>CSS</li>
                    <li>Javascript</li>
                    <li>Python</li>
                    <li>Swift</li>
                    <li>C++</li>
                  </ol>
                  <ol className="oltags3">
                    <li>Tailwind</li>
                    <li>Bootstrap</li>
                    <li>Node</li>
                    <li>Postgres</li>
                    <li>AWS</li>
                    <li>Firebase</li>
                    <li>VScode</li>
                  </ol>
                </p>
              </div>
            </div>
            <div>
              <div class="" className="floatRight">
                <p>
                  <span>Overview: </span>
                  <br />
                  <br />
                  <ol style={{ listStyleType: "disc" }}>
                    <li>Quickly adapts to new technologies and languages</li>
                    <li>Over 7 years in web / software development</li>
                    <li>Clean design style for a beautiful UX experience</li>
                    <li>Full Cloud Service / API Intergration</li>
                    <li>Fully custom design and development</li>
                  </ol>
                </p>
              </div>
            </div>
          </h2>
        </div>

        <br />
        <div className="floatLeft">
          <h2 className="Odd">
            <div className="MainText">
              <p>
                <span>Bartender / Server</span> <br />
                La Ristra - New Mexican Kitchen & Tequila Bar
                <br />
                WildHorse Pass Resort & Casino <br /> <br />
              </p>
              <p>
                <ol style={{ listStyleType: "disc" }}>
                  <li>Responsible for opening and closing the business</li>
                  <li>Cash handling experience</li>
                  <li>Industry where great service is number one</li>
                  <li>
                    Worked all bar atmospheres from nightclub to fine dining
                  </li>
                  <li>Effective time management and memory recall</li>
                </ol>
              </p>
            </div>

            <div style={{ height: "fit-content" }}>
              <div class="drop-shadow-xl ..." className="floatRight">
                <p>
                  <span> Overview: </span>
                  <br />
                  <br />
                  <ol style={{ listStyleType: "disc" }}>
                  <li>3 years of experience as bartender / server</li>
                  <li>Completed training at The Bartending Academy of Arizona</li>
                  <li>Experience with fast-paced high-volume work</li>
                    <li>Great Experience with Customer Service</li>
                    <li>Aim to increase sales and customer satisfaction</li>
                  </ol>
                </p>
              </div>
            </div>
          </h2>
        </div>

        <div className="floatLeft">
          <h2 className="Odd">
            <div>
              <div className="MainText">
                <p>
                  <span> President</span> <br /> Steelside Erection Inc.
                  <br /> <br />
                  <ol style={{ listStyleType: "disc" }}>
                    <li>Communicating with Customers and Suppliers</li>
                    <li>Coordinating with subcontractors of other trades</li>
                    <li>
                      Planning / leading large projects from start to finish
                    </li>
                    <li>
                      Drove profits through time management and effective
                      planning
                    </li>
                    <li>Increased sales with project negotiation</li>
                  </ol>
                </p>
              </div>
            </div>
            <div>
              <div class="drop-shadow-xl ..." className="floatRight">
                <p>
                  <span> Overview:</span>
                  <br />
                  <br />
                  <ol style={{ listStyleType: "disc" }}>
                    <li>General Accounting</li>
                    <li>Managing 15+ employees</li>
                    <li>Recruiting</li>
                    <li>Processing Payroll</li>
                    <li>Project Management</li>
                  </ol>
                </p>
              </div>
            </div>
          </h2>
        </div>

        <br />
        <div
          style={{
            width: "100%",
            height: "100%",
            float: "left",
            background: "",
          }}
        ></div>

        <br />

        <div
          style={{
            width: "100%",
            height: "100%",
            float: "left",
            background: "",
          }}
        ></div>
      </div>
    </div>
  );
}
