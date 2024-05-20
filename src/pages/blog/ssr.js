// pages/blog/ssr.js
import axios from 'axios';

const SSR = ({ characters }) => {
  return (
    <div>
      <h1>Server-Side Rendering (SSR)</h1>
      <ul>
        {characters.map(character => (
          <li key={character.id}>{character.name}</li>
        ))}
      </ul>
    </div>
  );
};

export async function getServerSideProps() {
  const res = await axios.get(process.env.NEXT_PUBLIC_API_URL);
  const characters = res.data.results;
  return {
    props: {
      characters,
    },
  };
}

export default SSR;
