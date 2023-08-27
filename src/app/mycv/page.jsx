import React from "react";
import "./cv.css";

const page = () => {
  return (
    <section>
      <div className="contain">
        <h2>My Cv</h2>
        <header>
          <div class="header">
            <h1>Adeshina Mubaraq</h1>
            <h3>Frontend Developer</h3>
          </div>
        </header>
        <div class="contact-info">
          <h2>Contact</h2>
          <div>Phone: 09056116119</div>
          <div>
            Email:{" "}
            <a href="mailto:Adeshinamubarak6@gmail.com">
              Adeshinamubarak6@gmail.com
            </a>
          </div>
        </div>
        <div class="summary">
          <h2>Summary</h2>
          <p>
            Enthusiastic and dedicated Frontend Developer with a strong passion
            for creating user-friendly and visually appealing web applications.
            With a Bachelor's degree in Business Administration and Three years
            of hands-on experience in frontend development, I am adept at
            translating design concepts into responsive and interactive
            websites. Proficient in modern web technologies and frameworks, I am
            committed to delivering high-quality code and continuously enhancing
            the user experience. Eager to contribute my expertise to innovative
            projects and collaborate with dynamic teams.
          </p>
        </div>
        <div class="experience">
          <h2>Professional Experience</h2>
          <h3>
            Frontend Developer, Toshconsultinc Technologies - 2022 to Present
          </h3>
          <ul>
            <li>
              Collaborated with the design team to implement intuitive and
              visually appealing user interfaces.
            </li>
            <li>
              Developed and maintained responsive web applications using HTML,
              CSS, Tailwind CSS, and JavaScript.
            </li>
            <li>
              Integrated RESTful APIs and third-party libraries to enhance
              application functionality.
            </li>
            <li>
              Optimized website performance and ensured cross-browser
              compatibility.
            </li>
            <li>
              Conducted code reviews and provided constructive feedback to
              fellow developers.
            </li>
          </ul>
          <h3 style={{ marginTop: "10px" }}>
            Frontend Developer Intern, MsMes Entrepreneur Nigeria - 2023
          </h3>
          <ul style={{ marginTop: "5px" }}>
            <li>
              Assisted in building prototypes and wireframes for new web
              projects.
            </li>
            <li>
              Worked closely with senior developers to implement frontend
              features.
            </li>
            <li>
              Gained experience in version control systems and agile development
              methodologies.
            </li>
            <li>
              Troubleshot and resolved frontend issues to ensure smooth user
              experiences.
            </li>
          </ul>
        </div>
        <div class="skills">
          <h2>Skills</h2>
          <ul>
            <li>Proficient in HTML, CSS, and JavaScript.</li>
            <li>
              Experience with frontend frameworks such as React or Nest.Js.
            </li>
            <li>
              Familiarity with responsive design and mobile-first development.
            </li>
            <li>Strong understanding of UI/UX principles.</li>
            <li>Knowledge of version control systems like Git.</li>
          </ul>
        </div>
        <div class="projects">
          <h2>Projects</h2>
          <div class="project-title">SuperMarket-Website - 2022</div>
          <ul>
            <li>
              Developed a responsive e-commerce website using React and
              JavaScript.
            </li>
            <li>
              Implemented user authentication and shopping cart functionality.
            </li>
            <li>
              Optimized performance, resulting in a significant reduction in
              page load times.
            </li>
          </ul>
          <div class="project-title">Fintex App - 2022</div>
          <ul>
            <li>
              Collaborated with a team to create a dynamic dashboard using React
              and RESTful APIs.
            </li>
            <li>
              Designed and implemented data visualizations for real-time data
              tracking.
            </li>
            <li>
              Received positive feedback from users for the intuitive user
              interface.
            </li>
          </ul>
          <div class="project-title">Blog Website - 2023</div>
          <ul>
            <li>
              Developed a Responsive Mobile blog website using Bootstrap and
              JavaScript.
            </li>
            <li>
              Link:{" "}
              <a class="project-link" href="https://toshmoney-just.netlify.app">
                https://toshmoney-just.netlify.app
              </a>
            </li>
          </ul>
          <div class="project-title">Dictionary Website - 2023</div>
          <ul>
            <li>
              Developed a Responsive Mobile blog website using Bootstrap and
              JavaScript.
            </li>
            <li>
              Link:{" "}
              <a
                class="project-link"
                href="https://dictionary-app-1.netlify.app/"
              >
                https://dictionary-app-1.netlify.app/
              </a>
            </li>
          </ul>
        </div>
        <div class="certifications">
          <h2>Certifications</h2>
          <ul>
            <li>Certificate of Completion - May 31, 2023</li>
          </ul>
        </div>
        <div class="languages">
          <h2>Languages</h2>
          <ul>
            <li>English: Fluent</li>
            <li>Yoruba: Fluent</li>
          </ul>
        </div>
        <div class="interests">
          <h2>Interests</h2>
          <ul>
            <li>Exploring new frontend technologies and frameworks.</li>
            <li>Contributing to open-source projects.</li>
            <li>Attending tech meetups and conferences.</li>
          </ul>
        </div>
        <div class="footer">
          <p>
            <strong>References:</strong> Available upon request.
          </p>
          <p>
            Find me on{" "}
            <a href="https://www.linkedin.com/in/yourlinkedinprofile">
              LinkedIn
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default page;
