import axios from 'axios';
import CharacterCard from '../components/CharacterCard';
import styles from '../styles/Home.module.css';

export default function Home({ characters }) {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Rick and Morty Characters</h1>
      <div className={styles.cardContainer}>
        {characters.map(character => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const res = await axios.get(process.env.NEXT_PUBLIC_API_URL);
  const characters = res.data.results;
  return {
    props: {
      characters,
    },
  };
}
