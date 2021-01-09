import styles from './ChampionsCard.module.css';
import { Link } from 'react-router-dom';

import { useState, useEffect } from 'react';

const ChampionsCard = (props) => {



    return (
        <div>
            {props.Champions.map((champion, idx) =>
            <section
            key={idx}
            >
                <h1>{champion.name}</h1>
                <h3>The {champion.title}</h3>
                <p>Armor: {champion.stats.armor}</p>
                <p>Attack Damage: {champion.stats.attackdamage}</p>
                <p>Attack Range: {champion.stats.attackrange}</p>
                <p>HP: {champion.stats.hp}</p>
                <p>Mana: {champion.stats.mp}</p>
            </section>
            )}

        </div>
    );
};

export default ChampionsCard;