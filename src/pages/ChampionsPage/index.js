import ChampionsCard from '../../components/ChampionsCard';

import { Link } from 'react-router-dom';
import { styles } from './ChampionsPage.module.css'

const ChampionsPage = (props) => {
    return (
        <div className="ChampionsPage">
            <ChampionsCard Champions={props.Champions}/>
        </div>
    )
}

export default ChampionsPage;