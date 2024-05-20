// pages/blog/isr.js
import axios from 'axios';

const ISR = ({ characters }) => {
  return (
    <div>
      <h1>Incremental Static Regeneration (ISR)</h1>
      <ul>
        {characters.map(character => (
          <li key={character.id}>{character.name}</li>
        ))}
      </ul>
    </div>
  );
};

export async function getStaticProps() {
  const res = await axios.get(process.env.NEXT_PUBLIC_API_URL);
  const characters = res.data.results;
  return {
    props: {
      characters,
    },
    revalidate: 10, // Re-generate the page every 10 seconds
  };
}

export default ISR;
