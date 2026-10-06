import styles from "../styles/Skills.module.css";

function Skills() {
  return (
    <div>
      <div className={styles.container}>
        <h1 id="skills" className={styles.title}>
          Skills
        </h1>
        <div className={styles.skill_titiles}>
          <div>
            <h4>FRONT - END</h4>
            <hr />
            <div className={styles.front_skills}>
              <p>HTML</p>
              <p>CSS</p>
              <p>JAVA SCRIPT</p>
              <p>React.js</p>
              <p>Git</p>
            </div>
          </div>
          <div className={styles.right_side}>
            <h4>ARCHITECTURE & STATE MANAGEMENT</h4>
            <hr />
            <div className={styles.other_skills}>
              <p>Clean Code</p>
              <p>Redux</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
