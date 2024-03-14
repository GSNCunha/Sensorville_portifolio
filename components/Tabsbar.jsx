import Tab from './Tab';
import styles from '../styles/Tabsbar.module.css';

const Tabsbar = () => {
  return (
    <div className={styles.tabs}>
      <Tab icon="/react_icon.svg" filename="home.jsx" path="/" />
      <Tab icon="/html_icon.svg" filename="pessoal.html" path="/pessoal" />
      <Tab icon="/css_icon.svg" filename="profissional.css" path="/profissional" />
      <Tab icon="/css_icon.svg" filename="contato.css" path="/contact" />
      <Tab icon="/js_icon.svg" filename="projetos.js" path="/projects" />
    </div>
  );
};

export default Tabsbar;
