import ProjectCards from "../components/ProjectCards";
import { projectsDetails } from "../constant/projects";
import styles from "../styles/SelectedPro.module.css";

function SelelctedPro() {
  return (
    <>
      <div className={styles.container}>
        <h1 id="projects">Selected Projects</h1>
        <div className={styles.cards}>
          {projectsDetails.map((project) => (
            <ProjectCards key={project.id} data={project} />
          ))}
        </div>
      </div>
    </>
  );
}

export default SelelctedPro;
