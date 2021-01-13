import ChampionModal from '../ChampionModal';
import styles from './ChampionsCard.module.css';




const ChampionsCard = (props) => {

    return (
        <div className={"Page" + styles.ChampionCards}>
            <div className={styles.ChampionCard}>
                {props.Champions.map((champion, idx) =>
                <ChampionModal
                className={styles.Modal}
                champion={champion}
                key={idx}
                />

                )}
            </div>
        </div>
    );
};

export default ChampionsCard;