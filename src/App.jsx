import './App.css'

const skills = [
  {
    title: 'Cloud & DevOps',
    items: ['AWS (full suite)', 'IaC with Terraform, CDK, CloudFormation', 'Docker, Git, Shell Scripting'],
  },
  {
    title: 'AWS Services',
    items: ['EC2, S3, Lambda, ECS, ECR, VPC', 'DynamoDB, Aurora, Redshift', 'SQS, SNS, API Gateway, CloudWatch, Route 53, Athena'],
  },
  {
    title: 'Programming',
    items: ['Python', 'JavaScript / TypeScript'],
  },
  {
    title: 'Databases',
    items: ['DynamoDB', 'PostgreSQL / PostGIS', 'MySQL, Aurora, Redshift'],
  },
  {
    title: 'Languages',
    items: ['English', 'Vietnamese'],
  },
]

const experiences = [
  {
    company: 'L3Harris / Acron Aviation',
    role: 'Cloud / Software Engineer',
    location: 'St. Petersburg, FL',
    period: 'Mar 2022 – Present',
    bullets: [
      'Architect cloud-native solutions in partnership with AWS ProServe on the L3Harris enterprise cloud platform.',
      'Led cockpit voice recorder automation with repeatable IaC using AWS CDK and Terraform.',
      'Built a high-throughput pipeline ingesting millions of flight records for the Acron Aviation Pilot App.',
      'Designed a hybrid Aurora + DynamoDB backend that drove 100x faster queries and real-time analysis.',
    ],
    achievements: ['L3 2023 Performance First Award', 'L3 2022 Innovation Award (Team)'],
  },
  {
    company: 'Aquaveo, LLC',
    role: 'Full-Stack Developer',
    location: 'Provo, UT',
    period: 'Apr 2017 – Feb 2022',
    bullets: [
      'Enhanced the Tethys web platform in Django with a Postgres/PostGIS backbone for groundwater models.',
      'Containerized services with Docker and orchestrated deployments for reliability and scale.',
      'Created a custom tool for Texas Groundwater Conservation Districts with PHP, MySQL, JavaScript, and Google Maps.',
    ],
  },
  {
    company: 'Consultant / Civil Engineer',
    role: 'Consultant',
    location: 'Remote',
    period: 'Apr 2012 – Feb 2022',
    bullets: ['Led professional training courses on groundwater modeling software and techniques.'],
  },
]

const education = [
  { school: 'Brigham Young University', location: 'Provo, UT', degree: 'Master in Civil Engineer', year: 'Apr 2012' },
  { school: 'Brigham Young University', location: 'Provo, UT', degree: 'Bachelor of Science in Civil Engineer', year: 'Apr 2010' },
]

const certifications = [
  {
    name: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    year: 'Active',
    focus: 'Foundational cloud architecture, security, and cost optimization.',
    link: 'https://www.credly.com/badges/f9f71fb1-9f09-4a0f-8c24-ffa4bcf63c3c/public_url',
  },
  {
    name: 'Coursera Credential',
    issuer: 'Coursera',
    year: 'Completed',
    focus: 'Credential link provided by Coursera.',
    link: 'http://coursera.org/account/accomplishments/verify/3U3SW2LQ2NQK',
  },
  {
    name: 'Coursera Credential',
    issuer: 'Coursera',
    year: 'Completed',
    focus: 'Credential link provided by Coursera.',
    link: 'https://www.coursera.org/account/accomplishments/verify/MDLFJB3USYQD',
  },
  {
    name: 'Coursera Credential',
    issuer: 'Coursera',
    year: 'Completed',
    focus: 'Credential link provided by Coursera.',
    link: 'http://coursera.org/account/accomplishments/verify/V567H1CPD2XS',
  },
  {
    name: 'Databricks Credential',
    issuer: 'Databricks',
    year: 'Completed',
    focus: 'Credential link provided by Databricks.',
    link: 'https://credentials.databricks.com/846f29e2-329b-41f9-b9f2-0374be60a803#acc.ScRqOr8J',
  },
]

function App() {
  return (
    <div className="page">
      <header className="hero">
        <div className="orbital" />
        <div className="hero-content">
          <p className="eyebrow">Cloud & Software Engineer</p>
          <h1>
            Hi, I’m Hoang Tran — I’m passionate about building great software and always eager to learn new technologies.
          </h1>
          <p className="lede">
            AWS-certified engineer with 3+ years designing infrastructure-as-code, high-throughput data pipelines, and hybrid
            SQL/NoSQL backends that deliver measurable performance gains.
          </p>
          <div className="hero-actions">
            <a className="btn primary" href="mailto:tranluuhoang@gmail.com">
              Start a project
            </a>
            <a className="btn ghost" href="/Resume.pdf" target="_blank" rel="noreferrer">
              Download resume
            </a>
            <span className="location">Pinellas Park, FL · Fluent in English & Vietnamese</span>
          </div>
          <div className="hero-highlights">
            <div className="highlight-card">
              <h3>Cloud Native</h3>
              <p>Terraform, AWS CDK, and serverless patterns for reproducible deployments.</p>
            </div>
            <div className="highlight-card">
              <h3>Performance</h3>
              <p>Hybrid Aurora + DynamoDB architectures delivering 100x faster queries.</p>
            </div>
            <div className="highlight-card">
              <h3>Data Pipelines</h3>
              <p>Ingestion at scale for millions of flight records with observability baked in.</p>
            </div>
          </div>
        </div>
      </header>

      <section className="section" id="experience">
        <div className="section-header">
          <p className="eyebrow">Experience</p>
          <h2>Building for reliability, scale, and clarity</h2>
          <p className="section-text">
            From aviation-grade platforms to groundwater modeling tools, I design systems that stay dependable under pressure.
          </p>
        </div>
        <div className="experience-grid">
          {experiences.map((exp) => (
            <article className="experience-card" key={exp.company}>
              <div className="exp-header">
                <div>
                  <p className="eyebrow">{exp.company}</p>
                  <h3>{exp.role}</h3>
                </div>
                <div className="exp-meta">
                  <span>{exp.location}</span>
                  <span>{exp.period}</span>
                </div>
              </div>
              <ul>
                {exp.bullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              {exp.achievements && (
                <div className="achievements">
                  {exp.achievements.map((tag) => (
                    <span className="chip" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      </section>

      <section className="section alt" id="skills">
        <div className="section-header">
          <p className="eyebrow">Skills</p>
          <h2>Tools that turn ideas into shipped products</h2>
        </div>
        <div className="skills-grid">
          {skills.map((skill) => (
            <div className="skill-card" key={skill.title}>
              <div className="skill-title">{skill.title}</div>
              <div className="skill-items">
                {skill.items.map((item) => (
                  <span className="pill" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section alt" id="certifications">
        <div className="section-header">
          <p className="eyebrow">Certifications</p>
          <h2>Validated cloud expertise</h2>
        </div>
        <div className="skills-grid">
          {certifications.map((cert) => (
            <div className="skill-card" key={cert.name}>
              <div className="skill-title">{cert.name}</div>
              <div className="exp-meta" style={{ justifyContent: 'flex-start' }}>
                <span>{cert.issuer}</span>
                <span>{cert.year}</span>
              </div>
              <p className="section-text" style={{ marginTop: 6 }}>{cert.focus}</p>
              {cert.link && (
                <a className="btn ghost" href={cert.link} target="_blank" rel="noreferrer">
                  View credential
                </a>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="section" id="education">
        <div className="section-header">
          <p className="eyebrow">Education</p>
          <h2>Roots in engineering discipline</h2>
        </div>
        <div className="education-list">
          {education.map((edu) => (
            <div className="education-card" key={`${edu.school}-${edu.degree}`}>
              <div>
                <p className="eyebrow">{edu.school}</p>
                <h3>{edu.degree}</h3>
              </div>
              <div className="exp-meta">
                <span>{edu.location}</span>
                <span>{edu.year}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section alt contact" id="contact">
        <div>
          <p className="eyebrow">Let’s build</p>
          <h2>Ready for the next challenge</h2>
          <p className="section-text">
            Whether it is cloud migration, performance tuning, or a fresh build, I partner closely with teams to ship
            dependable solutions.
          </p>
        </div>
        <div className="contact-actions">
          <a className="btn primary" href="mailto:tranluuhoang@gmail.com">
            tranluuhoang@gmail.com
          </a>
          <a className="btn ghost" href="tel:+18013617976">
            (801) 361-7976
          </a>
          <a className="btn text" href="/Resume.pdf" target="_blank" rel="noreferrer">
            View resume
          </a>
        </div>
      </section>
    </div>
  )
}

export default App
