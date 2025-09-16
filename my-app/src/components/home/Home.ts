import "./home.css";

function Home() {
  return div(
    { class: "home-component" },
    div(
      { class: "profile-header" },
      img({
        src: "https://avatars.githubusercontent.com/u/35910266?v=4&size=64",
        alt: "Jean Outeiral",
        class: "profile-avatar",
      }),
      div(
        { class: "profile-info" },
        h1({ class: "profile-name" }, "Jean Outeiral"),
        div({ class: "profile-title" }, "Software Engineer · São Paulo, Brazil")
      )
    ),
    div(
      { class: "profile-contact" },
      span({ class: "profile-contact-item" }, "📞 +55 (11) 98831-1413"),
      a(
        {
          href: "mailto:Jeanjacques7.jj@gmail.com",
          class: "profile-contact-link",
        },
        "✉️ Jeanjacques7.jj@gmail.com"
      ),
      a(
        {
          href: "https://github.com/jeanjacques7",
          target: "_blank",
          class: "profile-contact-link",
        },
        "GitHub"
      ),
      a(
        {
          href: "https://linkedin.com/in/jean-outeiral",
          target: "_blank",
          class: "profile-contact-link",
        },
        "LinkedIn"
      )
    ),
    p(
      { class: "profile-about" },
      "Software developer with over 5 years of experience in software development. Specialized in JavaScript, TypeScript, Angular, C# .NET, GIT, and AWS services. Passionate about problem-solving and finding clean and simple solutions for complex problems. Experienced in developing organized and scalable code, and implementing theories and architectures with a clear vision for one or more projects. Brings a repertoire of knowledge in Angular and C# .Net Core, creating architectures in serverless environments on AWS."
    ),
    h2({ class: "home-section-title" }, "Experience"),
    div(
      { class: "home-list" },
      li(
        strong("Software Engineer · BTG Pactual"),
        div({ class: "home-list-date" }, "April 2021 - Present"),
        ul(
          {},
          li(
            "Led a team using agile methods for delivery, improvement, and maintenance of web/mobile apps."
          ),
          li(
            "Enabled employees to monitor and execute client investment operations, processing millions of messages daily."
          ),
          li(
            "Key technologies: Angular 2+, C#, AWS, TypeScript, HTML5, SCSS, Kubernetes, DevExpress, CI/CD, Unit Testing, Git."
          ),
          li(
            "Optimized performance and responsiveness in frontend and backend."
          ),
          li(
            "Designed software architecture and provisioned end-to-end services."
          ),
          li(
            "Developed scalable web services, microservices, and RESTful APIs using C# .NET."
          ),
          li(
            "Created new features and capabilities in web apps using JavaScript, HTML5, and CSS3."
          ),
          li("Improved employee productivity, accuracy, and efficiency.")
        )
      ),
      li(
        strong("Software Engineer · Game Development"),
        div({ class: "home-list-date" }, "February 2020 - Present"),
        ul(
          {},
          li(
            "Lead developer for games using React, TypeScript, and JavaScript."
          ),
          li("Games hosted on GitHub Pages or Firebase."),
          li("Translated design concepts into functional game mechanics."),
          li("Participated in design, user research, and code reviews."),
          li(
            "Tested and patched game functionalities to enhance player experience."
          ),
          li("Collaborated to define requirements and resolve issues."),
          li(
            "Led framework development and oversaw game projects from start to finish."
          )
        )
      )
    ),
    h2({ class: "home-section-title" }, "Education"),
    div(
      { class: "home-education" },
      strong("Palm Beach State College"),
      br(),
      "Associate’s Degree · August 2016 - May 2018"
    ),
    h2({ class: "home-section-title" }, "Licenses & Certifications"),
    ul(
      { class: "home-certifications" },
      li(
        strong("Advanced Developing on AWS"),
        " · AWS Training and Certification · June 2023"
      ),
      li(
        strong("Developing on AWS"),
        " · AWS Training and Certification · September 2022"
      )
    )
  );
}

export default Home;
