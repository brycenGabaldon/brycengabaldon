import React from "react";

export default function Test() {
  return (
    <div className="modalPadding">
      <h1 class="drop-shadow-2xl ... ResumeHeading">
        <div className="BrycenHeading "
>BRYCEN D. GABALDON 
          <br />
          <div style={{fontSize:"4vmin", backround: "linearGradient(rgb(149, 156, 156),rgb(195, 207, 207))",
        lineHeight:"8vmin", color: "rgb(10, 25, 150)"}}>Full Stack Web Developer</div>
          
        </div>
        <div className="ContactHeading "

        >Portfolio: brycengabaldon.com
          <br />
          BRYCENGABALDON@GMAIL.COM <br />
          Cell: (602) 816-1523
          <br />
          Chandler, Arizona
        </div>
      </h1>

      <br />

      <div>
        <div className="floatLeft drop-shadow-lg">
          <h2 className="Odd drop-shadow-lg">
            <div>
              <div className="MainText">
                <p>
                  <span>Lotus Co.</span> <br /> 10/2022 - Current  = > Web Developer<br />
                  <br />
                </p>
                <form >
                  <textarea type="text" className="lotusTextArea"></textarea>
                </form>
              </div>
            </div>
            <div>
              <div class="drop-shadow-xl ..." className="floatRight drop-shadow-lg">
                <p><span>
                  Key Points:</span>
                  <br />
                  <br />
                  <ol style={{ listStyleType: "disc" }}>
                    <li>Developing Contact forms</li>
                    <li>integrating APIs</li>
                    <li>headless CMS</li>
                    <li>S.P.A using React.js</li>
                    <li>Animations using Framer motion</li>
                    <li>Tailwind CSS library</li>
                    <li>PostgreSQL</li>
                    <li>Node.js</li>
                    <li>AWS Lightsail</li>
                    <li>
                      Also designing marketing content using Illustrator/
                      ProCreate
                    </li>
                  </ol>
                </p>
              </div>
            </div>
          </h2>
        </div>

        <br />
        <div className="floatLeft">
          <h2 className="Odd">
            <div>
              <div className="MainText">
                <p>
                 <span> La Ristra - New Mexican Kitchen & Tequila Bar</span> <br /> 11/2021 -
                  8/2022 Server <br /> <br />
                  <form>
                    <textarea type="text" className="lotusTextArea"></textarea>
                  </form>
                </p>
              </div>
            </div>
            <div style={{ height: "fit-content", background: "blue" }}>
              <div class="drop-shadow-xl ..." className="floatRight">
                <p>
                 <span> Key Points:</span>
                  <br />
                  <br />
                  <ol style={{ listStyleType: "disc" }}>
                    <li>Opening and closing the restaurant</li>
                    <li>Using toast POS</li>
                    <li>Knowledgeable with the menu</li>
                    <li>Increase sales and customer satisfaction</li>
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
                 <span> Steelside Erection (Commercial Steel Construction)</span> <br /> 2016
                  - 2018 President. 2008 - 2015 Employee <br /> <br />
                  <form>
                    <textarea type="text" className="lotusTextArea"></textarea>
                  </form>
                </p>
              </div>
            </div>
            <div>
              <div class="drop-shadow-xl ..." className="floatRight">
                <p>
                <span> Key Points:</span>
                  <br />
                  <br />
                  <ol style={{ listStyleType: "disc" }}>
                    <li>I have experience with $200-300k/ Month cash flow</li>
                    <li>Managing 10+ employees</li>
                    <li>Hiring/ firing</li>
                    <li>Equipment rentals</li>
                    <li>Communicating with the customers</li>
                    <li>Coordinating with subcontractors of other trades</li>
                    <li>
                      Planning/ leading large projects from start to finish
                    </li>
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
        >
          <h2 class="drop-shadow-xl ... Odd">
            <p>
             <span> Education:</span> <br />
              <ol>
                <li>2012 Desert Hills High School - Graduated 5th in class</li>
                <li>
                  2013 Chandler Gilbert Community College - Full scholarship
                  honors program
                </li>
              </ol>
            </p>
          </h2>
        </div>
      </div>
    </div>
  );
}
