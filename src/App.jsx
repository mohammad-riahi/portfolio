import About from "./components/About";
import Header from "./components/Header";
import MainSection from "./components/MainSection";
import Skills from "./components/Skills";
import styles from "./styles/App.module.css";
import SelelctedPro from "./components/SelelctedPro";
import Contact from "./components/Contact";
import { useRef } from "react";

function App() {
  const projectsRef = useRef(null);

  const projectScrollHandler = () => {
    projectsRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  return (
    <>
      <div className={styles.body}>
        <Header />
        <MainSection
          className={styles.main}
          projectScrollHandler={projectScrollHandler}
        />
        <About />
        <Skills />
        <div ref={projectsRef}>
          <SelelctedPro />
        </div>
        <Contact />
      </div>
    </>
  );
}

export default App;
