import type { NextPage } from "next";
import Link from "next/link";
const About: NextPage = () => {
  return (
    <main>
      <section className="about section" id="about">
        <div className="container">
          <div className="row">
            <div className="section-title padd-15">
              <h2>About Me</h2>
            </div>
          </div>
          <div className="row">
            <div className="about-content padd-15">
              <div className="row">
                <div className="about-text padd-15">
                  <h2>
                    I am Aditya Sahrawat a <span>Full Stack Developer</span>
                  </h2>
                  <p>
                    Hello, My name is Aditya Sahrawat . I am a Full Stack
                    Developer, and I am very passionate and dedicated to my
                    work. With 1 years experience as a Full Stack Developer, I
                    have acquired the skills and knowledge necessary to make
                    your project a success. I enjoy every step of the design
                    process, from discussion and collaboration.
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="personal-info padd-15">
                  <div className="row">
                    <div className="info-item padd-15">
                      <p>
                        Website : <span>adityasahrawat.vercel.app</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Email : <span>amaditya1618@email.com</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Education : <span>Computer Science</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Phone : <span>+91 7497888133</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        City : <span>Hissar , Haryana</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Freelance : <span>Available</span>
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="buttons padd-15">
                      <a href='/myresume.pdf' target="_target" className="btn">
                        Download CV
                      </a>
                      <Link href="/contact" className="btn hire-me">
                        Hire Me
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="skills padd-15">
                  <div className="row">
                    <div className="skill-item padd-15">
                      <h5>Html</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "80%" }} />
                        <div className="skill-percent">80%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>Css</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "70%" }} />
                        <div className="skill-percent">70%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>Javascript</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "80%" }} />
                        <div className="skill-percent">80%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>React.js</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "80%" }} />
                        <div className="skill-percent">80%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>Next.js</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "85%" }} />
                        <div className="skill-percent">85%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>Express.js</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "80%" }} />
                        <div className="skill-percent">80%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>MongoDB</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "70%" }} />
                        <div className="skill-percent">70%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>Redux</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "80%" }} />
                        <div className="skill-percent">80%</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="education padd-15">
                  <h3 className="title">Education</h3>
                  <div className="row">
                    <div className="timeline-box padd-15">
                      <div className="timeline shadow-dark">
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> 2020 to 2023
                          </h6>
                          <h4 className="timeline-title">
                            Diploma in Computer Engineering
                          </h4>
                          <p className="timeline-text">
                            From 2020 I started my journey to be a Computer
                            Engineer from Govt. Polytechnic Hissar.
                          </p>
                        </div>
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> 2019 to 2020
                          </h6>
                          <h4 className="timeline-title">
                            Matriculation School Certificate
                          </h4>
                          <p className="timeline-text">
                            In 2020 I passed Matric Exam from Siddharth
                            Internation School Hissar with 65 Percentage . My
                            School Board was CBSE
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="experience padd-15">
                  <h3 className="title">Experience</h3>
                  <div className="row">
                    <div className="timeline-box padd-15">
                      <div className="timeline shadow-dark">
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> Mar 2024 to Jun
                            2024
                          </h6>
                          <h4 className="timeline-title">
                            Full Stack Developer , Qurilo Solutions Pvt ltd.
                          </h4>
                          <p className="timeline-text">
                            Design and Developed APIs. Integrated third-party
                            APIs to enhance functionality and improve overall
                            user experience on web platforms. Reviewed code,
                            debugged problems, and corrected issues.Used NodeJS,
                            ORM and SQL/No-SQL to develop and manage databases.
                          </p>
                        </div>
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> July 2023 to Jan
                            2024
                          </h6>
                          <h4 className="timeline-title">
                            Full Stack Developer , Okk Code
                          </h4>
                          <p className="timeline-text">
                            Building client side and server side web
                            applications With Latest Technologies. Designing and
                            Building Restful Api. Collabrated with teams and
                            handled client side and server side
                            logic.Integrating Restful Api With client side.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
