import styles from "../styles/ProjectCards.module.css";

function ProjectCards({ data }) {
  const { name, des, tools, image, link } = data;

  return (
    <div className={styles.container}>
      <div className={styles.app}>
        <a href={link}>
          <img src={image} alt={name} />
        </a>
        <h2>{name}</h2>
      </div>
      <p>{des}</p>
      <hr />

      <div className={styles.tools}>
        {tools.map((tool) => (
          <span key={tool}>
            <p className={styles.tool}>{tool}</p>
          </span>
        ))}
      </div>
    </div>
  );
}

export default ProjectCards;
