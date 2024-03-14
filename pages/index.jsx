import Link from 'next/link';
import Illustration from '../components/Illustration';
import styles from '../styles/HomePage.module.css';

export default function HomePage() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.background}>
          <h1>I BUILD</h1>
          <h1>WEBSITES</h1>
        </div>
        <div className={styles.foreground}>
          <div className={styles.content}>
            <h1 className={styles.name}>Gabriel Sadigursky</h1>
            <h6 className={styles.bio}>Engenheiro de Controle e Automação</h6>
            <Link href="/pessoal">
              <button className={styles.button}>Trajetória Pessoal</button>
            </Link>
            <Link href="/profissional">
              <button className={styles.outlined}>Trajetória Profissional</button>
            </Link>
          </div>
          <Illustration className={styles.illustration} />
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: { title: 'Home' },
  };
}
