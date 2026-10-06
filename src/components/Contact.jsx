import styles from "../styles/Contacts.module.css";

function Contact() {
  return (
    <div className={styles.container}>
      <h1 id="contacts">Contacts</h1>
      <div className={styles.contactDetails}>
        <p>
          <span>Email:</span>
          <a href="mailto:mohammadriahi900@gmail.com">
            mohammadriahi900@gmail.com
          </a>
        </p>
        <p>
          <span>Phone:</span> +98 919 561 1855
        </p>
        <p>
          <span>Location:</span> Tehran, Iran
        </p>
        <p>
          <span>Linkedin:</span>
          <a href="http://www.linkedin.com/in/mohammad-riahi-5044a3397">
            linkedin.com/in/mohammad-riahi7
          </a>
        </p>
        <p>
          <span>GitHub:</span>
          <a href="https://github.com/mohammad-riahi">
            github.com/mohammad-riahi
          </a>
        </p>
      </div>
    </div>
  );
}

export default Contact;
