import React from 'react';
import styles from './CharacterCard.module.css';

const CharacterCard = ({ character }) => {
  return (
    <div className={styles.card}>
      <img src={character.image} alt={character.name} />
      <div className={styles.details}>
        <h2>{character.name}</h2>
        <p>{character.species}</p>
      </div>
    </div>
  );
};

export default CharacterCard;
