import styles from "../styles/about.module.css";

function About() {
  return (
    <div className={styles.container}>
      <h1 id="about">About</h1>
      <br />
      <p>
        I am a Junior Frontend Developer focused on building responsive,
        efficient, and user-centered web interfaces. I am passionate about
        modern frontend technologies and continuously work on expanding my
        technical skills.
        <br />
        <br />
        My goal is to contribute effectively within professional teams, support
        high-quality project delivery, and grow consistently in the field of
        frontend development.
      </p>
      <br />
      <br />
      <br />
      <br />
      <hr />

      <h1>Experiences</h1>
      <div>
        <div className={styles.experience}>
          <div className={styles.left_side}>
            <h5>November 2022 - August 2024</h5>
            <h5>2 years</h5>
            <h5>Rahian Tejarat Marine shipping LLC, Tehran</h5>
          </div>
          <div className={styles.right_side}>
            <h4>export documentation</h4>
            <ul>
              <li>
                Experienced Export Operations Specialist with expertise in
                shipping line procedures, documentation and logistic
                coordination for international exports.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
