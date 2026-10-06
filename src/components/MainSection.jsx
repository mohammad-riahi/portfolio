import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../styles/MainSection.module.css";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import pofileImage from "../assets/image/profileph.jpg";

function MainSection({ projectScrollHandler }) {
  return (
    <div className={styles.container}>
      <div className={styles.about_me}>
        <h5>Hello, I'm</h5>
        <h1>Mohammad Riahi</h1>
        <h3>Junior front-end developer</h3>
        <p>
          I build modern, responsive and user-friendly web <br />
          experiences with a focus on clean interfaces, thoughtful systems and
          great performance.
        </p>
        <button className={styles.project_btn} onClick={projectScrollHandler}>
          View Selected Projects
        </button>
        {/* social media section */}
        <div className={styles.socials}>
          <a href="https://github.com/xshotxm" className={styles.full_github}>
            Github
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            href="https://www.linkedin.com/in/mohammad-riahi-5044a3397/"
            className={styles.full_linkedin}
          >
            Linked
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
      </div>
      <div className={styles.photo}>
        <img src={pofileImage} alt="profile photo" />
      </div>
    </div>
  );
}

export default MainSection;
